<template>
  <div>
    <b-overlay :show="Loading" style="min-height: calc(100vh - 460px)">
      <div class="mainApplication">
        <b-row>
          <b-col sm="12" lg="6">
            <h4>
              {{ $t("PaymentSchedule") }}
            </h4>
          </b-col>
        </b-row>
        <b-row class="payment-table" style="margin: 0;">
          <b-col sm="12" lg="6">
            <h2 class="all-price">{{ $options.filters.currency(PaymentPlans.contractDebetAmount, { symbol: "", fractionCount: 2 }) }}{{ $t("summa") }}</h2>
            <span class="price-title">{{ $t("contractPrice") }}</span>
          </b-col>
          <b-col sm="12" lg="3">
            <p class="status-name-success mb-1">{{ $options.filters.currency(PaymentPlans.paidCreditAmount,{ symbol: "", fractionCount: 2 }) }}{{ $t("summa") }}</p>
            <span class="price-title">{{ $t("totalPaidAmount") }}</span>
          </b-col>
          <b-col sm="12" lg="3" v-if="!!PaymentPlans.endRestDebetAmount && PaymentPlans.endRestDebetAmount != 0">
            <p class="status-name-warning mb-1">{{ $options.filters.currency(PaymentPlans.endRestDebetAmount,{ symbol: "", fractionCount: 2 }) }}{{ $t("summa") }}</p>
            <span class="price-title">{{ $t("totalUnpaidAmount") }}</span>
          </b-col>
          <b-col sm="12" lg="3" v-if="!!PaymentPlans.endRestCreditAmount && PaymentPlans.endRestCreditAmount != 0">
            <p class="status-name-warning mb-1">{{ $options.filters.currency(PaymentPlans.endRestCreditAmount,{ symbol: "", fractionCount: 2 }) }}{{ $t("summa") }}</p>
            <span class="price-title">{{ $t("endRestCreditAmount") }}</span>
          </b-col>
          <b-col sm="12" lg="6" v-if="PaymentPlans.beginRestCreditAmount != 0 || PaymentPlans.beginRestDebetAmount != 0" class="mt-2">
            <p class="status-name-danger mb-1" v-if="PaymentPlans.beginRestDebetAmount != 0">{{ $options.filters.currency(PaymentPlans.beginRestDebetAmount,{symbol: "", fractionCount: 2 }) }}{{ $t("summa") }}</p>
            <span class="price-title" v-if="PaymentPlans.beginRestDebetAmount != 0">{{ $t("creditAccount") }}</span>

            <p class="status-name-warning mb-1" v-if="PaymentPlans.beginRestCreditAmount != 0">{{ $options.filters.currency( PaymentPlans.beginRestCreditAmount, {symbol: "", fractionCount: 2 }) }}{{ $t("summa") }}</p>
            <span class="price-title" v-if="PaymentPlans.beginRestCreditAmount != 0">{{ $t("debitAccount") }}</span>
          </b-col>
        </b-row>
        <b-row style="margin: 0 15px; width: 100%;">
          <b-row v-for="(item, index) in MyPaymentPlan"
            :key="index"
            v-show="MyPaymentPlan.length > 0" class="payment-archive">
            <b-col style="width: 50px; flex-grow: 0;">
              <div class="payment-id">{{ index + 1 }}</div>
            </b-col>
            <b-col lg="3" sm="4">
              <span class="price-title">{{ $t("dedline") }}:</span>
              <p class="price-summ"><b>{{ item.dedline }}</b></p>
            </b-col>
            <b-col lg="2" sm="4">
              <span class="price-title">{{ $t("sum") }}:</span>
              <p class="price-summ"><b>{{ $options.filters.currency(item.amount, { symbol: "", fractionCount: 2 }) }} {{ $t("summa") }}</b></p>
            </b-col>
            <b-col lg="2" sm="4">
              <span class="price-title">{{ $t("amountInPlan") }}:</span>
              <p class="price-summ"><b>{{ $options.filters.currency(item.amountInPlan, { symbol: "", fractionCount: 2 }) }} {{ $t("summa") }}</b></p>
            </b-col>
            <b-col lg="2" sm="4">
              <span class="price-title">{{ $t("paidAmount") }}:</span>
              <p class="status-name-success"><b>{{ $options.filters.currency(item.paidAmountInCurrenctDeadline,{symbol: "",fractionCount: 2 }) }} {{ $t("summa") }}</b></p>
            </b-col>
            <b-col lg="2" sm="4">
              <span class="price-title">{{ $t("unpaidAmount") }}:</span>
              <p class="status-name-danger"><b>{{ $options.filters.currency(item.unpaidAmount, {symbol: "",fractionCount: 2 }) }} {{ $t("summa") }}</b></p>
            </b-col>
          </b-row>
        </b-row>
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
              height:800px;
                width: 100% !important;
                position: relative;
                overflow-y: auto;
              "
            >
              <b-row class="w-100">
                <b-col class="text-right close-icon">
                  <!-- <b-img @click="isOpenSidebar = false" src="/images/design/close.svg" /> -->
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
                    <li v-for="(el, i) in paymenthistory" :key="i">
                      <b-row class="p-0">
                        <b-col class="float-left">
                          <b-row class="p-0">
                            <b-col class="float-left">
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  flex-sm-row flex-column
                                  mb-sm-0 mb-1
                                "
                              >
                                <h6>{{ el.studentName }}</h6>
                                <!-- <small class="timeline-item-time text-nowrap text-muted ml-1">{{ item.dateofcreated }}</small> -->
                              </div>
                              <p>
                                <b-badge :variant="getColor(el)">{{
                                  el.docDate
                                }}</b-badge>
                                -
                                <b-badge :variant="getColor(el)">
                                  {{
                                    $options.filters.currency(el.amount, {
                                      symbol: "",
                                      fractionCount: 2,
                                    })
                                  }}
                                </b-badge>
                                {{ el.message == null ? "" : "-" }}
                                {{ el.message }}
                              </p>
                              <p class="p-0 m-0">
                                {{ $t("detail") }} : {{ el.detail }}
                              </p>
                            </b-col>
                          </b-row>
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
  </div>
