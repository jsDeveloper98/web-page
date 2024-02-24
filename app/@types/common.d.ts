interface IAuthData {
  token?: string;
  userId?: string;
}

interface ISuccessResponse<T> {
  data: T;
  message: string;
}

interface IAuthValues {
  email: string;
  password: string;
}
