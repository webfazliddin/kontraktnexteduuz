<template>
  <div>
      <Navbar />
      <b-row class="mt-5"></b-row>
      <b-row class="mt-2"></b-row>
      <!-- <div class="container" style="margin-top:10px"> -->
          <b-row class="mt-5 ml-5">
              <b-col sm="4">
                  <h2 @click="$router.push({ name : 'MyEduGeneralContract' })" class="text-center cursor:pointer"> <b-icon-chevron-left  style="cursor:pointer"></b-icon-chevron-left> {{ $t("MyEduGeneralContract") }}</h2>
              </b-col>
              <b-col sm="12" lg="4"></b-col>
          </b-row>
          <b-row class="mt-5">
              <b-col sm="12">
                  <iframe
        :src="axios.defaults.baseURL+`report/PrintContractPdf?id=${this.$route.params.id}`"
        width="100%"
        height="1200px"
      >
      </iframe>
              </b-col>
          </b-row>
          <!-- <b-row> -->
          <!-- </b-row> -->
          <b-row class="mt-3"></b-row>
      <!-- </div> -->
      <Footer />
  </div>
</template>

<script>
import Navbar from '../layouts/components/navbar.vue'
import axios from 'axios'
import Footer from '../layouts/components/footer.vue'
import ApplicationService from '../services/application.service'
import { BIconPlus,BIconPaperclip,BIconTrash,BIconCheck2Circle,BIconChevronLeft,BIconX,BIconExclamationTriangleFill,BIconCheckCircleFill,BIconCloudDownload } from 'bootstrap-vue'
import FileManageService from '../services/filemanage.service'
export default {
    components : {axios,Navbar,BIconPlus,BIconPaperclip,BIconTrash,Footer,BIconCheck2Circle,BIconChevronLeft,BIconX,BIconExclamationTriangleFill,BIconCheckCircleFill,BIconCloudDownload },
    data(){
        return{
            axios,
            AdoptionPermission : {},
            FileLoading : false,
            lang : localStorage.getItem('locale'),
            DownloadLoading : false
        }
    },
    created(){
        // ApplicationService.Get(this.$route.params.id).then(res => {
        //     this.AdoptionPermission = res.data
        // }).catch(error => {
        //     this.makeToast(error.response.data,'error')
        // })
    },
    methods:{
        // Download(item){
        //     this.DownloadLoading = true
        //     FileManageService.Get(item.projectfileid).then(res => {
        //        this.downloadFile(res,item) 
        //     }).catch(error => {
        //         this.makeToast(error.response.data,'error')
        //     })
        // },
        downloadFile(response, item) {
            var blob = new Blob([response.data]);
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", item.projectfiletext); //or any other extension
            document.body.appendChild(link);
            link.click();
        },
        makeToast(message,type){
            this.$toast.open({
                message: message,
                type: type,
                duration: 5000,
                dismissible: true
            })
        }
    }
}
</script>

<style  lang="scss">
.application-modal{
    .modal-xl{
        min-width: 1300px !important;
    }
}
</style>