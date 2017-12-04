SET search_path = "HMS-PMS"  ; 

DROP SCHEMA IF EXISTS "HMS-PMS" CASCADE  ;
CREATE SCHEMA "HMS-PMS";

CREATE TABLE "AccessorySupply" (
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
);


CREATE TABLE "MedicalSupply" (
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
);


CREATE TABLE "Staff" (
    "staffID" integer NOT NULL,
    "email" character varying NOT NULL,
    "password" character varying NOT NULL,
    "qualifications" text NOT NULL,
    "workExperience" text NOT NULL,
    "firstName" character varying NOT NULL,
    "lastName" character varying NOT NULL
);


CREATE TABLE "Supplier" (
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