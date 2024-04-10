interface IUserData {
  token: string;
  userId: string;
  role: "admin" | "user";
}

interface ISuccessResponse<T> {
  data: T;
  message: string;
}

interface IAuthValues {
  email: string;
  password: string;
}

interface IProduct {
  _id: string;
  title: string;
  image: string;
  createdAt: string;
  description: string;
}
