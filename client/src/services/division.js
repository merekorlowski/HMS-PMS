/**
 * Created by os on 12/3/2017.
 */
import {inject} from 'aurelia-framework'
import {HttpClient} from 'aurelia-fetch-client'
import {Division} from '../models/division'
import {config} from '../config'

export class DivisionService {
    constructor() {
        this.http = new HttpClient().configure(config => {
            config.withBaseUrl(config.baseUrl);
        })
        this.tempDivision = new Division()
        this.tempDivision.divisionID= "123456"
        this.tempDivision.location = "Bloc B"
        this.tempDivision.name = "Urology"
        this.tempDivision.numOfBeds = 300
        this.tempDivision.telephoneExtension = "6587"

    }

    getDivisions() {
        return this.http.fetch('/divisions').then(response => response.json())
    }

    consult(divisionID) {
        return this.http.fetch(`/division?divisionID=${divisionID}`).then(response => response.json())
    }

}
