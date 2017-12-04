SET search_path = "HMS-PMS"  ; 

DROP SCHEMA IF EXISTS "HMS-PMS" CASCADE  ;
CREATE SCHEMA "HMS-PMS";

CREATE TABLE "AccessorySupply" (
<<<<<<< HEAD
    "supplyID" integer NOT NULL,
    "supplyName" character varying NOT NULL,
    "quantity" integer NOT NULL,
    "methodOfAdministration" character varying NOT NULL,
    "supplierID" integer NOT NULL
);

CREATE TABLE "Auxiliary" (
    "auxiliaryID" integer NOT NULL,
    "isSpecialiste" boolean NOT NULL
);

CREATE TABLE "Bed" (
    "bedNumber" integer NOT NULL,
    "roomNumber" integer NOT NULL,
    "divisionID" integer NOT NULL
);

CREATE TABLE "ChargeNurse" (
    "chargeNurseId" integer NOT NULL,
    "isSpecialiste" character varying NOT NULL,
    "phoneNumber" integer NOT NULL,
    "bipperExtension" integer NOT NULL
);

CREATE TABLE "Director" (
    "directorID" integer NOT NULL
);

CREATE TABLE "Division" (
    "divisionID" integer NOT NULL,
    "chargeNurseID" integer NOT NULL,
    "divisionName" character varying NOT NULL,
    "location" character varying NOT NULL,
    "numOfBeds" integer NOT NULL,
    "phoneExtension" integer NOT NULL,
    "status" character(1) NOT NULL,
    "typeOfCare" character varying
);

CREATE TABLE "DivisionRequest" (
    "divisionRequestID" integer NOT NULL,
    "localDoctorID" integer NOT NULL,
    "rationnal" text NOT NULL,
    "priorityAssessment" character varying NOT NULL,
    "patientID" integer NOT NULL,
    "chargeNurseID" integer NOT NULL
);

CREATE TABLE "ExternalDoctor" (
    "externalDoctorID" integer NOT NULL,
    "firstName" character varying NOT NULL,
    "lastName" character varying NOT NULL
);

CREATE TABLE "LocalDoctor" (
    "isSpecialiste" boolean NOT NULL,
    "localDoctorID" integer NOT NULL
=======
    "SupplyID" integer NOT NULL,
    "SupplyName" character varying NOT NULL,
    "Quantity" integer NOT NULL,
    "MethodOfAdministration" character varying NOT NULL,
    "SupplierID" integer NOT NULL
);

CREATE TABLE "Auxiliary" (
    "AuxiliaryID" integer NOT NULL,
    "IsSpecialiste" boolean NOT NULL
);

CREATE TABLE "Bed" (
    "BedNumber" integer NOT NULL,
    "RoomNumber" integer NOT NULL,
    "DivisionID" integer NOT NULL
);

CREATE TABLE "ChargeNurse" (
    "ChargeNurseId" integer NOT NULL,
    "IsSpecialiste" character varying NOT NULL,
    "PhoneNumber" integer NOT NULL,
    "BipperExtension" integer NOT NULL
);

CREATE TABLE "Director" (
    "DirectorID" integer NOT NULL
);

CREATE TABLE "Division" (
    "DivisionID" integer NOT NULL,
    "ChargeNurseID" integer NOT NULL,
    "DivisionName" character varying NOT NULL,
    "Location" character varying NOT NULL,
    "NumOfBeds" integer NOT NULL,
    "PhoneExtension" integer NOT NULL,
    "Status" character(1) NOT NULL,
    "TypeOfCare" character varying
);

CREATE TABLE "DivisionRequest" (
    "DivisionRequestID" integer NOT NULL,
    "LocalDoctorID" integer NOT NULL,
    "Rationnal" text NOT NULL,
    "PriorityAssessment" character varying NOT NULL,
    "PatientID" integer NOT NULL,
    "ChargeNurseID" integer NOT NULL
);

CREATE TABLE "ExternalDoctor" (
    "ExternalDoctorID" integer NOT NULL,
    "FirstName" character varying NOT NULL,
    "LastName" character varying NOT NULL
);

