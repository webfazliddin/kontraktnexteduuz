import ApiService from './api.service'

const ManualService = {
    EdulevelSelectList(){
        return ApiService.get(`/manual/EduLevelSelectList`)
    },
    FacultySelectList(organizationId){
        return ApiService.get(`/manual/FacultySelectList?organizationId=${organizationId}`)
    },
    ContractPriceTableSelectList(SpecialityId,ContractSumTypeId,FacultyId,EduTypeId,EduFormId){
        return ApiService.get(`/manual/ContractPriceTableSelectList?SpecialityId=${SpecialityId}&ContractSumTypeId=${ContractSumTypeId}&FacultyId=${FacultyId}&EduTypeId=${EduTypeId}&EduFormId=${EduFormId}`)
    },
    EduContractTypeSelectList(){
        return ApiService.get(`/manual/EduContractTypeSelectList`)
    },
    ApplicationTypeSelectList(){
        return ApiService.get('/manual/ApplicationTypeSelectList')
    },
    ContractSideTypeSelectList(){
        return ApiService.get('/manual/ContractSideTypeSelectList')
    },
    ContractSumTypeList(eduFromId){
        return ApiService.get(`/manual/EduContractSumTypeSelectList?eduFromId=${eduFromId}`)
    },
    ApplicationPurposeSelectList(){
        return ApiService.get('/manual/ApplicationPurposeSelectList')
    },
    EduYearList(){
        return ApiService.get(`/manual/EduYearSelectList`)
    },
    EduLanguageList(){
        return ApiService.get('/manual/EduLanguageSelectList')
    },
    LanguageSelectList(){
        return ApiService.get('/manual/LanguageSelectList')
    },
    // StudentCategoryList(){
    //     return ApiService.get('/manual/StudentCategorySelectList')
    // },
    SocialCategoryList(){
        return ApiService.get('/manual/SocialCategorySelectList')
    }
}
export default ManualService