export class Logger {
  // Logger has no dependencies. Keep a single shared instance.
  static $singleton = true;

  info(message: string) {
    const date = new Date().toISOString();

    console.log('[INFO]', `[${date}]`, message);
  }

  error(message: string) {
    const date = new Date().toISOString();

    console.error('[ERROR]', `[${date}]`, message);
  }
}
