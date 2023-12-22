<template>
  <div>
      <Navbar />
      <b-overlay :show="show" style="min-height:calc(100vh - 460px)">
          <div class="container" style="margin-top:100px">
            <b-card>
                <template #header>
                    <h6 class="mb-0"> <b-icon-chevron-left @click="$router.go(-1)" style="cursor:pointer" scale="1.2"></b-icon-chevron-left> {{ $t('FilterChild') }} </h6>
                </template> 
                <b-card-body>
                    <b-row>
                        <b-col sm="12" md="6" class="mt-2">
                            <div class="form-group">
                                <label for="name"> {{ $t('agerange') }} </label>
                                <vue-slider height="12px"  :tooltipStyle="{backgroundColor : '#5168A0'}" :processStyle="{ backgroundColor : '#5168A0' }" :enable-cross="false" :max="18" tooltip="always" dotSize="24" class="mt-3" v-model="filter.AgeRange"></vue-slider>
                            </div>
                        </b-col>
                        <b-col sm="12" md="6" class="mt-2">
                            <div class="form-group d-inline">
                                <label style="width:100%" for="name"> {{ $t('nationality') }} </label>
                                <v-select
                                    :options="NationalityList"
                                    :reduce="item => item.id"
                                    multiple
                                    label="name"
                                    v-model="filter.NationalityId"
                                    :placeholder="$t('nationality')"
                                    class="mt-3"
                                >
                                </v-select>
                            </div>
                        </b-col>
                        <b-col sm="12" md="12" class="mt-2">
                            <div class="form-group d-inline">
                                <label style="width:100%" for="name"> {{ $t('healthtype') }} </label>
                                <b-row>
                                    <b-col sm="12" md="6" lg="3">
                                        <b-button block pill size="sm" class="mr-2 mt-2" @click="filter.HealthTypeId = 0" :variant="filter.HealthTypeId == 0 ? 'primary' :'outline-primary'"><div class="h6 p-0 m-0"> {{ $t('notimportant') }} </div></b-button>
                                    </b-col>
                                    <b-col sm="12" md="6" lg="3" v-for="(item1,index1) in HealthTypeList" :key="index1 + 'index1'">
                                        <b-button pill block size="sm" class="mr-2 mt-2"  @click="AddHealthType(item1)"  :variant="filter.HealthTypeId == item1.id ? 'primary' : 'outline-primary'"><div class="h6 p-0 m-0"> {{ item1.shortname }} </div> </b-button>
                                    </b-col>
                                </b-row>
                                
                                
                            </div>
                        </b-col>
                        
                        <b-col sm="12" md="12" class="mt-2">
                            <div class="form-group d-inline">
                                <label style="width:100%" for="name"> {{ $t('gender') }} </label>
                                <b-row>
                                    <b-col sm="12" md="6" lg="3">
                                        <b-button block pill :variant="filter.GenderId == 0 ? 'primary' :'outline-primary'" @click="filter.GenderId = 0" size="sm" class="mr-2"><div class="h6 p-0 m-0"> {{ $t('notimportant') }} </div> </b-button>
                                    </b-col>
                                    <b-col sm="12" md="6" lg="3" v-for="(item2,index2) in GenderList" :key="index2"> 
                                        <b-button pill block size="sm" class="mr-2" style="vertical-align:middle"  @click="AddGender(item2)"  :variant="filter.GenderId == item2.id ? 'primary' : 'outline-primary'"> <div class="h6 p-0 m-0"> <i :class="`mdi mdi-human-${item2.id == 1 ? 'male' : 'female'}`"></i> <span>  {{ item2.name }} </span> </div> </b-button>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                        
                        <b-col sm="12" md="12" class="mt-4">
                            <div>
                                <label class="mr-2" style="width:100%" for="name"> {{ $t('yesbrotherorsister') }} </label>
                                <b-row>
                                    <b-col sm="12" md="6" lg="3">
                                        <b-button pill block :variant="filter.HasBrotherOrSister === null  ? 'primary' :'outline-primary'" @click="filter.HasBrotherOrSister = null" size="sm" class="mr-2"> <div class="h6 p-0 m-0"> {{ $t('notimportant') }} </div> </b-button>
                                    </b-col>
                                    <b-col sm="12" md="6" lg="3">
                                        <b-button pill block size="sm" class="mr-2"  @click="filter.HasBrotherOrSister = false"  :variant="filter.HasBrotherOrSister === false ? 'primary' : 'outline-primary'"> <div class="h6 p-0 m-0"> <i class="mdi mdi-human-child"></i> {{ $t('no') }} </div> </b-button>
                                    </b-col>
                                    <b-col sm="12" md="6" lg="6">
                                        <b-button pill block size="sm" class="mr-2"  @click="filter.HasBrotherOrSister = true"  :variant="filter.HasBrotherOrSister === true ? 'primary' : 'outline-primary'"> <div class="h6 p-0 m-0"> <i class="mdi mdi-human-male-female"></i> {{ $t('yesbrotherorsister') }} </div> </b-button>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="mt-5">
                        <b-col class="text-right">
                            <b-button size="lg" class="mr-2" @click="Clear" pill variant="danger"> <b-icon-x></b-icon-x> {{ $t('clear') }} </b-button>
                            <b-button size="lg" @click="Filter" pill variant="success"> <b-icon-search v-if="!FilterLoading"></b-icon-search> <b-spinner v-if="FilterLoading" small></b-spinner> {{ $t('filter') }} </b-button>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
            <b-row class="mt-4" v-if="ChildrenList.length > 0">
                <b-col>
                    <h1 class="text-center"> {{ $t('childlist') }} </h1>
                </b-col>
            </b-row>
            <b-row class="my-4" v-for="(child,childIndex) in ChildrenList" :key="childIndex + 'dsdsdsdfdg'">
                <b-col>
                    <b-card style="box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;border:none;cursor:pointer" class="ght" @click="$router.push({ name : 'ViewChildInfo',params:{code : child.childcode} })">
                        <b-row>
                            <b-col sm="12" md="4" lg="2">
                                <img src="@/assets/images/163802.svg" v-if="child.genderid == 2" alt="">
                                <img src="@/assets/images/163807.svg" v-if="child.genderid == 1" alt="">
                            </b-col>
                            <b-col sm="12" md="4" lg="5">
                                <table>
                                    <tr>
                                        <th style="width : 40%"> {{ $t('docnumber') }} :</th>
                                        <td> {{ child.childcode }} </td>
                                    </tr>
                                    <tr>
                                        <th style="width : 40%"> {{ $t('dateofbirth') }} :</th>
                                        <td> {{ child.dateofbirth }} </td>
                                    </tr>
                                    <tr>
                                        <th style="width : 40%"> {{ $t('childcharactername') }} : </th>
                                        <td> {{ child.childcharactername }} </td>
                                    </tr>
                                    
                                    <tr>
                                        <th style="width : 40%"> {{ $t('gender') }} : </th>
                                        <td> {{ child.gendername }} </td>
                                    </tr>
                                    <tr>
                                        <th style="width : 40%"> {{ $t('hasbrotherorsyster') }} : </th>
                                        <td> <b-badge :variant="child.hasbrotherorsyster ? 'success' : 'danger'"> {{ child.hasbrotherorsyster ? $t('yes') : $t('no') }} </b-badge> </td>
                                    </tr>
                                    
                                </table>
                            </b-col>
                            <b-col sm="12" md="4" lg="5">
                                <table>
                                    <tr>
                                        <th style="width : 40%"> {{ $t('healthtype') }} :</th>
                                        <td style="width : 50%"> {{ child.healthtypename }} </td>
                                    </tr>
                                    <tr>
                                        <th > {{ $t('nationality') }} :</th>
                                        <td> {{ child.nationalityname }} </td>
                                    </tr>
                                    <tr>
                                        <th > {{ $t('oblast') }} :</th>
                                        <td> {{ child.oblastname }} </td>
                                    </tr>
                                    <tr>
                                        <th > {{ $t('organizationname') }} :</th>
                                        <td> {{ child.organizationname }} </td>
                                    </tr>
                                    <tr>
                                        <th > {{ $t('region') }} :</th>
                                        <td> {{ child.regionname }} </td>
                                    </tr>
                                    <tr>
                                        <th > {{ $t('OrderNumber1') }} :</th>
                                        <td> <b-badge variant="info"> {{ child.numberofcandidates }} </b-badge> </td>
                                    </tr>
                                </table>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
            <b-row class="mt-3" v-if="ChildrenList.length > 0">
                <b-col class="d-flex justify-content-between">
                    <b-pagination
                        v-model="filter.PageNumber"
                        :total-rows="filter.total"
                        :per-page="filter.PageLimit"
                        aria-controls="my-table"
                        class="mr-auto ml-auto"
                        ></b-pagination>
                </b-col>
            </b-row>
          </div>  
      </b-overlay>
      <Footer class="mt-5" />
  </div>
