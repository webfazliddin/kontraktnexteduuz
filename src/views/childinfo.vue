<template>
  <div>
      <Navbar />
      <div class="container" style="min-height:calc(100vh - 460px);margin-top:100px" >
          <b-row>
              <b-col>
                  <h2 class="text-center"> <b-icon-chevron-left @click="$router.push({ name : 'ChooseChild' })" style="cursor:pointer"></b-icon-chevron-left> {{ $t("XulosaArizasi") }}</h2>
              </b-col>
          </b-row>
          <b-row class="mt-4 mb-4">
              <b-col sm="12">
                  <h4 class="text-center">
                      {{ ChildInfo.GenderName }} / {{ ChildInfo.Age }} {{ $t('age') }}
                  </h4>
                  <p class="text-center"> {{ $t('ChildCode') }} :  {{ ChildInfo.ChildCode }} </p>
              </b-col>
              <b-col sm="12" md="3" lg="2">
                  <img src="@/assets/images/163802.svg" v-if="ChildInfo.GenderId == 2" alt="">
                  <img src="@/assets/images/163807.svg" v-if="ChildInfo.GenderId == 1" alt="">
              </b-col>
              <b-col sm="12" md="9" lg="10">
                  
                  <table class="my-table-child mb-4">
                      <tbody>
                          <tr>
                              <td style="width:20%">
                                  {{ $t('dateofbirth') }} : 
                              </td>
                              <td>
                                  {{ ChildInfo.DateOfBirth }}
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  {{ $t('gender') }} : 
                              </td>
                              <td>
                                  {{ ChildInfo.GenderName }}
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  {{ $t('childcharactername') }} : 
                              </td>
                              <td>
                                  {{ ChildInfo.ChildCharacterName }}
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  {{ $t('healthtype') }} : 
                              </td>
                              <td>
                                  {{ ChildInfo.HealthTypeName }}
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  {{ $t('nationality') }} : 
                              </td>
                              <td>
                                  {{ ChildInfo.NationalityName }}
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  {{ $t('oblast') }} : 
                              </td>
                              <td>
                                  {{ ChildInfo.OblastName }}
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  {{ $t('region') }} : 
                              </td>
                              <td>
                                  {{ ChildInfo.RegionName }}
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  {{ $t('organizationname') }} : 
                              </td>
                              <td>
                                  {{ ChildInfo.OrganizationName }}
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  {{ $t('OrderNumber1') }} : 
                              </td>
                              <td>
                                  {{ ChildInfo.NumberOfCandidates }}
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  <b-row>
                      <b-col sm="3" v-for="(item,index) in ChildInfo.FamilyMembers" :key="index + 'dsdsd'">
                          <div class="d-flex">
                              <i :class="`mdi ${item.GenderId == 1 ? 'mdi-human-male' : 'mdi-human-female'} h1 text-primary`"></i>
                              <div style="display:grid">
                                  <span style="font-size:13px" class="mt-1"> {{ item.KinshipDegreeName }} </span>
                                  <span style="font-size:13px" class="mt-n2"> {{ item.Age }} {{ $t('age') }} </span>
                              </div>
                          </div>
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col class="text-right">
                          <b-button variant="primary" @click="Send" class="anim-opacity"> <b-spinner v-if="SendLoading" small></b-spinner> <b-icon-cursor v-if="!SendLoading"></b-icon-cursor> {{ $t('send') }} </b-button>
                      </b-col>
                  </b-row>
              </b-col>
          </b-row>
          <b-modal size="lg" v-model="SendModal" no-close-on-backdrop hide-footer centered :title="$t('send')" >
              <h6 class="m-0 p-0 m-n2 mt-n3">   {{ $t('SendSmmYourPhone',{phonenumber : phonenumber}) }} </h6>
              <b-row class="mt-4">
                  <b-col>
                      <custom-input v-mask="'####'" placeholder="0000" v-model="smscode" :label="$t('smskod')"></custom-input>
                  </b-col>
              </b-row>
              <b-row class="mt-3">
                  <b-col class="text-right">
                      <b-button variant="danger" @click="SendModal" class="mr-2"> {{ $t('close') }} </b-button>
                      <b-button variant="success" @click="SendConfirm"> <b-spinner v-if="SendConfirmLoadintg" small></b-spinner> {{ $t('send') }} </b-button>
                  </b-col>
              </b-row>
          </b-modal>
      </div>
      <Footer />
  </div>
</template>

<script>
import Navbar from '../layouts/components/navbar.vue'
import Footer from '../layouts/components/footer.vue'
import { BIconPlus,BIconPaperclip,BIconTrash,BIconCheck2Circle,BIconChevronLeft,BIconX,BIconExclamationTriangleFill,BIconCheckCircleFill,BIconCloudDownload,BIconCursor } from 'bootstrap-vue'
import FileManageService from '../services/filemanage.service'
import ChildSearchService from '../services/childsearch.service'
import ChildSelectApplicationService from '../services/childselectapplication.service'
import CustomInput from './components/CustomInput.vue'
export default {
    components : { 
        Navbar,CustomInput,
        BIconPlus,BIconPaperclip,BIconTrash,Footer,BIconCheck2Circle,BIconChevronLeft,BIconX,BIconExclamationTriangleFill,BIconCheckCircleFill,BIconCloudDownload,BIconCursor },
    data(){
        return{
            ChildInfo : {},
            FileLoading : false,
            lang : localStorage.getItem('locale'),
            DownloadLoading : false,
            SendModal : false,
            SendLoading : false,
            SendConfirmLoadintg : false,
            phonenumber : "",
            smscode : ''
        }
    },
    created(){
        ChildSearchService.GetChildInfo(this.$route.params.code).then(res => {
            this.ChildInfo = res.data.result
        }).catch(error => {
            // this.makeToast(error.response.data,'error')
             if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
        })
    },
    methods:{
        Send(){
            this.SendLoading = true
            
            ChildSelectApplicationService.SelectEndSend(this.ChildInfo.ChildCode).then(res => {
                this.SendLoading = false
                this.SendModal = true
                this.phonenumber = res.data.phoneNumber
            }).catch(error => {
                // this.makeToast(error.response.data,'error')
                 if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
            })
        },
        SendConfirm(){
            this.SendConfirmLoadintg = true
            ChildSelectApplicationService.ConfirmSelectEndSend({ childdocnumber : this.ChildInfo.ChildCode,smsCode : this.smscode }).then(res => {
                this.SendConfirmLoadintg = false
                this.makeToast(this.$t('SuccessSend'),'success')
                this.$router.push({ name : "ChildSelectApplication" })
            }).catch(error => {
                // this.makeToast(error.response.data,'error')
                 if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
                this.SendConfirmLoadintg = false
            })
        },
        Download(item){
            this.DownloadLoading = true
            FileManageService.Get(item.id).then(res => {
               this.downloadFile(res,item) 
            }).catch(error => {
                this.makeToast(error.response.data,'error')
            })
        },
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
.my-table-child{
    width : 100%;
    tbody tr:nth-child(odd){
        background-color: #f8f9fa;
    }


    tbody tr:nth-child(even){
        background-color: rgba($color: #5168A0, $alpha: 0.2);
    }
    tbody tr td{
        padding : 10px 20px;
    }
}

.application-modal{
    .modal-xl{
        min-width: 1300px !important;
    }
}
</style>