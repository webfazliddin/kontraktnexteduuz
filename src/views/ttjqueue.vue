<template>
  <div class="application my-info">
    <b-overlay :show="Loading" >
      <div class="mainApplication">
        <b-row>
          <b-col sm="12" md="5" lg="5">
            <h4 class=""> {{ $t("Navbatim") }}</h4>
          </b-col>
        </b-row>
        <hr class="line">
        <b-row>

          <div class="edu-info">
              <b-list-group  class="application_list">
                <b-list-group-item class="edu-list-group">
                  <span class="edu-title">{{ $t("fio") }}:</span>
                  <span class="edu-name"><b>{{ ApplicationList.fullName }}</b></span>
                </b-list-group-item>
                <b-list-group-item class="edu-list-group">
                  <span class="edu-title">{{ $t("generalorganization") }}:</span>
                  <span class="edu-name"><b>{{ ApplicationList.organization }}</b></span>
                </b-list-group-item>
                <b-list-group-item class="edu-list-group">
                  <span class="edu-title">{{ $t("faculty") }}:</span>
                  <span class="edu-name"><b>{{ ApplicationList.faculty }}</b></span>
                </b-list-group-item>
                <b-list-group-item class="edu-list-group">
                  <span class="edu-title">{{ $t("TTJ nomi") }}:</span>
                  <span class="edu-name"><b>{{ ApplicationList.priority }}</b></span>
                </b-list-group-item>
                <b-list-group-item class="edu-list-group">
                  <span class="edu-title">{{ $t("Sizning ustuvorligingiz") }}:</span>
                  <span class="edu-name"><b>{{ ApplicationList.sentDate }}</b></span>
                </b-list-group-item>
                <b-list-group-item class="edu-list-group">
                  <span class="edu-title">{{ $t("Sizning ustuvorlik bo'yicha navbatingiz") }}:</span>
                  <span class="edu-name"><b>{{ ApplicationList.queue }}</b></span>
                </b-list-group-item>
                <!-- <b-list-group-item class="edu-list-group">
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
                </b-list-group-item> -->
              </b-list-group>
          </div>
        </b-row>
        <b-row v-if="Application.length > 0">
          <b-col sm="12" lg="12" class="mt-1">
            <marquee style="color: red" behavior="" direction="">{{
              $t("ApplicationWillProcessed")
            }}</marquee>
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
                                class="
                                  d-flex
                                  justify-content-between
                                  flex-sm-row flex-column
                                  mb-sm-0 mb-1
                                "
                              >
                                <h6>{{ el.userInfo }}</h6>
                              </div>
                              <p>
                                <b-badge :class="getColor(el)">{{
                                  el.statusChangedDate
                                }}</b-badge>
                                -
                                <b-badge :class="getColor(el)">
                                  {{ el.status }}
                                </b-badge>
                                {{ el.message == null ? "" : "-" }}
                                {{ el.message }}
                              </p>
                            </b-col>
                          </b-row>
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
      <b-modal
        v-model="InfoModal"
        size="lg"
        :title="$t('Info')"
        no-close-on-backdrop
        hide-footer
      >
        <p>
          {{
            $t("Senttoorganization", {
              OrganizationFilial: OrganizationFilial,
              ApplicationNumber: ApplicationNumber,
            })
          }}
        </p>
      </b-modal>
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
  BIconDownload,
  BIconCheckCircle,
  BIconCaretDown,
} from "bootstrap-vue";
import axios from "axios";
import MyStudentResidenceApplicationService from "../services/mystudentresidenceapplication.service";
import CustomInput from "./components/CustomInput.vue";
import CustomButton from "./components/CustomButton.vue";
import FileManageService from "../services/filemanage.service";

