import ApiService from "./api.service";

const MainPageService = {
  GetInfo() {
    return ApiService.get(`/MainPage/GetInfo`);
  },
};
export default MainPageService;
