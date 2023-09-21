import { parseGlobalGitConfig } from '../../core/git';
import { defineTemplate } from '../create';

const defaultTemplate = defineTemplate(async () => {
  const gitConfig = await parseGlobalGitConfig();

  return {
    prompts: [],
    async getFiles() {
      return [{ name: 'package.json', contents: '' }];
    },
  };
});

export { defaultTemplate };
