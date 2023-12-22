<template>
  <div class="my-info">
    <b-overlay :show="Loading" style="min-height: calc(100vh - 460px)">
      <div class="mainApplication">
        <b-row>
          <b-col sm="12" md="7" lg="7">
            <h4 class="text-center">{{ $t("To‘lov shartnoma") }}</h4>
          </b-col>
          <b-col class="text-right ">
            <div class="text-right ">
              <b-button-group
                @click="Refresh"
                size="sm"
                class="sport-group-btn"
              >
                <b-button
                  @click="dataFilter.currentEduYear = false"
                  :variant="
                    dataFilter.currentEduYear == false
                      ? 'primary'
                      : 'outline-primary'
                  "
                >
                  {{ $t("2022-2023") }}
                </b-button>
                <b-button
                  @click="dataFilter.currentEduYear = true"
                  :variant="
                    dataFilter.currentEduYear == true
                      ? 'primary'
                      : 'outline-primary'
                  "
                >
                  {{ $t("2023-2024") }}
                </b-button>
              </b-button-group>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <div class="edu-info">
            <b-list-group
              v-for="(item, index) in MyContractInvoice"
              :key="index"
              v-show="MyContractInvoice.length > 0"
              class="application_list"
            >
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("fio") }}:</span>
                <span class="edu-name"
                  ><b>{{ item.person }}</b></span
                >
              </b-list-group-item>
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("documentnumber") }}:</span>
                <span class="edu-name"
                  ><b>{{ item.docNumber }}</b></span
                >
              </b-list-group-item>
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("docdate1") }}:</span>
                <span class="edu-name"
                  ><b>{{ item.docDate }}</b></span
                >
              </b-list-group-item>
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("edutype") }}:</span>
                <span class="edu-name"
                  ><b>{{ item.eduType }}</b></span
                >
              </b-list-group-item>
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("speciality") }}:</span>
                <span class="edu-name"
                  ><b>{{ item.speciality }}</b></span
                >
              </b-list-group-item>
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("generalorganization") }}:</span>
                <span class="edu-name"
                  ><b>{{ item.organization }}</b></span
                >
              </b-list-group-item>
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("status") }}:</span>
                <span class="">
                  <div class="">
                    <b-badge
                      style="cursor: pointer"
                      @click="OpenHistory(item)"
                      :class="getColor(item)"
                      size="sm"
                    >
                      {{ item.status }}
                    </b-badge>
                  </div>
                </span>
              </b-list-group-item>
              <hr class="line" />
              <div class="d-flex mb-3 justify-content-end mr-3">
                <!-- <a
                  class="edit-contract-btn ml-3"
                  style="cursor: pointer"
                  @click="
                    $router.push({
                      name: 'ViewContractInvoice',
                      params: { id: item.id },
                    })
                  "
                >
                  <b-icon-eye style="color:#1677FF" scale="0.8"></b-icon-eye>
                  <span class="text" style="margin-top:3px">Ko'rish</span>
                </a> -->
                <a
                  @click="changeDate()"
                  :href="
                    axios.defaults.baseURL +
                      `MyContractInvoice/PrintContractPdf/${item.id2}?PersentTime=${PersentTime}`
                  "
                  target="_blank"
                  class="edit-contract-btn ml-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M11.9993 10V12H3.99935V10H2.66602V12C2.66602 12.7334 3.26602 13.3334 3.99935 13.3334H11.9993C12.7327 13.3334 13.3327 12.7334 13.3327 12V10H11.9993ZM11.3327 7.33335L10.3927 6.39335L8.66602 8.11335V2.66669H7.33268V8.11335L5.60602 6.39335L4.66602 7.33335L7.99935 10.6667L11.3327 7.33335Z"
                      fill="#1677FF"
                    />
                  </svg>
                  <span class="text">Yuklash</span>
                </a>
                <a
                  @click="$bvModal.show('InvoiceModal' + item.id)"
                  class="edit-contract-btn ml-3"
                >
                  <b-icon-cloud-download style="color:#1677FF" scale="0.8"></b-icon-cloud-download>
                  {{ $t("invoice") }}
                </a>
                <a
                  v-if="!item.cancelRequest"
                  @click="OpenCancelModal(item)"
                  class="edit-contract-btn ml-3"
                >
                  <b-icon-x-circle style="color:#1677FF" scale="0.8"></b-icon-x-circle>
                  {{ $t("cancelinvoice") }}
                </a>
              </div>
              <b-modal
                :id="'InvoiceModal' + item.id"
                :title="$t('invoice')"
                no-close-on-backdrop
                hide-footer
              >
                <b-row>
                  <b-col sm="12" md="12" lg="12">
                    <custom-number-input
                      :style="
                        ContractInvoice.amount == '' ||
                        ContractInvoice.amount == 0 ||
                        ContractInvoice.amount == null ||
                        ContractInvoice.amount == undefined
                          ? 'color:#F43958;font-weight:bold'
                          : ''
                      "
                      @input="changeAmount(item)"
                      :label="$t('infoamount')"
                      v-model="ContractInvoice.amount"
                      :placeholder="$t('amount')"
                    ></custom-number-input>
                  </b-col>
                </b-row>
                <b-row class="mt-2">
                  <b-col class="text-right">
                    <a
                      @click="$bvModal.hide('InvoiceModal' + item.id)"
                      class="btn btn-sm btn-success mr-2 pr-btn"
                    >
                      {{ $t("no") }}
                    </a>
                    <a
                      @click="Invoice(item)"
                      class="btn btn-sm btn-success pr-btn"
                    >
                      <b-spinner v-if="InvoiceLoading" small></b-spinner>
                      {{ $t("yes") }}
                    </a>
                  </b-col>
                </b-row>
              </b-modal>
              <b-modal
                :id="'CancelModal' + item.id"
                :title="$t('cancelinvoice')"
                no-close-on-backdrop
                hide-footer
              >
                <p>
                  {{ $t("WantCancelInvoice") }}
                </p>
                <b-row>
                  <b-col>
                    <custom-input
                    :style="
                        filter.cancelRequestMessage == '' ||
                        filter.cancelRequestMessage == 0 ||
                        filter.cancelRequestMessage == null ||
                        filter.cancelRequestMessage == undefined
                          ? 'color:#F43958;font-weight:bold'
                          : ''
                      "
                      :label="$t('EnterCancelling')"
                      placeholder="1234"
                      v-model="filter.cancelRequestMessage"
                    ></custom-input>
                  </b-col>
                </b-row>
                <b-row class="mt-2">
                  <b-col class="text-right">
                    <a
                      @click="$bvModal.hide('CancelModal' + item.id)"
                      class="btn btn-sm btn-success mr-2 pr-btn"
                    >
                      {{ $t("no") }}
                    </a>
                    <a
                      @click="Cancel(item)"
                      class="btn btn-sm btn-success pr-btn"
                    >
                      <b-spinner v-if="CancelLoading" small></b-spinner>
                      {{ $t("yes") }}
                    </a>
                  </b-col>
                </b-row>
              </b-modal>
            </b-list-group>
          </div>
        </b-row>
        <!-- <b-row>
          <b-col
            class="mt-3"
            sm="12"
            md="6"
            v-for="(item, index) in MyContractInvoice"
            :key="index"
          >
            <div class="pricing-box rounded px-4 pt-4 pb-2">
              <b-row>
                <b-col sm="12">
                  <p v-if="item.cancelRequest" style="color:red">
                    *{{ $t("infobillinginvoice") }}
                  </p>
                  <table class="my-table-padding">
                    <tr>
                      <td style="width: 40%">{{ $t("fio") }} :</td>
                      <th style="width: 60%">{{ item.person }}</th>
                    </tr>
                    <tr>
                      <td style="width: 40%">{{ $t("docnumber") }} :</td>
                      <th style="width: 60%">{{ item.docNumber }}</th>
                    </tr>
                    <tr class="py-3">
                      <td style="width: 40%">{{ $t("docdate") }} :</td>
                      <th style="width: 60%">{{ item.docDate }}</th>
                    </tr>
                    <tr class="my-1">
                      <td style="width: 40%">{{ $t("addmissionType") }} :</td>
                      <th style="width: 60%">
                        {{ item.addmissionType }}
                      </th>
                    </tr>
                    <tr class="my-1">
                      <td style="width: 40%">{{ $t("eduType") }} :</td>
                      <th style="width: 60%">
                        {{ item.eduType }}
                      </th>
                    </tr>
                    <tr class="my-1">
                      <td style="width: 40%">{{ $t("speciality") }} :</td>
                      <th style="width: 60%">
                        {{ item.speciality }}
                      </th>
                    </tr>
                    <tr>
                      <td class="pr-btn" style="width: 40%">
                        {{ $t("orgname") }} :
                      </td>
                      <th style="width: 60%">{{ item.organization }}</th>
                    </tr>
                    <tr>
                      <td class="pr-btn" style="width: 40%">
                        {{ $t("status") }} :
                      </td>
                      <th style="width: 60%">
                        <b-badge
                          :class="getColor(item)"
                          class="btn-soft-primary pr-btn"
                          size="sm"
                        >
                          {{ item.status }}
                        </b-badge>
                      </th>
                    </tr>
                    <tr v-if="item.CanSearchChild">
                      <td class="pr-btn" style="width: 40%">
                        {{ $t("FilterChild") }} :
                      </td>
                      <th
                        class="pr-btn"
                        @click="$router.push({ name: 'ChooseChild' })"
                        style="
                          cursor: pointer !important;
                          text-decoration: underline;
                        "
                      >
                        <a style="cursor: pointer !important" href="#">
                          {{ $t("searchinlist") }}
                        </a>
                      </th>
                    </tr>
                  </table>
                </b-col>
              </b-row>
              <b-row class="mt-2">
                <b-col sm="12" md="12">
                  <a
                    @click="changeDate()"
                    :href="
                      axios.defaults.baseURL +
                        `MyContractInvoice/PrintContractPdf/${item.id2}?PersentTime=${PersentTime}`
                    "
                    target="_blank"
                    class="
                      btn btn-sm btn-soft-primary
                      mr-2
                      mt-2
                      pr-btn
                      ContractTextTableView
                    "
                  >
                    <b-icon-cloud-download scale="0.8"></b-icon-cloud-download>
                    {{ $t("downloadfile") }}
                  </a>
                  <a
                    @click="$bvModal.show('InvoiceModal' + item.id)"
                    class="
                      btn btn-sm btn-soft-primary
                      mr-2
                      mt-2
                      pr-btn
                      ContractTextTableView
                    "
                  >
                    <b-icon-cloud-download scale="0.8"></b-icon-cloud-download>
                    {{ $t("invoice") }}
                  </a>
                  <a
                    v-if="!item.cancelRequest"
                    style="width: 50%"
                    @click="OpenCancelModal(item)"
                    class="btn btn-sm btn-soft-danger mr-2 mt-2 pr-btn myButton"
                  >
                    <b-icon-x-circle scale="0.8"></b-icon-x-circle>
                    {{ $t("cancelinvoice") }}
                  </a>
                </b-col>
              </b-row>
              <b-modal
                :id="'InvoiceModal' + item.id"
                :title="$t('invoice')"
                no-close-on-backdrop
                hide-footer
              >
                <b-row>
                  <b-col sm="12" md="12" lg="12">
                    <custom-number-input
                      :style="
                        ContractInvoice.amount == '' ||
                        ContractInvoice.amount == 0 ||
                        ContractInvoice.amount == null ||
                        ContractInvoice.amount == undefined
                          ? 'color:#F43958;font-weight:bold'
                          : ''
                      "
                      @input="changeAmount(item)"
                      :label="$t('infoamount')"
                      v-model="ContractInvoice.amount"
                      :placeholder="$t('amount')"
                    ></custom-number-input>
                  </b-col>
                </b-row>
                <b-row class="mt-2">
                  <b-col class="text-right">
                    <a
                      @click="$bvModal.hide('InvoiceModal' + item.id)"
                      class="btn btn-sm btn-soft-danger mr-2 pr-btn"
                    >
                      {{ $t("no") }}
                    </a>
                    <a
                      @click="Invoice(item)"
                      class="btn btn-sm btn-success pr-btn"
                    >
                      <b-spinner v-if="InvoiceLoading" small></b-spinner>
                      {{ $t("yes") }}
                    </a>
                  </b-col>
                </b-row>
              </b-modal>
              <b-modal
                :id="'CancelModal' + item.id"
                :title="$t('cancelinvoice')"
                no-close-on-backdrop
                hide-footer
              >
                <p>
                  {{ $t("WantCancelInvoice") }}
                </p>
                <b-row>
                  <b-col>
                    <custom-input
                      :style="
                        filter.cancelRequestMessage == '' ||
                        filter.cancelRequestMessage == 0 ||
                        filter.cancelRequestMessage == null ||
                        filter.cancelRequestMessage == undefined
                          ? 'color:#F43958;font-weight:bold'
                          : ''
                      "
                      :label="$t('EnterCancelling')"
                      placeholder="1234"
                      v-model="filter.cancelRequestMessage"
                    ></custom-input>
                  </b-col>
                </b-row>
                <b-row class="mt-2">
                  <b-col class="text-right">
                    <a
                      @click="$bvModal.hide('CancelModal' + item.id)"
                      class="btn btn-sm btn-soft-danger mr-2 pr-btn"
                    >
                      {{ $t("no") }}
                    </a>
                    <a
                      @click="Cancel(item)"
                      class="btn btn-sm btn-success pr-btn"
                    >
                      <b-spinner v-if="CancelLoading" small></b-spinner>
                      {{ $t("yes") }}
                    </a>
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
        </b-row> -->
        <b-sidebar
          no-header
          width="400px"
          shadow
          right
          v-model="historySidebar"
          bg-variant="white"
        >
          <div style="width: 100%; height: 100%">
            <div
              class="container-fluid w-100"
              style="
                width: 100% !important;
                position: relative;
                overflow-y: auto;
              "
            >
              <b-row class="w-100">
                <b-col class="text-right close-icon">
                  <b-icon-x
                    scale="2.5"
                    style="cursor: pointer; z-index: 9"
                    @click="historySidebar = false"
                  ></b-icon-x>
                </b-col>
              </b-row>
              <b-row class="p-0">
                <b-col>
                  <ul class="timeline">
                    <li v-for="(el, i) in History" :key="i">
                      <b-row class="p-0">
                        <b-col class="float-left">
                          <p class="p-0 m-0 d-flex" style="white-space: nowrap">
                            <b-badge
                              :variant="getColor(el)"
                              style="margin-left: 2px"
                            >
                              {{ el.statusname }}
                            </b-badge>
                          </p>
                          <p class="p-0 m-0">{{ el.dateofcreated }}</p>
                          <p v-if="el.rejectreason" class="p-0 m-0">
                            {{ el.rejectreason }}
                          </p>
                          <p v-if="el.adddata" class="p-0 m-0">
                            {{ el.adddata }}
                          </p>
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
  </div>
