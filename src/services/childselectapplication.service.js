import ApiService from "./api.service";

const ChildSelectApplicationService = {
    SelectEndSend(childdocnumber){
        return ApiService.post(`/ChildSelectApplication/SelectAndSend?childdocnumber=${childdocnumber}`)
    },
    ConfirmSelectEndSend(data){
        return ApiService.post(`/ChildSelectApplication/ConfirmSelectAndSend`,data)
    },
    GetAll(adoptionPermissionId,lang){
        return ApiService.get(`/ChildSelectApplication/GetAll?adoptionPermissionId=${adoptionPermissionId}&lang=${lang}`)
    },
    Cancel(id){
        return ApiService.post(`/ChildSelectApplication/Cancel?id=${id}`)
    },
    ConfirmCancel(id,smsCode){
        return ApiService.post(`/ChildSelectApplication/ConfirmCancel?id=${id}&smsCode=${smsCode}`)
    },
    RefusalOfTheApplicant(id){
        return ApiService.post(`/ChildSelectApplication/RefusalOfTheApplicant?id=${id}`)
    },
    ConfirmRefusalOfTheApplicant(id,smsCode){
        return ApiService.post(`/ChildSelectApplication/ConfirmRefusalOfTheApplicant?id=${id}&smsCode=${smsCode}`)
    },
    ConsentOfTheApplicant(id){
        return ApiService.post(`/ChildSelectApplication/ConsentOfTheApplicant?id=${id}`)
    },
    ConfirmConsentOfTheApplicant(id,smsCode){
        return ApiService.post(`/ChildSelectApplication/ConfirmConsentOfTheApplicant?id=${id}&smsCode=${smsCode}`)
    },
}
export default ChildSelectApplicationService