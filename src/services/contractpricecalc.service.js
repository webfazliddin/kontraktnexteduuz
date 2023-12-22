import ApiService from "./api.service";

const ContractPriceCalcService = {

    Get(data){
        return ApiService.post('/ContractPriceCalc/Get',data)
    }
    
}
export default ContractPriceCalcService