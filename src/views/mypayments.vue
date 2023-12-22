<template>
  <div class="my-info">
    <b-overlay :show="Loading" style="min-height: calc(100vh - 460px)">
      <div class="mainApplication">
        <b-row>
          <b-col sm="12" lg="6">
            <h4>
              {{ $t("PaymentDetails") }}
            </h4>
          </b-col>
          <b-col sm="12" lg="6" class="text-right"> </b-col>
        </b-row>

          <div class="edu-info" style="width: 100%;">
            <b-list-group v-for="(item, index) in MyPayments"
            :key="index" v-show="MyPayments.length > 0" style="border: 2px solid rgba(0, 0, 0, 0.06); margin: 15px 0; border-radius: 8px;">
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("docnumber") }}:</span>
                <span class="edu-name"><b>{{ item.docNumber }}</b></span>
              </b-list-group-item>
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("docdate") }}:</span>
                <span class="edu-name"><b>{{ item.docDate }}</b></span>
              </b-list-group-item>
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("sum") }}:</span>
                <span class="status-name-success"><b>{{ $options.filters.currency(item.amount, { symbol: "", fractionCount: 2 }) }}{{ $t("summa") }}</b></span>
              </b-list-group-item>
              <b-collapse
                :id="'collapse' + index"
                accordion="my-accordion"
                role="tabpanel"
                class="mb-3"
              >
                <div id="element" class="more-btn-text">
                  <b-list-group-item class="edu-list-group">
                    <span class="edu-title">{{ $t("AccountCode") }}:</span>
                    <span class="edu-name"><b>{{ item.organizationAccountCode }}</b></span>
                  </b-list-group-item>
                  <b-list-group-item class="edu-list-group">
                    <span class="edu-title">{{ $t("fio") }}:</span>
                    <span class="edu-name"><b>{{ item.studentName }}</b></span>
                  </b-list-group-item>
                  <b-list-group-item class="edu-list-group">
                    <span class="edu-title">{{ $t("organization") }}:</span>
                    <span class="edu-name"><b>{{ item.organizationName }}</b></span>
                  </b-list-group-item>
                  <b-list-group-item class="edu-list-group">
                    <span class="edu-title">{{ $t("faculty") }}:</span>
                    <span class="edu-name"><b>{{ item.facultyName }}</b></span>
                  </b-list-group-item>
                  <b-list-group-item class="edu-list-group">
                    <span class="edu-title">{{ $t("speciality") }}:</span>
                    <span class="edu-name"><b>{{ item.specialityName }}</b></span>
                  </b-list-group-item>
                  <b-list-group-item class="edu-list-group">
                    <span class="edu-title">{{ $t("Detail") }}</span>
                    <span class="edu-name"><b>{{ item.detail }}</b></span>
                  </b-list-group-item>
                </div>
              </b-collapse>
              <p v-b-toggle="'collapse' + index" class="more-text text-right mt-3 mb-3 mr-3">
                Batafsil
                <b-icon-chevron-down class="chevron-down" />
                <b-icon-chevron-up class="chevron-up" />
              </p>
              <!-- <b-button @click="MoreDetailInfoHide" v-if="MoreDetailInfoShow">
                Batafsil
                <b-icon icon="chevron-up"></b-icon>
              </b-button> -->
            </b-list-group>
          </div>

        <!-- <b-row>
          <b-col
            class="mt-3"
            sm="12"
            md="12"
            v-for="(item, index) in MyPayments"
            :key="index"
            v-show="MyPayments.length > 0"
          >
            <div class="pricing-box rounded px-4 pt-4 pb-2">
              <b-row class="mt-2">
                <b-col sm="12">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button
                        block
                        v-b-toggle="'collapse' + index"
                        variant="outline-primary"
                        class="text-left"
                      >
                        <b-row>
                          <b-col sm="4">
                            <p class="my-4 font-size-15 text-center">
                              {{ $t("docnumber") }} : {{ item.docNumber }}
                            </p>
                          </b-col>
                          <b-col sm="4">
                            <p class="my-4 font-size-15 text-center">
                              {{ $t("docdate") }} : {{ item.docDate }}
                            </p>
                          </b-col>
                          <b-col sm="4">
                            <p class="my-4 font-size-15 text-center">
                              {{ $t("sum") }} :
                              <b-badge
                                style="cursor: pointer"
                                variant="success"
                                class="btn-soft-primary pr-btn text-right"
                                size="sm"
                              >
                                {{
                                  $options.filters.currency(item.amount, {
                                    symbol: "",
                                    fractionCount: 2,
                                  })
                                }}{{ $t("summa") }}
                              </b-badge>
                            </p>
                          </b-col>
                        </b-row>
                      </b-button>
                    </b-card-header>
                    <b-collapse
                      :id="'collapse' + index"
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <b-row>
                          <b-col sm="6">
                            <p class="my-2 font-size-15 text-left">
                              {{ $t("AccountCode") }} :
                              {{ item.organizationAccountCode }}
                            </p>
                          </b-col>
                          <b-col sm="6">
                            <p class="my-2 font-size-15 text-left">
                              {{ $t("fio") }} : {{ item.studentName }}
                            </p>
                          </b-col>
                        </b-row>
                        <b-row class="mt-2">
                          <b-col sm="6">
                            <p class="my-4 font-size-15 text-left">
                              {{ $t("organization") }} :
                              {{ item.organizationName }}
                            </p>
                          </b-col>
                          <b-col sm="6">
                            <p class="my-2 font-size-15 text-left">
                              {{ $t("faculty") }} : {{ item.facultyName }}
                            </p>
                          </b-col>
                          <b-col sm="2">
                            <p class="my-4 font-size-15 text-left">
                              {{ $t("speciality") }} :
                            </p>
                          </b-col>
                          <b-col sm="10">
                            <p class="my-4 font-size-15 text-left">
                              {{ item.specialityName }}
                            </p>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col sm="2">
                            <p class="my-4 font-size-15 text-left">
                              {{ $t("Detail") }} :
                            </p>
                          </b-col>
                          <b-col>
                            <p class="my-4 font-size-15 text-left">
                              {{ item.detail }}
                            </p>
                          </b-col>
                        </b-row>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </b-col>
              </b-row>
            </div>
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
                  <b-row>
                    <b-col>
                      <h5>Izoh</h5>
                    </b-col>
                  </b-row>
                  <hr />
                  <b-row class="p-0">
                    <b-col>
                      <p class="p-0 m-0">
                        {{ histories }}
                      </p>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-sidebar>
          </b-col>
        </b-row> -->
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
  BIconChevronDown,
  BIconChevronUp
} from "bootstrap-vue";
import MyPaymentsService from "../services/mypayments.service";
import CustomInput from "./components/CustomInput.vue";
import FileManageService from "../services/filemanage.service";
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
    BIconCloudDownload,
    BIconChevronLeft,
    BIconClockHistory,
    BIconCheckCircle,
    BIconChevronDown,
    BIconChevronUp
  },
  data() {
    return {
      lang: localStorage.getItem("locale") || "uz_latn",
      MyPayments: [],
      DeleteLoading: false,
      filter: {
        id: 0,
        message: "",
      },
      SendLoading: false,
      CancelLoading: false,
      AcceptLoading: false,
      Loading: false,
      historySidebar: false,
      hiddenPartVisible: false,
      History: [],
      histories: "",
      downloadloading: false,
      AdoptPermisConclusion: {
        docnumber: "",
        docdate: "",
        commenttext: "",
        projectfiletext: "",
      },
      dataFilter: {
        paymentTypeId: 1,
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
    MoreDetailInfoShow() {
      this.hiddenPartVisible = !this.hiddenPartVisible
    },

    getColor(item) {
      if (
        item.statusId == 24 ||
        item.statusId == 21 ||
        item.statusId == 15 ||
        item.statusId == 8 ||
        item.statusId == 10
      ) {
        return "danger";
      }
      if (item.statusId == 12 || item.statusId == 2) {
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
    Refresh() {
      this.Loading = true;
      MyPaymentsService.GetList(this.dataFilter)
        .then((res) => {
          this.MyPayments = res.data.rows;
          this.Loading = false;
          if (this.MyPayments.length === 0) {
            this.$router.push({ name: "MyInfo" });
            this.makeToast(this.$t("MyPaymentsNotInfo"), "error");
          }
        })
        .catch((error) => {
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
          this.Loading = false;
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
}
.more-text {
  color: #1677FF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}
.not-collapsed {
  .chevron-down {
    display: none;
  }
}
.collapsed {
  .chevron-up {
    display: none;
  }
}
</style>
