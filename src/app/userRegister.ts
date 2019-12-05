
export class UserRegister {

    id: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    role: string;

    constructor(id: number, firstname: string, lastname: string,
        username: string, password: string, role: string
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
        this.role = role;
    }

}