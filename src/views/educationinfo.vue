<template>
  <div class="my-img">
    <b-overlay :show="Loading">
      <div class="my-info mainApplication">
        <div class="">
          <b-alert show dismissible fade class="alert-edu">
            Ta'lim ma'lumotlaringizni tekshiring! Xatolik mavjud bo'lsa fakultet dekanatiga murojaat qiling! Fakultet dekanati tomonidan ta'lim ma'lumotlaringizga tuzatishlar kiritilgandan so'ng sinxronizatsiya tugmasini bosing.
          </b-alert>
        </div>
        <div class="mt-4">
          <b-row v-if="!!EduInfo">
            <b-col sm="12" md="6" lg="6">
              <h4 class="text-center">Ta'lim ma’lumotlari</h4>
            </b-col>
            <b-col sm="12" md="6" lg="6" class="text-right">
              <b-button
                block
                @click="SinxInfo()"
                variant="outline-primary"
                class="text-center"
                :disabled="SincLoading"
              >
                <b-icon-arrow-clockwise v-if="!SincLoading" />
                <b-spinner small v-if="SincLoading" />
                <span class="text-right" style="margin-left: 8px;">{{ $t("SincMyInfo") }}</span>
              </b-button>
            </b-col>
          </b-row>
          <hr class="line">
          <b-row class="mt-4">
            <div class="edu-info">
              <b-list-group>
                <b-list-group-item class="edu-list-group">
                  <span class="edu-title">O‘quv muassasasi nomi:</span>
                  <span class="edu-name"><b>{{ EduInfo.organization }}</b></span>
                </b-list-group-item>
                <b-list-group-item class="edu-list-group">
                  <span class="edu-title">Fakultet:</span>
                  <span class="edu-name"><b>{{ EduInfo.eduFaculty }}</b></span>
                </b-list-group-item>
                <b-list-group-item class="edu-list-group">
                  <span class="edu-title">Ta’lim yo‘nalish:</span>
                  <span class="edu-name"><b>{{ EduInfo.eduSpeciality }}</b></span>
                </b-list-group-item>
                <b-list-group-item class="edu-list-group">
                  <span class="edu-title">Ta’lim shakli:</span>
                  <span class="edu-name"><b>{{ EduInfo.eduForm }}</b></span>
                </b-list-group-item>
                <b-list-group-item class="edu-list-group">
                  <span class="edu-title">Ta’lim turi:</span>
                  <span class="edu-name"><b>{{ EduInfo.eduType }}</b></span>
                </b-list-group-item>
                <b-list-group-item class="edu-list-group">
                  <span class="edu-title">Ta’lim bosqichi:</span>
                  <span class="edu-name"><b>{{ EduInfo.eduLevel }}</b></span>
                </b-list-group-item>
                <b-list-group-item class="edu-list-group">
                  <span class="edu-title">Ta’lim tili:</span>
                  <span class="edu-name"><b>{{ EduInfo.eduLanguage }}</b></span>
                </b-list-group-item>
                <b-list-group-item class="edu-list-group">
                  <span class="edu-title">HEMIS ID:</span>
                  <span class="edu-name"><b>{{ EduInfo.hemisExternalId }}</b></span>
                </b-list-group-item>
                <b-list-group-item class="edu-list-group">
                  <span class="edu-title">Shartnoma shakli:</span>
                  <span class="edu-name"><b>{{ EduInfo.eduContractTypeName }}</b></span>
                </b-list-group-item>
              </b-list-group>
            </div>
          </b-row>
        </div>
      </div>
      <b-modal
        v-model="MyInfoModal"
        size="md"
        hide-footer
        hide-header
        no-close-on-backdrop
        centered
      >
        <b-row>
          <b-col class="d-flex justify-content-between align-items-center">
            <span> {{ $t("SincMyInfo") }} </span>
            <!-- <img class="cursor-pointer"  src="/images/design/fill-close.svg" alt=""> -->
            <b-icon-x
              scale="2.5"
              style="cursor: pointer; z-index: 9"
              @click="CloseMyInfoModal"
            ></b-icon-x>
          </b-col>
        </b-row>
        <div>
          <b-row class="mt-3">
            <b-col md="12" sm="12">
              <custom-input
                v-model="MyInfo.pinfl"
                :placeholder="$t('12345678901234')"
                :disabled="true"
                :label="$t('pinfl')"
              ></custom-input>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col md="12" sm="12">
              <custom-datepicker
                @keyup="BindValue"
                :label="$t('passportDate')"
                placeholder="00.00.0000"
                v-model="MySicData.passportDate"
              >
              </custom-datepicker>
            </b-col>
          </b-row>
        </div>
        <b-row class="mt-3">
          <b-col>
            <!-- <custom-button v-if="!Restore.isRestore" @click.native="RestorePassword" block> <b-spinner v-if="RestoreLoading" small style="margin-right:8px"></b-spinner> {{ $t('Smskodloish') }} </custom-button> -->
            <b-button variant="primary" pill @click="SinxInfo" block>
              <b-spinner
                v-if="SincMyLoading"
                small
                style="margin-right: 8px"
              ></b-spinner>
              {{ $t("confirm") }}
            </b-button>
          </b-col>
        </b-row>
        <b-row> </b-row>
      </b-modal>
    </b-overlay>
  </div>