CREATE TABLE "LocalDoctor" (
    "IsSpecialiste" boolean NOT NULL,
    "LocalDoctorID" integer NOT NULL
>>>>>>> 30ca962693ad8bbf42801e8b5cbca418c1ed54c4
);


CREATE TABLE "MedicalSupply" (
<<<<<<< HEAD
    "supplyID" integer NOT NULL,
    "supplierID" integer NOT NULL,
    "supplyName" character varying NOT NULL,
    "quantity" integer NOT NULL,
    "methodOfAdministration" character varying NOT NULL
);

CREATE TABLE "Nurse" (
    "nurseId" integer NOT NULL,
    "isSpecialiste" boolean NOT NULL
);

CREATE TABLE "Patient" (
    "patientID" character varying NOT NULL,
    "address" character varying,
    "phoneNumber" integer NOT NULL,
    "dateOfBirth" date NOT NULL,
    "gender" character(1) NOT NULL,
    "maritalStatus" character(1) NOT NULL,
    "privateInsurrance" character varying NOT NULL,
    "nofFirstName" character varying NOT NULL,
    "nofLastName" character varying NOT NULL,
    "relationship" character(1) NOT NULL,
    "nofAddress" character varying NOT NULL,
    "nofPhoneNumber" integer NOT NULL,
    "firstName" character varying NOT NULL,
    "lastName" character varying NOT NULL
);

CREATE TABLE "PersonnalOfficer" (
    "personnalOfficerID" integer NOT NULL
);

CREATE TABLE "PharmaceuticalSupply" (
    "drugID" integer NOT NULL,
    "supplyID" integer NOT NULL,
    "supplyName" character varying NOT NULL,
    "quantity" integer NOT NULL,
    "methodOfAdministartion" character varying NOT NULL,
    "supplierID" integer NOT NULL
);

CREATE TABLE "Prescription" (
    "prescriptinID" integer NOT NULL,
    "localDoctorID" integer NOT NULL,
    "unitsByDay" integer NOT NULL,
    "numAdministrationsPerDay" integer NOT NULL,
    "methodOfAdministration" character varying NOT NULL,
    "startDate" date NOT NULL,
    "finishDate" date NOT NULL,
    "numOfAdministrationPerTime" integer NOT NULL,
    "drugID" integer NOT NULL
);

CREATE TABLE "RequestSupply" (
    "supplyID" integer NOT NULL,
    "chargeNurseID" integer NOT NULL,
    "quantity" integer NOT NULL
);

CREATE TABLE "Room" (
    "roomNumber" integer NOT NULL,
    "divisionID" integer NOT NULL
);

CREATE TABLE "RoomAdmission" (
    "privateInsurance" character varying,
    "chargeNurseID" integer NOT NULL,
    "bedNumber" integer NOT NULL,
    "patientID" character varying NOT NULL,
    "localDoctorID" integer NOT NULL
);

CREATE TABLE "Shift" (
    "shiftID" integer NOT NULL,
    "divisionID" integer NOT NULL,
    "localDoctorID" integer NOT NULL,
    "nurseID" integer NOT NULL
=======
    "SupplyID" integer NOT NULL,
    "SupplierID" integer NOT NULL,
    "SupplyName" character varying NOT NULL,
    "Quantity" integer NOT NULL,
    "MethodOfAdministration" character varying NOT NULL
);

CREATE TABLE "Nurse" (
    "NurseId" integer NOT NULL,
    "IsSpecialiste" boolean NOT NULL
);

CREATE TABLE "Patient" (
    "PatientID" character varying NOT NULL,
    "Address" character varying,
    "PhoneNumber" integer NOT NULL,
    "DateOfBirth" date NOT NULL,
    "Gender" character(1) NOT NULL,
    "MaritalStatus" character(1) NOT NULL,
    "PrivateInsurrance" character varying NOT NULL,
    "nofFirstName" character varying NOT NULL,
    "nofLastName" character varying NOT NULL,
    "Relationship" character(1) NOT NULL,
    "nofAddress" character varying NOT NULL,
    "nofPhoneNumber" integer NOT NULL
);