</template>

<script>
import Navbar from '../layouts/components/navbar.vue'
import Footer from '../layouts/components/footer.vue'
import HelperService from '../services/helper.service'
import vSelect from 'vue-select'
import { BIconX,BIconSearch,BIconChevronLeft } from 'bootstrap-vue'
import ChildSearchService from '../services/childsearch.service'

export default {
    components : { Navbar,Footer,vSelect,BIconX,BIconSearch,BIconChevronLeft },
    data(){
        return{
            show : false,
            lang : localStorage.getItem('locale'),
            GenderList : [],
            HealthTypeList : [],
            NationalityList : [],
            filter : {
                HealthTypeId : 0,
                GenderId  : 0,
                NationalityId : [],
                AgeMin : 0,
                AgeMax : 0,
                AgeRange : [0,18],
                PageNumber : 1,
                PageLimit : 20,
                HasBrotherOrSister : null,
                total : 0
            },
            FilterLoading : false,
            ChildrenList : []
        }
    },
    created(){
        this.show = true
        HelperService.GetGenderList(this.lang).then(res => {
            this.GenderList = res.data
        })
        HelperService.GetHealthTypeList().then(res => {
            this.HealthTypeList = res.data
        })
        HelperService.GetAllNationality(this.lang).then(res => {
            this.NationalityList = res.data
            this.show = false
        })
       
    },
    methods:{
        Clear(){
            this.filter = {
                HealthTypeId : 0,
                GenderId  : 0,
                NationalityId : [],
                AgeMin : 0,
                AgeMax : 0,
                AgeRange : [0,18],
                PageNumber : 1,
                PageLimit : 20,
                HasBrotherOrSister : null,
                total : 0
            }
            this.ChildrenList = []
        },
        AddHealthType(item){
            this.filter.HealthTypeId = item.id
        },
        AddGender(item){
            this.filter.GenderId = item.id
        },
        Filter(){
            this.FilterLoading = true
            this.filter.AgeMin = this.filter.AgeRange[0]
            this.filter.AgeMax = this.filter.AgeRange[1]
            ChildSearchService.GetList(
                this.filter.GenderId,
                this.filter.HasBrotherOrSister,
                this.filter.AgeMin,
                this.filter.AgeMax,
                this.filter.HealthTypeId,
                this.filter.NationalityId,
                this.filter.PageNumber,
                this.filter.PageLimit
            ).then(res => {
                this.FilterLoading = false
                this.ChildrenList = res.data.result.rows
                this.filter.total = res.data.result.total
                if(this.ChildrenList.length == 0){
                    this.makeToast(this.$t('notfoundchild'),'warning')
                }
            }).catch(error => {
                // this.makeToast(error.response.data,'error')
                 if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
                this.FilterLoading = false
            })
        },
        makeToast(message,type){
            this.$toast.open({
                message: message,
                type: type,
                duration: 5000,
                dismissible: true
            })
        },
    }
}
</script>

<style lang="scss">
.ght:hover{
    box-shadow: 0 0 0 0 rgba(0,0,0,0.1);
    // opacity: 0.5;
    background-color: rgba($color: #000000, $alpha: 0.1);
}
.v-select.vs--single.vs--searchable{
        .vs__dropdown-toggle{
            border: none;
            .vs__selected-options{
                input{
                    padding-left: 12px;
                    margin-bottom: 6px;
                    margin-top: 0;
                    &::placeholder{
                        font-size: 15px;
                    }
                }
                .vs__selected{
                    padding-left: 12px;
                    margin-top: 0;
                    margin-bottom: 6px;
                }
            }
            .vs__actions{
                .vs__open-indicator{
                    margin-top: -29px;
                    margin-right: 15px;
                }
            }
        }
        .vs__dropdown-menu{
            margin-top: 16px;
            border-radius: 12px;
        }
    }
</style>