</template>

<script>
import {
  BIconPlus,
  BIconPencil,
  BIconTrash,
  BIconXCircle,
  BIconCursor,
  BIconX,
  BIconEye,
  BIconCloudDownload,
  BIconChevronLeft,
  BIconClockHistory,
  BIconCheckCircle,
} from "bootstrap-vue";
import MyContractInvoiceService from "../services/mycontractinvoice.service";
import CustomInput from "./components/CustomInput.vue";
import CustomNumberInput from "./components/CustomNumberInput.vue";
import axios from "axios";
import FileManageService from "../services/filemanage.service";
import CustomButton from "./components/CustomButton.vue";
export default {
  components: {
    BIconPlus,
    BIconPencil,
    BIconTrash,
    BIconXCircle,
    BIconCursor,
    CustomInput,
    BIconX,
    BIconEye,
    CustomButton,
    BIconCloudDownload,
    BIconChevronLeft,
    BIconClockHistory,
    BIconCheckCircle,
    CustomNumberInput,
  },
  data() {
    return {
      lang: localStorage.getItem("locale") || "uz_latn",
      MyContractInvoice: [],
      DeleteLoading: false,
      iscancelinvoice: false,
      filter: {
        id: 0,
        cancelRequest: false,
        cancelRequestMessage: "",
      },
      ContractInvoice: {
        amount: 0,
        id2: 0,
      },
      EducationTypeList: [
        {
          id: 1,
          shortname: this.$t("DTM"),
        },
        {
          id: 2,
          shortname: this.$t("HEMIS"),
        },
      ],
      axios,
      AcceptLoading: false,
      RejectLoading: false,
      InvoiceLoading: false,
      AcceptLoading: false,
      Loading: false,
      PersentTime: "",
      historySidebar: false,
      History: [],
      downloadloading: false,
      AdoptPermisConclusion: {
        docnumber: "",
        docdate: "",
        commenttext: "",
        projectfiletext: "",
      },
      dataFilter: {
        currentEduYear: true,
        search: null,
        sortBy: null,
        orderType: null,
        page: 1,
        pageSize: 20,
        typeId: 1,
      },
    };
  },
  created() {
    this.Refresh();
    this.changeDate();
  },
  methods: {
    DownloadFile(item) {
      this.downloadloading = true;
      FileManageService.Get(item.AdoptPermisConclusion.projectfileid)
        .then((res) => {
          this.downloadFile1(res, item.AdoptPermisConclusion);
          this.downloadloading = false;
        })
        .catch((error) => {
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
          this.downloadloading = false;
        });
    },
    forceFileDownload(response, name) {
      var headers = response.headers;
      var blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", name + ".pdf"); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
    check() {
      if (
        this.ContractInvoice.amount === 0 ||
        this.ContractInvoice.amount === null ||
        this.ContractInvoice.amount === undefined ||
        this.ContractInvoice.amount === ""
      ) {
        this.makeToast(this.$t("amountNotCorrect"), "error");
        return false;
      }
      return true;
    },
    CancelCheck() {
      if (
        this.filter.cancelRequestMessage === 0 ||
        this.filter.cancelRequestMessage === null ||
        this.filter.cancelRequestMessage === undefined ||
        this.filter.cancelRequestMessage === ""
      ) {
        this.makeToast(this.$t("messageNotCorrect"), "error");
        return false;
      }
      return true;
    },
    Invoice(item) {
      if (!this.check()) {
        return false;
      }
      this.ContractInvoice.id2 = item.id2;
      this.ContractInvoice.amount = this.ContractInvoice.amount;
      this.InvoiceLoading = true;
      MyContractInvoiceService.InvoiceExcelToPdf(
        this.ContractInvoice.id2,
        this.ContractInvoice.amount
      )
        .then((res) => {
          this.InvoiceLoading = false;
          this.forceFileDownload(res, "Hisob_varaqasi");
          this.$bvModal.hide("InvoiceModal" + item.id);
        })
        .catch((error) => {
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.InvoiceLoading = false;
            this.$bvModal.hide("InvoiceModal" + item.id);
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.InvoiceLoading = false;
            this.$bvModal.hide("InvoiceModal" + item.id);
            this.makeToast(error.response.data, "error");
          }
        });
    },
    changeInvoice() {},
    OpenCancelModal(item) {
      this.filter.id = item.id;
      this.filter.message = "";
      this.$bvModal.show("CancelModal" + item.id);
    },
    changeAmount(item) {
      if (this.ContractInvoice.amount > item.amount) {
        this.ContractInvoice.amount = 0;
        this.makeToast(this.$t("AmountNotCorrect"), "error");
        return false;
      }
    },
    Cancel() {
      if (!this.CancelCheck()) {
        return false;
      }
      this.filter.cancelRequest = true;
      MyContractInvoiceService.RequestToCancel(this.filter)
        .then((res) => {
          this.CancelLoading = false;
          this.iscancelinvoice = true;
          this.$bvModal.hide("CancelModal" + this.filter.id);
          this.Refresh();
        })
        .catch((error) => {
          this.makeToast(error.response.data, "error");
          this.$bvModal.hide("CancelModal" + this.filter.id);
          this.CancelLoading = false;
        });
    },
    getColor(item) {
      if (
        item.statusId == 24 ||
        item.statusId == 21 ||
        item.statusId == 15 ||
        item.statusId == 8
      ) {
        return "status-name-danger";
      }
      if (item.statusId == 12) {
        return "status-name-warning";
      } else {
        return "status-name-success";
      }
    },
    changeDate() {
      var DateNow = Date.now();
      this.PersentTime = DateNow;
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
    OpenHistory(item) {
      this.History = [];
      this.History = item.history;
      this.historySidebar = true;
    },
    Refresh() {
      this.Loading = true;
      MyContractInvoiceService.GetList(this.dataFilter)
        .then((res) => {
          this.MyContractInvoice = res.data.rows;
          this.Loading = false;
          if (this.MyContractInvoice.length === 0) {
            this.$router.push({ name: "MyInfo" });
            this.makeToast(this.$t("MyContractInvoiceNotInfo"), "error");
          }
        })
        .catch((error) => {
          // this.makeToast(error.response.data.errors[0], "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
          this.Loading = false;
        });
    },
    makeToast(message, type) {
      this.$toast.open({
        message: message,
        type: type,
        duration: 5000,
        dismissible: true,
      });
    },
  },
};
</script>

<style lang="scss">
.my-table-padding {
  tr {
    td,
    th {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
}
.customCenter {
  text-align: center !important;
}
</style>
