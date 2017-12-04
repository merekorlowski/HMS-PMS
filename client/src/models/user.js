
export class User {
    constructor() {
        this.userID = ''
        this.password = ''
        this.cpassword = ''
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.role = 'Doctor'
        this.changed = {}
    }

    hasChanged(attribute) {
        this.changed[attribute] = true
    }

    get isUserIDValid() {
        let patt = new RegExp('[A-Za-z]([A-Za-z]|[0-9])*')
        return this.userID != '' && patt.test(this.userID)
    }

    get isPasswordValid() {
        let patt = new RegExp('([A-Za-z]|[0-9]){8}([A-Za-z]|[0-9])*')
        return this.password != '' && patt.test(this.password)
    }

    get isCPasswordValid() {
        return this.password == this.cpassword && this.isPasswordValid
    }

    get isFirstNameValid() {
        return this.firstName != ''
    }

    get isLastNameValid() {
        return this.lastName != ''
    }

    get isEmailValid() {
        let patt = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')
        return patt.test(this.email)
    }

    isValid() {
        return (
            this.isUserIDValid &&
            this.isPasswordValid &&
            this.isCPasswordValid &&
            this.isFirstNameValid &&
            this.isLastNameValid &&
            this.isEmailValid
        )
    }

}