import ApiService from "./api.service";

const MyPaymentPlanService = {
    Get(){
       // if(id === undefined || id === null || id == '' || id == 0){
            return ApiService.get(`/MyPaymentPlan/Get`)
      //  }
    },
     GetReconciliationAct(){
        return ApiService.printtemp('/MyPaymentPlan/GetReconciliationAct')
    }
    
}
export default MyPaymentPlanService