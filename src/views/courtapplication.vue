<template>
  <div>
    <Navbar />
    <b-overlay :show="Loading" style="min-height:calc(100vh - 460px)">
        <div class="container" style="margin-top:100px">
        <b-row>
            <b-col sm="12" lg="6">
                <h2> <b-icon-chevron-left @click="$router.go(-1)" style="cursor:pointer"></b-icon-chevron-left> {{ $t('CourtApplication') }} </h2>
            </b-col>
            <b-col sm="12" lg="6" class="text-right">
                <!-- <a href="javascript: void(0);" v-show="AdoptionPermissionList.length > 0"  @click="$router.push({ name : 'CourtApplication' })" class="btn btn-sm anim-opacity btn-primary"> <b-icon-plus></b-icon-plus> {{ $t('Add') }} </a> -->
            </b-col>
        </b-row>
        <b-row>
            <b-col class="mt-3" sm="12" md="6" v-for="(item,index) in AdoptionPermissionList" :key="index" v-show="AdoptionPermissionList.length > 0">
                <div class="pricing-box rounded px-4 pt-4 pb-2 ">
                    <!-- <b-row>
                        <b-col class="text-right">
                            <span title="history" style="cursor:pointer" class="mr-2">
                                <b-icon-clock-history></b-icon-clock-history>
                            </span>
                            <span title="history" style="cursor:pointer" >
                                <b-icon-clock-history></b-icon-clock-history>
                            </span>
                        </b-col>
                    </b-row> -->
                      <b-row>
                          <b-col sm="12">
                              <table class="my-table-padding">
                                    <tr>
                                        <td style="width : 40%">{{ $t('fio') }} :</td>
                                        <th style="width : 60%;"> {{ item.guardianname }} </th>
                                    </tr>
                                    <tr>
                                        <td style="width : 40%">{{ $t('childname') }} :</td>
                                        <th style="width : 60%;"> {{ item.childname }} </th>
                                    </tr>
                                    <tr >
                                        <td  style="width : 40%">{{ $t('docnumber') }} :</td>
                                        <th  style="width : 60%"> {{ item.docnumber }} </th>
                                    </tr>
                                    <tr class="py-3">
                                        <td style="width : 40%">{{ $t('docdate') }} :</td>
                                        <th style="width : 60%"> {{ item.docdate }} </th>
                                    </tr>
                                    <tr class="my-1">
                                        <td style="width : 40%">{{ $t('guardianshiptype') }} :</td>
                                        <th style="width : 60%"> {{ item.guardianshiptypename }} </th>
                                    </tr>
                                    <tr>
                                        <td class="pr-btn" style="width : 40%">{{ $t('orgname') }} :</td>
                                        <th style="width : 60%"> {{ item.organizationname }} </th>
                                    </tr>
                                    <tr>
                                        <td class="pr-btn" style="width : 40%">{{ $t('status') }} :</td>
                                        <th style="width : 60%"> 
                                            <b-badge style="cursor:pointer" @click="OpenHistory(item)" :variant="item.statusid == 21 ? 'danger' : 'success'" class="btn-soft-primary pr-btn" size="sm"> {{ item.statusname }} </b-badge> 
                                        </th>
                                    </tr>
                                    <!-- <tr>
                                        <td class="pr-btn" style="width : 40%">{{ $t('history') }} : </td>
                                        <th class="pr-btn" @click="OpenHistory(item)" style="cursor:pointer !important;text-decoration:underline"> <a style="cursor:pointer !important" href="#"> {{ $t('see') }} </a> </th>
                                    </tr> -->
                                    <tr v-if="item.CanSearchChild">
                                        <td class="pr-btn" style="width : 40%">{{ $t('FilterChild') }} : </td>
                                        <th class="pr-btn" @click="$router.push({ name : 'ChooseChild' })" style="cursor:pointer !important;text-decoration:underline"> <a style="cursor:pointer !important" href="#"> {{ $t('searchinlist') }} </a> </th>
                                    </tr>
                                </table>
                          </b-col>
                          
                      </b-row>
                      <b-row class="mt-2">
                          <b-col sm="12">
                              <a  v-if="item.CanSave" @click="$router.push({ name : 'EditCourtApplication',params : { id : item.id } })" class="btn btn-sm btn-soft-primary mr-2 mt-2 pr-btn"> <b-icon-pencil scale="0.8"></b-icon-pencil> {{ $t('edit') }} </a>
                              <!-- <a @click="$router.push({ name : 'ViewApplication',params : { id : item.id } })" class="btn btn-sm btn-soft-primary mr-2 mt-2 pr-btn"> <b-icon-eye scale="0.8"></b-icon-eye> {{ $t('see') }} </a> -->
                              <a  v-if="item.CanDelete" @click="$bvModal.show('DeleteModal'+item.id)" class="btn btn-sm btn-soft-primary mr-2 mt-2 pr-btn"> <b-icon-trash scale="0.8"></b-icon-trash> {{ $t('delete') }} </a>
                              <a v-if="item.CanSend" @click="OpenSendModal(item)" class="btn btn-sm anim-opacity btn-primary mr-2 mt-2 pr-btn"> <b-icon-cursor scale="0.8"></b-icon-cursor> {{ $t('send') }} </a>
                              <a  v-if="item.CanCancel" @click="OpenCancelModal(item)" class="btn btn-sm btn-soft-primary mr-2 mt-2 pr-btn">  <b-icon-x-circle scale="0.8"></b-icon-x-circle> {{ $t('cancel') }} </a>
                              <!-- <a v-if="item.CanSearchChild" @click="OpenAppModal(item)" class="btn btn-sm anim-opacity btn-primary mr-2 mt-2 pr-btn">  <b-icon-eye scale="0.8"></b-icon-eye> {{ $t('xulosanikorish') }} </a> -->
                          </b-col>
                      </b-row>
                      <b-modal :id="'AppModal' + item.id" no-close-on-backdrop hide-footer :title="$t('xulosa')">
                          <table>
                              <tr>
                                 <td style="width:60% !important"> 
                                     {{ $t('docnumber') }} : 
                                 </td>
                                 <th style="width:40%">
                                    {{ AdoptPermisConclusion.docnumber }}    
                                 </th> 
                              </tr>
                              <tr>
                                 <td>
                                     {{ $t('docdate') }} : 
                                 </td>
                                 <th>
                                    {{ AdoptPermisConclusion.docdate }}    
                                 </th> 
                              </tr>
                              <tr>
                                 <td>
                                     {{ $t('commenttext') }} : 
                                 </td>
                                 <th>
                                    {{ AdoptPermisConclusion.commenttext }}    
                                 </th> 
                              </tr>
                              <tr>
                                 <td>
                                     {{ $t('xulosa') }} : 
                                 </td>
                                 <th>
                                    <b-badge variant="primary" @click="DownloadFile(item)"> 
                                        <b-spinner small v-if="downloadloading"></b-spinner> 
                                        <b-icon-cloud-download  v-if="!downloadloading"></b-icon-cloud-download> 
                                        {{ AdoptPermisConclusion.projectfiletext }} 
                                    </b-badge>
                                 </th> 
                              </tr>
                          </table>
                          <b-row class="mt-3">
                              <b-col class="text-right">
                                  <b-button @click="$bvModal.hide('AppModal' + item.id)" variant="success"> ok </b-button>
                              </b-col>
                          </b-row>
                      </b-modal>
                      <b-modal :id="'DeleteModal' + item.id" :title="$t('delete')" no-close-on-backdrop hide-footer>
                            <p>
                                {{ $t('WantDeleteAdm') }}
                            </p>
                            <b-row>
                                <b-col class="text-right">
                                    <a @click="$bvModal.hide('DeleteModal'+item.id)" class="btn btn-sm btn-soft-danger mr-2 pr-btn">  {{ $t('no') }} </a>
                                    <a @click="Delete(item)" class="btn btn-sm btn-success  pr-btn"> <b-spinner v-if="DeleteLoading" small></b-spinner>  {{ $t('yes') }} </a>
                                </b-col>
                            </b-row>
                        </b-modal>
                        <b-modal :id="'SendModal' + item.id" :title="$t('send')" no-close-on-backdrop hide-footer>
                            <p>
                                {{ $t('smssent',{phonenumber : filter.phonenumber}) }}
                            </p>
                            <b-row>
                                <b-col>
                                    <custom-input :label="$t('smskod')" placeholder="1234" v-model="filter.smscode" v-mask="'####'"></custom-input>
                                </b-col>
                            </b-row>
                            <b-row class="mt-3">
                                <b-col class="text-right">
                                    <a @click="$bvModal.hide('SendModal'+item.id)" class="btn btn-sm btn-soft-danger mr-2 pr-btn">  {{ $t('no') }} </a>
                                    <a @click="Send(item)" class="btn btn-sm btn-success  pr-btn"> <b-spinner v-if="SendLoading" small></b-spinner>  {{ $t('yes') }} </a>
                                </b-col>
                            </b-row>
                        </b-modal>
                        <b-modal :id="'CancelModal' + item.id" :title="$t('cancel')" no-close-on-backdrop hide-footer>
                            <p>
                                {{ $t('smssent',{phonenumber : filter.phonenumber}) }}
                            </p>
                            <b-row>
                                <b-col>
                                    <custom-input :label="$t('smskod')" placeholder="1234" v-model="filter.smscode" v-mask="'####'"></custom-input>
                                </b-col>
                            </b-row>
                            <b-row class="mt-3">
                                <b-col class="text-right">
                                    <a @click="$bvModal.hide('CancelModal'+item.id)" class="btn btn-sm btn-soft-danger mr-2 pr-btn">  {{ $t('no') }} </a>
                                    <a @click="Cancel(item)" class="btn btn-sm btn-success  pr-btn"> <b-spinner v-if="CancelLoading" small></b-spinner>  {{ $t('yes') }} </a>
                                </b-col>
                            </b-row>
                        </b-modal>
                        <div class="mt-4">
                        <div class="hero-bottom-img">
                            <img
                                v-if="item.statusid != 21"
                                src="@/assets/images/pricing-bottom-bg.png"
                                alt
                                class="img-fluid d-block mx-auto"
                            />
                            <img
                                v-if="item.statusid == 21"
                                src="@/assets/images/pricing_bottom_danger.png"
                                alt
                                class="img-fluid d-block mx-auto"
                            />
                        </div>
                        </div>
                    </div>
            </b-col>
            <b-col class="mt-3 d-flex align-items-center justify-content-center" sm="12" style="height:300px" v-if="AdoptionPermissionList.length == 0">
                <b-button @click="$router.push({ name : 'ChildSelectApplication' })" size="lg" class="anim-opacity" pill variant="primary" > <span class="px-5"> <b-icon-plus></b-icon-plus> {{ $t('Add') }}</span> </b-button>
            </b-col>
        </b-row>
        <b-sidebar no-header
        width="400px"  shadow right v-model="historySidebar" bg-variant="white">
            <div style="width  :100%;height:100%;">
                <div class="container-fluid w-100" style="width:100% !important;position:relative;overflow-y:auto;">
                    <b-row class="w-100" >
                        <b-col class="text-right close-icon">
                            <!-- <b-img @click="isOpenSidebar = false" src="/images/design/close.svg" /> -->
                            <b-icon-x scale="2.5" style="cursor:pointer;z-index:9"  @click="historySidebar = false"></b-icon-x>
                        </b-col>
                    </b-row>
                    <b-row class="p-0">
                        <b-col>
                            <ul class="timeline">
                                <li v-for="(el,i) in History" :key="i">
                                    <b-row class="p-0">
                                        <b-col class="float-left">
                                            <p class="p-0 m-0 d-flex" style="white-space:nowrap"> <b-badge :variant="getColor(el)" style="margin-left : 2px"> {{el.statusname}} </b-badge></p>
                                            <p class="p-0 m-0">{{ el.dateofcreated }}</p>
                                            <p v-if="el.rejectreason" class="p-0 m-0"> {{ el.rejectreason }}</p>
                                            <p v-if="el.adddata" class="p-0 m-0"> {{ el.adddata }}</p>
                                            <!-- <p class="p-0 m-0">{{ $t('reason') }} : </p> -->
                                        </b-col>
                                    </b-row>
                                </li>
                            </ul>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </b-sidebar>
    </div>
    </b-overlay>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../layouts/components/navbar.vue'
