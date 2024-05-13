import { cookies } from "next/headers";

interface IOptions {
  cache?: RequestCache;
}

const serverRequest = async <T>(
  url: string,
  options: IOptions = {}
): Promise<T> => {
  const res = await fetch(url, {
    headers: {
      Cookie: cookies().toString(),
      "Content-Type": "application/json",
      ...options,
    },
  });

  return (await res.json()).data;
};

export default serverRequest;
