abstract class HttpError extends Error {
  public name: string;
  abstract code: number;

  protected constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export { HttpError };
