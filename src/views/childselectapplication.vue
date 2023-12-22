<template>
  <div>
    <Navbar />
    <b-overlay :show="Loading" style="min-height:calc(100vh - 460px)">
        <div class="container" style="margin-top:100px">
        <b-row>
            <b-col sm="12" lg="6">
                <h2><b-icon-chevron-left @click="$router.go(-1)" style="cursor:pointer"></b-icon-chevron-left> {{ $t('tanlanganbolalar') }} </h2>
            </b-col>
            <b-col sm="12" lg="6" class="text-right">
                <a href="javascript: void(0);" v-show="AdoptionPermissionList.length > 0"  @click="$router.push({ name : 'ChooseChild',params : { id : 0 } })" class="btn btn-sm anim-opacity btn-primary"> <b-icon-plus></b-icon-plus> {{ $t('Add') }} </a>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="mt-3" sm="12" md="6" v-for="(item,index) in AdoptionPermissionList" :key="index" v-show="AdoptionPermissionList.length > 0">
                
                <div class="pricing-box rounded px-4 pt-4 pb-2 ">
                    <h6 class="m-0 p-0"> {{ $t('ChildCode') }} :  <span class="text-primary"> B{{ item.ChildCode }} </span> </h6>
                      <b-row>
                          <b-col sm="12">
                              <p class="text-center  pb-0 mb-0"><span style="font-weight:bold" class="h5 "> <i :class="`mdi h2 text-primary m-0 p-0 mdi-human-${item.GenderId == 1 ? 'male' : 'female'}`"></i> {{ item.GenderName }}  / {{ item.DateOfBirth }}  </span> ({{item.Age}} {{ $t('age') }})</p>
                              <p class="text-center text-danger m-0 p-0 mb-2"> {{ $t('OrderNumber') }} : <b> {{ item.OrderNumber }} </b> </p>
                              <table>
                                    <tr>
                                        <td style="width : 45%">{{ $t('docnumber') }} :</td>
                                        <th style="width : 55%"> A{{ item.DocNumber }} </th>
                                    </tr>
                                    <tr>
                                        <td style="width : 40%">{{ $t('nationality') }} :</td>
                                        <th style="width : 60%"> {{ item.NationalityName }} </th>
                                    </tr>
                                    <tr>
                                        <td style="width : 40%">{{ $t('healthtype') }} :</td>
                                        <th style="width : 60%"> {{ item.HealthTypeName }} </th>
                                    </tr>
                                    <tr>
                                        <td style="width : 40%">{{ $t('oblast') }} :</td>
                                        <th style="width : 60%"> {{ item.OblastName }} </th>
                                    </tr>
                                    <tr>
                                        <td style="width : 40%">{{ $t('region') }} :</td>
                                        <th style="width : 60%"> {{ item.RegionName }} </th>
                                    </tr>
                                    <tr class="pr-btn">
                                        <td style="width : 40%">{{ $t('organizationname') }} :</td>
                                        <th style="width : 60%"> {{ item.OrganizationName }} </th>
                                    </tr>
                                    <tr class="pr-btn">
                                        <td style="width : 40%">{{ $t('guardianshiptypename') }} :</td>
                                        <th style="width : 60%"> {{ item.GuardianShipTypeName }} </th>
                                    </tr>
                                    <tr class="pr-btn">
                                        <td style="width : 40%">{{ $t('status') }} :</td>
                                        <th style="width : 60%"> <b-badge :variant="item.IsArchive ? 'danger' : 'success'" class="btn-soft-primary" size="sm"> {{ item.StatusName }} </b-badge> </th>
                                    </tr>
                                    <tr class="pr-btn" v-if="item.HasBrotherOrSyster">
                                        <td >
                                            {{ $t('hasbrotherorsyster') }}
                                        </td>
                                        <td>
                                            <div class="d-flex">
                                                <div class="mr-3" v-for="(el,i) in item.FamilyMembers" :key="i + 'dsdsd'">
                                                    <div class="d-flex">
                                                        <i v-if="el.GenderId == 1" :class="`mdi mdi-human-male h1 text-primary`"></i>
                                                        <i v-if="el.GenderId == 2" :class="`mdi mdi-human-female h1 text-primary`"></i>
                                                        <div style="display:grid">
                                                            <span style="font-size:13px" class="mt-1"> {{ el.KinshipDegreeName }} </span>
                                                            <span style="font-size:13px" class="mt-n2"> {{ el.Age }} {{ $t('age') }} </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                
                          </b-col>
                          
                      </b-row>
                      <b-row class="mt-2" >
                          <b-col sm="12">
                              <a v-if="item.CanCancel" @click="OpenCancelModal(item)" class="btn btn-sm btn-soft-primary mr-2 mt-2 pr-btn"> <b-icon-x scale="1"></b-icon-x> {{ $t('cancel') }} </a>
                              <a v-if="item.CanSendCourtApplication" @click="$router.push({ name : 'EditCourtApplication',params : { id : 0 },query: {childselectapplicationid:item.ChildSelectApplicationId} })" class="btn btn-sm btn-soft-primary mr-2 mt-2 pr-btn"> <b-icon-plus scale="1"></b-icon-plus> {{ $t('CourtApplication') }} </a>
                              <!-- <a v-if="item.CanRefusalOfTheApplicant" @click="OpenRefusalOfTheApplicantModal(item)" class="btn btn-sm btn-soft-primary mr-2 mt-2 pr-btn"> <b-icon-person-x class="mr-1" scale="1"></b-icon-person-x> {{ $t('RefusalOfTheApplicant') }} </a>
                              <a v-if="item.CanConsentOfTheApplicant" @click="OpenConsentOfTheApplicantModal(item)" class="btn btn-sm btn-soft-primary mr-2 mt-2 pr-btn"> <b-icon-person-check class="mr-1" scale="1"></b-icon-person-check> {{ $t('ConsentOfTheApplicant') }} </a> -->
                          </b-col>
                      </b-row>
                      <b-row sm="12" class="mt-3" v-if="item.CanRefusalOfTheApplicant || item.CanConsentOfTheApplicant">
                          <b-col sm="12" md="4" class="d-flex align-items-center">
                              {{ $t('bolaolish') }}
                          </b-col>
                          <b-col sm="12" md="8" class="text-right">
                              <b-button variant="danger" size="sm" @click="OpenRefusalOfTheApplicantModal(item)" v-if="item.CanRefusalOfTheApplicant" class="mr-2 pr-btn"> {{ $t('refuse') }} </b-button>
                              <b-button variant="success" size="sm" @click="OpenConsentOfTheApplicantModal(item)" class="pr-btn" v-if="item.CanConsentOfTheApplicant"> {{ $t('consent') }} </b-button>
                          </b-col>
                      </b-row>
                        <b-modal :id="'RefusalOfTheApplicantModal' + item.ChildSelectApplicationId" :title="$t('RefusalOfTheApplicant')" no-close-on-backdrop hide-footer>
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
                                    <a @click="$bvModal.hide('RefusalOfTheApplicantModal'+item.ChildSelectApplicationId)" class="btn btn-sm btn-soft-danger mr-2 pr-btn">  {{ $t('no') }} </a>
                                    <a @click="RefusalOfTheApplicant(item)" class="btn btn-sm btn-success  pr-btn"> <b-spinner v-if="RefusalOfTheApplicantLoading" small></b-spinner>  {{ $t('yes') }} </a>
                                </b-col>
                            </b-row>
                        </b-modal>
                        <b-modal :id="'ConsentOfTheApplicantModal' + item.ChildSelectApplicationId" :title="$t('ConsentOfTheApplicant')" no-close-on-backdrop hide-footer>
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
                                    <a @click="$bvModal.hide('ConsentOfTheApplicantModal'+item.ChildSelectApplicationId)" class="btn btn-sm btn-soft-danger mr-2 pr-btn">  {{ $t('no') }} </a>
                                    <a @click="ConsentOfTheApplicant(item)" class="btn btn-sm btn-success  pr-btn"> <b-spinner v-if="ConsentOfTheApplicantLoading" small></b-spinner>  {{ $t('yes') }} </a>
                                </b-col>
                            </b-row>
                        </b-modal>
                        <b-modal :id="'CancelModal' + item.ChildSelectApplicationId" :title="$t('cancel')" no-close-on-backdrop hide-footer>
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
                                    <a @click="$bvModal.hide('CancelModal'+item.ChildSelectApplicationId)" class="btn btn-sm btn-soft-danger mr-2 pr-btn">  {{ $t('no') }} </a>
                                    <a @click="Cancel(item)" class="btn btn-sm btn-success  pr-btn"> <b-spinner v-if="CancelLoading" small></b-spinner>  {{ $t('yes') }} </a>
                                </b-col>
                            </b-row>
                        </b-modal>
                        <div class="mt-4">
                        <div class="hero-bottom-img">
                            <img
                                v-if="!item.IsArchive"
                                src="@/assets/images/pricing-bottom-bg.png"
                                alt
                                class="img-fluid d-block mx-auto"
                            />
                            <img
                                v-if="item.IsArchive"
                                src="@/assets/images/pricing_bottom_danger.png"
                                alt
                                class="img-fluid d-block mx-auto"
                            />
                        </div>
                        </div>
                    </div>
            </b-col>
            <b-col class="mt-3 d-flex align-items-center justify-content-center" sm="12" style="height:300px" v-if="AdoptionPermissionList.length == 0">
                <b-button @click="$router.push({ name : 'ChooseChild'})" size="lg" class="anim-opacity" pill variant="primary" > <span class="px-5"> <b-icon-plus></b-icon-plus> {{ $t('Add') }}</span> </b-button>
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
import {BIconPlus,BIconPencil,BIconTrash,BIconXCircle,BIconCursor,BIconX,BIconEye,BIconPersonX,BIconPersonCheck,BIconChevronLeft } from 'bootstrap-vue' 
import AdoptionPermissionService from '../services/adoptionpermission.service'
import ChildSelectApplicationService from '../services/childselectapplication.service'
import CustomInput from './components/CustomInput.vue'
export default {
    components : { Navbar,BIconPlus,Footer,BIconPencil,BIconTrash,BIconXCircle,BIconCursor,CustomInput,BIconX,BIconEye,BIconPersonX,BIconPersonCheck,BIconChevronLeft },
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
            RefusalOfTheApplicantLoading : false,
            ConsentOfTheApplicantLoading : false
        }
    },
    created(){
        this.Refresh()
    },
    methods : {
        getColor(item){
            if(item.statusid == 24){
                return 'danger'
            }
            else{
                return 'success'
            }
        },
        OpenHistory(item){
            this.History = []
            this.History = item.history
            this.historySidebar = true
        },
        OpenRefusalOfTheApplicantModal(item){
            this.filter.smscode = ""
            this.filter.phonenumber = ""
            ChildSelectApplicationService.RefusalOfTheApplicant(item.ChildSelectApplicationId).then(res => {
                this.$bvModal.show('RefusalOfTheApplicantModal'+item.ChildSelectApplicationId)
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
        RefusalOfTheApplicant(item){
            this.RefusalOfTheApplicantLoading = true
            ChildSelectApplicationService.ConfirmRefusalOfTheApplicant(item.ChildSelectApplicationId,this.filter.smscode).then(res => {
                this.RefusalOfTheApplicantLoading = false
                this.$bvModal.hide('RefusalOfTheApplicantModal' + item.ChildSelectApplicationId)
                this.Refresh()
            }).catch(error => {
                // this.makeToast(error.response.data,'error')
                 if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
                this.RefusalOfTheApplicantLoading = false
            })
        },
        OpenConsentOfTheApplicantModal(item){
            this.filter.smscode = ""
            this.filter.phonenumber = ""
            ChildSelectApplicationService.ConsentOfTheApplicant(item.ChildSelectApplicationId).then(res => {
                this.$bvModal.show('ConsentOfTheApplicantModal'+item.ChildSelectApplicationId)
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
        ConsentOfTheApplicant(item){
            this.ConsentOfTheApplicantLoading = true
            ChildSelectApplicationService.ConfirmConsentOfTheApplicant(item.ChildSelectApplicationId,this.filter.smscode).then(res => {
                this.ConsentOfTheApplicantLoading = false
                this.$bvModal.hide('ConsentOfTheApplicantModal' + item.ChildSelectApplicationId)
                this.Refresh()
            }).catch(error => {
                // this.makeToast(error.response.data,'error')
                 if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
                this.ConsentOfTheApplicantLoading = false
            })
        },
        OpenCancelModal(item){
            this.filter.smscode = ""
            this.filter.phonenumber = ""
            
            ChildSelectApplicationService.Cancel(item.ChildSelectApplicationId).then(res => {
                this.$bvModal.show('CancelModal'+item.ChildSelectApplicationId)
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
            ChildSelectApplicationService.ConfirmCancel(item.ChildSelectApplicationId,this.filter.smscode).then(res => {
                this.CancelLoading = false
                this.$bvModal.hide('CancelModal' + item.ChildSelectApplicationId)
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
            ChildSelectApplicationService.GetAll(0,this.lang).then(res => {
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
            
            AdoptionPermissionService.Send(item.id).then(res => {
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
            AdoptionPermissionService.ConfirmSend(item.id,this.filter.smscode).then(res => {
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
            AdoptionPermissionService.Delete(item.id).then(res => {
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
        },
        
    }
}
</script>

<style>

</style>