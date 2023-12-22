<template>
  <div class="my-info">
    <b-overlay :show="Loading" style="min-height: calc(100vh - 460px)">
      <div style="margin-top: 200px">
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
            </b-list-group>
          </div>
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
        paymentTypeId: 2,
        statusIds: [],
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
