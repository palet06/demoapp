-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Application" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "applicationNumber" TEXT NOT NULL,
    "applicantId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DEGERLENDIRME_ASAMASINDA',
    "applicationDate" DATETIME NOT NULL,
    "applicationType" TEXT NOT NULL,
    "izinStartDate" DATETIME,
    "izinEndDate" DATETIME,
    "ytbScholarshipStatus" TEXT,
    "foreignReferenceNumber" TEXT,
    "foreignIdentityNumber" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "fatherName" TEXT,
    "motherName" TEXT,
    "gender" TEXT,
    "placeOfBirth" TEXT,
    "dateOfBirth" DATETIME,
    "maritalStatus" TEXT,
    "nationality" TEXT,
    "passportType" TEXT,
    "passportNumber" TEXT,
    "passportExpiryDate" DATETIME,
    "passportRemainingPeriod" TEXT,
    "residenceAddress" TEXT,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "motherLanguage" TEXT,
    "turkishLevel" TEXT,
    "knownLanguages" TEXT,
    "educationLevel" TEXT,
    "specializationField" TEXT,
    "graduatedSchoolName" TEXT,
    "diplomaProfession" TEXT,
    "jobTitle" TEXT,
    "jobDescription" TEXT,
    "employmentReason" TEXT,
    "employmentType" TEXT,
    "employmentDuration" TEXT,
    "permitType" TEXT,
    "grossSalary" TEXT,
    "isCompanyPartner" BOOLEAN NOT NULL,
    "isPremiumAbroad" BOOLEAN,
    "isHomeServiceJob" BOOLEAN,
    "isTechRequired" BOOLEAN,
    "isTubitakEmployee" BOOLEAN,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Application_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ApplicationDocuments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "applicationId" INTEGER NOT NULL,
    "applicationPetition" TEXT,
    "passport" TEXT,
    "employmentContract" TEXT,
    "diploma" TEXT,
    "additionalDocument" TEXT,
    "employmentNotification" TEXT,
    "permitTerminationPetition" TEXT,
    "activityCertificate" TEXT,
    "tradeRegistryGazette" TEXT,
    "balanceSheet" TEXT,
    "tourismLicense" TEXT,
    CONSTRAINT "ApplicationDocuments_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EmployerInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "applicationId" INTEGER NOT NULL,
    "registrationNumber" TEXT,
    "companyType" TEXT,
    "naceCode" TEXT,
    "workplaceTitle" TEXT,
    "phoneNumber" TEXT,
    "ebildirgeName" TEXT,
    "responsibleName" TEXT,
    "currentEmail" TEXT,
    "applicationEmail" TEXT,
    "establishmentDate" DATETIME,
    "mersisNumber" TEXT,
    "taxOffice" TEXT,
    "taxNumber" TEXT,
    "workplaceAddress" TEXT,
    "workAddress" TEXT,
    "capitalStructure" TEXT,
    "registeredCapitalTRY" TEXT,
    "paidCapitalTRY" TEXT,
    CONSTRAINT "EmployerInfo_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ApplicationHistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "applicationId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    "comment" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ApplicationHistory_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ApplicationHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ApplicationWorkflow" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "applicationId" INTEGER NOT NULL,
    "currentUserId" INTEGER NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ApplicationWorkflow_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ApplicationWorkflow_currentUserId_fkey" FOREIGN KEY ("currentUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Application_applicationNumber_key" ON "Application"("applicationNumber");

-- CreateIndex
CREATE UNIQUE INDEX "ApplicationDocuments_applicationId_key" ON "ApplicationDocuments"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "EmployerInfo_applicationId_key" ON "EmployerInfo"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "ApplicationWorkflow_applicationId_key" ON "ApplicationWorkflow"("applicationId");
