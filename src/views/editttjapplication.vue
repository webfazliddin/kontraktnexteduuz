<template>
  <div>
    <b-overlay :show="Loading" :style="{ height: Loading ? '100vh' : 'auto' }">
      <div v-if="!Loading">
        <div style="margin-top: 150px">
          <div class="row d-flex justify-content-center">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <h3 class="text-center mt-2">
                {{ $t("Talabalar turar joyi uchun ariza") }}
              </h3>
            </div>
          </div>
          <b-row>
            <b-col>
              <div class="pricing-box rounded px-4 pt-4 pb-2">
                <fieldset v-if="tabindex == 0">
                  <b-row>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                      <h5>
                        {{ $t("Shaxsiy ma’lumotlar va ta’lim ma’lumotlari") }}
                      </h5>
                      <hr class="line" />
                    </div>
                    <b-col sm="12" md="6" lg="4" class="textImgView">
                      <div class="image-container mt-2">
                        <b-img
                          thumbnail
                          fluid
                          style="width: 170px; height: 210px"
                          class="thumbnail ml-auto mr-auto"
                          :src="`data:image/png;base64,${Application.photo}`"
                        />
                      </div>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1 mt-2">
                      <custom-label
                        :label="$t('familyname')"
                        :content="Application.familyname"
                      ></custom-label>
                      <custom-label
                        class="mt-2"
                        :label="$t('lastname')"
                        :content="Application.lastname"
                      ></custom-label>
                      <custom-label
                        class="mt-2"
                        :label="$t('oblast')"
                        :content="Application.oblast"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1 mt-2">
                      <custom-label
                        :label="$t('firstname')"
                        :content="Application.firstname"
                      ></custom-label>
                      <custom-label
                        class="mt-2"
                        :label="$t('pinfl')"
                        :content="Application.pinfl"
                      ></custom-label>
                      <custom-label
                        class="mt-2"
                        :label="$t('region')"
                        :content="Application.region"
                      ></custom-label>
                    </b-col>
                  </b-row>
                </fieldset>
                <hr v-if="tabindex == 0" class="line" />
                <fieldset v-if="tabindex == 0" class="mt-3">
                  <div class="edu-info">
                    <b-list-group class="application_list">
                      <b-list-group-item class="edu-list-group">
                        <span class="edu-title"
                          >{{ $t("O‘quv muassasasi nomi") }}:</span
                        >
                        <span class="edu-name">
                          <b>{{ Application.organization }}</b>
                        </span>
                      </b-list-group-item>
                      <b-list-group-item class="edu-list-group">
                        <span class="edu-title">{{ $t("faculty") }}:</span>
                        <span class="edu-name">
                          <b>{{ Application.faculty }}</b>
                        </span>
                      </b-list-group-item>
                      <b-list-group-item class="edu-list-group">
                        <span class="edu-title">{{ $t("speciality") }}:</span>
                        <span class="edu-name">
                          <b>{{ Application.eduSpeciality }}</b>
                        </span>
                      </b-list-group-item>
                      <b-list-group-item class="edu-list-group">
                        <span class="edu-title"
                          >{{ $t("Ta'lim shakli") }}:</span
                        >
                        <span class="edu-name">
                          <b>{{ Application.eduForm }}</b>
                        </span>
                      </b-list-group-item>
                      <b-list-group-item class="edu-list-group">
                        <span class="edu-title">{{ $t("Ta'lim tili") }}:</span>
                        <span class="edu-name">
                          <b>{{ Application.eduLanguage }}</b>
                        </span>
                      </b-list-group-item>
                      <b-list-group-item class="edu-list-group">
                        <span class="edu-title"
                          >{{ $t("Ta’lim bosqichi") }}:</span
                        >
                        <span class="edu-name">
                          <b>{{ Application.eduLevel }}</b>
                        </span>
                      </b-list-group-item>
                      <b-list-group-item class="edu-list-group">
                        <span class="edu-title">{{ $t("contractType") }}:</span>
                        <span class="edu-name">
                          <b>{{ Application.eduContractType }}</b>
                        </span>
                      </b-list-group-item>
                    </b-list-group>
                  </div>
                </fieldset>

                <fieldset v-if="tabindex == 1" class="mt-3">
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <h5>{{ $t("Mavjud imtiyozlar") }}</h5>
                    <hr class="line" />
                  </div>
                  <b-row class="mainCardSuccess">
                    <b-col sm="12" lg="6" md="6">
                      <span class="spanClass"> Ayollar daftari </span>
                      <br />
                      <p class="pClass">Ayollar daftari</p>
                    </b-col>
                    <b-col sm="12" lg="6" md="6">
                      <span class="span1Class">
                        JSHSHIR kiriting
                        <help-circle-icon
                          class="icon-size-15"
                          style="margin-left: 7px"
                        ></help-circle-icon>
                      </span>
                      <br />
                      <b-input-group class="mt-2">
                        <b-form-input
                          type="number"
                          placeholder="Onangiz JSHSHIRni kiriting"
                          style="height: 35px"
                        ></b-form-input>
                        <b-input-group-append>
                          <b-button style="height: 35px" variant="primary"
                            ><search-icon
                              style="
                                height: 20px;
                                width: 20px;
                                margin-top: -11px;
                              "
                            ></search-icon
                          ></b-button>
                        </b-input-group-append>
                      </b-input-group>
                    </b-col>
                  </b-row>
                  <b-row class="mainCardDanger mt-2">
                    <b-col sm="12" lg="6" md="6">
                      <span class="spanClass">
                        Ijtimoiy himoya yagona reestri
                      </span>
                      <br />
                      <p class="pClass">Ijtimoiy himoya yagona reestri</p>
                    </b-col>
                    <b-col sm="12" lg="6" md="6">
                      <span class="span1Class">
                        JSHSHIR kiriting
                        <help-circle-icon
                          class="icon-size-15"
                          style="margin-left: 7px"
                        ></help-circle-icon>
                      </span>
                      <br />
                      <b-input-group class="mt-2">
                        <b-form-input
                          type="number"
                          placeholder="Onangiz JSHSHIRni kiriting"
                          style="height: 35px"
                        ></b-form-input>
                        <b-input-group-append>
                          <b-button style="height: 35px" variant="primary"
                            ><search-icon
                              style="
                                height: 20px;
                                width: 20px;
                                margin-top: -11px;
                              "
                            ></search-icon
                          ></b-button>
                        </b-input-group-append>
                      </b-input-group>
                    </b-col>
                  </b-row>
                  <b-row class="mainCard mt-2">
                    <b-col sm="12" lg="6" md="6">
                      <span class="spanClass"> Temir daftar </span>
                      <br />
                      <p class="pClass">Temir daftar</p>
                    </b-col>
                    <b-col sm="12" lg="6" md="6">
                      <span class="span1Class">
                        JSHSHIR kiriting
                        <help-circle-icon
                          class="icon-size-15"
                          style="margin-left: 7px"
                        ></help-circle-icon>
                      </span>
                      <br />
                      <b-input-group class="mt-2">
                        <b-form-input
                          type="number"
                          placeholder="Onangiz JSHSHIRni kiriting"
                          style="height: 35px"
                        ></b-form-input>
                        <b-input-group-append>
                          <b-button style="height: 35px" variant="primary"
                            ><search-icon
                              style="
                                height: 20px;
                                width: 20px;
                                margin-top: -11px;
                              "
                            ></search-icon
                          ></b-button>
                        </b-input-group-append>
                      </b-input-group>
                    </b-col>
                  </b-row>
                  <b-row class="mainCard mt-2">
                    <b-col sm="12" lg="6" md="6">
                      <span class="spanClass"> Bitta oilada bakalavriyat </span>
                      <br />
                      <p class="pClass">
                        Bitta oilada bakalavriyat bosqichi kunduzgi taʼlim
                        shaklida ikki yoki undan ortiq to‘lov-kontrakt asosida
                        o‘qiyotgan oilalar farzandlari
                      </p>
                    </b-col>
                    <b-col sm="12" lg="6" md="6">
                      <span class="span1Class">
                        JSHSHIR kiriting
                        <help-circle-icon
                          class="icon-size-15"
                          style="margin-left: 7px"
                        ></help-circle-icon>
                      </span>
                      <br />
                      <b-input-group class="mt-2">
                        <b-form-input
                          type="number"
                          placeholder="Onangiz JSHSHIRni kiriting"
                          style="height: 35px"
                        ></b-form-input>
                        <b-input-group-append>
                          <b-button style="height: 35px" variant="primary"
                            ><search-icon
                              style="
                                height: 20px;
                                width: 20px;
                                margin-top: -11px;
                              "
                            ></search-icon
                          ></b-button>
                        </b-input-group-append>
                      </b-input-group>
                    </b-col>
                  </b-row>
                  <b-row class="mainDiv mt-3">
                    <b-col sm="12" md="6" lg="6">
                      <div
                        class="div2"
                        v-for="(item, index) in PrivilegeList1"
                        :key="index"
                      >
                        <span>
                          <check-circle-icon
                            v-if="item.exists"
                            class="icon-size-15"
                            style="color: #52c41a"
                          ></check-circle-icon>
                          <x-circle-icon
                            class="icon-size-15"
                            v-if="!item.exists"
                            style="color: #000000a6"
                          ></x-circle-icon>
                        </span>
                        <span class="span2Class" style="margin-left: 13px">{{
                          item.privilege
                        }}</span>
                      </div>
                    </b-col>
                    <b-col sm="12" md="6" lg="6">
                      <div
                        class="div2"
                        v-for="(item, index) in PrivilegeList2"
                        :key="index"
                      >
                        <span>
                          <check-circle-icon
                            v-if="item.exists"
                            class="icon-size-15"
                            style="color: #52c41a"
                          ></check-circle-icon>
                          <x-circle-icon
                            class="icon-size-15"
                            v-if="!item.exists"
                            style="color: #000000a6"
                          ></x-circle-icon>
                        </span>
                        <span :class="!item.exists ? 'span2Class': 'spanSuccessClass'" style="margin-left: 13px">{{
                          item.privilege
                        }}</span>
                      </div>
                    </b-col>
                  </b-row>
                </fieldset>
                <fieldset v-if="tabindex == 2" class="mt-3">
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <h5>{{ $t("Ustuvorlik") }}</h5>
                    <hr class="line" />
                  </div>
                  <b-row class="mainDiv mt-3">
                    <b-col sm="12" md="12" lg="12">
                      <div
                        class="div2"
                        v-for="(item, index) in PrioritiesList"
                        :key="index"
                      >
                        <span>
                          <check-circle-icon
                            v-if="item.exists"
                            class="icon-size-15"
                            style="color: #52c41a"
                          ></check-circle-icon>
                          <x-circle-icon
                            class="icon-size-15"
                            v-if="!item.exists"
                            style="color: #000000a6"
                          ></x-circle-icon>
                        </span>
                        <span :class="!item.exists ? 'span2Class': 'spanSuccessClass'" style="margin-left: 13px">{{
                          item.priorityType
                        }}</span>
                      </div>
                    </b-col>
                  </b-row>
                </fieldset>
              </div>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col sm="12" md="12" class="text-right">
              <b-button class="mr-1" variant="danger" @click="Back">
                {{ $t("back") }}
              </b-button>
              <b-button
                v-if="tabindex == 0"
                variant="success"
                :disabled="isDisabled === true"
                @click="Next"
              >
                <b-spinner small v-if="SaveLoading"></b-spinner>
                {{ $t("next")
                }}<arrow-right-icon class="icon-xs"></arrow-right-icon>
              </b-button>
              <b-button
                v-if="tabindex == 1 && Application.currentPriorityTypeId != 1"
                variant="success"
                :disabled="isDisabled === true"
                @click="Next"
              >
                <b-spinner small v-if="SaveLoading"></b-spinner>
                {{ $t("next")
                }}<arrow-right-icon class="icon-xs"></arrow-right-icon>
              </b-button>
              <b-button
                v-if="tabindex == 1 && Application.currentPriorityTypeId == 1"
                variant="success"
                :disabled="isDisabled === true"
                @click="SaveData"
              >
                <b-spinner small v-if="SaveLoading"></b-spinner>
                {{ $t("send") }}
              </b-button>
              <b-button
                v-if="tabindex == 2"
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
  </div>
