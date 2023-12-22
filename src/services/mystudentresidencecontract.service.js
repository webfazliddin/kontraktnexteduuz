import ApiService from "./api.service";

const MyStudentResidenceContractService = {
    GetStudentInfoForCreate(){
        return ApiService.get('/MyStudentResidenceContract/GetStudentInfoForCreate')
    },
    Get(id){
        if(id === undefined || id === null || id == '' || id == 0){
            return ApiService.get(`/MyStudentResidenceContract/Get`)
        }
        else{
            return ApiService.get(`/MyStudentResidenceContract/Get/${id}`)
        }
    },
    GetBySourceType(sourceTypeId){
            return ApiService.get(`/MyStudentResidenceContract/GetBySourceType/${sourceTypeId}`)
    },
    DownloadApplicationPdf(id){
            return ApiService.get(`/MyStudentResidenceContract/DownloadApplicationPdf/${id}`)
    },
    GetList(data){
        return ApiService.post('/MyStudentResidenceContract/GetList',data)
    },
    Held(data){
        return ApiService.post('/MyStudentResidenceContract/Held',data)
    },
    Send(data){
        return ApiService.post('/MyStudentResidenceContract/Send',data)
    },
    GetPrice(data){
        return ApiService.post('/MyStudentResidenceContract/GetPrice',data)
    },
    GetPrivileges(data){
        return ApiService.post('/MyStudentResidenceContract/GetPrivileges',data)
    },
    Revoke(data){
        return ApiService.post('/MyStudentResidenceContract/Revoke',data)
    },
    Approve(data){
        return ApiService.post('/MyStudentResidenceContract/Approve',data)
    },
    CancelApprove(data){
        return ApiService.post('/MyStudentResidenceContract/CancelApprove',data)
    },
    Delete(data){
        return ApiService.post('/MyStudentResidenceContract/Delete',data)
    },
    Update(data){
        if(data.id == 0 || data.id == "" || data.id === undefined || data.id === null){
            return ApiService.post('/MyStudentResidenceContract/Create',data)
        }
        else{
            return ApiService.post('/MyStudentResidenceContract/Update',data)
        }
    }
    
}
export default MyStudentResidenceContractService