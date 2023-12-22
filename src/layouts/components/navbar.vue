<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark" id="navbar">
    <div class="container">
      <a class="navbar-brand logo ml-2" href="/">
        <img src="@/assets/Logo.svg" alt class="logoImg1" height="50" />
        <img src="@/assets/Logo-no-text.svg" alt class="logoImgMobile1" height="50" />
      </a>
      <div class="d-flex align-items-center customRightMenu">
         <b-dropdown
         id="dropdown-right" right text="Right align"
          variant="link"
          no-caret
          toggle-class="text-decoration-none"
          size="sm"
        >
          <template #button-content>
            <span class="text-white">
              {{ $t("lang") }}
              <b-icon-caret-down scale="0.8"></b-icon-caret-down>
            </span>
          </template>

          <b-dropdown-item
            class="languageText"
            :active="lang == 'uz_latn'"
            @click="ChangeLang('uz_latn')"
          >
            <b>O'zbekcha</b>
          </b-dropdown-item>
          <b-dropdown-item
            class="languageText"
            :active="lang == 'ru'"
            @click="ChangeLang('ru')"
          >Русский</b-dropdown-item>
        </b-dropdown>
        <div class="d-flex">
          <b-button
            class="register-btn btn"
            v-if="!isToken"
            @click="$store.state.isOpenSidebar = true"
          >{{ $t('Login') }}</b-button>
          <b-button
            class="signIn-btn btn btn-primary"
            v-if="!isToken"
            @click="$store.state.isOpenSidebar = true"
          >{{ $t('enter') }}</b-button>
        </div>
        <div v-if="isToken" class="mr-4">
          <!-- <a href="/myinfo">
            <b-img
              style="width: 40px; height: 40px; border-radius:50%"
              :src="`data:image/png;base64,${Person.photo}`"
            />
          </a> -->
          <i
            style="cursor: pointer"
            class="mdi h2 mdi-account-circle text-white"
          ></i>
        </div>
        <div class="mr-4">
          <h6 style="margin-top:5px; color:#fff;">{{ Person.shortName }}</h6>
        </div>
        <div v-if="isToken" class="mr-2">
          <i @click="OpenLogoutModal" style="cursor: pointer;color:red" class="mdi h2 mdi-logout text-white"></i>
        </div>
      </div>
    </div>
    <!-- <b-sidebar
      no-header
      @shown="GetNotifyInfo"
      width="400px"
      shadow
      right
      v-model="$store.state.isOpenNotification"
      bg-variant="white"
    >
      <div style="width: 100%; height: 100%">
        <div
          class="container-fluid w-100"
          style="width: 100% !important; position: relative; overflow-y: auto"
        >
          <b-row :class="isToken ? 'w-100 mb-5' : 'w-100'">
            <b-col class="text-right close-icon">
              <b-icon-x
                scale="2.5"
                style="cursor: pointer; z-index: 9"
                @click="$store.state.isOpenNotification = false"
              ></b-icon-x>
            </b-col>
          </b-row>
          <b-row class="w-100">
            <b-col>
              <h4>{{ $t("notification") }}</h4>
            </b-col>
          </b-row>
          <b-row class="w-100">
            <b-col>
              <div
                class="my-custom-card mt-3"
                v-for="(item, index) in NotifyList"
                :key="index"
              >
                <div class="d-flex align-items-center">
                  <small style="margin-right: 5px">
                    {{ item.dateofcreated }}
                  </small>
                  -
                  <b-badge class="ml-2" variant="success">
                    {{ item.title }}
                  </b-badge>
                </div>

                <p @click="ReadMessage(item)">
                  {{ item.webtext }}
                </p>
              </div>
              <div class="my-custom-card mt-3" v-if="NotifyList.length == 0">
                <p
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    pb-0
                    mb-0
                  "
                >
                  {{ $t("nothinghere") }}
                </p>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-sidebar>-->
    <b-sidebar
      no-header
      width="400px"
      shadow
      right
      v-model="$store.state.isOpenSidebar"
      bg-variant="white"
    >
      <div style="width: 100%; height: 100%">
        <div
          class="container-fluid w-100"
          style="width: 100% !important; position: relative; overflow-y: auto"
        >
          <b-row :class="isToken ? 'w-100 mb-5' : 'w-100'">
            <b-col class="text-right close-icon">
              <b-icon-x
                scale="2.5"
                style="cursor: pointer; z-index: 9"
                @click="$store.state.isOpenSidebar = false"
              ></b-icon-x>
            </b-col>
          </b-row>
          <b-row v-if="!isToken" class="w-100">
            <b-col
              class="d-flex align-items-center my-sidebar-body"
              style="position: relative; overflow-y: auto; margin-bottom: 60px"
            >
              <div class="w-100">
                <b-row>
                  <b-col>
                    <p class="text-sign text-primary-dark">{{ $t("enter") }}</p>
                    <p class="text-info-sign text-primary-dark">{{ $t("usephonenumber") }}</p>
                  </b-col>
                </b-row>
                <b-row style="margin-bottom: 16px">
                  <b-col sm="12">
                    <custom-input
                      :label="$t('phonenumber')"
                      @keyup="ChangePhone"
                      v-mask="'+998-##-###-##-##'"
                      v-model="Account.phonenumber"
                      placeholder="+998 _ _  _ _ _  _ _  _ _"
                    ></custom-input>
                  </b-col>
                </b-row>
                <b-row
                  v-if="
                    filter.isPassword === null && filter.isSmsCode === false
                  "
                >
                  <b-col>
                    <button type="submit" class="btn btn-primary btn-block" @click="isCheckAccount">
                      <b-spinner v-if="checkAccountLoading" small style="margin-right: 8px"></b-spinner>
                      {{ $t("register") }}
                    </button>
                  </b-col>
                </b-row>
                <b-row v-if="filter.isPassword === true" style="margin-bottom: 16px">
                  <b-col sm="12">
                    <custom-input
                      type="password"
                      v-model="Account.password"
                      :label="$t('password')"
                      placeholder="****"
                    ></custom-input>
                  </b-col>
                  <b-col sm="12" class="mt-2 d-flex justify-content-end">
                    <a
                      @click="OpenForgotPass"
                      class="cursor-pointer"
                      style="
                        color: #003d45;
                        text-decoration: none;
                        cursor: pointer;
                      "
                    >{{ $t("forgotpassword") }}</a>
                  </b-col>
                </b-row>
                <b-row v-if="filter.isSmsCode" style="margin-bottom: 16px">
                  <b-col sm="12"></b-col>
                  <b-col sm="12">
                    <custom-input
                      v-mask="'####'"
                      v-model="Account.smscode"
                      :label="$t('smskod')"
                      placeholder="1234"
                    ></custom-input>
                  </b-col>
                </b-row>
                <b-row v-if="filter.isPassword === true">
                  <b-col>
                    <button type="submit" class="btn btn-primary block" @click="SignIn">
                      <b-spinner v-if="SignLoading" small style="margin-right: 8px"></b-spinner>
                      {{ $t("auth") }}
                    </button>
                  </b-col>
                </b-row>
                <b-row v-if="filter.isPassword === false">
                  <b-col sm="12" style="margin-bottom: 16px" class="text-center">
                    <span class="text-center text-danger">{{ $t("goregister") }}</span>
                  </b-col>
                  <b-col sm="12" style="margin-bottom: 16px" class="text-left">
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="CheckPerson.foreignStudent"
                      name="checkbox-1"
                    >
                      <span class="text-primary">{{ $t("nationalitynotuzb") }}</span>
                    </b-form-checkbox>
                  </b-col>
                  <b-col
                    v-if="!CheckPerson.foreignStudent"
                    sm="12"
                    md="6"
                    lg="6"
                    style="margin-bottom: 9px"
                    class="d-flex"
                  >
                    <custom-input
                      v-mask="'AA#######'"
                      class="mr-1"
                      style="width: 100%"
                      :label="$t('checkPassport')"
                      v-model="CheckPerson.passport"
                      placeholder="AA9999999"
                    ></custom-input>
                  </b-col>
                  <b-col
                    v-if="!CheckPerson.foreignStudent"
                    sm="12"
                    md="6"
                    lg="6"
                    style="margin-bottom: 9px"
                    class="d-flex ml-0 pl-0"
                  >
                    <custom-input
                      class="ml-0 pl-0"
                      style="
                        color: blue;
                        cursor: pointer !important;
                        font-weight: 600;
                        width: 100%;
                      "
                      @labelClick="$bvModal.show('PinflModal')"
                      :label="$t('pinfl') + '?'"
                      v-model="CheckPerson.pinfl"
                      v-mask="'##############'"
                      placeholder="12345678901234"
                    ></custom-input>
                  </b-col>
                  <b-col
                    v-if="CheckPerson.foreignStudent"
                    sm="12"
                    md="12"
                    lg="12"
                    style="margin-bottom: 16px"
                  >
                    <custom-input
                      :label="$t('Hemis ID')"
                      v-model="CheckPerson.hemisId"
                      placeholder="12345678901234"
                    ></custom-input>
                  </b-col>
                  <b-col sm="12" style="margin-bottom: 16px">
                    <custom-input
                      type="password"
                      v-model="Account.password"
                      :label="$t('password')"
                      placeholder="******"
                    ></custom-input>
                  </b-col>
                  <b-col sm="12" style="margin-bottom: 16px">
                    <custom-input
                      type="password"
                      v-model="Account.passwordconfirm"
                      :label="$t('confirmpassword')"
                      placeholder="******"
                    ></custom-input>
                  </b-col>
                  <b-col
                    sm="12"
                    v-if="filter.isSmsForRegister"
                    style="margin-bottom: 16px"
                    class="text-center"
                  >
                    <span class="text-center text-danger">
                      {{
                      $t("lang") == "Ру"
                      ? $t("entersmscodesentnumber") +
                      " " +
                      Account.phonenumber
                      : Account.phonenumber +
                      " " +
                      $t("entersmscodesentnumber")
                      }}
                    </span>
                  </b-col>
                  <b-col sm="12" v-if="filter.isSmsForRegister" style="margin-bottom: 16px">
                    <custom-input
                      v-mask="'####'"
                      v-model="Account.smscode"
                      :label="$t('smskod')"
                      placeholder="1234"
                      @input="ChangeSmsCode"
                    ></custom-input>
                  </b-col>
                  <b-col sm="12" v-if="!filter.isSms">
                    <button
                      type="submit"
                      class="btn btn-primary btn-block"
                      :disabled="immediate == false"
                      @click="GiveSmsCode"
                    >
                      <b-spinner v-if="SignLoading" small style="margin-right: 8px"></b-spinner>
                      {{ $t("Smskodloish") }}
                    </button>
                  </b-col>
                  <b-col sm="12" v-if="filter.isSmsForRegister">
                    <button type="submit" class="btn btn-primary btn-block" @click="SendSmsCode">
                      <b-spinner v-if="SignLoading" small style="margin-right: 8px"></b-spinner>
                      {{ $t("registration") }}
                    </button>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
          <b-row v-if="isToken" class="w-100 mt-3">
            <b-col cols="12">
              <span
                class="d-block mb-3"
                style="
                  font-size: 20px;
                  margin-left: 15px;
                  margin-bottom: 15px;
                  color: #0879f9;
                "
              >{{ getUserName }}</span>
              <hr
                style="
                  width: 80%;
                  margin-left: auto;
                  megin-right: auto;
                  display: block;
                "
              />
              <div class="d-flex align-items-center" style="cursor: pointer" @click="GotoCabinet">
                <b-icon-house
                  scale="1.2"
                  style="
                    margin-left: 15px;
                    margin-right: 5px;
                    display: inline;
                    cursor: pointer;
                  "
                ></b-icon-house>
                <span style="margin-left: 8px">{{ $t("mycabinet") }}</span>
              </div>
              <div
                class="d-flex mt-3 align-items-center"
                style="cursor: pointer"
                @click="GotoApplication"
              >
                <b-icon-file-earmark
                  scale="1.2"
                  style="
                    margin-left: 15px;
                    margin-right: 5px;
                    display: inline;
                    cursor: pointer;
                  "
                ></b-icon-file-earmark>
                <span style="margin-left: 8px">{{ $t("myapplication") }}</span>
              </div>
              <div
                v-if="GetData.myEduGeneralContract"
                class="d-flex mt-3 align-items-center"
                style="cursor: pointer"
                @click="$router.push({ name: 'MyEduGeneralContract' })"
              >
                <!-- <b-img style="margin-left: 15px;margin-right: 5px;  display: inline;cursor:pointer" src="/images/school/acc-login.svg"></b-img> -->
                <b-icon-file-earmark
                  scale="1.2"
                  style="
                    margin-left: 15px;
                    margin-right: 5px;
                    display: inline;
                    cursor: pointer;
                  "
                ></b-icon-file-earmark>
                <span style="margin-left: 8px">{{ $t("SchetInvoice") }}</span>
              </div>

              <div
                v-if="GetData.myPaymentPlan"
                class="d-flex mt-3 align-items-center"
                style="cursor: pointer"
                @click="$router.push({ name: 'MyPaymentPlan' })"
              >
                <b-icon-file-earmark
                  scale="1.2"
                  style="
                    margin-left: 15px;
                    margin-right: 5px;
                    display: inline;
                    cursor: pointer;
                  "
                ></b-icon-file-earmark>
                <span style="margin-left: 8px">{{ $t("PaymentSchedule") }}</span>
              </div>
              <div
                v-if="GetData.myPayments"
                class="d-flex mt-3 align-items-center"
                style="cursor: pointer"
                @click="$router.push({ name: 'MyPayments' })"
              >
                <b-icon-file-earmark
                  scale="1.2"
                  style="
                    margin-left: 15px;
                    margin-right: 5px;
                    display: inline;
                    cursor: pointer;
                  "
                ></b-icon-file-earmark>
                <span style="margin-left: 8px">{{ $t("PaymentDetails") }}</span>
              </div>
              <div
                v-if="GetData.ttjApplication"
                class="d-flex mt-3 align-items-center"
                style="cursor: pointer"
                @click="$router.push({ name: 'ttjApplication' })"
              >
                <b-icon-file-earmark
                  scale="1.2"
                  style="
                    margin-left: 15px;
                    margin-right: 5px;
                    display: inline;
                    cursor: pointer;
                  "
                ></b-icon-file-earmark>
                <span style="margin-left: 8px">{{ $t("ttjApplication") }}</span>
              </div>
              <div
                v-if="GetData.ttjContract"
                class="d-flex mt-3 align-items-center"
                style="cursor: pointer"
                @click="$router.push({ name: 'ttjContract' })"
              >
                <b-icon-file-earmark
                  scale="1.2"
                  style="
                    margin-left: 15px;
                    margin-right: 5px;
                    display: inline;
                    cursor: pointer;
                  "
                ></b-icon-file-earmark>
                <span style="margin-left: 8px">{{ $t("ttjContract") }}</span>
              </div>
              <div
                v-if="GetData.ttjQueue"
                class="d-flex mt-3 align-items-center"
                style="cursor: pointer"
                @click="$router.push({ name: 'ttjQueue' })"
              >
                <b-icon-file-earmark
                  scale="1.2"
                  style="
                    margin-left: 15px;
                    margin-right: 5px;
                    display: inline;
                    cursor: pointer;
                  "
                ></b-icon-file-earmark>
                <span style="margin-left: 8px">{{ $t("ttjQueue") }}</span>
              </div>
              <div
                v-if="GetData.ttjPayment"
                class="d-flex mt-3 align-items-center"
                style="cursor: pointer"
                @click="$router.push({ name: 'ttjPayment' })"
              >
                <b-icon-file-earmark
                  scale="1.2"
                  style="
                    margin-left: 15px;
                    margin-right: 5px;
                    display: inline;
                    cursor: pointer;
                  "
                ></b-icon-file-earmark>
                <span style="margin-left: 8px">{{ $t("ttjPayment") }}</span>
              </div>
            </b-col>
            <b-col cols="12" class="mt-2">
              <hr
                style="
                  width: 80%;
                  margin-left: auto;
                  megin-right: auto;
                  display: block;
                "
              />
            </b-col>
            <b-col cols="12">
              <div style="cursor: pointer" @click="OpenLogoutModal">
                <!-- <b-img style="margin-left: 15px; display: inline;" src="/images/school/logout.svg"></b-img> -->
                <b-icon-lock style="margin-left: 15px; display: inline" scale="1.2"></b-icon-lock>
                <span style="margin-left: 8px">{{ $t("logout") }}</span>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-sidebar>
    <b-modal
      id="PinflModal"
      :title="$t('pinfl')"
      no-close-on-backdrop
      hide-footer
      size="md"
      style="margin: 0 !important"
    >
      <img src="@/assets/images/pinfl.jpg" alt class="img-fluid d-block mx-auto rounded m-0 p-0" />
    </b-modal>
    <b-modal v-model="LogOutModal" no-close-on-backdrop hide-header hide-footer>
      <p>{{ $t("WantLogOut") }}</p>
      <b-row>
        <b-col class="text-right">
          <a @click="LogOutModal = false" class="btn btn-sm btn-success mr-2 pr-btn">{{ $t("no") }}</a>
          <a @click="Logout()" class="btn btn-sm btn-success pr-btn">
            <b-spinner v-if="LogOutLoading" small></b-spinner>
            {{ $t("yes") }}
          </a>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal
      v-model="ForgotPasswordModal"
      size="lg"
      hide-footer
      hide-header
      no-close-on-backdrop
      centered
    >
      <b-row>
        <b-col class="d-flex justify-content-between align-items-center">
          <span>{{ $t("restore") }}</span>
          <!-- <img class="cursor-pointer"  src="/images/design/fill-close.svg" alt=""> -->
          <b-icon-x
            scale="2.5"
            style="cursor: pointer; z-index: 9"
            @click="ForgotPasswordModal = false"
          ></b-icon-x>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <custom-input
            disabled
            :label="$t('phonenumber')"
            v-mask="'+998-##-###-##-##'"
            v-model="Restore.username"
            placeholder="+998 _ _  _ _ _  _ _  _ _"
          ></custom-input>
        </b-col>
      </b-row>
      <div>
        <b-row>
          <b-col>
            <p class="p-2">
              {{
              $t("newpasswordcreate", { phonenumber: Restore.phonenumber })
              }}
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <custom-input
              type="password"
              :placeholder="$t('*******')"
              v-model="Restore.newpassword"
              :label="$t('password')"
            ></custom-input>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col>
            <custom-input
              type="password"
              :placeholder="$t('*******')"
              v-model="Restore.confirmedpassword"
              :label="$t('confirmpassword')"
            ></custom-input>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col>
            <custom-input
              v-if="Restore.isRestore && isSuccessSms"
              v-model="Restore.smscode"
              :placeholder="$t('0000')"
              :label="$t('smskod')"
            ></custom-input>
          </b-col>
        </b-row>
      </div>
      <b-row class="mt-3">
        <b-col>
          <!-- <custom-button v-if="!Restore.isRestore" @click.native="RestorePassword" block> <b-spinner v-if="RestoreLoading" small style="margin-right:8px"></b-spinner> {{ $t('Smskodloish') }} </custom-button> -->
          <b-button
            variant="primary"
            pill
            v-if="Restore.isRestore && isSuccessSms"
            @click="RestorePasswordConfirm"
            block
          >
            <b-spinner v-if="RestoreLoading" small style="margin-right: 8px"></b-spinner>
            {{ $t("restore") }}
          </b-button>
          <b-button
            variant="primary"
            pill
            v-if="!Restore.isRestore && !isSuccessSms"
            @click="RestorePassword"
            block
          >
            <b-spinner v-if="smsLoading" small style="margin-right: 8px"></b-spinner>
            {{ $t("Smskodloish") }}
          </b-button>
        </b-col>
      </b-row>
      <b-row></b-row>
    </b-modal>
  </nav>
  <!-- Navbar End -->