CREATE TABLE "PersonnalOfficer" (
    "PersonnalOfficerID" integer NOT NULL
);

CREATE TABLE "PharmaceuticalSupply" (
    "DrugID" integer NOT NULL,
    "SupplyID" integer NOT NULL,
    "SupplyName" character varying NOT NULL,
    "Quantity" integer NOT NULL,
    "MethodOfAdministartion" character varying NOT NULL,
    "SupplierID" integer NOT NULL
);

CREATE TABLE "Prescription" (
    "PrescriptinID" integer NOT NULL,
    "LocalDoctorID" integer NOT NULL,
    "UnitsByDay" integer NOT NULL,
    "NumAdministrationsPerDay" integer NOT NULL,
    "MethodOfAdministration" character varying NOT NULL,
    "StartDate" date NOT NULL,
    "FinishDate" date NOT NULL,
    "NumOfAdministrationPerTime" integer NOT NULL,
    "DrugID" integer NOT NULL
);

CREATE TABLE "RequestSupply" (
    "SupplyID" integer NOT NULL,
    "ChargeNurseID" integer NOT NULL,
    "Quantity" integer NOT NULL
);

CREATE TABLE "Room" (
    "RoomNumber" integer NOT NULL,
    "DivisionID" integer NOT NULL
);

CREATE TABLE "RoomAdmission" (
    "PrivateInsurance" character varying,
    "ChargeNurseID" integer NOT NULL,
    "BedNumber" integer NOT NULL,
    "PatientID" character varying NOT NULL,
    "LocalDoctorID" integer NOT NULL
);

CREATE TABLE "Shift" (
    "ShiftID" integer NOT NULL,
    "DivisionID" integer NOT NULL,
    "LocalDoctorID" integer NOT NULL,
    "NurseID" integer NOT NULL
>>>>>>> 30ca962693ad8bbf42801e8b5cbca418c1ed54c4
);


CREATE TABLE "Staff" (
<<<<<<< HEAD
    "staffID" integer NOT NULL,
    "email" character varying NOT NULL,
    "password" character varying NOT NULL,
    "qualifications" text NOT NULL,
    "workExperience" text NOT NULL,
    "firstName" character varying NOT NULL,
    "lastName" character varying NOT NULL
=======
    "StaffID" integer NOT NULL,
    "Email" character varying NOT NULL,
    "Password" character varying NOT NULL,
    "Qualifications" text NOT NULL,
    "WorkExperience" text NOT NULL,
    "FirstName" character varying NOT NULL,
    "LastName" character varying NOT NULL
>>>>>>> 30ca962693ad8bbf42801e8b5cbca418c1ed54c4
);


CREATE TABLE "Supplier" (
<<<<<<< HEAD
    "supplierID" integer NOT NULL,
    "name" character varying NOT NULL,
    "directorID" integer NOT NULL
);

CREATE TABLE "SurgicalSupply" (
    "supplyID" integer NOT NULL,
    "supplyName" character varying NOT NULL,
    "quantity" integer NOT NULL,
    "methodOfAdministration" character varying NOT NULL,
    "supplierID" integer NOT NULL
);

ALTER TABLE ONLY "AccessorySupply"
    ADD CONSTRAINT "AccessorySupply_pkey" PRIMARY KEY ("supplyID");

ALTER TABLE ONLY "Auxiliary"
    ADD CONSTRAINT "Auxiliary_pkey" PRIMARY KEY ("auxiliaryID");

ALTER TABLE ONLY "Bed"
    ADD CONSTRAINT "Bed_pkey" PRIMARY KEY ("bedNumber", "roomNumber", "divisionID");

ALTER TABLE ONLY "ChargeNurse"
    ADD CONSTRAINT "ChargeNurse_pkey" PRIMARY KEY ("chargeNurseId");

ALTER TABLE ONLY "Director"
    ADD CONSTRAINT "Director_pkey" PRIMARY KEY ("directorID");

ALTER TABLE ONLY "DivisionRequest"
    ADD CONSTRAINT "DivisionRequest_pkey" PRIMARY KEY ("divisionRequestID");

