
export class Prescription {
    constructor() {
        this.drugNumber = ''
        this.drugName = ''
        this.unitsByDay = 0
        this.numAdministrationPerDay = 0
        this.methodOfAdministration = ''
        this.administrations = [{
            timeOfDay: '',
            numUnits: 0
        }]
        this.startDate = new Date()
        this.endDate = new Date()
    }

    get isStartDateBfEndDate(){
        return this.startDate.getDay() <this.endDate.getDay() &&
            this.startDate.getFullYear() < this.endDate.getFullYear() &&
            this.startDate.getMonth() < this.endDate.getMonth()
    }

    get isEndDateValid() {
        return this.endDate != ''
    }
    get isStartDateValid() {
        return this.startDate != ''
    }
    get isdrugNumberValid() {
        return this.drugNumber != ''
    }
    get isdrugNameValid() {
        return this.drugName != ''
    }
    get isunitsByDayValid() {
        return this.unitsByDay != 0
    }
    get isnumAdministrationPerDayeValid() {
        return this.numAdministrationPerDay != 0
    }
    get isadministrationsValid() {
        return this.administrations != null
    }
}