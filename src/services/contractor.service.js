import ApiService from "./api.service";

const ContractorService = {
    GetByInn(inn){
       // if(id === undefined || id === null || id == '' || id == 0){
            return ApiService.get(`/Contractor/GetByInn/${inn}`)
      //  }
    },
    
}
export default ContractorService