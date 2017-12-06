
export class Prescription {
    constructor(data) {
        if (data) {
            Object.assign(this, data)
        } else {
            this.drugNumber = ''
            this.drugName = ''
            this.unitsByDay = 0
            this.numAdministrationPerDay = 0
            this.methodOfAdministration = ''
            this.administrations = [{
                timeOfDay: '',
                numUnits: 0
            }]
            this.startDate = ''
            this.endDate = ''
        }
    }

    // get isStartDateBfEndDate(){
    //     return this.startDate.getDay() <this.endDate.getDay() &&
    //         this.startDate.getFullYear() < this.endDate.getFullYear() &&
    //         this.startDate.getMonth() < this.endDate.getMonth()
    // }

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

    get isNumAdministrationPerDayValid() {
        return this.numAdministrationPerDay != 0
    }

    get isAdministrationsValid() {
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