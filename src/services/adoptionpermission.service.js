import ApiService from "./api.service";
 
const AdoptionPermissionService = {
    GetAll(lang){
        return ApiService.get(`/AdoptionPermission/GetAll?lang=${lang}`)
    },
    Get(id){
        return ApiService.get(`/AdoptionPermission/Get?id=${id}`)
    },
    Update(data){
        return ApiService.post(`/AdoptionPermission/Update`,data)
    },
    GetDetail(id,lang){
        return ApiService.get(`/AdoptionPermission/GetDetail?id=${id}&lang=${lang}`)
    },
    Delete(id){
        return ApiService.delete(`/AdoptionPermission/Delete?id=${id}`)
    },
    Send(id){
        return ApiService.post(`/AdoptionPermission/Send?id=${id}`)
    },
    ConfirmSend(id,smsCode){
        return ApiService.post(`/AdoptionPermission/ConfirmSend?id=${id}&smsCode=${smsCode}`)
    },
    Cancel(id){
        return ApiService.post(`/AdoptionPermission/Cancel?id=${id}`)
    },
    ConfirmCancel(id,smsCode){
        return ApiService.post(`/AdoptionPermission/ConfirmCancel?id=${id}&smsCode=${smsCode}`)
    },
    SearchPersonFromGovData(identityDocumentId,documentSeries,documentNumber,dateOfBirth,lang){
        return ApiService.get(`/AdoptionPermission/SearchPersonFromGovData?identityDocumentId=${identityDocumentId}&documentSeries=${documentSeries}&documentNumber=${documentNumber}&dateOfBirth=${dateOfBirth}&lang=${lang}`)
    }
}
export default AdoptionPermissionService