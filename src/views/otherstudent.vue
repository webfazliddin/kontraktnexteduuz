<template>
  <div>
    <Navbar />
    <b-overlay :show="Loading" :style="{ height: Loading ? '100vh' : 'auto' }">
      <div v-if="!Loading">
        <div class="container" style="margin-top: 100px">
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
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-select
                        :label="$t('contractSideType')"
                        :style="
                          Application.contractSideTypeId == 0 ||
                          Application.contractSideTypeId == null
                            ? 'color:#F43958;font-weight:bold; '
                            : ' '
                        "
                        v-model="Application.contractSideTypeId"
                        :options="ContractSideTypeList"
                      ></custom-select>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-select
                        :style="
                          Application.contractSumTypeId == 0 ||
                          Application.contractSumTypeId == null
                            ? 'color:#F43958;font-weight:bold;'
                            : ''
                        "
                        :label="$t('contractSumType')"
                        v-model="Application.contractSumTypeId"
                        @input="ChangeContractSum"
                        :options="ContractSumTypeList"
                      ></custom-select>
                    </b-col>
                  </b-row>
                </fieldset>
                <fieldset
                  class="mt-4 mb-3"
                  v-if="Application.contractSideTypeId == 2"
                >
                  <b-row>
                    <b-col sm="12" md="6" lg="4">
                      <custom-input
                        :style="
                          contractorinn.inn == '' ||
                          contractorinn.inn == 0 ||
                          contractorinn.inn == null ||
                          contractorinn.inn == undefined
                            ? 'color:#F43958;font-weight:bold'
                            : ''
                        "
                        :label="$t('inn')"
                        v-model="contractorinn.inn"
                        v-mask="'#########'"
                        :placeholder="$t('inn')"
                      ></custom-input>
                    </b-col>
                    <b-col md="2" sm="12">
                      <b-button
                        block
                        @click="SearchInn"
                        variant="outline-primary"
                        size="lg"
                      >
                        <p class="m-0 p-0 p-1">
                          <b-spinner v-if="SearchLoading" small></b-spinner>
                          {{ $t("search") }}
                        </p>
                      </b-button>
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
                    <b-col sm="12" md="9" lg="9">
                      <custom-label
                        :label="$t('fullname')"
                        :content="ContractorData.fullName"
                      ></custom-label>
                    </b-col>
                    <b-col md="2" sm="12">
                      <b-button
                        block
                        @click="DeleteINN"
                        variant="outline-danger"
                        size="lg"
                      >
                        <p class="m-0 p-0 p-1">
                          {{ $t("delete") }}
                        </p>
                      </b-button>
                    </b-col>
                  </b-row>
                </fieldset>
                <fieldset class="mt-3 mb-3">
                  <b-row v-if="PriceData.ContractPrice != 0">
                    <b-col sm="12" md="10" lg="8">
                      <p style="color: red">*{{ $t("checkedu") }}</p>
                    </b-col>
                    <b-col class="text-right">
                      {{ $t("ContractPrice") }} <br />
                      <div class="d-flex justify-content-end ml-3">
                        <p
                          class="p-2 font-weight-bold mobileText ml-3"
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
                            class="mr-1 mobileText ml-3"
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
                          <p class="mr-1 mobileText">-</p>
                          <p style="color: red" class="mr-1 mobileText">10%</p>
                          <p class="mr-1 mobileText">=</p>
                          <p
                            class="mr-1 font-weight-bold mobileText"
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
                            {{ $t("summa") }}
                          </p>
                        </span>
                      </div>
                    </b-col>
                  </b-row>
                </fieldset>
              </div>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col sm="12" md="12" class="text-right">
              <b-button
                class="mr-1"
                variant="danger"
                @click="$router.push({ name: 'Application' })"
              >
                {{ $t("back") }}
              </b-button>
              <!-- </b-col>
            <b-col sm="12" md="6" class="text-right "> -->
              <b-button
                variant="success"
                :disabled="isDisabled === true"
                @click="SaveData"
              >
                <b-spinner small v-if="SaveLoading"></b-spinner>
                {{ $t("send") }}
              </b-button>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-overlay>

    <Footer />
  </div>
</template>

