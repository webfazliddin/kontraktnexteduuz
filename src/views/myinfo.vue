<template>
  <div class="my-img">
    <b-overlay :show="Loading">
      <div class="my-info mainApplication">
        <div class="">
          <b-alert show dismissible fade class="alert">
            Ushbu bo‘limda foydalanuvchining biografik ma'lumoti, doimiy va vaqtinchalik ro‘yxatdan o‘tgan manzili shuningdek pasport ma'lumotlari aks etadi. Mazkur ma'lumotlar Davlat personallashtirish markazi va Ichki ishlar vazirligining axborot tizimlaridan real vaqt rejimida idoralararo elektron hamkorlik qilish yo‘li bilan olinadi.
          </b-alert>
        </div>
        <div class="mt-4">
          <b-row v-if="!!EduInfo">
            <b-col sm="12" md="6" lg="6">
              <h4 class="text-center">Shaxsiy ma’lumotlar</h4>
            </b-col>
            <b-col sm="12" md="6" lg="6" >
              <b-button
                block
                @click="OpenSinxMyInfo()"
                variant="outline-primary"
                class="text-center "
                :disabled="SincMyLoading"
              >
                <b-icon-arrow-clockwise
                  v-if="!SincMyLoading"
                  style="font-size: 35px" />
                <b-spinner small v-if="SincMyLoading" />
                <span class="text-right" style="margin-left: 8px;">{{ $t("SincMyInfo") }}</span>
              </b-button>
            </b-col>
          </b-row>
          <hr class="line">
          <b-row class="mt-4">
            <b-col sm="12" lg="3" class="mt-3 mb-4">
              <fieldset>
                <b-row>
                  <b-col sm="12" md="12" lg="12" class="textImgView">
                    <div class="image-container text-center">
                      <b-img
                        thumbnail
                        fluid
                        style="width: 200px; height: 220px"
                        class="thumbnail ml-auto mr-auto"
                        :src="`data:image/png;base64,${Person.photo}`"
                      />
                    </div>
                  </b-col>
                </b-row>
              </fieldset>
              <!-- </div> -->
            </b-col>
            <b-col sm="12" lg="9">
              <h4 class="fullname text-center">{{ MyInfo.fullName }}</h4> 
              <div class="custom-info-dark">
                <span class="info-label">{{ $t('gender_and_dateofbirth') }}:</span>
                <span class="info-name">{{ Person.gender }}, {{ calcAge }} yosh ({{ Person.birthDate }})</span>
              </div>
              <div class="custom-info-white">
                <span class="info-label">{{ $t('Citizenship') }}</span>
                <span class="info-name">{{ Person.citizenship ? Person.citizenship : '-' }}</span>
              </div>
              <div class="custom-info-dark">
                <span class="info-label">{{ $t('nationality') }}</span>
                <span class="info-name">{{ Person.nationality ? Person.nationality : '-' }}</span>
              </div>
              <div class="custom-info-white">
                <span class="info-label">{{ $t('permanentAddress(region)') }}</span>
                <span class="info-name">{{ Person.livingRegion ? Person.livingRegion : '-' }}, {{ Person.livingDistrict }}</span>
              </div>
              <div class="custom-info-dark">
                <span class="info-label">{{ $t('permanentAddress') }}</span>
                <span class="info-name">{{ Person.citizenship }}, {{ Person.livingRegion }}, {{ Person.livingDistrict }}</span>
              </div>
              <div class="custom-info-white">
                <span class="info-label">{{ $t('pinfl') }}</span>
                <span class="info-name">{{ MyInfo.pinfl ? MyInfo.pinfl : '-' }}</span>
              </div>
              <div class="custom-info-dark">
                <span class="info-label">{{ $t('phonenumber') }}</span>
                <span class="info-name">{{ MyInfo.userName ? MyInfo.userName : '-' }}</span>
              </div>
            </b-col>
          </b-row>
          <b-row class="mt-4"></b-row>
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
              <custom-input
                      v-mask="'AA#######'"
                      style="width: 100%"
                      :label="$t('checkPassport')"
                      v-model="MySicData.passport"
                      placeholder="AA9999999"
                    ></custom-input>
            </b-col>
          </b-row>
        </div>
        <b-row class="mt-3">
          <b-col>
            <b-button variant="primary" pill @click="SinxMyInfo" block>
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
        passport:""
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
    // BindValue(data) {
    //   this.MySicData.passportDate = data;
    // },
    OpenSinxMyInfo() {
      this.MyInfoModal = true;
    },
    CloseMyInfoModal() {
      this.MyInfoModal = false;
      this.MySicData.passport = "";
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
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
        });
    },
    SinxMyInfo() {
      if (
        this.MySicData.passport === "" ||
        this.MySicData.passport === 0 ||
        this.MySicData.passport === undefined ||
        this.MySicData.passport === null
      ) {
        this.makeToast(this.$t("enterfiltpassport"), "error");
        return false;
      }
      (this.SincMyLoading = true), (this.MySicData.pinfl = this.MyInfo.pinfl);
      AccountService.SyncFromGsp(this.MySicData)
        .then((res) => {
          this.Refresh();
          ((this.SincMyLoading = false));
          this.MyInfoModal = false;
            this.makeToast(this.$t("RefreshSuccess"), "success");
        })
        .catch((error) => {
          this.SincMyLoading = false;
          this.MyInfoModal = false;
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
          // this.makeToast(error.response.data, "error");
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