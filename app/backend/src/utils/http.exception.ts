export default class httpException extends Error {
  constructor(
    public status: number,
    private _code: string,
    message: string,
  ) {
    super(message);
  }
}
