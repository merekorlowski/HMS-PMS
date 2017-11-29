
export class User {
    constructor() {
        this.id = ''
        this.password = ''
        this.cpassword = ''
        this.firstName = ''
        this.lastName = ''
        this.email = ''
    }

    get passwordsMatch() {
        return password == cpassword && password != ''
    }

    validate() {

    }
}