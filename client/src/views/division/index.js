import {inject} from 'aurelia-framework'
import {StaffService} from '../../services/staff'
import {DivisionService} from '../../services/division'
import {Division} from '../../models/division'

@inject(StaffService, DivisionService)
export class DivisionFile {
    constructor(staffService, divisionService) {
        this.staffService = staffService
        this.divisionService = divisionService
        this.division = new Division()
		}

	activate(params, nav) {
			this.getDivision(params.id)
	}

	getDivision(id) {
				this.divisionService.getDivision(id).then(division => this.division = division)
	}
}