import ApiService from "./api.service";

const HtmlReportService = {
    PrintContractPdf(id){
        return ApiService.get(`/report /PrintContractPdf?id=${id}`)
    }
}
export default HtmlReportService