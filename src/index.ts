import { Application } from './core';
import { Logger } from './logger';

const app = new Application();

// Catch Ctrl+C to kill the process
process.on('SIGINT', () => {
  app.dispose();
  process.exit();
});

process.on('uncaughtException', (err) => {
  Logger.error('Uncaught exception:', err);
  process.exit(-1);
});

// Prevent the process from exiting
process.stdin.resume();

(async () => {
  await app.init();

  app.run();
})();