import Footer from '../layouts/components/footer.vue'
import {BIconPlus,BIconPencil,BIconTrash,BIconXCircle,BIconCursor,BIconX,BIconEye,BIconCloudDownload,BIconChevronLeft,BIconClockHistory } from 'bootstrap-vue'
import CourtApplicationService from '../services/courtapplication.service'
import CustomInput from './components/CustomInput.vue'
import FileManageService from '../services/filemanage.service'
export default {
    components : { Navbar,BIconPlus,Footer,BIconPencil,BIconTrash,BIconXCircle,BIconCursor,CustomInput,BIconX,BIconEye,BIconCloudDownload,BIconChevronLeft,BIconClockHistory },
    data(){
        return{
            lang : localStorage.getItem("locale") || 'uz_latn',
            AdoptionPermissionList : [],
            DeleteLoading : false,
            filter : {
                smscode : "",
                phonenumber : ""
            },
            SendLoading : false,
            CancelLoading : false,
            Loading : false,
            historySidebar : false,
            History : [],
            downloadloading : false,
            AdoptPermisConclusion : {
                docnumber : "",
                docdate : "",
                commenttext : "",
                projectfiletext : ""
            }
        }
    },
    created(){
        this.Refresh()
    },
    methods : {
        DownloadFile(item){
            this.downloadloading = true
            FileManageService.Get(item.AdoptPermisConclusion.projectfileid).then(res => {
                this.downloadFile1(res,item.AdoptPermisConclusion)
                this.downloadloading = false
            }).catch(error => {
                // this.makeToast(error.response.data,'error')
                 if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
                this.downloadloading = false
            })
        },
        OpenAppModal(item){
            this.$bvModal.show('AppModal' + item.id)
            this.AdoptPermisConclusion = item.AdoptPermisConclusion
        },
        getColor(item){
            if(item.statusid == 24 || item.statusid == 21){
                return 'danger'
            }
            else{
                return 'success'
            }
        },
        downloadFile1(response, item) {
            var blob = new Blob([response.data]);
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", item.projectfiletext); //or any other extension
            document.body.appendChild(link);
            link.click();
        },
        OpenHistory(item){
            this.History = []
            this.History = item.history
            this.historySidebar = true
        },
        OpenCancelModal(item){
            this.filter.smscode = ""
            this.filter.phonenumber = ""
            
            CourtApplicationService.Cancel(item.id).then(res => {
                this.$bvModal.show('CancelModal'+item.id)
                this.filter.phonenumber = res.data.phoneNumber
            }).catch(error => {
                // this.makeToast(error.response.data,'error')
                 if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
            })
        },
        Cancel(item){
            this.CancelLoading = true
            CourtApplicationService.ConfirmCancel(item.id,this.filter.smscode).then(res => {
                this.CancelLoading = false
                this.$bvModal.hide('CancelModal' + item.id)
                this.Refresh()
            }).catch(error => {
                // this.makeToast(error.response.data,'error')
                 if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
                this.CancelLoading = false
            })
        },
        Refresh(){
            this.Loading = true
            CourtApplicationService.GetAll(this.lang).then(res => {
                this.AdoptionPermissionList = res.data.result
                this.Loading = false
            }).catch(error => {
                // this.makeToast(error.response.data,'error')
                 if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
                this.Loading = false
                
            })
        },
        OpenSendModal(item){
            this.filter.smscode = ""
            this.filter.phonenumber = ""
            
            CourtApplicationService.Send(item.id).then(res => {
                this.$bvModal.show('SendModal'+item.id)
                this.filter.phonenumber = res.data.phoneNumber
            }).catch(error => {
                // this.makeToast(error.response.data,'error')
                 if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
            })
        },
        Send(item){
            this.SendLoading = true

            CourtApplicationService.ConfirmSend(item.id,this.filter.smscode).then(res => {
                this.SendLoading = false
                this.$bvModal.hide('SendModal' + item.id)
                this.Refresh()
            }).catch(error => {
                // this.makeToast(error.response.data,'error')
                 if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
                this.SendLoading = false
            })
        },
        makeToast(message, type) {
      var a = "";
      if (message.status == 500) {
        a = message.title;
      }
      if (message.status == 400) {
        var errors = Object.values(message.errors);
        var a = errors.map((el, item) => item + 1 + "." + el).join("\n");
      } else {
        a = message;
      }

      this.$toast.open({
        message: a,
        type: type,
        duration: 5000,
        dismissible: true,
      });
    },
        Delete(item){
            this.DeleteLoading = true
            CourtApplicationService.Delete(item.id).then(res => {
                this.DeleteLoading = false
                this.makeToast(this.$t('DeleteSuccess'),'success')
                this.$bvModal.hide('DeleteModal'+item.id)
                this.Refresh()
            }).catch(error => {
                // this.makeToast(error.response.data,'error')
                 if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
                this.DeleteLoading = false
            })
        }
    }
}
</script>

<style lang="scss">
.my-table-padding{
    tr{
        td,th{
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
}
table {
  width: 100%;
}
</style>