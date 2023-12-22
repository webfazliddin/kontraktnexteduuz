<template>
    <div>
      <b-overlay :show="loading">
        <div
          class=""
        >
          <!-- <div class="row d-flex justify-content-center">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <h3 class="text-center mt-2">
                {{ $t("Application") }}
              </h3>
            </div>
          </div> -->
          <b-row>
          <b-col sm="12" lg="6">
            <h2 @click="$router.push('cabinet')" style="cursor: pointer">
              <b-icon-chevron-left></b-icon-chevron-left>
              {{ $t("Ta'lim arizalarim") }}
            </h2>
          </b-col>
        </b-row>
          <div class="row d-flex justify-content-center">
            <div
              class="col-sm-12 col-md-4 col-lg-4"
              @click="$router.push({ name: 'Application' })"
            >
              <div
                style="cursor: pointer"
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div>
                  <img
                    width="200"
                    height="110"
                    src="@/assets/undraw/ariza.svg"
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
              @click="$router.push({ name: 'MyContractInvoice' })"
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
                  {{ $t("SchetInvoice") }}
                </h4>
              </div>
            </div>
            <!-- <div
              v-if="GetData.myContractInvoice"
              class="col-sm-12 col-md-4 col-lg-4"
              @click="$router.push({ name: 'MyContractInvoice' })"
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
                  {{ $t("SchetInvoice") }}
                </h4>
              </div>
            </div> -->
            <!-- <div
              v-if="GetData.myEduGeneralContract"
              class="col-sm-12 col-md-4 col-lg-4"
              @click="$router.push({ name: 'MyEduGeneralContract' })"
            >
              <div
                style="cursor: pointer"
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div>
                  <img
                    width="200"
                    height="110"
                    src="@/assets/undraw/shartnoma.svg"
                    alt=""
                  />
                </div>
                <h4 class="font-weight-bold mb-2 wc-title mt-4">
                  {{ $t("SchetInvoice") }}
                </h4>
              </div>
            </div> -->
          </div>
          <div class="row d-flex justify-content-center">
            <!-- <div
              v-if="GetData.myContractInvoice"
              class="col-sm-12 col-md-4 col-lg-4"
              @click="$router.push({ name: 'MyContractInvoice' })"
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
                  {{ $t("SchetInvoice") }}
                </h4>
              </div>
            </div> -->
            <!-- <div
              v-if="GetData.myContractInvoice"
              class="col-sm-12 col-md-4 col-lg-4"
              @click="$router.push({ name: 'MyEduGeneralContract' })"
            >
              <div
                style="cursor:pointer"
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div>
                  <img
                    width="200"
                    height="110"
                    src="@/assets/undraw/shartnoma.svg"
                    alt=""
                  />
                </div>
                <h4 class="font-weight-bold mb-2 wc-title mt-4">
                  {{ $t("SchetInvoice") }}
                </h4>
              </div>
            </div> -->
          </div>
          <div class="row d-flex justify-content-center">
            <div
              v-if="GetData.myPaymentPlan"
              class="col-sm-12 col-md-4 col-lg-4"
              @click="$router.push({ name: 'MyPaymentPlan' })"
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
                  {{ $t("PaymentSchedule") }}
                </h4>
              </div>
            </div>
            <div
              v-if="GetData.myPayments"
              class="col-sm-12 col-md-4 col-lg-4"
              @click="$router.push({ name: 'MyPayments' })"
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
                  {{ $t("PaymentDetails") }}
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
  import AccountService from "../services/account.service";
  import Navbar from "../layouts/components/navbar.vue";
  import Footer from "../layouts/components/footer.vue";
  import {
    BIconFileEarmark,
    BIconFileEarmarkCheck,
    BIconPersonPlus,
    BIconPersonLinesFill,
    BIconChevronLeft,
  } from "bootstrap-vue";
  export default {
    components: {
      Navbar,
      Footer,
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
  