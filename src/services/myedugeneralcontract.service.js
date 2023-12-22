import ApiService from "./api.service";

const MyEduGeneralContractService = {
    Get(id){
        if(id === undefined || id === null || id == '' || id == 0){
            return ApiService.get(`/MyEduGeneralContract/Get`)
        }
        else{
            return ApiService.get(`/MyEduGeneralContract/Get/${id}`)
        }
    },
    GetList(data){
        return ApiService.post('/MyEduGeneralContract/GetList',data)
    },
    Accept(data){
        return ApiService.post('/MyEduGeneralContract/Accept',data)
    },
    Reject(data){
        return ApiService.post('/MyEduGeneralContract/Reject',data)
    }
    
}
export default MyEduGeneralContractService