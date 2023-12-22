import ApiService from "./api.service";

const ChildSearchService = {
    GetList(GenderId,HasBrotherOrSister,AgeMin,AgeMax,HealthTypeId,NationalityId,PageNumber,PageLimit){
        var str = ''
        for ( var i = 0; i < NationalityId.length; i ++ ){
            str += 'NationalityId=' +  NationalityId[i] + '&'
        }
        return ApiService.get(`/ChildSearch/GetList?GenderId=${GenderId}&HasBrotherOrSister=${HasBrotherOrSister}&AgeMin=${AgeMin}&AgeMax=${AgeMax}&HealthTypeId=${HealthTypeId}&${str}PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
    },
    GetChildInfo(docNumber){
        return ApiService.get(`/ChildSearch/GetChildInfo?docNumber=${docNumber}`)
    },
    
}
export default ChildSearchService