ALTER TABLE ONLY "Division"
    ADD CONSTRAINT "Division_pkey" PRIMARY KEY ("divisionID");

ALTER TABLE ONLY "LocalDoctor"
    ADD CONSTRAINT "LocalDoctor_pkey" PRIMARY KEY ("localDoctorID");

ALTER TABLE ONLY "MedicalSupply"
    ADD CONSTRAINT "MedicalSupply_pkey" PRIMARY KEY ("supplyID");

ALTER TABLE ONLY "Nurse"
    ADD CONSTRAINT "Nurse_pkey" PRIMARY KEY ("nurseId");

ALTER TABLE ONLY "Patient"
    ADD CONSTRAINT "Patient_pkey" PRIMARY KEY ("patientID");

ALTER TABLE ONLY "PersonnalOfficer"
    ADD CONSTRAINT "PersonnalOfficer_pkey" PRIMARY KEY ("personnalOfficerID");

ALTER TABLE ONLY "PharmaceuticalSupply"
    ADD CONSTRAINT "PharmaceuticalSupply_pkey" PRIMARY KEY ("drugID");

ALTER TABLE ONLY "Prescription"
    ADD CONSTRAINT "Prescription_pkey" PRIMARY KEY ("prescriptinID");

ALTER TABLE ONLY "RequestSupply"
    ADD CONSTRAINT "RequestSupply_pkey" PRIMARY KEY ("supplyID");

ALTER TABLE ONLY "Room"
    ADD CONSTRAINT "Room_pkey" PRIMARY KEY ("roomNumber", "divisionID");

ALTER TABLE ONLY "Shift"
    ADD CONSTRAINT "Shift_pkey" PRIMARY KEY ("shiftID");

ALTER TABLE ONLY "Staff"
    ADD CONSTRAINT "Staff_pkey" PRIMARY KEY ("staffID");

ALTER TABLE ONLY "Supplier"
    ADD CONSTRAINT "Supplier_pkey" PRIMARY KEY ("supplierID");

ALTER TABLE ONLY "SurgicalSupply"
    ADD CONSTRAINT "SurgicalSupply_pkey" PRIMARY KEY ("supplyID");

ALTER TABLE ONLY "AccessorySupply"
    ADD CONSTRAINT "AccessorySupply_SupplyID_fkey" FOREIGN KEY ("supplyID") REFERENCES "MedicalSupply"("supplyID");

ALTER TABLE ONLY "Auxiliary"
    ADD CONSTRAINT "Auxiliary_AuxiliaryID_fkey" FOREIGN KEY ("auxiliaryID") REFERENCES "Staff"("staffID");

ALTER TABLE ONLY "ChargeNurse"
    ADD CONSTRAINT "ChargeNurse_chargeNurseId_fkey" FOREIGN KEY ("chargeNurseId") REFERENCES "Staff"("staffID");

ALTER TABLE ONLY "Director"
    ADD CONSTRAINT "Director_directorID_fkey" FOREIGN KEY ("directorID") REFERENCES "Staff"("staffID");

ALTER TABLE ONLY "DivisionRequest"
    ADD CONSTRAINT "DivisionRequest_chargeNurseID_fkey" FOREIGN KEY ("chargeNurseID") REFERENCES "ChargeNurse"("chargeNurseId");

ALTER TABLE ONLY "DivisionRequest"
    ADD CONSTRAINT "DivisionRequest_LocalDoctorID_fkey" FOREIGN KEY ("localDoctorID") REFERENCES "LocalDoctor"("localDoctorID");

ALTER TABLE ONLY "Division"
    ADD CONSTRAINT "Division_chargeNurseID_fkey" FOREIGN KEY ("chargeNurseID") REFERENCES "ChargeNurse"("chargeNurseId");

ALTER TABLE ONLY "LocalDoctor"
    ADD CONSTRAINT "LocalDoctor_localDoctorID_fkey" FOREIGN KEY ("localDoctorID") REFERENCES "Staff"("staffID");

ALTER TABLE ONLY "MedicalSupply"
    ADD CONSTRAINT "MedicalSupply_SupplierID_fkey" FOREIGN KEY ("supplierID") REFERENCES "Supplier"("supplierID");

