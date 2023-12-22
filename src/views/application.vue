<template>
  <div class="application my-info">
    <b-overlay :show="Loading">
      <div class="mainApplication">
        <b-row>
          <b-col sm="12" md="5" lg="5">
            <h4 class="text-center">{{ $t("Application") }}</h4>
          </b-col>
          <b-col class="text-center">
            <div class="d-flex justify-content-between" >
              <div class="mr-2">
                <b-button-group @click="Refresh" size="sm" class="sport-group-btn">
                  <b-button
                    @click="dataFilter.currentEduYear = false"
                    :variant="
                      dataFilter.currentEduYear == false ? 'primary' : 'outline-primary'
                    "
                  >{{ $t("2022-2023") }}</b-button>
                  <b-button
                    @click="dataFilter.currentEduYear = true"
                    :variant="
                      dataFilter.currentEduYear == true ? 'primary' : 'outline-primary'
                    "
                  >{{ $t("2023-2024") }}</b-button>
                </b-button-group>
              </div>
              <div class="mr-2">
                <b-dropdown
                  id="dropdown-right"
                  right
                  :text="$t('AddApplication')"
                  v-if="ApplicationList.addButton"
                  :disabled="dataFilter.currentEduYear == false"
                  variant="primary"
                  size="sm"
                  class="mr-2"
                >
                  <!-- <template #button-content>
                    <span class="text-white">
                      {{ $t("AddApplication") }}
                      <b-icon-caret-down scale="0.8"></b-icon-caret-down>
                    </span>
                  </template> -->
                  <b-dropdown-item-button
                  
                    @click="
                  $router.push({
                    name: 'EditApplication',
                    params: { id: 2 },
                  })
                "
              
                    class="languageText"
                  >{{ $t("firstCourse") }}</b-dropdown-item-button>
                  <b-dropdown-item-button
                    @click="
                  $router.push({
                    name: 'EditApplication',
                    params: { id: 1 },
                  })
                "
             
                    class="languageText text-hover-white"
                  >{{ $t("magistrAndBachelor") }}</b-dropdown-item-button>
                  <b-dropdown-item-button
                    @click="
                  $router.push({
                    name: 'EditApplication',
                    params: { id: 3 },
                  })
                "
                    class="languageText"
                  >{{ $t("transfer") }}</b-dropdown-item-button>
                </b-dropdown>
              </div>
            </div>
          </b-col>
        </b-row>
        <hr class="line" />
        <b-row>
          <div class="edu-info">
            <b-list-group
              v-for="(item, index) in Application"
              :key="index"
              v-show="Application.length > 0"
              class="application_list"
            >
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("fio") }}:</span>
                <span class="edu-name">
                  <b>{{ item.student }}</b>
                </span>
              </b-list-group-item>
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("generaldocnumber1") }}:</span>
                <span class="edu-name">
                  <b>{{ item.docNumber }}</b>
                </span>
              </b-list-group-item>
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("docdate1") }}:</span>
                <span class="edu-name">
                  <b>{{ item.docDate }}</b>
                </span>
              </b-list-group-item>
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("type") }}:</span>
                <span class="edu-name">
                  <b>{{ item.applicationType }}</b>
                </span>
              </b-list-group-item>
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("addmissiontype1") }}:</span>
                <span class="edu-name">
                  <b>{{ item.applicationPurpose }}</b>
                </span>
              </b-list-group-item>
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("generalorganization") }}:</span>
                <span class="edu-name">
                  <b>{{ item.organization }}</b>
                </span>
              </b-list-group-item>
              <b-list-group-item class="edu-list-group">
                <span class="edu-title">{{ $t("status") }}:</span>
                <span class>
                  <div class>
                    <b-badge
                      style="cursor: pointer"
                      @click="OpenHistory(item)"
                      :class="getColor(item)"
                      size="sm"
                    >{{ item.status }}</b-badge>
                  </div>
                </span>
              </b-list-group-item>
              <hr class="line" />
              <div class="d-flex mb-3 justify-content-end mr-3">
                <!-- <b-button class="cancel-contract-btn" @click="Cancel">
                  <b-icon-x-circle style="color:rgb(250, 62, 62)" scale="0.8"></b-icon-x-circle>
                  <span class="text" style="margin-top:3px">Bekor qilish</span>
                </b-button> -->
                <a
                 v-if="item.canRevoke"
                 class="cancel-contract-btn" @click="Cancel"
                 style="cursor: pointer"
                >
                 <b-icon-x-circle style="color:#F5222D" scale="0.8"></b-icon-x-circle>
                  <span class="text" style="margin-top:3px">Bekor qilish</span>
                </a>
                <a
                  class="edit-contract-btn ml-3"
                  style="cursor: pointer"
                   @click="
                      $router.push({
                        name: 'ViewApplication',
                        params: { id: item.id },
                      })
                    "
                >
                 <b-icon-eye style="color:#1677FF" scale="0.8"></b-icon-eye>
                  <span class="text" style="margin-top:3px">Ko'rish</span>
                </a>
                <a
                  :href="
                      axios.defaults.baseURL +
                      `MyApplication/DownloadApplicationPdf/${item.id2}?PersentTime=${PersentTime}`
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
              </div>
            </b-list-group>
          </div>
        </b-row>
        <b-row v-if="Application.length > 0">
          <b-col sm="12" lg="12" class="mt-1">
            <marquee style="color: red" behavior direction>
              {{
              $t("ApplicationWillProcessed")
              }}
            </marquee>
          </b-col>
        </b-row>

        <!-- <b-row>
          <b-col
            class="mt-3"
            sm="12"
            md="6"
            v-for="(item, index) in Application"
            :key="index"
            v-show="Application.length > 0"
          >
            <div class="pricing-box rounded px-4 pt-4 pb-2">
              <b-row>
                <b-col sm="12">
                  <table class="my-table-padding">
                    <tr>
                      <td style="width: 40%">{{ $t("fio") }} :</td>
                      <th style="width: 60%">{{ item.student }}</th>
                    </tr>
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
                      <td style="width: 40%">{{ $t("type") }} :</td>
                      <th style="width: 60%">
                        {{ item.applicationType }}
                      </th>
                    </tr>
                    <tr class="my-1">
                      <td style="width: 40%">{{ $t("addmissiontype1") }} :</td>
                      <th style="width: 60%">
                        {{ item.applicationPurpose }}
                      </th>
                    </tr>
                    <tr>
                      <td class="pr-btn" style="width: 40%">
                        {{ $t("generalorganization") }} :
                      </td>
                      <th style="width: 60%">{{ item.organization }}</th>
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
                <b-col sm="12">
                  <a
                    @click="
                      $router.push({
                        name: 'ViewApplication',
                        params: { id: item.id },
                      })
                    "
                    class="
                      btn btn-sm 
                      mr-2
                      mt-2
                      pr-btn
                      myButton
                    "
                  >
                    <b-icon-eye scale="0.8"></b-icon-eye> {{ $t("View") }}
                  </a>
                  <a
                    v-if="item.canModify"
                    @click="
                      $router.push({
                        name: 'EditApplication',
                        params: { id: item.id },
                      })
                    "
                    class="
                      btn btn-sm 
                      mr-2
                      mt-2
                      pr-btn
                      myButton
                    "
                  >
                    <b-icon-pencil scale="0.8"></b-icon-pencil> {{ $t("edit") }}
                  </a>
                  <a
                    v-if="
                      item.statusId !== 8 &&
                      item.statusId !== 10 &&
                      item.statusId !== 2 &&
                      item.statusId !== 20 &&
                      item.statusId !== 24 &&
                      item.statusId !== 23
                    "
                    @click="
                      $router.push({
                        name: 'EditGetByApplication',
                        params: { id: item.id },
                      })
                    "
                    class="
                      btn btn-sm 
                      mr-2
                      mt-2
                      pr-btn
                      myButton
                    "
                  >
                    {{ $t("ModificationContract") }}
                  </a>
                  <a
                    @click="changeDate()"
                    :href="
                      axios.defaults.baseURL +
                      `MyApplication/DownloadApplicationPdf/${item.id2}?PersentTime=${PersentTime}`
                    "
                    target="_bland"
                    class="
                      btn btn-sm 
                      mr-2
                      mt-2
                      pr-btn
                      myButton
                    "
                  >
                    <b-icon-download scale="0.8"></b-icon-download>
                    {{ $t("downloadfile") }}
                  </a>
                  <a
                    v-if="item.canDelete"
                    @click="$bvModal.show('DeleteModal' + item.id)"
                    class="
                      btn btn-sm 
                      mr-2
                      mt-2
                      pr-btn
                      myButton
                    "
                  >
                    <b-icon-trash scale="0.8"></b-icon-trash> {{ $t("delete") }}
                  </a>
                  <a
                    v-if="item.canRevoke"
                    @click="OpenCancelModal(item)"
                    class="
                      btn btn-sm 
                      mr-2
                      mt-2
                      pr-btn
                      myButton
                    "
                  >
                    <b-icon-x-circle scale="0.8"></b-icon-x-circle>
                    {{ $t("cancel") }}
                  </a>
                  <a
                    v-if="item.CanSearchChild"
                    @click="OpenAppModal(item)"
                    style="width: 150px"
                    class="btn btn-sm anim-opacity btn-primary mr-2 mt-2 pr-btn"
                  >
                    <b-icon-eye scale="0.8"></b-icon-eye>
                    {{ $t("xulosanikorish") }}
                  </a>
                </b-col>
              </b-row>
              <b-modal
                :id="'AppModal' + item.id"
                no-close-on-backdrop
                hide-footer
                :title="$t('xulosa')"
              >
                <table>
                  <tr>
                    <td style="width: 60% !important">
                      {{ $t("docnumber") }} :
                    </td>
                    <th style="width: 40%">
                      {{ AdoptPermisConclusion.docnumber }}
                    </th>
                  </tr>
                  <tr>
                    <td>{{ $t("docdate") }} :</td>
                    <th>
                      {{ AdoptPermisConclusion.docdate }}
                    </th>
                  </tr>
                  <tr>
                    <td>{{ $t("commenttext") }} :</td>
                    <th>
                      {{ AdoptPermisConclusion.commenttext }}
                    </th>
                  </tr>
                  <tr>
                    <td>{{ $t("xulosa") }} :</td>
                    <th>
                      <b-badge variant="primary" @click="DownloadFile(item)">
                        <b-spinner small v-if="downloadloading"></b-spinner>
                        <b-icon-cloud-download
                          v-if="!downloadloading"
                        ></b-icon-cloud-download>
                        {{ AdoptPermisConclusion.projectfiletext }}
                      </b-badge>
                    </th>
                  </tr>
                </table>

                <b-row class="mt-3">
                  <b-col class="text-right">
                    <b-button
                      @click="$bvModal.hide('AppModal' + item.id)"
                      variant="success"
                    >
                      ok
                    </b-button>
                  </b-col>
                </b-row>
              </b-modal>
              <b-modal
                :id="'DeleteModal' + item.id"
                :title="$t('delete')"
                no-close-on-backdrop
                hide-footer
              >
                <p>
                  {{ $t("WantDeleteAdm") }}
                </p>
                <b-row>
                  <b-col class="text-right">
                    <a
                      @click="$bvModal.hide('DeleteModal' + item.id)"
                      class="btn btn-sm btn-soft-danger mr-2 pr-btn"
                    >
                      {{ $t("no") }}
                    </a>
                    <a
                      @click="Delete(item)"
                      class="btn btn-sm btn-success pr-btn"
                    >
                      <b-spinner v-if="DeleteLoading" small></b-spinner>
                      {{ $t("yes") }}
                    </a>
                  </b-col>
                </b-row>
              </b-modal>
              <b-modal
                :id="'SendModal' + item.id"
                :title="$t('send')"
                no-close-on-backdrop
                hide-footer
              >
                <b-row class="mt-3">
                  <b-col class="text-right">
                    <a
                      @click="$bvModal.hide('SendModal' + item.id)"
                      class="btn btn-sm btn-soft-danger mr-2 pr-btn"
                    >
                      {{ $t("no") }}
                    </a>
                    <a
                      @click="Send(item)"
                      class="btn btn-sm btn-success pr-btn"
                    >
                      <b-spinner v-if="SendLoading" small></b-spinner>
                      {{ $t("yes") }}
                    </a>
                  </b-col>
                </b-row>
              </b-modal>
              <b-modal
                :id="'CancelModal' + item.id"
                :title="$t('CancelApprove')"
                no-close-on-backdrop
                hide-footer
              >
                <p>
                  {{ $t("WantCancelAdm") }}
                </p>
                <b-row>
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
        </b-row>-->
        <b-sidebar no-header width="400px" shadow right v-model="historySidebar" bg-variant="white">
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
                                <b-badge :class="getColor(el)">
                                  {{
                                  el.statusChangedDate
                                  }}
                                </b-badge>-
                                <b-badge :class="getColor(el)">{{ el.status }}</b-badge>
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
      <b-modal v-model="InfoModal" size="lg" :title="$t('Info')" no-close-on-backdrop hide-footer>
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
  BIconCaretDown
} from "bootstrap-vue";
import axios from "axios";
import ApplicationService from "../services/application.service";
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
    BIconCheckCircle
  },
  data() {
    return {
      axios,
      lang: localStorage.getItem("locale") || "uz_latn",
      Application: [],
      DeleteLoading: false,
      filter: {
        id: 0,
        message: ""
      },
      buttonfilter: {
        admissiontypeid: 0
      },
      EducationTypeList: [
        {
          id: 1,
          shortname: this.$t("DTM")
        },
        {
          id: 2,
          shortname: this.$t("HEMIS")
        }
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
        projectfiletext: ""
      },
      ApplicationList: {},
      dataFilter: {
        statusIds: [],
        // fromDocDate: "2022-03-24T06:19:14.058Z",
        // toDocDate: "2022-03-24T06:19:14.058Z",
        fromDocDate: "",
        toDocDate: "",
        eduYearId: null,
        currentEduYear: true,
        filters: {
          additionalProp1: {
            value: null,
            matchMode: null
          },
          additionalProp2: {
            value: null,
            matchMode: null
          },
          additionalProp3: {
            value: null,
            matchMode: null
          }
        },
        search: null,
        sortBy: null,
        orderType: null,
        page: 1,
        pageSize: 20
      }
    };
  },
  created() {
    this.Refresh();
    this.changeDate();
    console.log(this.EducationTypeList);
  },
  methods: {
    DownloadFile(item) {
      this.downloadloading = true;
      FileManageService.Get(item.AdoptPermisConclusion.projectfileid)
        .then(res => {
          this.downloadFile1(res, item.AdoptPermisConclusion);
          this.downloadloading = false;
        })
        .catch(error => {
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
      ApplicationService.Get(item.id)
        .then(res => {
          this.histories = res.data.histories;
          this.historySidebar = true;
          this.History = [];
          this.History = this.histories;
        })
        .catch(error => {
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
      ApplicationService.Revoke(this.filter)
        .then(res => {
          this.CancelLoading = false;
          this.$bvModal.hide("CancelModal" + this.filter.id);
          this.Refresh();
        })
        .catch(error => {
          this.makeToast(error.response.data, "error");
          this.$bvModal.hide("CancelModal" + this.filter.id);
          this.CancelLoading = false;
        });
    },
    // OpenAcceptModal(item) {
    //   this.filter.id = item.id;
    //   this.filter.message = "";
    //   this.$bvModal.show("AcceptModal" + item.id);
    //   // AdoptionPermissionService.Cancel(item.id).then(res => {
    //   //     this.$bvModal.show('CancelModal'+item.id)
    //   //     this.filter.phonenumber = res.data.phoneNumber
    //   // }).catch(error => {
    //   //     this.makeToast(error.response.data,'error')
    //   // })
    // },
    // Cancel(item) {
    //   this.CancelLoading = true;
    //   this.$bvModal.hide("CancelModal" + item.id);
    //   ApplicationService.CancelApprove(this.filter)
    //     .then((res) => {
    //       this.CancelLoading = false;
    //       this.Refresh();
    //     })
    //     .catch((error) => {
    //       this.makeToast(error.response.data, "error");
    //       this.CancelLoading = false;
    //     });
    // },
    // Accept(item) {
    //   this.AcceptLoading = true;
    //   this.$bvModal.hide("AcceptModal" + item.id);
    //   ApplicationService.Approve(this.filter)
    //     .then((res) => {
    //       this.AcceptLoading = false;
    //       this.Refresh();
    //     })
    //     .catch((error) => {
    //       this.makeToast(error.response.data, "error");
    //       this.AcceptLoading = false;
    //     });
    // },
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
            applicationNumber: null
          }
        });
      }
      ApplicationService.GetList(this.dataFilter)
        .then(res => {
          this.Application = res.data.rows;
          this.ApplicationList = res.data;
          this.Loading = false;
          if (this.modalindex == 1) {
            this.InfoModal = true;
            this.modalindex = 0;
          }
        })
        .catch(error => {
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
      ApplicationService.Send(this.filter)
        .then(res => {
          this.SendLoading = false;
          this.$bvModal.hide("SendModal" + item.id);
          this.modalindex = 1;
          this.Refresh();
        })
        .catch(error => {
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
        dismissible: true
      });
    },
    Delete(item) {
      this.DeleteLoading = true;
      ApplicationService.Delete(item.id)
        .then(res => {
          this.DeleteLoading = false;
          this.makeToast(this.$t("DeleteSuccess"), "success");
          this.$bvModal.hide("DeleteModal" + item.id);
          this.Refresh();
        })
        .catch(error => {
          this.makeToast(error.response.data, "error");
          this.DeleteLoading = false;
        });
    }
  }
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