</template>
  
<script>
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
import {
  CheckCircleIcon,
  XCircleIcon,
  ArrowRightIcon,
  HelpCircleIcon,
  SearchIcon,
} from "vue-feather-icons";
import CustomSelect from "./components/CustomSelect.vue";
import CustomInput from "./components/CustomInput.vue";
import CustomDatePicker from "./components/CustomDatepicker.vue";
import CustomLabel from "./components/CustomLabel.vue";
import MyStudentResidenceApplicationService from "../services/mystudentresidenceapplication.service";
import ManualService from "../services/manual.service";
import ContractorService from "../services/contractor.service";
import ContractPriceCalcService from "../services/contractpricecalc.service";
export default {
  components: {
    BIconPlus,
    CustomSelect,
    CustomInput,
    CustomDatePicker,
    CustomLabel,
    BIconPaperclip,
    BIconTrash,
    BIconCheck2Circle,
    BIconChevronLeft,
    BIconX,
    BIconExclamationTriangleFill,
    BIconCheckCircleFill,
    XCircleIcon,
    CheckCircleIcon,
    ArrowRightIcon,
    HelpCircleIcon,
    SearchIcon,
  },
  data() {
    return {
      Application: {},
      tabindex: 0,
      SaveLoading: false,
      isCreateApplicantion: false,
      isDisabled: false,
      SearchLoading: false,
      PrivilegeList: [],
      StudentPinfl: {
        pinfl: "",
      },
      PrioritiesList :[],
      PrivilageList: [],
      PrivilegeList2: [],
      PrivilegeList1: [],
      Loading: false,
      lang: localStorage.getItem("locale"),
      SendId: 0,
      ContractPercent: 0,
      SendModalOpen: false,
    };
  },
  created() {
    this.Loading = true;
    ManualService.ApplicationTypeSelectList().then((res) => {
      this.ApplicationList = res.data;
    });
    ManualService.ContractSideTypeSelectList().then((res) => {
      this.ContractSideTypeList = res.data;
    });
    MyStudentResidenceApplicationService.Get(this.$route.params.id)
      .then((res) => {
        this.Application = res.data;
        this.PrivilegeList = res.data.privileges;
        this.PrioritiesList = res.data.priorities
        this.PrivilegeList1 = this.PrivilegeList.slice(0, 7);
        this.PrivilegeList2 = this.PrivilegeList.slice(7, 13);
        this.Loading = false;
      })
      .catch((error) => {
        if (error.response.data.status == 500) {
          this.makeToast(this.$t("errormessage500"), "error");
        } else {
          this.makeToast(error.response.data, "error");
        }
      });
    this.Loading = false;
  },
  methods: {
    BindValue(value) {
      this.Application.dateofbirth = value;
    },
    Next() {
      if (this.tabindex == 0) {
        if (!this.checkNextPage()) {
          return false;
        }
        this.tabindex = 1;
      } else if (this.tabindex == 1) {
        this.tabindex = 2;
      } else {
        this.tabindex = 3;
      }
    },
    Back() {
      if (this.tabindex == 0) {
        this.$router.push({ name: "TTJApplication" });
      } else if (this.tabindex == 1) {
        this.tabindex = 0;
      } else if (this.tabindex == 2) {
        this.tabindex = 1;
      } else {
        this.$router.push({ name: "TTJApplication" });
      }
    },
    checkNextPage() {
      if (this.Application.eduTypeId != 1) {
        this.makeToast(this.$t("eduTypeNotCorrect"), "error");
        return false;
      }
      if (this.Application.eduLevelId != 1) {
        this.makeToast(this.$t("eduLevelNotCorrect"), "error");
        return false;
      }
      return true;
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
      // if (!this.check()) {
      //   return false;
      // }
      this.SaveLoading = true;
      this.isDisabled = true;
      MyStudentResidenceApplicationService.Update(this.Application)
        .then((res1) => {
          this.SaveLoading = false;
          this.$router.push({
            name: "TTJApplication",
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
.mainCardSuccess {
  display: flex;
  padding: 11px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: #f6ffed;
}
.mainCardDanger {
  display: flex;
  padding: 11px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: #fff1f0;
}
.mainCard {
  display: flex;
  padding: 11px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: #fff;
}
.mainDiv {
  justify-content: space-between;
  background: #fff;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  padding: 11px;
  align-items: flex-start;
}
.div2 {
  padding: 0.75rem 1.25rem;
}

.iconClass {
  font-size: 16px;
}
.pClass {
  color: rgba(0, 0, 0, 0.65);

  /* Base/Base Normal */
  font-family: SF Pro Text;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
}
.span1Class {
  color: rgba(0, 0, 0, 0.88);
  /* Base/Base Normal */
  font-family: SF Pro Text;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}
.spanClass {
  color: rgba(0, 0, 0, 0.88);
  /* XL/XL Strong */
  font-family: SF Pro Text;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
}
.span2Class {
  color: rgba(0, 0, 0, 0.65);
  /* XL/XL Strong */
  font-family: SF Pro Text;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
}
.spanSuccessClass {
  color: #52C41A;
  /* XL/XL Strong */
  font-family: SF Pro Text;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
}
</style>
  