import { Answers, PromptObject } from 'prompts';

import { Logger } from '../core/logger';

interface TemplateFeature {
  /**
   * Name of the feature you want to add to your package.
   * This must be identical to the name of the feature on npm.
   */
  name: string;
  /**
   * Description of the feature.
   */
  description?: string;
  /**
   * @default true
   */
  optional?: boolean;
  /**
   * @default undefined
   */
  initial?: boolean;
}

interface TemplateOption
  extends Omit<PromptObject, 'onState' | 'onRender' | 'stdout' | 'stdin' | 'name'> {
  name: string;
}

interface TemplateFile {
  name: string;
  contents: string;
}

interface Template {
  /**
   * If you're not using a template in a CLI environment,
   * it's not recommended to use prompts. Instead, you should
   * just return all the files your template needs in from the
   * `getFiles` function.
   */
  prompts?: Array<TemplateFeature | TemplateOption>;
  /**
   * A dictionary of the files that will be created in the
   * new package. The key is the file name and the value is
   * the file contents, we prettify the contents before writing
   * using a default config if there's not one in the package.
   */
  getFiles: (
    answers?: Array<{ name: string; answer: Answers<string> }>
  ) => Promise<Array<TemplateFile>>;
}

interface TemplateContext {
  cwd: string;
  logger: Logger;
  packagePath: string;
}

type TemplateResolver = (ctx: TemplateContext) => Promise<Template>;

type TemplateOrTemplateResolver = Template | TemplateResolver;

export type {
  Template,
  TemplateContext,
  TemplateResolver,
  TemplateOrTemplateResolver,
  TemplateFile,
  TemplateFeature,
  TemplateOption,
};