</template>

<script>
import Navbar from "../layouts/components/navbar.vue";
import Footer from "../layouts/components/footer.vue";
import CustomSelect from "./components/CustomSelect.vue";
import CustomInput from "./components/CustomInput.vue";
import CustomDatepicker from "@/views/components/CustomDatepicker";
import CustomLabel from "./components/CustomLabel.vue";
import AccountService from "../services/account.service";
import { BIconChevronLeft, BIconArrowClockwise, BIconX, } from "bootstrap-vue";
export default {
  components: {
    Navbar,
    Footer,
    CustomSelect,
    CustomInput,
    CustomDatepicker,
    CustomLabel,
    BIconChevronLeft,
    BIconArrowClockwise,
    BIconX,
  },
  data() {
    return {
      MyInfo: {},
      Person: {},
      EduInfo: {},
      dtminfo: {},
      MySicData: {
        pinfl: "",
        passportDate: "",
      },
      SincMyLoading: false,
      SincLoading: false,
      MyInfoModal: false,
      ImgStudent: "",
      FiltPassport: "",
      lang: localStorage.getItem("locale") || "uz_latn",
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 175,
        height: 175,
        class: "m1",
      },
      Loading: false,
      SaveLoading: false,
    };
  },
  created() {
    this.Loading = true;
    this.Refresh();
  },
  computed: {
    calcAge() {
      let currentDate = new Date() ;
      // let birthDate = this.Person.birthDate;
      // let difference = currentDate - birthDate;
      console.log(currentDate);
    }
  },
  methods: {
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
    BindValue(data) {
      this.MySicData.passportDate = data;
    },
    OpenSinxMyInfo() {
      this.MyInfoModal = true;
    },
    CloseMyInfoModal() {
      this.MyInfoModal = false;
      this.MySicData.passportDate = "";
    },
    Refresh() {
      AccountService.GetUserInfo(false)
        .then((res) => {
          this.MyInfo = res.data;
          this.Person = res.data.person;
          this.dtminfo = res.data.dtmInfo;
          this.Loading = false;
          if (res.data.eduInfo != undefined) {
            this.EduInfo = res.data.eduInfo;
          }
        })
        .catch((error) => {
          this.Loading = false;
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
        });
    },
    SinxInfo() {
      (this.SincLoading = true),
        AccountService.GetUserInfo(true)
          .then((res) => {
            (this.SincLoading = false), (this.MyInfo = res.data);
            this.Person = res.data.person;
            this.EduInfo = res.data.eduInfo;
            this.SincLoading = false;
            this.makeToast(this.$t("RefreshSuccess"), "success");
          })
          .catch((error) => {
            this.SincLoading = false;
            if (error.response.data.status == 500) {
              this.makeToast(this.$t("errormessage500"), "error");
            } else {
              this.makeToast(error.response.data, "error");
            }
            // this.makeToast(error.response.data, "error");
          });
    },
  },
};
</script>

<style lang="scss">
//   .my-img{
//     min-height: 100vh;
//     background: rgb(2,0,36);
// background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,15,125,1) 0%, rgba(104,104,176,1) 0%, rgba(3,250,251,0.13489145658263302) 96%);
// }
.thumbnail {
  transition: transform 0.5s;
}
.image-container {
  border-radius: 12px;
}

.thumbnail:hover {
  transform: scale(1.05);
}
</style>
