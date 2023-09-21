export * from './node/build';
export * from './node/watch';
export * from './node/check';
export * from './node/init';

export { defineConfig } from './node/core/config';
export type { Config } from './node/core/config';

export { defineTemplate, createPackageFeature, createPackageOption } from './node/templates/create';
export type {
  TemplateOrTemplateResolver,
  TemplateFeature,
  TemplateOption,
} from './node/templates/types';
