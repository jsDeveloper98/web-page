interface IUserData {
  id: string;
  token: string;
}

interface ISuccessResponse<T> {
  data: T;
  message: string;
}

interface IAuthValues {
  email: string;
  password: string;
}