export default {
  components: {
    BIconPlus,
    BIconPencil,
    BIconTrash,
    BIconXCircle,
    BIconDownload,
    BIconCursor,
    CustomInput,
    CustomButton,
    BIconCaretDown,
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
      Application: [],
      DeleteLoading: false,
      filter: {
        id: 0,
        message: "",
      },
      buttonfilter: {
        admissiontypeid: 0,
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
      SendLoading: false,
      CancelLoading: false,
      AcceptLoading: false,
      Loading: false,
      historySidebar: false,
      InfoModal: false,
      modalindex: 0,
      OrganizationFilial: "",
      ApplicationNumber: "",
      History: [],
      histories: [],
      PersentTime: "",
      downloadloading: false,
      AdoptPermisConclusion: {
        docnumber: "",
        docdate: "",
        commenttext: "",
        projectfiletext: "",
      },
      ApplicationList: {},
      dataFilter: {
        statusIds: [],
        fromDocDate: "",
        toDocDate: "",
        eduYearId: null,
        currentEduYear:true,
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
          this.makeToast(error.response.data, "error");
          this.downloadloading = false;
        });
    },
    ChangeAdm(item) {
      console.log(item);
      this.buttonfilter.admissiontypeid = item.id;
      this.Refresh();
    },
    // changeFirst() {
    //   alert("qw");
    // },
    OpenAppModal(item) {
      this.$bvModal.show("AppModal" + item.id);
      this.AdoptPermisConclusion = item.AdoptPermisConclusion;
    },
    getColor(item) {
      if (
        item.statusId == 24 ||
        item.statusId == 21 ||
        item.statusId == 15 ||
        item.statusId == 8 ||
        item.statusId == 10
      ) {
        return "status-name-danger";
      }
      if (item.statusId == 12 || item.statusId == 2) {
        return "status-name-warning";
      } else {
        return "status-name-success";
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
      MyStudentResidenceApplicationService.Get(item.id)
        .then((res) => {
          this.histories = res.data.histories;
          this.historySidebar = true;
          this.History = [];
          this.History = this.histories;
        })
        .catch((error) => {
          this.makeToast(error.response.data, "error");
        });
    },
    OpenCancelModal(item) {
      this.filter.id = item.id;
      this.filter.message = "";
      // AdoptionPermissionService.Cancel(item.id).then(res => {
      this.$bvModal.show("CancelModal" + item.id);
      //     this.filter.phonenumber = res.data.phoneNumber
      // }).catch(error => {
      //     this.makeToast(error.response.data,'error')
      // })
    },
    changeDate() {
      var DateNow = Date.now();
      this.PersentTime = DateNow;
    },
    Cancel() {
      MyStudentResidenceApplicationService.Revoke(this.filter)
        .then((res) => {
          this.CancelLoading = false;
          this.$bvModal.hide("CancelModal" + this.filter.id);
          this.Refresh();
        })
        .catch((error) => {
          this.makeToast(error.response.data, "error");
          this.$bvModal.hide("CancelModal" + this.filter.id);
          this.CancelLoading = false;
        });
    },
    Refresh() {
      this.Loading = true;
      this.modalindex = this.$route.query.infomodal;
      this.OrganizationFilial = this.$route.query.organizationFilial;
      this.ApplicationNumber = this.$route.query.applicationNumber;
      if (!!this.$route.query.infomodal) {
        this.$router.replace({
          query: {
            infomodal: null,
            organizationFilial: null,
            applicationNumber: null,
          },
        });
      }
      MyStudentResidenceApplicationService.GetMyQueue()
        .then((res) => {
          this.ApplicationList = res.data;
          this.Loading = false;
          if (this.modalindex == 1) {
            this.InfoModal = true;
            this.modalindex = 0;
          }
        })
        .catch((error) => {
          this.makeToast(error.response.data, "error");
          this.Loading = false;
        });
    },
    OpenSendModal(item) {
      this.filter.id = item.id;
      this.filter.message = "";
      this.$bvModal.show("SendModal" + item.id);
      // AdoptionPermissionService.Send(item.id).then(res => {
      //     this.$bvModal.show('SendModal'+item.id)
      //     this.filter.phonenumber = res.data.phoneNumber
      //     this.ConfirmSendLoading = false
      // }).catch(error => {
      //     this.makeToast(error.response.data,'error')
      //     this.ConfirmSendLoading = false
      // })
    },
    Send(item) {
      this.SendLoading = true;
      this.filter.message = "";
      MyStudentResidenceApplicationService.Send(this.filter)
        .then((res) => {
          this.SendLoading = false;
          this.$bvModal.hide("SendModal" + item.id);
          this.modalindex = 1;
          this.Refresh();
        })
        .catch((error) => {
          this.makeToast(error.response.data, "error");
          this.SendLoading = false;
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
    Delete(item) {
      this.DeleteLoading = true;
      MyStudentResidenceApplicationService.Delete(item.id)
        .then((res) => {
          this.DeleteLoading = false;
          this.makeToast(this.$t("DeleteSuccess"), "success");
          this.$bvModal.hide("DeleteModal" + item.id);
          this.Refresh();
        })
        .catch((error) => {
          this.makeToast(error.response.data, "error");
          this.DeleteLoading = false;
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
.dropdown-item:hover {
  background-color: #0879f9;
  color: white;
}
</style>
