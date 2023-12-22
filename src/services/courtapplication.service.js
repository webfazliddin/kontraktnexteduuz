import ApiService from "./api.service";
const CourtApplicationService = {
    GetAll(lang){
        return ApiService.get(`/CourtApplication/GetAll?lang=${lang}`)
    },
    // GetList(StartDate,EndDate,Search,SortColumn,OrderType,PageNumber,PageLimit,statusid){
    //     return ApiService.get(`/CourtApplication/GetList?StartDate=${StartDate}&EndDate=${EndDate}&Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}&statusid=${statusid}`)
    // },
    Get(id,childselectapplicationid){
        return ApiService.get(`/CourtApplication/Get?id=${id}&childselectapplicationid=${childselectapplicationid}`)
    },
    Delete(id){
        return ApiService.delete(`/CourtApplication/Delete?id=${id}`)
    },
    Update(data){
        return ApiService.post(`/CourtApplication/Update`,data)
    },
    Cancel(id){
        return ApiService.post(`/CourtApplication/Cancel?id=${id}`)
    },
    Send(id){
        return ApiService.post(`/CourtApplication/Send?id=${id}`)
    },
    ConfirmCancel(id,smsCode){
        return ApiService.post(`/CourtApplication/ConfirmCancel?id=${id}&smsCode=${smsCode}`)
    },
    ConfirmSend(id,smsCode){
        return ApiService.post(`/CourtApplication/ConfirmSend?id=${id}&smsCode=${smsCode}`)
    },
}
export default CourtApplicationService