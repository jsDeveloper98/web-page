import { StorageService } from "@/services/Storage.service";
import { USER_DATA_STORAGE_KEY } from "@/constants/storageKeys";

interface IRequestInit {
  body?: any;
  headers?: { [key: string]: string };
  method?: "GET" | "POST" | "PUT" | "PATCH";
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
    const userData = StorageService.get<IAuthData>(USER_DATA_STORAGE_KEY);

    requestInit.headers = requestInit.headers || {};
    requestInit.headers.Authorization = `Bearer ${userData?.token}`;

    if (!isFormData) {
      requestInit.body = JSON.stringify(requestInit.body);
      requestInit.headers["Content-Type"] = "application/json";
    }

    const res = await fetch(url, requestInit);
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
