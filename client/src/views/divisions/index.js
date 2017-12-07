import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'

import {StaffService} from '../../services/staff'
import {DivisionService} from '../../services/division'
import {Division} from '../../models/division'

@inject(Router, DivisionService)
export class Divisions {
    constructor(router, divisionService){
        this.router = router
        this.divisionService = divisionService
        this._id = ''
        this.divisions = []
        this.division = null
        this.newDivision = new Division()
        this.getDivisions()
        this.isDisplayingCreationForm = false
    }

    getDivisions() {
        this.divisionService.getDivisions().then(divisions => {
            this.divisions = divisions
        })
    }

    displayCreationForm() {
        this.isDisplayingCreationForm = true
    }

    hideCreationForm() {
        this.isDisplayingCreationForm = false
    }

    createDivision() {
        if (this.newDivision.isValid()) {
						this.newDivision._id = `${this.newDivision.divisionType} ${this.newDivision._id}`
            this.divisionService.createDivision(this.newDivision).then(division => {
                this.isDisplayingCreationForm = false
                this.divisions.push(this.newDivision)
            }).catch(err => {

            })
        }
    }

}
