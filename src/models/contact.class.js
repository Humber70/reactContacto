import { ESTADO } from "./contact.status"

export class Contact {
    name = '';
    surname = '';
    email = '';
    status = false;
    msg = ESTADO.DESCONECTADO;


    constructor(name, surname, email, status ) {
        this.name = name
        this.surname = surname
        this.email = email
        this.status = status

    }
}

