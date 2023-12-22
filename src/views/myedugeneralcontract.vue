<template>
  <div>
    <Navbar />
    <b-overlay :show="Loading" style="min-height: calc(100vh - 460px)">
      <div class="container" style="margin-top: 100px">
        <b-row>
          <b-col sm="12" lg="6">
            <h2 @click="$router.push('cabinet')"
                style="cursor: pointer" class="ContractTextView">
              <b-icon-chevron-left
              ></b-icon-chevron-left>
              {{ $t("SchetInvoice") }}
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            class="mt-3"
            sm="12"
            md="6"
            v-for="(item, index) in MyEduGeneralContract"
            :key="index"
          >
            <div class="pricing-box rounded px-4 pt-4 pb-2">
              <b-row>
                <b-col sm="12">
                  <table class="my-table-padding ContractTextTableView">
                    <tr>
                      <td style="width: 40%">
                        {{ $t("generaldocnumber1") }} :
                      </td>
                      <th style="width: 60%">{{ item.docNumber }}</th>
                    </tr>
                    <tr class="py-3">
                      <td style="width: 40%">{{ $t("docdate1") }} :</td>
                      <th style="width: 60%">{{ item.docDate }}</th>
                    </tr>
                    <tr class="my-1">
                      <td style="width: 40%">{{ $t("addmissiontype1") }} :</td>
                      <th style="width: 60%">
                        {{ item.addmissionType }}
                      </th>
                    </tr>
                    <tr>
                      <td class="pr-btn" style="width: 40%">
                        {{ $t("generalorganization") }} :
                      </td>
                      <th style="width: 60%">{{ item.organization }}</th>
                    </tr>
                    <tr class="my-1">
                      <td style="width: 40%">{{ $t("speciality1") }} :</td>
                      <th style="width: 60%">
                        {{ item.speciality }}
                      </th>
                    </tr>
                    <tr>
                      <td class="pr-btn" style="width: 40%">
                        {{ $t("status") }} :
                      </td>
                      <th style="width: 60%">
                        <b-badge
                          style="cursor: pointer"
                          @click="OpenHistory(item)"
                          :variant="getColor(item)"
                          class="btn-soft-primary pr-btn "
                          size="sm"
                        >
                          {{ item.status }}
                        </b-badge>
                      </th>
                    </tr>
                    <!-- <tr>
                                        <td class="pr-btn" style="width : 40%">{{ $t('history') }} : </td>
                                        <th class="pr-btn" @click="OpenHistory(item)" style="cursor:pointer !important;text-decoration:underline"> <a style="cursor:pointer !important" href="#"> {{ $t('see') }} </a> </th>
                                    </tr> -->
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
              <b-row class="mt-2 ">
                <b-col sm="12">
                  <!-- <a
                    @click="
                      $router.push({
                        name: 'ViewMyEduGeneralContract',
                        params: { id: item.id },
                      })
                    " -->
                  <a
                    :href="
                      axios.defaults.baseURL +
                        `report/PrintContractPdf?id=${item.id}`
                    "
                    target="_blank"
                    class="btn btn-sm btn-soft-primary mr-2 mt-2 pr-btn ContractTextTableView"
                  >
                    <b-icon-download scale="0.8"></b-icon-download>
                    {{ $t("downloadfile") }}
                  </a>
                  <!-- <a
                  v-if="item.statusId != 7"
                    @click="$bvModal.show('DeleteModal' + item.id)"
                    class="btn btn-sm btn-soft-primary mr-2 mt-2 pr-btn"
                  >
                    <b-icon-trash scale="0.8"></b-icon-trash> {{ $t("delete") }}
                  </a> -->
                  <!-- <a
                  v-if="item.statusId != 7 && item.statusId != 8"
                    @click="OpenAcceptModal(item)"
                    class="btn btn-sm btn-soft-primary mr-2 mt-2 pr-btn"
                  >
                    <b-icon-check-circle scale="0.8"></b-icon-check-circle>
                    {{ $t("accept") }}
                  </a>
                  <a
                  v-if="item.statusId != 7 && item.statusId != 8"
                    @click="OpenRejectModal(item)"
                    class="btn btn-sm btn-soft-primary mr-2 mt-2 pr-btn"
                  >
                    <b-icon-x-circle scale="0.8"></b-icon-x-circle>
                    {{ $t("cancel") }}
                  </a> -->
                  <!-- <a
                  v-if="item.canApprove"
                    @click="OpenAcceptModal(item)"
                    class="btn btn-sm btn-soft-primary mr-2 mt-2 pr-btn"
                  >
                    <b-icon-check-circle scale="0.8"></b-icon-check-circle>
                    {{ $t("accept") }}
                  </a>
                  <a
                    v-if="item.CanSearchChild"
                    @click="OpenAppModal(item)"
                    class="btn btn-sm anim-opacity btn-primary mr-2 mt-2 pr-btn"
                  >
                    <b-icon-eye scale="0.8"></b-icon-eye>
                    {{ $t("xulosanikorish") }}
                  </a> -->
                </b-col>
              </b-row>
              <b-modal
                :id="'AcceptModal' + item.id"
                :title="$t('Accept')"
                no-close-on-backdrop
                hide-footer
              >
                <b-row class="mt-3">
                  <b-col class="text-right">
                    <a
                      @click="$bvModal.hide('AcceptModal' + item.id)"
                      class="btn btn-sm btn-soft-danger mr-2 pr-btn"
                    >
                      {{ $t("no") }}
                    </a>
                    <a
                      @click="Accept(item)"
                      class="btn btn-sm btn-success pr-btn"
                    >
                      <b-spinner v-if="AcceptLoading" small></b-spinner>
                      {{ $t("yes") }}
                    </a>
                  </b-col>
                </b-row>
              </b-modal>
              <b-modal
                :id="'RejectModal' + item.id"
                :title="$t('cancel')"
                no-close-on-backdrop
                hide-footer
              >
                <b-row>
                  <b-col>
                    <custom-input
                      :label="$t('message')"
                      placeholder="1234"
                      v-model="filter.message"
                    ></custom-input>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col class="text-right">
                    <a
                      @click="$bvModal.hide('RejectModal' + item.id)"
                      class="btn btn-sm btn-soft-danger mr-2 pr-btn"
                    >
                      {{ $t("no") }}
                    </a>
                    <a
                      @click="Reject(item)"
                      class="btn btn-sm btn-success pr-btn"
                    >
                      <b-spinner v-if="RejectLoading" small></b-spinner>
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
                    <li v-for="(el, i) in History" :key="i">
                      <b-row class="p-0">
                        <b-col class="float-left">
                          <b-row class="p-0">
                            <b-col class="float-left">
                              <div
                                class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1"
                              >
                                <h6>{{ el.userInfo }}</h6>
                                <!-- <small class="timeline-item-time text-nowrap text-muted ml-1">{{ item.dateofcreated }}</small> -->
                              </div>
                              <p>
                                <b-badge :variant="getColor(el)">{{
                                  el.statusChangedDate
                                }}</b-badge>
                                -
                                <b-badge :variant="getColor(el)">
                                  {{ el.status }}
                                </b-badge>
                                {{ el.message == null ? "" : "-" }}
                                {{ el.message }}
                              </p>
                              <!-- <p class="p-0 m-0">{{ $t('reason') }} : </p> -->
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
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
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
  BIconDownload,
  BIconChevronLeft,
  BIconClockHistory,
  BIconCheckCircle,
} from "bootstrap-vue";
import MyEduGeneralContractService from "../services/myedugeneralcontract.service";
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
    BIconDownload,
    BIconX,
    BIconEye,
    BIconCloudDownload,
    BIconChevronLeft,
    BIconClockHistory,
    BIconCheckCircle,
  },
  data() {
    return {
      axios,
      lang: localStorage.getItem("locale") || "uz_latn",
      MyEduGeneralContract: [],
      DeleteLoading: false,
      filter: {
        id: 0,
        message: "",
      },
      AcceptLoading: false,
      RejectLoading: false,
      AcceptLoading: false,
      Loading: false,
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
      this.History = [];
      this.History = item.history;
      this.historySidebar = true;
    },
    OpenHistory(item) {
      MyEduGeneralContractService.Get(item.id)
        .then((res) => {
          this.histories = res.data.histories;
          this.historySidebar = true;
          this.History = [];
          this.History = this.histories;
        })
        .catch((error) => {
          // this.makeToast(error.response.data, "error");
           if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
        });
    },
    OpenRejectModal(item) {
      this.filter.id = item.id;
      this.filter.message = "";
      this.$bvModal.show("RejectModal" + item.id);
      // AdoptionPermissionService.Reject(item.id).then(res => {
      //     this.$bvModal.show('RejectModal'+item.id)
      //     this.filter.phonenumber = res.data.phoneNumber
      // }).catch(error => {
      //     this.makeToast(error.response.data,'error')
      // })
    },
    Reject(item) {
      this.RejectLoading = true;
      if (!!this.filter.message) {
        this.$bvModal.hide("RejectModal" + item.id);
        MyEduGeneralContractService.Reject(this.filter)
          .then((res) => {
            this.RejectLoading = false;
            this.Refresh();
          })
          .catch((error) => {
            // this.makeToast(error.response.data, "error");
             if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
            this.RejectLoading = false;
          });
      } else {
        // this.makeToast(this.$t("messagenotcorrect"), "error");
         if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
        this.RejectLoading = false;
      }
    },
    Refresh() {
      this.Loading = true;
      MyEduGeneralContractService.GetList(this.dataFilter)
        .then((res) => {
          this.MyEduGeneralContract = res.data.rows;
          this.Loading = false;
          if (this.MyEduGeneralContract.length === 0) {
            this.$router.push({ name: "MyInfo" });
            this.makeToast(this.$t("MyContractInvoiceNotInfo"), "error");
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
    OpenAcceptModal(item) {
      this.filter.id = item.id;
      this.filter.message = "";
      this.$bvModal.show("AcceptModal" + item.id);
      // AdoptionPermissionService.Accept(item.id).then(res => {
      //     this.$bvModal.show('AcceptModal'+item.id)
      //     this.filter.phonenumber = res.data.phoneNumber
      //     this.ConfirmAcceptLoading = false
      // }).catch(error => {
      //     this.makeToast(error.response.data,'error')
      //     this.ConfirmAcceptLoading = false
      // })
    },
    Accept(item) {
      this.AcceptLoading = true;
      MyEduGeneralContractService.Accept(this.filter)
        .then((res) => {
          this.AcceptLoading = false;
          this.$bvModal.hide("AcceptModal" + item.id);
          this.Refresh();
        })
        .catch((error) => {
          // this.makeToast(error.response.data, "error");
           if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
          this.AcceptLoading = false;
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
</style>
