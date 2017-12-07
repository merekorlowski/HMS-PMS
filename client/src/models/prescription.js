
export class Prescription {
    constructor(data) {
        if (data) {
            Object.assign(this, data)
        } else {
            this.drugNumber = ''
            this.drugName = ''
            this.unitsByDay = 1
            this.administrationsPerDay = 1
            this.methodOfAdministration = 'Oral'
            this.startDate = ''
            this.endDate = ''
				}
				
				this.changed = {}
		}
		
		hasChanged(attribute) {
			this.changed[attribute] = true
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

    get isAdministrationsPerDayValid() {
        return this.administrationsPerDay != 0
    }
		
    isValid() {
        return (
            this.isEndDateValid &&
            this.isStartDateValid &&
            this.isDrugNumberValid &&
            this.isDrugNameValid &&
            this.isUnitsByDayValid &&
						this.isAdministrationsPerDayValid
        )
    }
}
