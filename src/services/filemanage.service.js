import ApiService from "./api.service";

const FileManageService = {
    GetWithRequestId(id){
        return ApiService.get(`/FileManage/GetWithRequestId?id=${id}`)
    },
    Get(id){
        return ApiService.print(`/FileManage/Get?id=${id}`)
    },
    AttachWithRequestId(data){
        return ApiService.post(`/FileManage/AttachWithRequestId`,data)
    },
    Attach(data){
        return ApiService.post(`/FileManage/Attach`,data)
    }
}
export default FileManageService