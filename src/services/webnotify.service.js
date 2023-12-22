import ApiService from './api.service'

const WebNotifyService = {
    GetUnReadMessagesCount(){
        return ApiService.get(`/WebNotify/GetUnReadMessagesCount`)
    },
    GetUnReadMessages(){
        return ApiService.get(`/WebNotify/GetUnReadMessages`)
    },
    GetAllMessages(){
        return ApiService.get(`/WebNotify/GetAllMessages`)
    },
    SetMessageReadStatus(){
        return ApiService.get(`/WebNotify/SetMessageReadStatus`)
    }
}
export default WebNotifyService