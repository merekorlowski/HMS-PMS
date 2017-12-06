import {inject} from 'aurelia-framework'
import {StaffService} from '../../services/staff'
import {PatientService} from '../../services/patient'
import {Prescription} from '../../models/prescription'
import {Patient} from '../../models/patient'

@inject(StaffService, PatientService)
export class PatientFile {
    constructor(staffService, patientService) {
        this.staffService = staffService
        this.patientService = patientService
        this.patient = new Patient()
        this.isAdmittingPatient = false
        this.isUpdatingPatient = false
        this.isAddingPrescription = false
        this.step = 1
        this.newPrescription = new Prescription()
		}

		activate(params, nav) {
			this.getPatient(params.id)
		}

		getPatient(id) {
				this.patientService.getPatient(id).then(patient => this.patient = patient)
		}

    getPrescriptions() {
        this.patientService.getPrescriptions(this.patient.patientID).then(prescriptions => {
            this.prescriptions = prescriptions
        }).catch(err => {

     		})
    }

    displayUpdatePatientForm() {
        this.isUpdatingPatient = true
    }

    hideUpdatePatientForm() {
        this.isUpdatingPatient = false
    }

    next() {
        this.step += 1
    }

    prev() {
        this.step -= 1
    }

    save() {
        this.isUpdatingPatient = false
        this.step = 1
    }

    isStaffDoctor() {
        return this.staffService.staff.role === 'Doctor'
    }

    displayAdmitPatientForm() {
        this.isAdmittingPatient = true
    }

    hideAdmitPatientForm() {
        this.isAdmittingPatient = false
    }

    admitPatient() {
        this.patientService.admitPatient(this.patient.id).then(() => {
            this.isAdmittingPatient = false
            this.patient.isAdmitted = true
        }).catch(err => {

        })
    }

    displayAddPrescriptionForm() {
        this.isAddingPrescription = true
    }

    hideAddPrescriptionForm() {
        this.isAddingPrescription = false
    }

    addPrescription() {
        this.patientService.addPrescription(this.patient.id, this.newPrescription).then(() => {
            this.isAddingPrescription = false
            this.patient.prescriptions.push(this.newPrescription)
            this.newPrescription = new Prescription()
        }).catch(err => {

        })
    }

}
