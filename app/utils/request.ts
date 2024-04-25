interface IRequestInit {
  body?: any;
  headers?: { [key: string]: string };
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}

interface IProps {
  url: string;
  isFormData?: boolean;
  requestInit?: IRequestInit;
}

export const request = async <T>({
  url,
  isFormData = false,
  requestInit = { method: "GET" },
}: IProps): Promise<T> => {
  try {
    requestInit.headers = requestInit.headers || {};

    if (!isFormData) {
      requestInit.body = JSON.stringify(requestInit.body);
      requestInit.headers["Content-Type"] = "application/json";
    }

    const res = await fetch(url, {
      ...requestInit,
      credentials: "include",
    });

    if (res.status === 401) {
      window.location.href = "/login";
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    return data as T;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error("An unknown error occurred.");
  }
};
