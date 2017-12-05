SET search_path = "HMS_PMS"; 

DROP SCHEMA IF EXISTS "HMS_PMS" CASCADE;
CREATE SCHEMA "HMS_PMS";

CREATE TABLE "AccessorySupply" (
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
);


CREATE TABLE "MedicalSupply" (
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
    "nofRelationship" character NOT NULL,
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
);


CREATE TABLE "Staff" (
    "StaffID" integer NOT NULL,
    "Password" character varying NOT NULL,
    "FirstName" character varying NOT NULL,
    "LastName" character varying NOT NULL,
    "Email" character varying NOT NULL,
    "Role" character varying NOT NULL
);


CREATE TABLE "Supplier" (
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