ALTER TABLE ONLY "Nurse"
    ADD CONSTRAINT "Nurse_NurseId_fkey" FOREIGN KEY ("nurseId") REFERENCES "Staff"("staffID");

ALTER TABLE ONLY "PersonnalOfficer"
    ADD CONSTRAINT "PersonnalOfficer_PersonnalOfficerID_fkey" FOREIGN KEY ("personnalOfficerID") REFERENCES "Staff"("staffID");

ALTER TABLE ONLY "PharmaceuticalSupply"
    ADD CONSTRAINT "PharmaceuticalSupply_SupplyID_fkey" FOREIGN KEY ("supplyID") REFERENCES "MedicalSupply"("supplyID");

ALTER TABLE ONLY "Prescription"
    ADD CONSTRAINT "Prescription_DrugID_fkey" FOREIGN KEY ("drugID") REFERENCES "PharmaceuticalSupply"("drugID");

ALTER TABLE ONLY "Prescription"
    ADD CONSTRAINT "Prescription_localDoctorID_fkey" FOREIGN KEY ("localDoctorID") REFERENCES "LocalDoctor"("localDoctorID");

ALTER TABLE ONLY "RequestSupply"
    ADD CONSTRAINT "RequestSupply_chargeNurseID_fkey" FOREIGN KEY ("chargeNurseID") REFERENCES "ChargeNurse"("chargeNurseId");

ALTER TABLE ONLY "RoomAdmission"
    ADD CONSTRAINT "RoomAdmission_chargeNurseID_fkey" FOREIGN KEY ("chargeNurseID") REFERENCES "ChargeNurse"("chargeNurseId");

ALTER TABLE ONLY "RoomAdmission"
    ADD CONSTRAINT "RoomAdmission_localDoctorID_fkey" FOREIGN KEY ("localDoctorID") REFERENCES "LocalDoctor"("localDoctorID");

ALTER TABLE ONLY "RoomAdmission"
    ADD CONSTRAINT "RoomAdmission_patientID_fkey" FOREIGN KEY ("patientID") REFERENCES "Patient"("patientID");

ALTER TABLE ONLY "Shift"
    ADD CONSTRAINT "Shift_divisionID_fkey" FOREIGN KEY ("divisionID") REFERENCES "Division"("divisionID");

ALTER TABLE ONLY "Shift"
    ADD CONSTRAINT "Shift_localDoctorID_fkey" FOREIGN KEY ("localDoctorID") REFERENCES "LocalDoctor"("localDoctorID");

ALTER TABLE ONLY "Shift"
    ADD CONSTRAINT "Shift_NurseID_fkey" FOREIGN KEY ("nurseID") REFERENCES "Nurse"("nurseId");

ALTER TABLE ONLY "Supplier"
    ADD CONSTRAINT "Supplier_directorID_fkey" FOREIGN KEY ("directorID") REFERENCES "Director"("directorID");

ALTER TABLE ONLY "SurgicalSupply"
    ADD CONSTRAINT "SurgicalSupply_SupplyID_fkey" FOREIGN KEY ("supplyID") REFERENCES "MedicalSupply"("supplyID");
=======
    "SupplierID" integer NOT NULL,
    "Name" character varying NOT NULL,
    "DirectorID" integer NOT NULL
);

CREATE TABLE "SurgicalSupply" (
    "SupplyID" integer NOT NULL,
    "SupplyName" character varying NOT NULL,
    "Quantity" integer NOT NULL,
    "MethodOfAdministration" character varying NOT NULL,
    "SupplierID" integer NOT NULL
);

ALTER TABLE ONLY "AccessorySupply"
    ADD CONSTRAINT "AccessorySupply_pkey" PRIMARY KEY ("SupplyID");

ALTER TABLE ONLY "Auxiliary"
    ADD CONSTRAINT "Auxiliary_pkey" PRIMARY KEY ("AuxiliaryID");

ALTER TABLE ONLY "Bed"
    ADD CONSTRAINT "Bed_pkey" PRIMARY KEY ("BedNumber", "RoomNumber", "DivisionID");

