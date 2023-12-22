import ApiService from "./api.service";

const MyContractInvoiceService = {
    Get(id){
        if(id === undefined || id === null || id == '' || id == 0){
            return ApiService.get(`/MyContractInvoice/Get`)
        }
        else{
            return ApiService.get(`/MyContractInvoice/Get/${id}`)
        }
    },
    RequestToCancel(data){
        return ApiService.post('/MyContractInvoice/RequestToCancel',data)
        
    },
    GetList(data){
        return ApiService.post('/MyContractInvoice/GetList',data)
    },
    InvoiceExcelToPdf(id2, Amount){
        return ApiService.print(`/MyContractInvoice/InvoiceExcelToPdf?id2=${id2}&Amount=${Amount}`)
    },
    
}
export default MyContractInvoiceService