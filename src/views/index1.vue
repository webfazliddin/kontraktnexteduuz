<script>
import InfoTab from "../components/infotab.vue";
import StatisticCount from "../components/statisticCount.vue";
import AccountService from '../services/account.service';
import Chance from '../components/chance.vue';
import Video from '../components/video.vue';
import Onlinepayment from '../components/onlinepayment.vue';
import Amenities from '../components/amenities.vue';
/**
 * Index-1
 */
export default {
  components: {
    InfoTab,
    StatisticCount,
    Chance,
    Video,
    Onlinepayment,
    Amenities,
  },
  data() {
    return {
      isToken: false,
      InfoModal: false,
    };
  },
  created() {
    this.isToken = localStorage.getItem("user_info");
    if(this.isToken){
      AccountService.SetUserLanguage({ languageId : 3 })
          .then((res) => {
            localStorage.setItem('locale','uz_latn')
          })
          .catch((error) => {
          });
    }
  },
  methods: {
    changeAlert() {
      // this.makeToast(this.$t("billinginfo"), "error");
      this.InfoModal = true;
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

<template>
  <div>
    <!-- <Navbar /> -->
    <div v-scroll-spy>
      <!-- Hero Start -->
      <section class="hero-1-bg main-pages" id="home">
        <!-- <marquee style="color: red" behavior="" direction=""
          >{{ $t("Websiteintest") }}
        </marquee> -->
        <div class="container">
          <b-row class="row align-items-center justify-content-center">
            <b-col lg="7" sm="12">
              <h2
                class="hero-1-title font-weight-bold mb-4"
              >
                {{ $t("givechildfamily") }}
              </h2>
              <p class="main_text">{{ $t("main_text") }}</p>
              <div class="w-100 mb-5 mb-lg-0">
                <p class="pt-0 mt-0 d-flex justify-content-sm-center mt-sm-3" >
                  <b-row>
                    <b-col sm="12" md="12" lg="12">
                      <b-button
                        class="buttonEnterStyle"
                        v-if="!isToken"
                        variant="primary"
                        @click="$store.state.isOpenSidebar = true"
                      >
                        {{ $t("Ariza topshirish") }}
                      </b-button>
                      <b-button
                    
                      class="mr-11 buttonEnterStyle"
                        v-if="isToken"
                        variant="primary"
                        @click="$router.push({ name: 'MyInfo' })"
                      >
                        {{ $t("mycabinet") }}
                      </b-button>
                    </b-col>
                  </b-row>
                  
                  <b-modal
                    id="InfoModal"
                    size="lg"
                    :title="$t('Info')"
                    no-close-on-backdrop
                    hide-footer
                  >
                    <p>
                      {{ $t("billinginfo") }}
                    </p>
                  </b-modal>
                </p>
              </div>
            </b-col>
            <b-col lg="5" sm="12">
              <div class="mt-1 mt-lg-0">
                <img
                  src="@/assets/images/new_design/back-image.png"
                  style="width: 120%"
                  alt
                  class="imgSize mx-auto back-img"
                />
              </div>
            </b-col>
          </b-row>
        </div>
      </section>
      <b-modal id="modal-center" centered title="Kirish">
        
      </b-modal>

      <Chance />
      <Video />
      <Onlinepayment />
      <Amenities />
      <info-tab />
      <!-- <Footer /> -->
    </div>
  </div>
</template>
<style scoped>
/* .imgSize {
    max-width: 112%;
    height: auto;
} */
</style>
