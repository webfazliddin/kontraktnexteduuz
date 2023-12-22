<template>
  <div class="amenities">
    <div class="container">
      <b-row class="amenities-item">
        <b-col lg="6" md="12" sm="12">
          <b-card class="amenties-card">
            <h5 class="amenties-title">Tizim qulayliklari</h5>
            <div class="amenties-items">
              <div class="amenties-list">
                <div>
                  <img src="@/assets/images/new_design/library_add_check.svg" alt="">
                </div>
                <p class="text">Talabalarning yotoqxonaga joylashishi uchun elektron <br> ariza shakllantirish</p>
              </div>
              <div class="amenties-list">
                <div>
                  <img src="@/assets/images/new_design/library_add_check.svg" alt="">
                </div>
                <p class="text">Navbati kelgan talabalar uchun QR kodli yo‘llanma va talabalar turar joyi to‘lovi uchun shartnoma(invoys) shakllantirish</p>
              </div>
              <div class="amenties-list">
                <div>
                  <img src="@/assets/images/new_design/library_add_check.svg" alt="">
                </div>
                <p class="text">Talabalar turar joylari hisobotlarini yuritish</p>
              </div>
              <div class="amenties-list">
                <div>
                  <img src="@/assets/images/new_design/library_add_check.svg" alt="">
                </div>
                <p class="text">Talabalar turar joylariga joylashishda navbatlarga qatʼiy <br> amal qilinishini taʼminlash</p>
              </div>
              <div class="amenties-list">
                <div>
                  <img src="@/assets/images/new_design/library_add_check.svg" alt="">
                </div>
                <p class="text">Davlat boshqaruvi organlariga tahliliy maʼlumotlarni taqdim etish</p>
              </div>
              <div class="amenties-list">
                <div>
                  <img src="@/assets/images/new_design/library_add_check.svg" alt="">
                </div>
                <p class="text">Talabalar turar joylaridagi boʻsh oʻrinlar soni toʻgʻrisidagi maʼlumotlarni eʼlon qilib borish</p>
              </div>
            </div>
          </b-card>
        </b-col>
        <b-col class="payme" lg="6" md="12" sm="12">
          <h4 class="title">TTJ uchun  toʻlovlarni <br> onlayn amalga oshirish</h4>
          <p class="text">Yotoqxonaga joylashish uchun ariza berish <br> jarayonlarida inson omilinikamaytirish, shaffoflikni <br> taʼminlash hamda talabalar turar joyiga joylashishda <br> uchraydigan korrupsion holatlarni oldini olish</p>
          <b-button
            class="mr-5 buttonEnterStyle application_btn"
            variant="primary"
            @click="$store.state.isOpenSidebar = true"
          >
            {{ $t("Ariza topshirish") }}
          </b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>