import NodeConfig from 'config';

export class Config {
  public static get logger() {
    type TFilesConfig = { level: string; filename: string };

    return {
      files: this.readConfigKey<TFilesConfig[]>('logger.files'),
    };
  }

  private static readConfigKey<T = string>(key: string): T | never {
    if (!NodeConfig.has(key)) {
      throw new Error(`Config key "${key}" is missing`);
    }
    return NodeConfig.get(key);
  }

  private constructor() {}
}
