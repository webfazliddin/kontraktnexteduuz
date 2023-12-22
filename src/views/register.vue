<template>
  <div class="my-img">
    <Navbar />
    <div class="container" style="margin-top: 100px">
      <div>
        <b-row>
          <b-col>
            <h1 class="registerText">{{ $t("personaldata") }}</h1>
          </b-col>
        </b-row>
        <b-row style="margin-top: 16px">
          <b-col sm="12" md="3">
            <custom-select
              class="registerSelectView"
              :label="$t('documenttype')"
              @input="ChangeIdentityDocument"
              v-model="filter.identitydocumentid"
              :options="IdentityDocumentList"
            ></custom-select>
          </b-col>

          <b-col md="3" sm="12">
            <custom-input
              class="registerSelectView"
              v-if="filter.identitydocumentid != 4"
              v-mask="'AA#######'"
              placeholder="AA7777777"
              v-model="filter.FiltPassport"
              :label="$t('FiltPassport')"
            ></custom-input>
          </b-col>
          <b-col sm="12" md="3">
            <custom-input
              class="registerSelectView"
              placeholder="12345678901234"
              v-mask="'NNNNNNNNNNNNNN'"
              :label="$t('pinfl')"
              v-model="filter.pinfl"
            ></custom-input>
          </b-col>
          <b-col sm="6" :md="3" v-if="filter.identitydocumentid == 4">
            <custom-select
              class="registerInputView"
              :label="$t('gender')"
              v-model="Parent.genderid"
              :options="GenderList"
            ></custom-select>
          </b-col>
          <b-col md="3" sm="12" v-if="filter.identitydocumentid != 4">
            <b-button
              class="registerButtonView"
              block
              variant="outline-primary"
              size="lg"
              @click="SearchbyEGov"
            >
              <p class="m-0 p-0 p-1">
                <b-spinner v-if="SearchLoading" small></b-spinner>
                {{ $t("search") }}
              </p>
            </b-button>
          </b-col>
        </b-row>
        <b-row v-if="!!Parent.nameLatin">
          <b-col sm="12" md="3" lg="3">
            <b-row>
              <b-col sm="12" md="12" lg="12" class="mt-3 text-center">
                <div class="image-container">
                  <b-img
                    style="width: 230px; height: 230px"
                    class="thumbnail ml-auto mr-auto"
                    :src="`data:image/png;base64,${Parent.photo}`"
                  />
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col sm="12" md="9" lg="9">
            <b-row class="mt-4">
              <b-col sm="12" :md="4">
                <custom-input
                  :placeholder="$t('familyname')"
                  v-model="Parent.surnameLatin"
                  :disabled="filter.identitydocumentid != 2"
                  :label="$t('familyname')"
                ></custom-input>
              </b-col>
              <b-col sm="12" :md="4">
                <custom-input
                  :placeholder="$t('firstname')"
                  v-model="Parent.nameLatin"
                  :disabled="filter.identitydocumentid != 2"
                  :label="$t('firstname')"
                ></custom-input>
              </b-col>
              <b-col sm="12" :md="4">
                <custom-input
                  :placeholder="$t('lastname')"
                  v-model="Parent.patronymLatin"
                  :disabled="filter.identitydocumentid != 2"
                  :label="$t('lastname')"
                ></custom-input>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col sm="12" md="4">
                <custom-input
                  placeholder="12345678901234"
                  v-mask="'##############'"
                  v-model="Parent.pinfl"
                  :label="$t('pinfl')"
                ></custom-input>
              </b-col>
              <b-col sm="12" md="4">
                <custom-date-picker
                  :disabled="filter.identitydocumentid != 2"
                  :label="$t('dateofbirth')"
                  placeholder="00.00.0000"
                  v-model="Parent.birthDate"
                ></custom-date-picker>
              </b-col>
              <b-col sm="12" md="4">
                <custom-input
                  :disabled="filter.identitydocumentid != 2"
                  placeholder=""
                  v-model="Parent.nationality"
                  :label="$t('nationality')"
                ></custom-input>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col sm="12" md="4">
                <custom-input
                  :placeholder="$t('citizenship')"
                  v-model="Parent.citizenship"
                  :label="$t('citizenship')"
                  :disabled="filter.identitydocumentid != 2"
                ></custom-input>
              </b-col>
              <b-col sm="12" md="4">
                <custom-input
                  :disabled="filter.identitydocumentid != 2"
                  :placeholder="$t('gender')"
                  v-model="Parent.gender"
                  :label="$t('gender')"
                ></custom-input>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row v-if="filter.identitydocumentid == 4">
          <b-col sm="12" md="6" class="mt-3">
            <custom-select
              :label="$t('oblast')"
              v-model="Parent.oblastid"
              :options="OblastList"
              @input="ChangeOblast"
            ></custom-select>
          </b-col>
          <b-col sm="12" md="6" class="mt-3">
            <custom-select
              :label="$t('region')"
              v-model="Parent.regionid"
              :options="RegionList"
            ></custom-select>
          </b-col>
          <b-col sm="12" class="mt-3">
            <custom-input
              :placeholder="$t('address')"
              v-model="Parent.address"
              :label="$t('address')"
            ></custom-input>
          </b-col>
        </b-row>
        <b-row
          v-if="!!Parent.nameLatin"
          style="margin-bottom: 50px; margin-top: 16px"
        >
          <b-col class="d-flex justify-content-end">
            <b-button
              class="registerButtonView"
              variant="primary"
              @click="GotoApplication"
            >
              <p class="m-0 p-0 p-1">
                <b-spinner v-if="SaveLoading" small></b-spinner>
                {{ $t("next") }}
              </p>
            </b-button>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../layouts/components/navbar.vue";