</template>

<script>
import Navbar from "../layouts/components/navbar.vue";
import Footer from "../layouts/components/footer.vue";
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
  BIconPrinter,
} from "bootstrap-vue";
import MyPaymentPlanService from "../services/mypaymentplan.service";
import CustomInput from "./components/CustomInput.vue";
import FileManageService from "../services/filemanage.service";
export default {
  components: {
    Navbar,
    BIconPlus,
    Footer,
    BIconPencil,
    BIconTrash,
    BIconXCircle,
    BIconCursor,
    CustomInput,
    BIconX,
    BIconEye,
    BIconCloudDownload,
    BIconChevronLeft,
    BIconClockHistory,
    BIconCheckCircle,
    BIconPrinter,
  },
  data() {
    return {
      lang: localStorage.getItem("locale") || "uz_latn",
      MyPaymentPlan: [],
      DeleteLoading: false,
      filter: {
        id: 0,
        message: "",
      },
      AcceptLoading: false,
      RejectLoading: false,
      downloadloading: false,
      AcceptLoading: false,
      Loading: false,
      historySidebar: false,
      History: [],
      paymenthistory: [],
      PaymentPlans: {},
      AdoptPermisConclusion: {
        docnumber: "",
        docdate: "",
        commenttext: "",
        projectfiletext: "",
      },
      dataFilter: {
        statusIds: [],
        // fromDocDate: "2022-03-24T06:19:14.058Z",
        // toDocDate: "2022-03-24T06:19:14.058Z",
        fromDocDate: "",
        toDocDate: "",
        eduYearId: 0,
        filters: {
          additionalProp1: {
            value: null,
            matchMode: null,
          },
          additionalProp2: {
            value: null,
            matchMode: null,
          },
          additionalProp3: {
            value: null,
            matchMode: null,
          },
        },
        search: null,
        sortBy: null,
        orderType: null,
        page: 1,
        pageSize: 20,
      },
    };
  },
  created() {
    this.Refresh();
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
    getColor(item) {
      if (
        item.statusId == 24 ||
        item.statusId == 21 ||
        item.statusId == 15 ||
        item.statusId == 8
      ) {
        return "danger";
      }
      if (item.statusId == 12) {
        return "warning";
      } else {
        return "success";
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
    OpenHistory(item) {
      this.paymenthistory = [];
      this.paymenthistory = item.paymentHistory;
      if (item.paymentHistory.length > 0) {
        this.historySidebar = true;
      } else {
        this.makeToast(this.$t("notpaymenthistory"), "error");
      }
    },
    Refresh() {
      this.Loading = true;
      MyPaymentPlanService.Get()
        .then((res) => {
          this.MyPaymentPlan = res.data.items;
          this.PaymentPlans = res.data;
          this.Loading = false;
        })
        .catch((error) => {
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
          this.Loading = false;
          this.$router.push({ name: "MyInfo" });
        });
    },
    forceFileDownload(response, name) {
      var headers = response.headers;
      var blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", name + ".xlsx"); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
    PrintPaymentPlan() {
      this.downloadloading = true;
      MyPaymentPlanService.GetReconciliationAct()
        .then((res) => {
          this.downloadloading = false;
          this.forceFileDownload(res, "ReconciliationAct");
        })
        .catch((error) => {
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.downloadloading = false;
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.downloadloading = false;
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
  .boxCard {
    position: relative;
    width: 100%;
    padding-right: 123px;
    padding-left: 115px;
  }
}
</style>
