
export class Address {
    constructor() {
        this.line1 = ''
        this.city = ''
        this.postalCode = ''
        this.changed = {}
    }

    hasChanged(attribute) {
        this.changed[attribute] = true
    }

    get isLine1Valid() {
        return this.line1 != ''
    }

    get isCityValid() {
        return this.city != ''
    }

    get isPostalCodeValid() {
        let patt = new RegExp('([A-Za-z][0-9]){3}')
        return patt.test(this.postalCode)
    }

    isValid() {
        return (
            this.isLine1Valid &&
            this.isCityValid &&
            this.isPostalCodeValid
        )
    }

}