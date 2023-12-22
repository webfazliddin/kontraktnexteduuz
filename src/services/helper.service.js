import ApiService from './api.service'

const HelperService = {
    GetAllAdmissionType(isSpecSchool,lang){
        return ApiService.get(`/Helper/GetAllAdmissionType?isSpecSchool=${isSpecSchool}&lang=${lang}`)
    },
    GetAllIdentityDocument(isParent, lang){
        return ApiService.get(`/Helper/GetAllIdentityDocument?isParent=${isParent}&lang=${lang}`)
    },
    GetAllSchoolYear(){
        return ApiService.get(`/Helper/GetAllSchoolYear`)
    },
    GetAllEducationLanguage(organizationid){
        return ApiService.get(`/Helper/GetAllEducationLanguage?organizationid=${organizationid}`)
    },
    GetAllQuoteType(lang){
        return ApiService.get(`/Helper/GetAllQuoteType?lang=${lang}`)
    },
    GetAllEducationDirectionSubject(educationdirectionid,organizationid,educationLanguageId,lang){
        return ApiService.get(`/Helper/GetAllEducationDirectionSubject?educationdirectionid=${educationdirectionid}&educationLanguageId=${educationLanguageId}&organizationid=${organizationid}&lang=${lang}`)
    },
    GetAllEducationDirection(organizationid,educationLanguageId,lang){
        return ApiService.get(`/Helper/GetAllEducationDirection?lang=${lang}&organizationid=${organizationid}&educationLanguageId=${educationLanguageId}`)
    },
    GetAllForeignLangSubject(lang){
        return ApiService.get(`/Helper/GetAllForeignLangSubject?lang=${lang}`)
    },
    GetAllOrganizationsIsOutOfTerritory(oblastid,regionid,admissiontypeid,schoolYearId,educationLanguageId,lang){
        return ApiService.get(`/Helper/GetAllOrganizationsIsOutOfTerritory?oblastid=${oblastid}&regionid=${regionid}&admissiontypeid=${admissiontypeid}&schoolYearId=${schoolYearId}&educationLanguageId=${educationLanguageId}&lang=${lang}`)
    },
    GetAllKinshipDegree(lang,preferential){
        return ApiService.get(`/Helper/GetAllKinshipDegree?lang=${lang}&preferential=${preferential}`)
    },
    GetGuardianshipTypeList(){
        return ApiService.get(`/Helper/GetAllGuardianshipType`)
    },
    GetGenderList(lang){
        return ApiService.get(`/Helper/GetGenderList?lang=${lang}`)
    },
    GetAllIdentityDocSeries(IdentityDocumentID,lang){
        return ApiService.get(`/Helper/GetAllIdentityDocSeries?IdentityDocumentID=${IdentityDocumentID}&lang=${lang}`)
    },
    GetAllOblast(lang){
        return ApiService.get(`/Helper/GetAllOblast?lang=${lang}`)
    },
    GetAllRegion(lang,OblastID){
        return ApiService.get(`/Helper/GetAllRegion?lang=${lang}&OblastID=${OblastID}`)
    },
    GetHealthTypeList(){
        return ApiService.get(`/Helper/GetHealthTypeList`)
    },
    GetAllNationality(lang){
        return ApiService.get(`/Helper/GetAllNationality?lang=${lang}`)
    }
}
export default HelperService