ALTER TABLE ONLY "ChargeNurse"
    ADD CONSTRAINT "ChargeNurse_pkey" PRIMARY KEY ("ChargeNurseId");

ALTER TABLE ONLY "Director"
    ADD CONSTRAINT "Director_pkey" PRIMARY KEY ("DirectorID");

ALTER TABLE ONLY "DivisionRequest"
    ADD CONSTRAINT "DivisionRequest_pkey" PRIMARY KEY ("DivisionRequestID");

ALTER TABLE ONLY "Division"
    ADD CONSTRAINT "Division_pkey" PRIMARY KEY ("DivisionID");

ALTER TABLE ONLY "LocalDoctor"
    ADD CONSTRAINT "LocalDoctor_pkey" PRIMARY KEY ("LocalDoctorID");

ALTER TABLE ONLY "MedicalSupply"
    ADD CONSTRAINT "MedicalSupply_pkey" PRIMARY KEY ("SupplyID");

ALTER TABLE ONLY "Nurse"
    ADD CONSTRAINT "Nurse_pkey" PRIMARY KEY ("NurseId");

ALTER TABLE ONLY "Patient"
    ADD CONSTRAINT "Patient_pkey" PRIMARY KEY ("PatientID");

ALTER TABLE ONLY "PersonnalOfficer"
    ADD CONSTRAINT "PersonnalOfficer_pkey" PRIMARY KEY ("PersonnalOfficerID");

ALTER TABLE ONLY "PharmaceuticalSupply"
    ADD CONSTRAINT "PharmaceuticalSupply_pkey" PRIMARY KEY ("DrugID");

ALTER TABLE ONLY "Prescription"
    ADD CONSTRAINT "Prescription_pkey" PRIMARY KEY ("PrescriptinID");

ALTER TABLE ONLY "RequestSupply"
    ADD CONSTRAINT "RequestSupply_pkey" PRIMARY KEY ("SupplyID");

ALTER TABLE ONLY "Room"
    ADD CONSTRAINT "Room_pkey" PRIMARY KEY ("RoomNumber", "DivisionID");

ALTER TABLE ONLY "Shift"
    ADD CONSTRAINT "Shift_pkey" PRIMARY KEY ("ShiftID");

ALTER TABLE ONLY "Staff"
    ADD CONSTRAINT "Staff_pkey" PRIMARY KEY ("StaffID");

ALTER TABLE ONLY "Supplier"
    ADD CONSTRAINT "Supplier_pkey" PRIMARY KEY ("SupplierID");

ALTER TABLE ONLY "SurgicalSupply"
    ADD CONSTRAINT "SurgicalSupply_pkey" PRIMARY KEY ("SupplyID");

ALTER TABLE ONLY "AccessorySupply"
    ADD CONSTRAINT "AccessorySupply_SupplyID_fkey" FOREIGN KEY ("SupplyID") REFERENCES "MedicalSupply"("SupplyID");

ALTER TABLE ONLY "Auxiliary"
    ADD CONSTRAINT "Auxiliary_AuxiliaryID_fkey" FOREIGN KEY ("AuxiliaryID") REFERENCES "Staff"("StaffID");

ALTER TABLE ONLY "ChargeNurse"
    ADD CONSTRAINT "ChargeNurse_ChargeNurseId_fkey" FOREIGN KEY ("ChargeNurseId") REFERENCES "Staff"("StaffID");

ALTER TABLE ONLY "Director"
    ADD CONSTRAINT "Director_DirectorID_fkey" FOREIGN KEY ("DirectorID") REFERENCES "Staff"("StaffID");

ALTER TABLE ONLY "DivisionRequest"
    ADD CONSTRAINT "DivisionRequest_ChargeNurseID_fkey" FOREIGN KEY ("ChargeNurseID") REFERENCES "ChargeNurse"("ChargeNurseId");

ALTER TABLE ONLY "DivisionRequest"
    ADD CONSTRAINT "DivisionRequest_LocalDoctorID_fkey" FOREIGN KEY ("LocalDoctorID") REFERENCES "LocalDoctor"("LocalDoctorID");

