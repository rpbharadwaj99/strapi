import { mkdir, writeFile } from 'fs/promises';
import { relative, resolve, dirname } from 'path';
import prettier from 'prettier';
import prompts from 'prompts';

import { Logger } from '../core/logger';

import { Template, TemplateFeature, TemplateOption, TemplateOrTemplateResolver } from './types';

interface CreatePackageFromTemplateOpts {
  logger: Logger;
  cwd: string;
  template: TemplateOrTemplateResolver;
}

/**
 * @internal
 *
 * @description Resolves a template if it's a function and runs
 * through the template to create a new package.
 */
const createPackageFromTemplate = async (
  packagePath: string,
  opts: CreatePackageFromTemplateOpts
) => {
  const { cwd, logger, template: templateOrResolver } = opts;

  const template =
    typeof templateOrResolver === 'function'
      ? await templateOrResolver({ cwd, logger, packagePath })
      : templateOrResolver;

  logger.info('Creating a new package at: ', relative(cwd, packagePath));

  logger.debug('Loaded template:\n', template);

  const answers: Parameters<Template['getFiles']>[0] = [];

  if (Array.isArray(template.prompts)) {
    for (const prompt of template.prompts) {
      /**
       * We know it's a TemplateOption if it has a type property.
       */
      if ('type' in prompt) {
        const res = await prompts(prompt, {
          onCancel() {
            process.exit(0);
          },
        });

        answers.push({ name: prompt.name, answer: res });
      } else {
        const res = prompt.optional
          ? await prompts({
              type: 'confirm',
              name: 'confirm',
              message: `use ${prompt.name}?`,
              initial: prompt.initial,
            })
          : null;

        answers.push({
          name: prompt.name,
          answer: {
            confirm: res?.confirm ?? !prompt.optional,
          },
        });
      }
    }

    logger.debug(
      [
        'User answers: ',
        ...answers.map((ans) => `    ${ans.name}: ${JSON.stringify(ans.answer)}`),
      ].join('\n')
    );
  }

  const files = await template.getFiles(answers);

  logger.debug(
    ['Files to write: ', ...files.map((f) => `    ${f.name}: ${f.contents}`)].join('\n')
  );

  for (const file of files) {
    const filePath = resolve(packagePath, file.name);

    await mkdir(dirname(filePath), { recursive: true });

    const defaultPrettierConfig = { endOfLine: 'lf', tabWidth: 2, printWidth: 100 } as const;

    const formattedContents = await prettier.format(file.contents, {
      ...defaultPrettierConfig,
      filepath: filePath,
    });

    await writeFile(filePath, `${formattedContents.trim()}\n`);

    logger.success(`Wrote ${relative(cwd, filePath)}`);
  }
};

/**
 * @public
 *
 * @description a helper function to define your package template in a typesafe manner.
 */
const defineTemplate = (template: TemplateOrTemplateResolver): TemplateOrTemplateResolver =>
  template;

/**
 * @public
 *
 * @description Create a prompt for your users to input data for your package template.
 * e.g. "what is the name of your package?"
 */
const createPackageOption = (option: TemplateOption): TemplateOption => option;

/**
 * @public
 *
 * @description Create a feature option for your package e.g. "do you want typescript?" – yes/no.
 */
const createPackageFeature = (feature: TemplateFeature): TemplateFeature => feature;

export { createPackageFromTemplate, createPackageFeature, createPackageOption, defineTemplate };
