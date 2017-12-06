import {inject} from 'aurelia-framework'
import {HttpClient, json} from 'aurelia-fetch-client'
import {Patient} from '../models/patient'
import {config} from '../config'

export class PatientService {
    constructor() {
        this.http = new HttpClient().configure(config => {
            config.withBaseUrl(config.baseUrl);
        })
		}
		
		getPatient(patientID) {
			return this.http.fetch(`/patient?patientID=${patientID}`).then(response => response.json()).then(data => {
				return new Patient(data)
			})
		}

    getPatients() {
				return this.http.fetch('/patients').then(response => response.json()).then(data => {
					return data.map(patient => new Patient(patient))
				})
    }

    register(patient) {
        return this.http.fetch('/patient', {
            method: 'post',
            body: json(patient)
        }).then(response => response.json())
		}
		
		update(patient) {
			return this.http.fetch('/patient', {
				method: 'put',
				body: json(patient)
			}).then(response => response.json())
		}

    consult(patientID) {
        return this.http.fetch(`/patient?patientID=${patientID}`).then(response => response.json())
    }

    admitPatient(patient, admissionInfo) {
        return this.http.fetch('/patient/admit', {
            method: 'post',
            body: {
                patient: json(patient),
                admissionInfo: json(admissionInfo)
            }
        }).then(response => response.json())
    }

    isAdmitted(patientID) {
        return this.http.fetch(`/patient/room-admission?patientID=${patientID}`).then(response => response.json())
    }

}