</template>
<script>
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  ArrowRightCircleIcon
} from "vue-feather-icons";
import CustomInput from "@/views/components/CustomInput";
import CustomDatepicker from "@/views/components/CustomDatepicker";
import {
  BIconX,
  BIconCaretDown,
  BIconLock,
  BIconFileEarmark,
  BIconPersonPlus,
  BIconHouse,
  BIconBell,
  BIconFileEarmarkMedical
} from "bootstrap-vue";
import AccountService from "../../services/account.service";
import WebNotifyService from "../../services/webnotify.service";
import MainPageService from "../../services/mainpage.service";
export default {
  props: {
    navbarcolor: {
      type: Boolean,
      default: false
    }
  },
  components: {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
    ArrowRightCircleIcon,
    CustomInput,
    BIconX,
    BIconCaretDown,
    BIconLock,
    BIconFileEarmark,
    BIconPersonPlus,
    BIconHouse,
    BIconBell,
    BIconFileEarmarkMedical,
    CustomDatepicker
  },
  data() {
    return {
      Account: {
        phonenumber: "",
        password: "",
        passwordconfirm: "",
        smscode: ""
      },
      showSMSTime: false,
      GetData: {},
      PinflModal: false,
      isSuccessSms: false,
      LogOutModal: false,
      smsLoading: false,
      LogOutLoading: false,
      isToken: false,
      filter: {
        isPassword: null,
        isSmsCode: false,
        isSmsForRegister: false,
        isSms: false,
        admissiontypeid: 0
      },
      checkAccountLoading: false,
      SignLoading: false,
      language: "",
      lang: localStorage.getItem("locale") || "ru",
      NotifyList: [],
      filterlang: {
        languageId: localStorage.getItem("locale") || "ru"
      },
      Person: {},
      ForgotPasswordModal: false,
      CheckPerson: {
        pinfl: "",
        foreignStudent: false,
        hemisId: "",
        passport: ""
      },
      loading: false,
      secCount: 60,
      minCount: 2,
      checkStudent: false,
      countDown: 60,
      immediate: false,
      Restore: {
        username: "",
        isRestore: false,
        phonenumber: "",
        smscode: "",
        newpassword: "",
        confirmedpassword: ""
      }
    };
  },
  created() {
    this.isToken = localStorage.getItem("user_info");
    if (this.isToken) {
      this.Refresh();
    }
    // AccountService.GetUserInfo(false)
    //   .then(res => {
    //     this.Person = res.data.person;
    //     this.EduInfo = res.data.eduInfo;
    //   })
    //   .catch(error => {
    //     this.SincLoading = false;
    //     if (error.response.data.status == 500) {
    //       this.makeToast(this.$t("errormessage500"), "error");
    //     } else {
    //       this.makeToast(error.response.data, "error");
    //     }
    //   });
  },
  computed: {
    getUserName() {
      return localStorage.getItem("user_info")
        ? JSON.parse(localStorage.getItem("user_info")).shortName
        : "";
    }

    // isChooseChild(){
    //     return localStorage.getItem('user_info') ?  JSON.parse(localStorage.getItem('user_info')).CanSearchChild : ''
    // },
    // isCourtApplication(){
    //     return localStorage.getItem('user_info') ?  JSON.parse(localStorage.getItem('user_info')).CanViewCourtApplication : ''
    // }
  },
  mounted: () => {
    window.onscroll = function() {
      onwindowScroll();
    };
    var navbar = document.getElementById("navbar");
    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }
    }
  },
  methods: {
    ChangeSmsCode() {
      if (this.Account.smscode.length > 0) {
        this.showSMSTime = true;
      }
    },
    Refresh() {
      // MainPageService.GetInfo()
      //   .then((res) => {
      //     this.GetData = res.data;
      //     this.loading = false;
      //   })
      //   .catch((error) => {
      //     if (error.response.data.status == 500) {
      //       this.makeToast(this.$t("errormessage500"), "error");
      //       this.loading = false;
      //     } else {
      //       this.makeToast(error.response.data, "error");
      //       this.loading = false;
      //     }
      //   });
    },
    OpenForgotPass() {
      this.ForgotPasswordModal = true;
      (this.Restore = {
        username: "",
        isRestore: false,
        phonenumber: "",
        smscode: "",
        newpassword: "",
        confirmedpassword: ""
      }),
        (this.Restore.username = this.Account.phonenumber);
    },
    sendsmsrestore() {
      this.filter.isSms = false;
      this.filter.isSmsForRegister = false;
      this.immediate = true;
    },
    // GetNotifyInfo() {
    //   WebNotifyService.GetUnReadMessages().then((res) => {
    //     this.NotifyList = res.data.result;
    //   });
    // },
    GotoCabinet() {
      this.$router.push({ name: "MyInfo" });
      this.$store.state.isOpenSidebar = false;
    },
    GoChooseChild() {
      this.$router.push({ name: "ChooseChild" });
      this.$store.state.isOpenSidebar = false;
    },
    GoCourtApplication() {
      this.$router.push({ name: "CourtApplication" });
      this.$store.state.isOpenSidebar = false;
    },
    GotoApplication() {
      this.$router.push({ name: "Application" });
      this.$store.state.isOpenSidebar = false;
    },
    OpenLogoutModal() {
      this.LogOutModal = true;
    },
    Logout() {
      this.LogOutLoading = true;
      AccountService.Logout().then(res => {
        localStorage.clear();
        this.LogOutLoading = false;
        this.LogOutModal = false;
        if (this.$route.name !== "Home") {
          this.LogOutLoading = false;
          this.$router.push("/");
        } else {
          this.LogOutLoading = false;
          window.location.reload();
        }
      });
      this.$store.state.isOpenSidebar = false;
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
    toggleMenu() {
      document.getElementById("navbarCollapse").classList.toggle("show");
    },
    ChangePhone() {
      this.Account.password = "";
      this.Account.passwordconfirm = "";
      this.Account.smscode = "";
      this.filter.isPassword = null;
      this.filter.isSmsCode = false;
      this.filter.isSmsForRegister = false;
      this.filter.isSms = false;
    },
    SignIn() {
      this.SignLoading = true;
      if (!this.filter.isSmsCode) {
        this.Account.username = this.Account.phonenumber;
        AccountService.SignIn(this.Account)
          .then(res => {
            this.SignLoading = false;
            if (!res.data.trustedDevice) {
              this.filter.isSmsCode = true;
            } else {
              localStorage.setItem("user_info", JSON.stringify(res.data.user));
              this.$router.replace("/myinfo", () => {});
              this.$store.state.isOpenSidebar = false;
            }

            // this.filter.isSmsCode = res.data.trusteddevice
          })
          .catch(error => {
            this.SignLoading = false;
            if (error.response.data.status == 500) {
              this.makeToast(this.$t("errormessage500"), "error");
            } else {
              this.makeToast(error.response.data, "error");
            }
          });
      } else {
        AccountService.SignInTwoFactor(this.Account)
          .then(res => {
            this.SignLoading = false;
            localStorage.setItem("user_info", JSON.stringify(res.data.user));
            this.$router.push({ name: "MyInfo" });
            this.$store.state.isOpenSidebar = false;
          })
          .catch(error => {
            if (error.response.data.status == 500) {
              this.makeToast(this.$t("errormessage500"), "error");
            } else {
              this.makeToast(error.response.data, "error");
            }
            this.SignLoading = false;
          });
      }
    },
    isCheckAccount() {
      if (this.Account.phonenumber.length === 17) {
        this.checkAccountLoading = true;
        this.immediate = true;
        AccountService.IsCheckAccount(this.Account)
          .then(res => {
            this.checkAccountLoading = false;
            if (res.data.success) {
              this.filter.isPassword = true;
            }
            if (!res.data.success) {
              this.filter.isPassword = false;
            }
          })
          .catch(error => {
            this.checkAccountLoading = false;
            // this.makeToast(error.response.data, "error");
            if (error.response.data.status == 500) {
              this.makeToast(this.$t("errormessage500"), "error");
            } else {
              this.makeToast(error.response.data, "error");
            }
          });
      }
    },
    countDownTimer() {
      if (this.countDown == 0 && this.minCount != 0) {
        this.minCount = this.minCount - 1;
        this.countDown = 60;
      }
      if (this.countDown == 0 && this.minCount == 0) {
        this.immediate = true;
      }
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
    },
    SearchbyEGov() {
      if (!this.CheckPerson.foreignStudent) {
        if (
          this.CheckPerson.pinfl === "" ||
          this.CheckPerson.pinfl === null ||
          this.CheckPerson.pinfl === undefined ||
          this.CheckPerson.pinfl === 0
        ) {
          this.makeToast(this.$t("enterpinfl"), "error");
          return false;
        }
        if (
          this.CheckPerson.passport === "" ||
          this.CheckPerson.passport === 0 ||
          this.CheckPerson.passport === undefined ||
          this.CheckPerson.passport === null
        ) {
          this.makeToast(this.$t("enterfiltpassport"), "error");
          return false;
        }
      }
      if (this.CheckPerson.foreignStudent) {
        if (
          this.CheckPerson.hemisId === "" ||
          this.CheckPerson.hemisId === null ||
          this.CheckPerson.hemisId === undefined ||
          this.CheckPerson.hemisId === 0
        ) {
          this.makeToast(this.$t("enterhemisId"), "error");
          return false;
        }
      }
      this.SearchLoading = true;
      AccountService.IsStudent(this.CheckPerson)
        .then(res => {
          this.checkStudent = res.data;
          this.SearchLoading = false;
          if (this.checkStudent === false) {
            this.SignLoading = false;
            this.makeToast(this.$t("studentNotDTMBaza"), "error");
            return false;
          }
          AccountService.SendSMSCode(this.Account)
            .then(res => {
              this.SignLoading = false;
              // if(res.data.success){
              this.filter.isSmsForRegister = true;
              this.filter.isSms = true;
              this.immediate = false;
              // }
            })
            .catch(error => {
              this.immediate = true;
              this.SignLoading = false;
              // this.makeToast(error.response.data, "error");
              if (error.response.data.status == 500) {
                this.makeToast(this.$t("errormessage500"), "error");
              } else {
                this.makeToast(error.response.data, "error");
              }
            });
        })
        .catch(error => {
          this.SearchLoading = false;
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
        });
    },
    GiveSmsCode() {
      this.immediate = true;
      if (
        this.Account.password === "" ||
        this.Account.password === null ||
        this.Account.password === undefined ||
        this.Account.password === 0
      ) {
        this.makeToast(this.$t("enterpassword"), "error");
        return false;
      }
      if (
        this.Account.passwordconfirm === "" ||
        this.Account.passwordconfirm === 0 ||
        this.Account.passwordconfirm === undefined ||
        this.Account.passwordconfirm === null
      ) {
        this.makeToast(this.$t("enterpasswordconfirm"), "error");
        return false;
      }
      if (this.Account.password.length < 4) {
        this.makeToast(this.$t("passwordlengthNoCorrect"), "error");
        return false;
      }
      if (!this.CheckPerson.foreignStudent) {
        if (this.CheckPerson.pinfl.length != 14) {
          this.makeToast(this.$t("pinflnotfull"), "error");
          return false;
        }
      }
      this.SignLoading = true;
      this.SearchbyEGov();
      this.countDownTimer();
      this.Account.passport = this.CheckPerson.passport;
      this.Account.pinfl = this.CheckPerson.pinfl;
    },
    async SendSmsCode() {
      this.SignLoading = true;

      if (!this.filter.isSmsForRegister) {
        AccountService.SendSMSCode(this.Account)
          .then(res => {
            this.SignLoading = false;
            if (res.data.success) {
              this.filter.isSmsForRegister = true;
              this.filter.isSms = true;
            }
          })
          .catch(error => {
            this.SignLoading = false;
            // this.makeToast(error.response.data, "error");
            if (error.response.data.status == 500) {
              this.makeToast(this.$t("errormessage500"), "error");
            } else {
              this.makeToast(error.response.data, "error");
            }
          });
      } else {
        if (this.Account.smscode.length === 4) {
          //     this.Account.serianumber = this.CheckPerson.serianumber;
          // this.Account.pinfl = this.CheckPerson.pinfl;
          if (localStorage.getItem("locale") == "uz_latn") {
            this.lang = "uz-latn";
          } else if (localStorage.getItem("locale") == "ru") {
            this.lang = "ru";
          }
          await AccountService.CheckSMSCode(this.lang, {
            smscode: this.Account.smscode,
            passport: this.CheckPerson.passport,
            pinfl: this.CheckPerson.pinfl,
            hemisId: this.CheckPerson.hemisId,
            foreignStudent: this.CheckPerson.foreignStudent
          })
            .then(res => {
              // this.$router.push({ name: "Oferta" });
              // this.$router.push({ name: "Cabinet" });
              AccountService.GetUserInfo(false)
                .then(res => {
                  // localStorage.setItem("user_info", JSON.stringify(res.data));
                  //   this.isToken = localStorage.getItem("user_info");
                  // this.$store.state.isOpenSidebar = false;
                  localStorage.setItem("user_info", JSON.stringify(res.data));
                  console.log(
                     JSON.stringify(res.data)
                  );
                  this.$router.push({ name: "MyInfo" });
                  this.$store.state.isOpenSidebar = false;
                  this.Person = res.data.person;
                })
                .catch(error => {
                  // this.makeToast(error.response.data, "error");
                  if (error.response.data.status == 500) {
                    this.makeToast(this.$t("errormessage500"), "error");
                  } else {
                    this.makeToast(error.response.data, "error");
                  }
                });

              // this.isToken = localStorage.getItem("user_info");
              // this.$store.state.isOpenSidebar = false
              this.SignLoading = false;
            })
            .catch(error => {
              // this.makeToast(error.response.data, "error");
              if (error.response.data.status == 500) {
                this.makeToast(this.$t("errormessage500"), "error");
              } else {
                this.makeToast(error.response.data, "error");
              }
              this.SignLoading = false;
            });
        } else {
          this.SignLoading = false;
          this.makeToast(this.$t("entersmscodesentnumber"), "error");
        }
      }
    },
    ChangeLang(lang) {
      this.lang = lang;
      localStorage.setItem("locale", lang);
      if (lang === "uz_latn") {
        this.filterlang.languageId = 3;
      }
      if (lang === "uz_cyrl") {
        this.filterlang.languageId = 2;
      }
      if (lang === "ru") {
        this.filterlang.languageId = 1;
      }
      if (!this.isToken) {
        window.location.reload();
      }
      if (this.isToken) {
        AccountService.SetUserLanguage(this.filterlang)
          .then(res => {
            window.location.reload();
          })
          .catch(error => {
            // this.makeToast(error.response.data, "error");
            if (error.response.data.status == 500) {
              this.makeToast(this.$t("errormessage500"), "error");
            } else {
              this.makeToast(error.response.data, "error");
            }
          });
      }
      // if (!this.isToken) {
      //   AccountService.SetUserLanguage(this.filterlang)
      //     .then((res) => {
      //       window.location.reload();
      //     })
      //     .catch((error) => {
      //       this.makeToast(error.response.data, "error");
      //     });
      // }
    },
    clear() {
      this.Account = {
        phonenumber: "",
        password: "",
        passwordconfirm: "",
        smscode: ""
      };
      this.filter = {
        isPassword: null,
        isSmsCode: false,
        isSmsForRegister: false,
        isSms: false
      };
    },
    GetNotifyCount() {
      WebNotifyService.GetUnReadMessagesCount().then(res => {
        this.notifycount = res.data.result;
      });
    },
    RestorePasswordConfirm() {
      this.RestoreLoading = true;
      AccountService.RestorePasswordConfirm(this.Restore)
        .then(res => {
          this.RestoreLoading = false;
          this.ForgotPasswordModal = false;
          this.makeToast(this.$t("PasswordChangedSuccess"), "success");
        })
        .catch(error => {
          this.RestoreLoading = false;
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
        });
    },
    RestorePassword() {
      this.smsLoading = true;
      this.isSuccessSms = true;
      AccountService.RestorePassword(this.Restore)
        .then(res => {
          this.Restore.isRestore = true;
          this.Restore.phonenumber = res.data.phoneNumber;
          this.smsLoading = false;
        })
        .catch(error => {
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
          this.smsLoading = false;
        });
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.state.isOpenSidebar = false;
    this.isToken = localStorage.getItem("user_info");
    next();
    // alert(this.isToken);
  },
  times(value) {
    if (value > 0) {
      setTimeout(() => {
        this.secCount--;
      }, 1000);
    }
    if (this.secCount == 0 && this.minCount != 0) {
      this.minCount = this.minCount - 1;
      this.secCount = 60;
    }
    if (this.secCount == 0 && this.minCount == 0) {
      this.immediate = true;
    }
    this.immediate = true;
  },
  watch: {
    "$store.state.isOpenSidebar": {
      handler(newValue) {
        this.clear();
      }
    },
    $route(to, from) {
      this.isToken = localStorage.getItem("user_info");
      if (this.isToken) {
        this.GetNotifyCount();
      }
    }
    // secCount: {
    //         handler(value) {
    //          //  if(this.immediate == false){
    //            // console.log(value)
    //          // if(this.immediate == true){
    //               if (value > 0) {
    //                 setTimeout(() => {
    //                     this.secCount--;
    //                 }, 1000);
    //             }
    //               if (this.secCount == 0 && this.minCount != 0){
    //                    this.minCount = this.minCount -1
    //                    this.secCount = 60
    //         }
    //         if(this.secCount == 0 && this.minCount == 0){
    //           this.immediate= true
    //         }
    //         //   }
    //          //  }
    //         },
    //         immediate: true // This ensures the watcher is triggered upon creation
    //     }
  }
};
</script>
<style scoped>
.img-fluid {
    max-width: 112%;
    height: auto;
}
</style>
