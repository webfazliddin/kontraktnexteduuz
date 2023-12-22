import ApiService from "./api.service";

const MyPaymentsService = {
    Get(id){
        if(id === undefined || id === null || id == '' || id == 0){
            return ApiService.get(`/MyPayments/Get`)
        }
        else{
            return ApiService.get(`/MyPayments/Get/${id}`)
        }
    },
    GetList(data){
        return ApiService.post('/MyPayments/GetList',data)
    }
    
}
export default MyPaymentsService