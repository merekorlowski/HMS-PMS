import {inject} from 'aurelia-framework'
import {HttpClient} from 'aurelia-fetch-client'

@inject(HttpClient)
export class PatientService {
    constructor(http) {
        this.http = http
    }

    register(patient) {
        return this.http.fetch('/patient', patient).then(response => response.json())
    }

    consult(patientId) {
        return this.http.fetch(`/patient?id=${patientId}`).then(response => response.json())
    }

}