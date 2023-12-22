<script>
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YouTubeIcon,
} from "vue-feather-icons";
import {
  BIconYoutube,
  BIconInstagram,
  BIconFacebook,
  BIconTelegram,
} from "bootstrap-vue";
export default {
  components: {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
    YouTubeIcon,
    BIconTelegram,
    BIconYoutube,
    BIconInstagram,
    BIconFacebook,
  },
  computed: {
    lang() {
      return localStorage.getItem("locale") || "uz_latn";
    },
  },
};
</script>

<template>
  <div>
    <!-- Footer Start -->
    <section
      class="footer"
      style="background-image: url('@/assets/images/footer-bg.png')"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="mb-5">
              <img
                v-if="lang == 'ru'"
                src="@/assets/images/footer1.svg"
                alt
                class
                height="38"
              />
              <img
                v-if="lang != 'ru'"
                src="@/assets/images/footer1.svg"
                alt
                class
                height="38"
              />
              <p v-if="lang == 'ru'" class="text-white-50 my-4 font-size-15 ml-4">
                Программный комплекс «Биллинговая система учета оказанных услуг
                студентам на договорной основе»
              </p>
              <p
                v-if="lang == 'uz_latn'"
                class="text-white-50 my-4 font-size-15"
              >
                “Talabalarga shartnoma asosida ko‘rsatilgan xizmatlarni hisobga
                olish uchun billing tizimi” dasturiy majmuasi
              </p>
              <p
                v-if="lang == 'uz_cyrl'"
                class="text-white-50 my-4 font-size-15 ml-4"
              >
                “Талабаларга шартнома асосида кўрсатилган хизматларни ҳисобга
                олиш учун биллинг тизими” дастурий мажмуаси
              </p>
            </div>
          </div>
          <div class="col-lg-7 offset-lg-1">
            <div class="row">
              <div class="col-md-6">
                <h6 class="text-white text-uppercase mb-3 ml-2">
                  {{ $t("phonenumber1") }}
                </h6>
                <ul class="list-unstyled footer-sub-menu ml-4">
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >{{ $t("ishonchtel") }}: 1006</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link">{{
                      $t("addressUniversity")
                    }}</a>
                  </li>
                  <li style="white-space: nowrap">
                    <a href="https://t.me/kontrakt_edu_yordambot" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fff"
                        class="bi bi-telegram mr-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
                        />
                      </svg>
                      <span class="footer-link">Telegram_Bot</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <h6 class="text-white text-uppercase mb-3 ml-2">
                  {{ $t("socialnetwork") }}
                </h6>
                <ul class="list-unstyled footer-sub-menu ml-4">
                  <li style="white-space: nowrap">
                    <a
                      href="https://www.facebook.com/eduuzrasmiy"
                      target="_blank"
                    >
                      <b-icon-facebook class="text-white mr-2"></b-icon-facebook
                      ><span class="footer-link">Facebook</span>
                    </a>
                  </li>
                  <li style="white-space: nowrap">
                    <a href="https://t.me/eduuz" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fff"
                        class="bi bi-telegram mr-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
                        />
                      </svg>
                      <span class="footer-link">Telegram</span>
                    </a>
                  </li>
                  <li style="white-space: nowrap">
                    <a href="https://www.instagram.com/edu.uz/" target="_blank">
                      <b-icon-instagram
                        class="text-white mr-2"
                      ></b-icon-instagram
                      ><span class="footer-link ">Instagram</span>
                    </a>
                  </li>
                  <li style="white-space: nowrap">
                    <a href="https://www.youtube.com/c/eduuz" target="_blank">
                      <b-icon-youtube class="text-white mr-2"></b-icon-youtube
                      ><span class="footer-link ">YouTube</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="footer-alt py-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-right">
              <p class="text-white-50 font-size-15 mb-0">
                {{ new Date().getFullYear() }}
                {{ $t("eduinfo1") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer End -->
  </div>
</template>
