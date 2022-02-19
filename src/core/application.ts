import { Logger } from '../logger';

export class Application {
  constructor() {
    Logger.init().info(
      `${'='.repeat(5)} APPLICATION STARTED ${'='.repeat(5)} `,
    );
  }

  public async init(): Promise<void> {
    // TODO
  }

  public run(): void {
    // TODO
  }

  public dispose(): void {
    // TODO
  }
}