ALTER TABLE ONLY "Division"
    ADD CONSTRAINT "Division_ChargeNurseID_fkey" FOREIGN KEY ("ChargeNurseID") REFERENCES "ChargeNurse"("ChargeNurseId");

ALTER TABLE ONLY "LocalDoctor"
    ADD CONSTRAINT "LocalDoctor_LocalDoctorID_fkey" FOREIGN KEY ("LocalDoctorID") REFERENCES "Staff"("StaffID");

ALTER TABLE ONLY "MedicalSupply"
    ADD CONSTRAINT "MedicalSupply_SupplierID_fkey" FOREIGN KEY ("SupplierID") REFERENCES "Supplier"("SupplierID");

ALTER TABLE ONLY "Nurse"
    ADD CONSTRAINT "Nurse_NurseId_fkey" FOREIGN KEY ("NurseId") REFERENCES "Staff"("StaffID");

ALTER TABLE ONLY "PersonnalOfficer"
    ADD CONSTRAINT "PersonnalOfficer_PersonnalOfficerID_fkey" FOREIGN KEY ("PersonnalOfficerID") REFERENCES "Staff"("StaffID");

ALTER TABLE ONLY "PharmaceuticalSupply"
    ADD CONSTRAINT "PharmaceuticalSupply_SupplyID_fkey" FOREIGN KEY ("SupplyID") REFERENCES "MedicalSupply"("SupplyID");

ALTER TABLE ONLY "Prescription"
    ADD CONSTRAINT "Prescription_DrugID_fkey" FOREIGN KEY ("DrugID") REFERENCES "PharmaceuticalSupply"("DrugID");

ALTER TABLE ONLY "Prescription"
    ADD CONSTRAINT "Prescription_LocalDoctorID_fkey" FOREIGN KEY ("LocalDoctorID") REFERENCES "LocalDoctor"("LocalDoctorID");

ALTER TABLE ONLY "RequestSupply"
    ADD CONSTRAINT "RequestSupply_ChargeNurseID_fkey" FOREIGN KEY ("ChargeNurseID") REFERENCES "ChargeNurse"("ChargeNurseId");

ALTER TABLE ONLY "RoomAdmission"
    ADD CONSTRAINT "RoomAdmission_ChargeNurseID_fkey" FOREIGN KEY ("ChargeNurseID") REFERENCES "ChargeNurse"("ChargeNurseId");

ALTER TABLE ONLY "RoomAdmission"
    ADD CONSTRAINT "RoomAdmission_LocalDoctorID_fkey" FOREIGN KEY ("LocalDoctorID") REFERENCES "LocalDoctor"("LocalDoctorID");

ALTER TABLE ONLY "RoomAdmission"
    ADD CONSTRAINT "RoomAdmission_PatientID_fkey" FOREIGN KEY ("PatientID") REFERENCES "Patient"("PatientID");

ALTER TABLE ONLY "Shift"
    ADD CONSTRAINT "Shift_DivisionID_fkey" FOREIGN KEY ("DivisionID") REFERENCES "Division"("DivisionID");

ALTER TABLE ONLY "Shift"
    ADD CONSTRAINT "Shift_LocalDoctorID_fkey" FOREIGN KEY ("LocalDoctorID") REFERENCES "LocalDoctor"("LocalDoctorID");

ALTER TABLE ONLY "Shift"
    ADD CONSTRAINT "Shift_NurseID_fkey" FOREIGN KEY ("NurseID") REFERENCES "Nurse"("NurseId");

ALTER TABLE ONLY "Supplier"
    ADD CONSTRAINT "Supplier_DirectorID_fkey" FOREIGN KEY ("DirectorID") REFERENCES "Director"("DirectorID");

ALTER TABLE ONLY "SurgicalSupply"
    ADD CONSTRAINT "SurgicalSupply_SupplyID_fkey" FOREIGN KEY ("SupplyID") REFERENCES "MedicalSupply"("SupplyID");
>>>>>>> 30ca962693ad8bbf42801e8b5cbca418c1ed54c4
