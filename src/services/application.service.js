import ApiService from "./api.service";

const ApplicationService = {
    GetStudentInfoForCreate(){
        return ApiService.get('/MyApplication/GetStudentInfoForCreate')
    },
    Get(id){
        if(id === undefined || id === null || id == '' || id == 0){
            return ApiService.get(`/MyApplication/Get`)
        }
        else{
            return ApiService.get(`/MyApplication/Get/${id}`)
        }
    },
    GetBySourceType(sourceTypeId){
            return ApiService.get(`/MyApplication/GetBySourceType/${sourceTypeId}`)
    },
    DownloadApplicationPdf(id){
            return ApiService.get(`/MyApplication/DownloadApplicationPdf/${id}`)
    },
    GetList(data){
        return ApiService.post('/MyApplication/GetList',data)
    },
    Send(data){
        return ApiService.post('/MyApplication/Send',data)
    },
    GetPrice(data){
        return ApiService.post('/MyApplication/GetPrice',data)
    },
    Revoke(data){
        return ApiService.post('/MyApplication/Revoke',data)
    },
    Approve(data){
        return ApiService.post('/MyApplication/Approve',data)
    },
    CancelApprove(data){
        return ApiService.post('/MyApplication/CancelApprove',data)
    },
    Delete(id){
        return ApiService.post(`/MyApplication/Delete/${id}`)
    },
    Update(data){
        if(data.id == 0 || data.id == "" || data.id === undefined || data.id === null){
            return ApiService.post('/MyApplication/Create',data)
        }
        else{
            return ApiService.post('/MyApplication/Update',data)
        }
    }
    
}
export default ApplicationService