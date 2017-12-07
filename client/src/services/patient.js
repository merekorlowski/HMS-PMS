import {inject} from 'aurelia-framework'
import {HttpClient, json} from 'aurelia-fetch-client'
import {Patient} from '../models/patient'
import {config} from '../config'
import { Prescription } from '../models/prescription';

export class PatientService {
    constructor() {
        this.http = new HttpClient().configure(config => {
            config.withBaseUrl(config.baseUrl);
        })
		}
		
		getPatient(_id) {
			return this.http.fetch(`/patient?_id=${_id}`).then(response => response.json()).then(data => {
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

    consult(_id) {
        return this.http.fetch(`/patient?_id=${_id}`).then(response => response.json())
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

		getPrescriptions(_id) {
			return this.http.fetch(`/prescriptions?_id=${_id}`)
				.then(response => response.json())
				.then(data => data.map(prescription => new Prescription(prescription)))
		}
		
		addPrescription(_id, prescription) {
				return this.http.fetch('/prescription', {
					method: 'post',
					body: json({
						_id: _id,
						prescription: prescription
					})
				}).then(response => response.json())
		}

    isAdmitted(_id) {
        return this.http.fetch(`/patient/room-admission?_id=${_id}`).then(response => response.json())
    }

}
