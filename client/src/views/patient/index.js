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
				this.patientService.getPatient(id).then(patient => {
					this.patient = patient
					this.getPrescriptions()
				})
		}

    getPrescriptions() {
        this.patientService.getPrescriptions(this.patient._id).then(prescriptions => {
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
				if (this.patient.isValid()) {
						this.patientService.update(this.patient).then(patient => {
								this.isUpdatingPatient = false
								this.step = 1
						})
				}
    }

    isStaffDoctor() {
        return this.staffService.staff ? this.staffService.staff.role === 'Doctor' : false;
    }

    displayAdmitPatientForm() {
        this.isAdmittingPatient = true
    }

    hideAdmitPatientForm() {
        this.isAdmittingPatient = false
    }

    admitPatient() {
        this.patientService.admitPatient(this.patient._id).then(() => {
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
				if (this.newPrescription.isValid()) {
					this.patientService.addPrescription(this.patient._id, this.newPrescription).then(prescription => {
							this.isAddingPrescription = false
							this.patient.prescriptions.push(this.newPrescription)
							this.newPrescription = new Prescription()
					}).catch(err => {

					})
				}
    }

}