<script>
import Navbar from "../layouts/components/navbar.vue";
import Footer from "../layouts/components/footer.vue";
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
      SendLoading: false,
      isShow: false,
      infomodaldata: {
        organization: "",
        docnumber: "",
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
      DTMOrganization: {
        organization: "",
        speciality: "",
      },
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
        this.isCreateApplicantion =
          res.data.dtmPlan.filter((item) => item.accepted === true).length > 0
            ? true
            : false;
        this.DtmPlan = res.data.dtmPlan;
        ManualService.FacultySelectList(this.Application.organizationId).then(
          (res) => {
            this.FacultyList = res.data;
          }
        );
        ManualService.ContractSumTypeList(this.Application.eduFormId).then(
          (res) => {
            this.ContractSumTypeList = res.data;
          }
        );
        if (res.data.contractor == null) {
          this.ContractorData = {};
        }
        if (this.$route.params.id != 0) {
          ApplicationService.GetPrice(this.Application)
            .then((res1) => {
              this.PriceData.TotalContractPrice = res1.data.amount;
              if (res1.data.discount == 0) {
                (this.isContractEightPercent = false),
                  (this.PriceData.ContractPrice = res1.data.amount);
              }
              if (res1.data.discount != 0) {
                (this.isContractEightPercent = true),
                  (this.PriceData.ContractPrice = res1.data.calculatedAmount);
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
    ManualService.ApplicationTypeSelectList().then((res) => {
      this.ApplicationList = res.data;
    });
    ManualService.ContractSideTypeSelectList().then((res) => {
      this.ContractSideTypeList = res.data;
    });
  },
  methods: {
    BindValue(value) {
      this.Application.dateofbirth = value;
    },
    ChangeContractSideType() {
      this.ContractorData.fullName = "";
      this.contractorinn.inn = "";
    },
    SearchInn() {
      if (this.contractorinn.inn.length == 9) {
        this.SearchLoading = true;
        ContractorService.GetByInn(this.contractorinn.inn)
          .then((res) => {
            this.ContractorData = res.data;
            this.SearchLoading = false;
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
    },
    DeleteINN() {
      this.contractorinn.inn = "";
      this.ContractorData.fullName = "";
      this.ContractorData.id = "";
    },
    check() {
      if (
        this.Application.student === 0 ||
        this.Application.student === null ||
        this.Application.student === undefined ||
        this.Application.student === ""
      ) {
        this.makeToast(this.$t("studentNotCorrect"), "error");
        return false;
      }
      if (
        this.Application.pinfl === 0 ||
        this.Application.pinfl === null ||
        this.Application.pinfl === undefined ||
        this.Application.pinfl === ""
      ) {
        this.makeToast(this.$t("pinflNotCorrect"), "error");
        return false;
      }
      if (
        this.Application.applicationTypeId === 0 ||
        this.Application.applicationTypeId === null ||
        this.Application.applicationTypeId === undefined ||
        this.Application.applicationTypeId === ""
      ) {
        this.makeToast(this.$t("applicationTypeNotSelect"), "error");
        return false;
      }
      if (
        this.Application.organizationId === 0 ||
        this.Application.organizationId === null ||
        this.Application.organizationId === undefined ||
        this.Application.organizationId === ""
      ) {
        this.makeToast(this.$t("organizationNotCorrect"), "error");
        return false;
      }
      if (this.Application.contractSideTypeId == 2) {
        if (
          this.ContractorData.id === 0 ||
          this.ContractorData.id === null ||
          this.ContractorData.id === undefined ||
          this.ContractorData.id === ""
        ) {
          this.makeToast(this.$t("contractorNotCorrect"), "error");
          return false;
        }
      }
      if (
        this.Application.contractSideTypeId === 0 ||
        this.Application.contractSideTypeId === null ||
        this.Application.contractSideTypeId === undefined ||
        this.Application.contractSideTypeId === ""
      ) {
        this.makeToast(this.$t("contractSideTypeNotSelect"), "error");
        return false;
      }
      if (
        this.Application.contractSumTypeId === 0 ||
        this.Application.contractSumTypeId === null ||
        this.Application.contractSumTypeId === undefined ||
        this.Application.contractSumTypeId === ""
      ) {
        this.makeToast(this.$t("contractSumTypeNotSelect"), "error");
        return false;
      }

      return true;
    },
    ChangeContractSum() {
      if (
        this.Application.contractSumTypeId === 0 ||
        this.Application.contractSumTypeId === null ||
        this.Application.contractSumTypeId === undefined ||
        this.Application.contractSumTypeId === ""
      ) {
        this.PriceData.ContractPrice = 0;
        this.PriceData.TotalContractPrice = 0;
        this.isShow = false;
        return false;
      }
      this.isDisabled = true;
      ApplicationService.GetPrice(this.Application)
        .then((res) => {
          this.isShow = true;
          this.PriceData.TotalContractPrice = res.data.amount;
          if (res.data.discount == 0) {
            (this.isContractEightPercent = false),
              (this.PriceData.ContractPrice = res.data.amount);
            this.isDisabled = false;
          }
          if (res.data.discount != 0) {
            this.isShow = true;
            (this.isContractEightPercent = true),
              (this.PriceData.ContractPrice = res.data.calculatedAmount);
            this.isDisabled = false;
          }
        })
        .catch((error) => {
          this.isDisabled = false;
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
        });
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

    SaveData() {
      if (!this.check()) {
        return false;
      }
      if (this.Application.contractSideTypeId == 2) {
        if (this.contractorinn.inn == "" || this.contractorinn.inn == null) {
          this.makeToast(this.$t("innNotSelect"), "error");
          return false;
        }
      }
      if (
        this.Application.contractSideTypeId == 2 &&
        this.contractorinn.inn.length != 9
      ) {
        this.makeToast(this.$t("innNotCorrect"), "error");
        return false;
      }
      this.SaveLoading = true;
      this.isDisabled = true;
      this.Application.contractor = this.ContractorData.fullName;
      this.Application.contractorId = this.ContractorData.id;
      ApplicationService.Update(this.Application)
        .then((res1) => {
          this.SaveLoading = false;
          this.infomodaldata.organization = res1.data.organization;
          this.infomodaldata.docnumber = res1.data.docNumber;
          this.$router.push({
            name: "Application",
            query: {
              infomodal: 1,
              organizationFilial: this.infomodaldata.organization,
              applicationNumber: this.infomodaldata.docnumber,
            },
          });
          this.isDisabled = false;
        })
        .catch((error) => {
          this.SaveLoading = false;
          this.isDisabled = false;
          this.CreateDtmModal = false;
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
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
