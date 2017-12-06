
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
    get isDrugNumberValid() {
        return this.drugNumber != ''
    }
    get isDrugNameValid() {
        return this.drugName != ''
    }
    get isUnitsByDayValid() {
        return this.unitsByDay != 0
    }
    get isNumAdministrationPerDayeValid() {
        return this.numAdministrationPerDay != 0
    }
    get isAministrationsValid() {
        return this.administrations != null
    }
    isValid() {
        return (
            this.isEndDateValid &&
            this.isStartDateBfEndDate &&
            this.isStartDateValid &&
            this.isDrugNumberValid &&
            this.isDrugNameValid &&
            this.isUnitsByDayValid &&
            this.isNumAdministrationPerDayeValid &&
            this.isAministrationsValid
        )
    }
}