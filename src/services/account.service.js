import ApiService from "./api.service";

const AccountService = {
  GetParentFromGovData(identityDocumentId, Seria, Number, DateOfBirth, pinfl) {
    return ApiService.get(
      `/Account/GetParentFromGovData?identityDocumentId=${identityDocumentId}&Seria=${Seria}&Number=${Number}&DateOfBirth=${DateOfBirth}&pinfl=${pinfl}`
    );
  },
  IsStudent(data) {
    return ApiService.post("/Account/IsStudent", data);
  },
  InsertRegistration(data) {
    return ApiService.post("/Account/InsertRegistration", data);
  },
  SendSMSCode(data) {
    return ApiService.post("/Account/SendSMSCode", data);
  },
  GetChildrenFromGovData(DocumentSeries, DocumentNumber, DateOfBirth) {
    return ApiService.get(
      `/Account/GetChildrenFromGovData?DocumentSeries=${DocumentSeries}&DocumentNumber=${DocumentNumber}&DateOfBirth=${DateOfBirth}`
    );
  },
  GetByPassportDataWithPhoto(pinfl, passport) {
    return ApiService.get(
      `/Account/GetByPassportDataWithPhoto?pinfl=${pinfl}&passport=${passport}`
    );
  },
  SignIn(data) {
    return ApiService.post("/Account/SignIn", data);
  },
  SignInTwoFactor(data) {
    return ApiService.post("/Account/SignInTwoFactor", data);
  },
  IsCheckAccount(data) {
    return ApiService.post(`/Account/IsUserRegistered`, data);
  },
  GetChildrenFromERP(DocumentSeries, DocumentNumber, DateOfBirth) {
    return ApiService.get(
      `/Account/GetChildrenFromERP?DocumentSeries=${DocumentSeries}&DocumentNumber=${DocumentNumber}&DateOfBirth=${DateOfBirth}`
    );
  },
  GetChildrenData(
    admissiontypeid,
    identityDocumentId,
    documentSeries,
    documentNumber,
    dateOfBirth,
    lang
  ) {
    return ApiService.get(
      `/Account/GetChildrenData?admissiontypeid=${admissiontypeid}&identityDocumentId=${identityDocumentId}&documentSeries=${documentSeries}&documentNumber=${documentNumber}&dateOfBirth=${dateOfBirth}&lang=${lang}`
    );
  },
  CheckSMSCode(__lang, data) {
    return ApiService.post(`/Account/CheckSMSCode?__lang=${__lang}`, data);
  },
  ChangePassword(data) {
    return ApiService.post(`/Account/ChangePassword`, data);
  },
  Logout() {
    return ApiService.get("/Account/Logout");
  },
  RestorePassword(data) {
    return ApiService.post("/Account/RestorePassword", data);
  },
  SyncFromGsp(data) {
    return ApiService.post("/Account/SyncFromGsp", data);
  },
  RestorePasswordConfirm(data) {
    return ApiService.post("/Account/RestorePasswordConfirm", data);
  },
  GetParentForRegistration() {
    return ApiService.get("/Account/GetParentForRegistration");
  },
  GetChildrenForRegistration() {
    return ApiService.get("/Account/GetChildrenForRegistration");
  },
  GetByPassportData(Seria, Number, DateOfBirth) {
    return ApiService.get(
      `/Account/GetByPassportData?Seria=${Seria}&Number=${Number}&DateOfBirth=${DateOfBirth}`
    );
  },
  Registrate(data) {
    return ApiService.post(`/Account/Registrate`, data);
  },
  SetUserLanguage(data) {
    return ApiService.post(`/Account/SetUserLanguage`, data);
  },
  GetUserInfo(forceSync) {
    return ApiService.get(
      `/Account/GetUserInfo?forceSync=${forceSync}`
    );
  },
};
export default AccountService;
