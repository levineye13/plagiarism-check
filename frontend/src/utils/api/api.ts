class Api {
  protected constructor(
    protected readonly baseUrl: string,
    protected readonly headers: { [key: string]: string } = {}
  ) {}

  protected checkResponce = async <T>(res: Response): Promise<T | never> => {
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }

    const data = await res.json();

    return data;
  };
}

export default Api;
