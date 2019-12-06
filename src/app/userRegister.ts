
export class UserRegister {

    id: number;
    firstname: string;
    lastname: string;
    name: string;
    password: string;
    role: string;

    constructor(id: number, firstname: string, lastname: string,
        name: string, password: string, role: string
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.name = name;
        this.password = password;
        this.role = role;
    }

}