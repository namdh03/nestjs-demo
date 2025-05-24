export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: {
    _id: string;
    email: string;
  };
  permissions?: {
    _id: string;
    name: string;
    apiPath: string;
    module: string;
    method: string;
  }[];
}