import CustomSelect from "./components/CustomSelect.vue";
import CustomInput from "./components/CustomInput.vue";
import CustomDatePicker from "./components/CustomDatepicker.vue";
import CustomLabel from "./components/CustomLabel.vue";
import AccountService from "../services/account.service";
import HelperService from "../services/helper.service";
export default {
  components: {
    Navbar,
    CustomSelect,
    CustomInput,
    CustomDatePicker,
    CustomLabel,
  },
  data() {
    return {
      filter: {
        docseries: "",
        docnumber: "",
        dateofbirth: "",
        identitydocumentid: 1,
        pinfl: "",
        kinshipdegreeid: 0,
        FiltPassport: "",
      },
      IdentityDocumentList: [
        { value: 1, text: this.$t("passport") },
        { value: 2, text: this.$t("foreignpeople") },
      ],
      Parent: {},
      SearchLoading: false,
      lang: localStorage.getItem("locale") || "uz_latn",

      KinShipDegreeList: [],
      SaveLoading: false,
      GenderList: [],
      OblastList: [],
      RegionList: [],
    };
  },
  created() {
    HelperService.GetGenderList().then((res) => {
      this.GenderList = res.data;
    });
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
    ChangeOblast() {
      if (!!this.Parent.oblastid) {
        HelperService.GetAllRegion(this.lang, this.Parent.oblastid).then(
          (res) => {
            this.RegionList = res.data;
          }
        );
      }
    },
    SearchbyEGov() {
      if (
        this.filter.pinfl === "" ||
        this.filter.pinfl === null ||
        this.filter.pinfl === undefined ||
        this.filter.pinfl === 0
      ) {
        this.makeToast(this.$t("enterpinfl"), "error");
        return false;
      }
      if (
        this.filter.FiltPassport === "" ||
        this.filter.FiltPassport === 0 ||
        this.filter.FiltPassport === undefined ||
        this.filter.FiltPassport === null
      ) {
        this.makeToast(this.$t("enterfiltpassport"), "error");
        return false;
      }
      this.SearchLoading = true;
      AccountService.GetByPassportDataWithPhoto(
        this.filter.pinfl,
        this.filter.FiltPassport
      )
        .then((res) => {
          this.Parent = res.data.person;
          console.log(this.Parent.photo);

          this.SearchLoading = false;
        })
        .catch((error) => {
          this.SearchLoading = false;
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
        });
    },
    ChangeIdentityDocument() {
      if (this.filter.identitydocumentid == 4) {
        AccountService.GetParentForRegistration()
          .then((res) => {
            this.Parent = res.data.result;
          })
          .catch((error) => {
            this.makeToast(error.response.data, "error");
          });
        HelperService.GetAllOblast(this.lang).then((res) => {
          this.OblastList = res.data;
        });
      }
    },
    BindValue(data) {
      this.filter.dateofbirth = data;
    },
    GotoApplication() {
      var self = this;
      if (self.filter.identitydocumentid == 4) {
        if (
          this.filter.dateofbirth === "" ||
          this.filter.dateofbirth === 0 ||
          this.filter.dateofbirth === undefined ||
          this.filter.dateofbirth === null
        ) {
          this.makeToast(this.$t("enterdateofbirth"), "error");
          return false;
        }
      }
      this.SaveLoading = true;
      AccountService.Registrate({
        email: "",
        person: this.Parent,
      })
        .then((res) => {
          this.SaveLoading = false;
          localStorage.setItem("user_info", JSON.stringify(res.data.user));
          this.$router.push({ name: "MyInfo" });
        })
        .catch((error) => {
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
          this.SaveLoading = false;
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
  box-shadow: 0 10px 20px;
  transition: transform 0.5s;
}
.image-container {
  border-radius: 12px;
}

.thumbnail:hover {
  transform: scale(1.05);
}
</style>