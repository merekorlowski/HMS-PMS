
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
    
    validate() {
        
    }
}