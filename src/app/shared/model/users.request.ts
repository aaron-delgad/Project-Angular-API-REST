export class UsersRequest {
  email: string;
  password: string;
  name: string;

public static createUser(obj: any): UsersRequest {
    const object = new UsersRequest();
    object.email = obj.email ? obj.email : '';
    object.password = obj.password ? obj.password : '';
    object.name = obj.name ? obj.name : '';

    return object;
}
}
