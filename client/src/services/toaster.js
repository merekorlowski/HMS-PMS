
export class Toaster {
    constructor() {
        this.messages = []
    }

    add(message) {
        this.messages.push(message)
        setTimeout(() => this.messages.splice(this.messages.length - 1, 1), 5000)
    }
}