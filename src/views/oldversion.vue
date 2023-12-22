<template>
  <div>
    <Navbar />
    <b-overlay :show="Loading" :style="{ height: Loading ? '100vh' : 'auto' }">
      <div v-if="Application.fromDtm != true && !Loading">
        <div class="container" style="margin-top: 100px">
          <b-row>
            <b-col sm="12" lg="6">
              <h2 @click="$router.go(-1)" style="cursor: pointer">
                <b-icon-chevron-left></b-icon-chevron-left>
                {{ $t("Application") }}
              </h2>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="pricing-box rounded px-4 pt-4 pb-2">
                <fieldset>
                  <b-row>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('FIO')"
                        :content="Application.student"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('pinfl')"
                        :content="Application.pinfl"
                      ></custom-label>
                    </b-col>
                  </b-row>
                </fieldset>
                <fieldset class="mt-3">
                  <legend>{{ $t("StudentInfo") }} :</legend>
                  <b-row>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('generalorganization')"
                        :content="Application.organization"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('edulevel')"
                        :content="Application.eduLevel"
                      ></custom-label>
                    </b-col>
                    <!-- <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        v-if="Application.faculty != 'Noaniq fakultet'"
                        :label="$t('faculty')"
                        :content="Application.faculty"
                      ></custom-label>
                    </b-col> -->
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('speciality')"
                        :content="Application.eduSpeciality"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('eduType')"
                        :content="Application.eduType"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('eduForm')"
                        :content="Application.eduForm"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('eduLanguage')"
                        :content="Application.eduLanguage"
                      ></custom-label>
                    </b-col>
                    <b-col
                      sm="12"
                      md="6"
                      lg="4"
                      class="my-1"
                      v-if="!!Application.socialCategory"
                    >
                      <custom-label
                        :label="$t('socialCategory')"
                        :content="Application.socialCategory"
                      ></custom-label>
                    </b-col>
                  </b-row>
                </fieldset>
                <fieldset class="mt-3 mb-3">
                  <legend>{{ $t("Contract") }} :</legend>
                  <b-row>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('eduYear')"
                        :content="Application.eduYear"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('applicationType')"
                        :content="Application.applicationPurpose"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('applicationPurposeType')"
                        :content="Application.applicationType"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('contractType')"
                        :content="Application.contractType"
                      ></custom-label>
                    </b-col>
                    <b-col  v-if="!Application.stateExpense" sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('contractSideType')"
                        :content="Application.contractSideType"
                      ></custom-label>
                    </b-col>
                    <b-col  v-if="!Application.stateExpense" sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('contractSumType')"
                        :content="Application.contractSumType"
                      ></custom-label>
                    </b-col>
                    <b-col
                      sm="12"
                      md="12"
                      lg="12"
                      class="mt-2 my-1"
                      v-if="
                        Application.genderId == 2 && Application.eduTypeId == 2
                      "
                    >
                      <b-form-group v-slot="{ ariaDescribedby }">
                        <b-form-radio
                        disabled
                          v-model="Application.stateExpense"
                          :aria-describedby="ariaDescribedby"
                          name="some-radios"
                          :value="true"
                          >{{ $t("StateExpense") }}</b-form-radio
                        >
                        <!-- <b-form-radio
                        disabled
                          v-model="Application.stateExpense"
                          class="mt-2"
                          :aria-describedby="ariaDescribedby"
                          name="some-radios"
                          :value="false"
                          >{{ $t("MyExpense") }}</b-form-radio
                        > -->
                      </b-form-group>
                    </b-col>
                  </b-row>
                </fieldset>
                <fieldset
                  v-if="
                    !!ContractorData.fullName &&
                    Application.contractSideTypeId == 2
                  "
                >
                  <legend>{{ $t("Contractor") }} :</legend>
                  <b-row>
                    <b-col sm="12" md="12" lg="12">
                      <custom-label
                        :label="$t('fullname')"
                        :content="ContractorData.fullName"
                      ></custom-label>
                    </b-col>
                  </b-row>
                </fieldset>
                <fieldset class="mt-3 mb-3">
                  <b-row >
                    <b-col sm="12" md="10" lg="8">
                      <p style="color: red">*{{ $t("checkedu") }}</p>
                    </b-col>
                    <b-col class="text-right" v-if="
                      PriceData.ContractPrice != 0 &&
                      !Application.stateExpense && (Application.eduFormId!=2 || Application.eduTypeId!=2)
                    ">
                      {{ $t("ContractPrice") }} <br />
                      <div class="d-flex justify-content-end ml-3">
                        <p
                          class="p-2 font-weight-bold applicantionText ml-3"
                          v-if="!isContractEightPercent"
                          style="white-space: nowrap"
                        >
                          {{
                            $options.filters.currency(PriceData.ContractPrice, {
                              symbol: "",
                              fractionCount: 2,
                            })
                          }}{{ $t("summa") }}
                        </p>
                        <span class="d-flex p-1" v-if="isContractEightPercent">
                          <p
                            class="mr-1 applicantionText ml-3"
                            style="white-space: nowrap"
                          >
                            {{
                              $options.filters.currency(
                                PriceData.TotalContractPrice,
                                {
                                  symbol: "",
                                  fractionCount: 2,
                                }
                              )
                            }}
                          </p>
                          <!-- <p class="mr-1 applicantionText">-</p>
                          <p style="color: red" class="mr-1 applicantionText">
                            10%
                          </p>
                          <p class="mr-1 applicantionText">=</p>
                          <p
                            class="mr-1 font-weight-bold applicantionText"
                            style="white-space: nowrap"
                          >
                            {{
                              $options.filters.currency(
                                PriceData.ContractPrice,
                                {
                                  symbol: "",
                                  fractionCount: 2,
                                }
                              )
                            }}
                          </p> -->
                          {{ $t("summa") }}
                        </span>
                      </div>
                    </b-col>
                  </b-row>
                </fieldset>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-overlay>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import {
  BIconPlus,
  BIconPaperclip,
  BIconTrash,
  BIconCheck2Circle,
  BIconChevronLeft,
  BIconX,
  BIconExclamationTriangleFill,
  BIconCheckCircleFill,
} from "bootstrap-vue";
import CustomSelect from "./components/CustomSelect.vue";
import CustomInput from "./components/CustomInput.vue";
import CustomDatePicker from "./components/CustomDatepicker.vue";
import CustomLabel from "./components/CustomLabel.vue";
import ApplicationService from "../services/application.service";
import ManualService from "../services/manual.service";
import ContractorService from "../services/contractor.service";
import ContractPriceCalcService from "../services/contractpricecalc.service";
export default {
  components: {
    Navbar,
    BIconPlus,
    CustomSelect,
    CustomInput,
    CustomDatePicker,
    CustomLabel,
    BIconPaperclip,
    BIconTrash,
    Footer,
    BIconCheck2Circle,
    BIconChevronLeft,
    BIconX,
    BIconExclamationTriangleFill,
    BIconCheckCircleFill,
  },
  data() {
    return {
      Application: {},
      DtmPlanObject: {
        id: 0,
        organizationId: 0,
        contractTypeId: 0,
        eduFormId: 0,
        eduLanguageId: 0,
        eduSpecialityId: 0,
        eduFacultyId: 0,
        ball: 0,
        passingBall: 0,
        accepted: true,
      },
      SendLoading: false,
      isShow: false,
      infomodaldata: {
        organization: "",
        docnumber: "",
      },
      CreatedData: {
        docNumber: "",
        docDate: "",
        studentId: 0,
        personId: 0,
        applicationTypeId: 0,
        applicationPurposeId: 0,
        organizationId: 0,
        facultyId: 0,
        eduTypeId: 0,
        eduLanguageId: 0,
        eduLevelId: 0,
        eduSpecialityId: 0,
        eduFormId: 0,
        eduYearId: 0,
        contractTypeId: 0,
        contractSideTypeId: 0,
        contractSumTypeId: 0,
        contractorId: 0,
        socialCategoryId: 0,
        contractAmount: "",
        fromDtm: true,
        ball: 0,
        passingBall: 0,
        accepted: true,
        privileges: [],
        DtmPlan: [],
      },
      filter: {
        id: 0,
        message: "",
      },
      SendLoading: false,
      isContractEightPercent: false,
      EdulevelList: [],
      ContractTypeList: [],
      ApplicationList: [],
      CreateDtmModal: false,
      filterPrice: {
        applicationPurposeId: 0,
        eduSpecialityId: 0,
        contractSumTypeId: 0,
        facultyId: 0,
        eduTypeId: 0,
        eduFormId: 0,
      },
      ApplicationPurposeList: [],
      FacultyList: [],
      ContractSideTypeList: [],
      ContractSumTypeList: [],
      ContractSumTypeList2: [],
      LanguageList: [],
      // StudentCategoryList: [],
      SocialCategoryList: [],
      DtmPlan: [],
      EduYearList: [],
      contractorinn: {
        inn: "",
      },
      ContractorData: {
        fullName: "",
      },
      SaveLoading: false,
      isCreateApplicantion: false,
      isDisabled: false,
      SearchLoading: false,
      PriceData: {
        ContractPrice: 0,
        TotalContractPrice: 0,
      },
      Loading: false,
      lang: localStorage.getItem("locale"),
      SendId: 0,
      ContractPercent: 0,
      SendModalOpen: false,
    };
  },
  created() {
    this.Loading = true;
    ApplicationService.Get(this.$route.params.id)
      .then((res) => {
        this.Application = res.data;
        if (!!res.data.contractor) {
          this.ContractorData = res.data.contractor;
        }
        if (res.data.contractor) {
          this.contractorinn.inn = this.ContractorData.inn;
        }
        if (this.$route.params.id != 0) {
          this.Application.fromDtm = false;
        }
        this.DtmPlan = res.data.dtmPlan;
        var dublicate;
        this.DtmPlan.forEach(function (item) {
          if (!!item.accepted) {
            if (item.accepted === true) {
              dublicate = true;
            }
          }
        });
        if (dublicate) {
          this.isCreateApplicantion = true;
        }
        if (res.data.contractor == null) {
          this.ContractorData = {};
        }
        if (this.Application.eduFormId != 2 && this.Application.contractTypeId != 4 && this.Application.canEnterAmount != true) {
          ApplicationService.GetPrice(this.Application)
            .then((res1) => {
              this.PriceData.TotalContractPrice = res1.data.amount;
              if (res1.data.discount == 0) {
                (this.isContractEightPercent = false),
                  (this.PriceData.ContractPrice = res1.data.amount);
              }
              if (res1.data.discount != 0) {
                (this.isContractEightPercent = true),
                  (this.PriceData.ContractPrice =
                    res1.data.amount -
                    (res1.data.amount * res1.data.discount) / 100);
              }
            })
            .catch((error) => {
              // this.makeToast(error.response.data, "error");
              if (error.response.data.status == 500) {
                this.makeToast(this.$t("errormessage500"), "error");
              } else {
                this.makeToast(error.response.data, "error");
              }
            });
        }
        this.Loading = false;
      })
      .catch((error) => {
        // this.makeToast(error.response.data, "error");
        if (error.response.data.status == 500) {
          this.makeToast(this.$t("errormessage500"), "error");
        } else {
          this.makeToast(error.response.data, "error");
        }
        this.$router.push({
          name: "Application",
        });
      });
  },
  methods: {
    BindValue(value) {
      this.Application.dateofbirth = value;
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
  },
};
</script>

<style lang="scss">
.application-modal {
  .modal-xl {
    min-width: 1300px !important;
  }
}
</style>
