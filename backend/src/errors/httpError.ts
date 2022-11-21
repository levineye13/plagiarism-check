abstract class HttpError extends Error {
  public name: string;

  protected constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export { HttpError };
