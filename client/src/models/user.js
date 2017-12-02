
export class User {
    constructor() {
        this.id = ''
        this.password = ''
        this.cpassword = ''
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.role = ''
    }

    get passwordsMatch() {
        return password == cpassword && password != ''
    }
}