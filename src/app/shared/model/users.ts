export class Users {
  id: string;
  email: string;
  password: string;
  name: string;

  public static createUsers(objs: any): Users[]{
    let objects: Users[] = [];
    if (objs instanceof Array) {
        objects = objs.map(function(resp) {
            return Users.createUser(resp);
        });
    }

    return objects;
}

public static createUser(obj: any): Users {
    const object = new Users();
    object.id = obj.id ? obj.id : '';
    object.email = obj.email ? obj.email : '';
    object.password = obj.password ? obj.password : '';
    object.name = obj.name ? obj.name : '';

    return object;
}
}
