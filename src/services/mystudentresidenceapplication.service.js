import ApiService from "./api.service";

const MyStudentResidenceApplicationService = {
    GetStudentInfoForCreate(){
        return ApiService.get('/MyStudentResidenceApplication/GetStudentInfoForCreate')
    },
    Get(id){
        if(id === undefined || id === null || id == '' || id == 0){
            return ApiService.get(`/MyStudentResidenceApplication/Get`)
        }
        else{
            return ApiService.get(`/MyStudentResidenceApplication/Get/${id}`)
        }
    },
    GetBySourceType(sourceTypeId){
            return ApiService.get(`/MyStudentResidenceApplication/GetBySourceType/${sourceTypeId}`)
    },
    DownloadApplicationPdf(id){
            return ApiService.get(`/MyStudentResidenceApplication/DownloadApplicationPdf/${id}`)
    },
    GetList(data){
        return ApiService.post('/MyStudentResidenceApplication/GetList',data)
    },
    Held(data){
        return ApiService.post('/MyStudentResidenceApplication/Held',data)
    },
    Send(data){
        return ApiService.post('/MyStudentResidenceApplication/Send',data)
    },
    GetMyQueue(){
        return ApiService.get('/MyStudentResidenceApplication/GetMyQueue')
    },
    GetPrice(data){
        return ApiService.post('/MyStudentResidenceApplication/GetPrice',data)
    },
    GetPrivileges(data){
        return ApiService.post('/MyStudentResidenceApplication/GetPrivileges',data)
    },
    Revoke(data){
        return ApiService.post('/MyStudentResidenceApplication/Revoke',data)
    },
    Approve(data){
        return ApiService.post('/MyStudentResidenceApplication/Approve',data)
    },
    CancelApprove(data){
        return ApiService.post('/MyStudentResidenceApplication/CancelApprove',data)
    },
    Delete(data){
        return ApiService.post('/MyStudentResidenceApplication/Delete',data)
    },
    Update(data){
        if(data.id == 0 || data.id == "" || data.id === undefined || data.id === null){
            return ApiService.post('/MyStudentResidenceApplication/Create',data)
        }
        else{
            return ApiService.post('/MyStudentResidenceApplication/Update',data)
        }
    }
    
}
export default MyStudentResidenceApplicationService