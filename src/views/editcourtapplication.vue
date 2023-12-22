<template>
  <div>
      <Navbar />
      <b-overlay :show="Loading" style="min-height:calc(100vh - 460px)">
          <div class="container" style="margin-top:100px">
              <b-row>
                  <b-col>
                      <h2> <b-icon-chevron-left @click="$router.go(-1)" style="cursor:pointer"></b-icon-chevron-left> {{ $t('CourtApplication') }} </h2>
                  </b-col>
              </b-row>
               <b-row class="mt-3">
                    <b-col>
                        <div class="pricing-box rounded p-3">
                            <b-row>
                                <b-col sm="12" md="6" lg="3">
                                    <custom-date-picker
                                        placeholder="00.00.0000"
                                        @keyup="BindValue"
                                        v-model="CourtApplication.docdate"
                                        :label="$t('docdate')"
                                    ></custom-date-picker>
                                </b-col>
                            </b-row>
                            <b-row class="mt-3">
                                <b-col>
                                    <table>
                                        <tr>
                                            <td style="width:35%"> {{ $t('fio') }}: </td>
                                            <td> <b> {{ CourtApplication.guardianname }} </b> </td>
                                        </tr>
                                        <tr>
                                            <td> {{ $t('adoptionpermissionnumber') }}: </td>
                                            <td> <b> {{ CourtApplication.adoptionpermissionnumber }} </b> </td>
                                        </tr>
                                        <tr>
                                            <td> {{ $t('guardianshiptypename') }}: </td>
                                            <td> <b> {{ CourtApplication.guardianshiptypename }} </b> </td>
                                        </tr>
                                        <tr>
                                            <td> {{ $t('organizationname') }}: </td>
                                            <td> <b> {{ CourtApplication.organizationname }} </b> </td>
                                        </tr>
                                        <tr>
                                            <td> {{ $t('status') }}: </td>
                                            <td> <b> {{ CourtApplication.statusname }} </b> </td>
                                        </tr>
                                    </table>
                                </b-col>
                                <b-col>
                                    <table>
                                        <tr>
                                            <td style="width:35%"> {{ $t('childname') }}: </td>
                                            <td> <b> {{ CourtApplication.childname }} </b> </td>
                                        </tr>
                                        <tr>
                                            <td> {{ $t('gender') }}: </td>
                                            <td> <b> {{ CourtApplication.gendername }} </b> </td>
                                        </tr>
                                        <tr>
                                            <td> {{ $t('dateofbirth') }}: </td>
                                            <td> <b> {{ CourtApplication.childdateofbirth }} </b> </td>
                                        </tr>
                                        <tr>
                                            <td> {{ $t('ChildCode') }}: </td>
                                            <td> <b> {{ CourtApplication.uniquecode }} </b> </td>
                                        </tr>
                                    </table>
                                </b-col>
                            </b-row>
                            <b-row v-if="CourtApplication.CanSave">
                                <b-col class="text-right"> 
                                    <b-button @click="SaveData" variant="success"> <b-spinner small v-if="SaveLoading"></b-spinner> {{ $t('save') }} </b-button>
                                </b-col>
                            </b-row>
                        </div>
                    </b-col>
                </b-row>
          </div>
          
      </b-overlay>
      <Footer />
  </div>
</template>

<script>
import Navbar from '../layouts/components/navbar.vue'
import Footer from '../layouts/components/footer.vue'
import CourtApplicationService from '../services/courtapplication.service' 
import { BIconChevronLeft } from 'bootstrap-vue'
import CustomDatePicker from './components/CustomDatepicker.vue'
export default {
    components : { Navbar,Footer,BIconChevronLeft,CustomDatePicker },
    data(){
        return{
            CourtApplication : {},
            Loading : false,
            SaveLoading : false
        }
    },
    created(){
        this.Loading = true
        CourtApplicationService.Get(this.$route.params.id,this.$route.query.childselectapplicationid).then(res => {
            this.CourtApplication = res.data
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
    methods : {
        SaveData(){
            this.SaveLoading = true
            CourtApplicationService.Update(this.CourtApplication).then(res => {
                this.SaveLoading = false
                this.$router.push({ name : 'CourtApplication' })
            }).catch(error => {
                this.SaveLoading = false
                // this.makeToast(error.response.data,'error')
                 if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
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
        BindValue(data){
            this.CourtApplication.docdate = data
        },
    }
}
</script>

<style>

</style>