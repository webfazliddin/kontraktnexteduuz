import ApiService from "./api.service";

const MyApplicationForChangeService = {
    GetByApplicationId(applicationId) {
        return ApiService.get(`/MyApplicationForChange/GetByApplicationId/${applicationId}`)
    },
    GetByContractId(contractInvoiceId) {
        return ApiService.get(`/MyApplicationForChange/GetByContractId/${contractInvoiceId}`)
    },
    Create(data) {
        return ApiService.post(`/MyApplicationForChange/Create`, data)
    }
}
export default MyApplicationForChangeService