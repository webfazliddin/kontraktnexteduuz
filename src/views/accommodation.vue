<template>
    <div>
      <b-overlay :show="loading">
        <div
          style="min-height: calc(120vh - 460px); margin-top: 200px"
        >
        <b-row>
          <b-col sm="12" lg="6">
            <h2 @click="$router.push('MyInfo')" style="cursor: pointer">
              <b-icon-chevron-left></b-icon-chevron-left>
              {{ $t("TTJ arizalarim") }}
            </h2>
          </b-col>
        </b-row>
          <div class="row d-flex justify-content-center">
            <div
              class="col-sm-12 col-md-4 col-lg-4"
              @click="$router.push({ name: 'TTJApplication' })"
            >
              <div
                style="cursor: pointer"
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div>
                  <img
                    width="200"
                    height="110"
                    src="@/assets/undraw/ttj.svg"
                    alt=""
                  />
                </div>
                <h4 class="font-weight-bold mb-2 wc-title mt-4">
                  {{ $t("Application") }}
                </h4>
              </div>
            </div>
            <div
              v-if="GetData.myContractInvoice"
              class="col-sm-12 col-md-4 col-lg-4"
              @click="$router.push({ name: 'TTJIsMyTurn' })"
            >
              <div
                style="cursor:pointer"
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div>
                  <img
                    width="200"
                    height="110"
                    src="@/assets/undraw/tolovvaraqasi.svg"
                    alt=""
                  />
                </div>
                <h4 class="font-weight-bold mb-2 wc-title mt-4">
                  {{ $t("TTJIsMyTurn") }}
                </h4>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div
              v-if="GetData.myPaymentPlan"
              class="col-sm-12 col-md-4 col-lg-4"
              @click="$router.push({ name: 'RecruitmentForTTJ' })"
            >
              <div
                style="cursor: pointer"
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div>
                  <img
                    width="200"
                    height="110"
                    src="@/assets/undraw/tolovjadvali.svg"
                    alt=""
                  />
                </div>
                <h4 class="font-weight-bold mb-2 wc-title mt-4">
                  {{ $t("RecruitmentForTTJ") }}
                </h4>
              </div>
            </div>
            <div
              v-if="false"
              class="col-sm-12 col-md-4 col-lg-4"
              @click="$router.push({ name: 'MyTTJPayments' })"
            >
              <div
                style="cursor: pointer"
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div>
                  <img
                    width="200"
                    height="110"
                    src="@/assets/undraw/tolovmalumot.svg"
                    alt=""
                  />
                </div>
                <h4 class="font-weight-bold mb-2 wc-title mt-4">
                  {{ $t("PaymentHistory") }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </b-overlay>
    </div>
  </template>
  
  <script>
  import MainPageService from "@/services/mainpage.service";
  import {
    BIconFileEarmark,
    BIconFileEarmarkCheck,
    BIconPersonPlus,
    BIconPersonLinesFill,
    BIconChevronLeft,
  } from "bootstrap-vue";
  export default {
    components: {
      BIconFileEarmark,
      BIconFileEarmarkCheck,
      BIconPersonPlus,
      BIconPersonLinesFill,
      BIconChevronLeft,
    },
    data() {
      return {
        GetData: {
          myPayments: false,
        },
        lang: localStorage.getItem("locale") || "uz_latn",
        show: false,
        checkLanguage: true,
        loading: false,
      };
    },
    computed: {
      isChooseChild() {
        return localStorage.getItem("user_info")
          ? JSON.parse(localStorage.getItem("user_info")).CanSearchChild
          : "";
      },
      isCourtApplication() {
        return localStorage.getItem("user_info")
          ? JSON.parse(localStorage.getItem("user_info")).CanViewCourtApplication
          : "";
      },
    },
    async created() {
      await this.Refresh();
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
      Refresh() {
        this.loading = true;
        MainPageService.GetInfo()
          .then((res) => {
            this.GetData = res.data;
            this.loading = false;
          })
          .catch((error) => {
            if (error.response.data.status == 500) {
              this.makeToast(this.$t("errormessage500"), "error");
              this.loading = false;
            } else {
              this.makeToast(error.response.data, "error");
              this.loading = false;
            }
          });
      },
    },
  };
  </script>
  
  <style lang="scss">
  .wc-box.rounded:hover {
    .my-iconn {
      svg {
        g {
          circle {
            fill: #fff;
          }
        }
        path {
          fill: #fff;
        }
      }
    }
  }
  </style>
  