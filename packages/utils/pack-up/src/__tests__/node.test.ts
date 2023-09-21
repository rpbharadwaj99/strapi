import { cleanup, createWorkspace } from '../../tests/spawn';
import { init } from '../node/init';

describe('node', () => {
  afterAll(async () => {
    await cleanup();
  });

  describe('init', () => {
    it('should init a package with the default template', async () => {
      const workspace = await createWorkspace();

      await init({
        path: workspace.path,
        debug: true,
      });

      // await workspace.remove();
    });
  });
});
