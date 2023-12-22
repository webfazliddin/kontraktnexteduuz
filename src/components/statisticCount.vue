<template>
  <div class="container">
      <div class="row">
          <div class="col">
              <h2 class="text-center"> {{ $t("Tarbiyalanuvchi bolalar soni bo'yicha statistika") }} </h2>
          </div>
      </div>
      <div class="row d-flex justify-content-center">
          <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="wc-box rounded text-center wc-box-primary p-4 mt-md-5">
                <div class="wc-box-icon my-iconn">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve">
                  <g>
                    <circle fill="#5168A0" cx="32.5" cy="34" r="5"/>
                  </g>
                  <g>
                    <circle fill="#5168A0" cx="67.5" cy="34" r="5"/>
                  </g>
                  <g><path fill="#5168A0" d="M72.5,40h-8.965L51.776,28.241c-0.003-0.003-0.006-0.006-0.009-0.009c-0.427-0.428-0.971-0.667-1.528-0.721   c-0.717-0.069-1.458,0.172-2.008,0.721c-0.003,0.002-0.005,0.006-0.008,0.009L36.465,40H27.5c-2.762,0-5,2.238-5,5v10   c0,2.762,2.238,5,5,5v19.999h10V60V46.035l12.5-12.5l12.5,12.5V60v19.999h10V60c2.761,0,5-2.238,5-5V45   C77.5,42.238,75.261,40,72.5,40z"/></g><g><circle fill="#5168A0" cx="50.004" cy="50" r="4.5"/></g><g><path fill="#5168A0" d="M54.504,60c0-2.485-2.015-4.5-4.5-4.5s-4.5,2.015-4.5,4.5v8h2v12h5V68h2V60z"/></g></svg>
                </div>
                <h3 class="font-weight-bold mb-2 wc-title mt-4"><countTo :startVal='0' :endVal='1208' :duration='3000'></countTo>ta</h3>
                <p
                  class="text-muted mb-0 font-size-15 wc-subtitle"
                > {{ $t('Mehribonlik uylarida') }} </p>
              </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="wc-box rounded text-center wc-box-primary p-4 mt-md-5">
                <div class="wc-box-icon">
                  <i class="mdi mdi-city"></i>
                  
                </div>
                <h3 class="font-weight-bold mb-2 wc-title mt-4"><countTo :startVal='0' :endVal='108' :duration='3000'></countTo>ta</h3>
                <p
                  class="text-muted mb-0 font-size-15 wc-subtitle"
                > {{ $t('Bolalar shaharchalarida') }} </p>
              </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="wc-box rounded text-center wc-box-primary p-4 mt-md-5">
                <div class="wc-box-icon my-iconn">
                  <!-- <i class="mdi mdi-home"></i> -->
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><circle fill="#5168A0" cx="62.998" cy="33.998" r="5"/></g><g><circle fill="#5168A0" cx="36.5" cy="49.999" r="4.5"/></g><g><path fill="#5168A0" d="M67.998,39.999h-9.986c-0.645-0.003-1.287,0.241-1.777,0.731l-9.999,10c-0.059,0.06-0.104,0.127-0.155,0.19l-4.577,4.577   L36.5,55.499c-2.485,0-4.5,2.016-4.5,4.5v8h2.001v12H39l0.001-21.001h2.502l4.732-4.732l0,0c0.488,0.488,1.127,0.732,1.767,0.732   c0.641,0,1.279-0.244,1.768-0.732L58,46.037v13.962l-0.002,20h10v-20c2.762,0,5.002-2.239,5.002-5V44.998   C73,42.237,70.76,39.999,67.998,39.999z"/></g></svg>
                </div>
                <h3 class="font-weight-bold mb-2 wc-title mt-4"><countTo :startVal='0' :endVal='228' :duration='3000'></countTo> ta</h3>
                <p
                  class="text-muted mb-0 font-size-15 wc-subtitle"
                > {{ $t('Oilaviy bolalar uylarida') }} </p>
              </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="wc-box rounded text-center wc-box-primary p-4 mt-md-5">
                <div class="wc-box-icon my-iconn d-flex justify-content-center" >
                  <!-- <i class="mdi mdi-account-box-outline"></i> -->
                  <div style="width:50%" >
                    <svg xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 117.146 156.25" style="enable-background:new 0 0 117.146 125;" xml:space="preserve"><g><path fill="#5168A0" d="M58.573,32.641c-8.999,0-16.32-7.321-16.32-16.32c0-9,7.321-16.321,16.32-16.321s16.32,7.321,16.32,16.321   C74.893,25.32,67.572,32.641,58.573,32.641z"/><g><path fill="#5168A0" d="M106.68,124.099c0.025,0.549,0.041,0.877,0.042,0.901C106.732,125.17,106.728,124.55,106.68,124.099z"/><g><path fill="#5168A0" d="M9.395,30.167c0.305,8.52,1.131,18.691,4.674,24.215c0.231-0.659,0.53-1.213,0.896-1.673     c-1.907-5.109-2.859-13.558-3.069-27.186c0-0.002-0.001-0.004-0.001-0.006c0-0.002,0.001-0.003,0.001-0.005     c-0.001-0.089-0.004-0.172-0.005-0.261c-0.042-2.871-2.407-5.206-5.272-5.206c-0.972,0-1.763,0.791-1.763,1.763v3.102     C7.38,25.365,9.3,27.507,9.395,30.167z"/><path fill="#5168A0" d="M18.02,51.118V33.374c0-3.063-1.282-6.142-4.103-6.743c0.23,12.088,1.103,20.068,2.725,24.833     C17.068,51.289,17.519,51.157,18.02,51.118z"/><path fill="#5168A0" d="M33.423,73.425c-1.861-2.286-3.786-4.649-5.596-7.119c-1.095-1.495-2.012-2.967-2.837-4.385     c-0.009-0.015-0.017-0.029-0.026-0.045c-0.636-1.096-1.222-2.162-1.765-3.163c-1.587-2.924-2.957-5.449-4.283-5.587     c-0.939-0.099-1.651,0.091-2.162,0.579c-1.035,0.987-1.456,3.316-1.252,6.923c0.134,2.351,2.071,5.032,3.944,7.625     c1.672,2.314,3.251,4.5,3.7,6.597c0.961,4.474-0.548,7.879-0.612,8.022c-0.229,0.502-0.822,0.728-1.324,0.498     c-0.503-0.228-0.726-0.82-0.498-1.323c0.012-0.026,1.296-2.975,0.479-6.777c-0.361-1.686-1.821-3.707-3.367-5.846     c-2.041-2.826-4.151-5.748-4.318-8.683c-0.08-1.412-0.071-2.65,0.029-3.728C8.781,51.502,7.76,40.412,7.397,30.239     c-0.069-1.922-1.62-3.427-3.531-3.427c-1.923,0-3.474,1.499-3.54,3.411c-0.299,8.593-0.82,29.419,0.778,37.201     c1.021,4.964,3.515,9.1,5.927,13.099c2.446,4.057,4.757,7.888,5.372,12.268c1.048,7.459,0.233,24.713-0.004,29.209h27.299     c-0.193-2.404-0.557-8.399-0.028-14.824c0.247-3.002,0.665-6.072,1.069-9.041c0.723-5.309,1.405-10.322,0.728-12.735     C40.567,82.197,37.097,77.936,33.423,73.425z"/><path fill="#5168A0" d="M24.214,56.399C23.676,51,23.639,46.227,23.639,39.775c0-2.873-1.39-4.855-3.619-5.304v16.892     C21.616,52.003,22.815,53.87,24.214,56.399z"/><path fill="#5168A0" d="M102.181,52.709c0.366,0.46,0.665,1.015,0.896,1.673c3.543-5.524,4.369-15.695,4.674-24.214     c0.095-2.663,2.018-4.806,4.539-5.259v-3.101c0-0.972-0.791-1.763-1.763-1.763c-2.865,0-5.23,2.335-5.272,5.206     c-0.001,0.089-0.004,0.173-0.005,0.261c0,0.002,0.001,0.003,0.001,0.005c0,0.002-0.001,0.004-0.001,0.006     C105.04,39.151,104.087,47.6,102.181,52.709z"/><path fill="#5168A0" d="M103.228,26.631c-2.821,0.601-4.103,3.68-4.103,6.743v17.745c0.502,0.039,0.952,0.17,1.378,0.346     C102.125,46.699,102.998,38.719,103.228,26.631z"/><path fill="#5168A0" d="M97.126,51.363V34.471c-2.229,0.449-3.619,2.431-3.619,5.304c0,6.452-0.036,11.225-0.575,16.624     C94.331,53.869,95.53,52.003,97.126,51.363z"/><path fill="#5168A0" d="M116.82,30.224c-0.066-1.913-1.617-3.412-3.53-3.412c-1.921,0-3.472,1.505-3.541,3.428     c-0.363,10.172-1.384,21.262-6.139,26.774c0.101,1.078,0.109,2.316,0.029,3.728c-0.167,2.935-2.277,5.857-4.318,8.683     c-1.546,2.139-3.006,4.16-3.367,5.845c-0.816,3.803,0.468,6.751,0.48,6.781c0.225,0.503,0,1.095-0.503,1.32     c-0.505,0.228-1.093,0.003-1.32-0.498c-0.064-0.143-1.573-3.548-0.612-8.022c0.449-2.096,2.028-4.282,3.7-6.597     c1.873-2.593,3.811-5.274,3.944-7.625c0.204-3.606-0.217-5.936-1.252-6.923c-0.511-0.488-1.219-0.677-2.162-0.579     c-1.326,0.138-2.696,2.663-4.283,5.587c-0.543,1.001-1.129,2.067-1.765,3.163c-0.008,0.016-0.017,0.03-0.026,0.045     c-0.825,1.418-1.742,2.89-2.837,4.385c-1.81,2.469-3.734,4.833-5.596,7.119c-3.674,4.511-7.144,8.771-8.043,11.975     c-0.678,2.413,0.005,7.427,0.728,12.735c0.404,2.969,0.822,6.039,1.069,9.041c0.528,6.425,0.165,12.42-0.028,14.824h27.299     c-0.237-4.496-1.052-21.75-0.004-29.209c0.615-4.379,2.926-8.211,5.372-12.268c2.412-4,4.906-8.135,5.927-13.099     C117.64,59.643,117.119,38.816,116.82,30.224z"/><path fill="#5168A0" d="M75.697,32.834c-1.707-0.479-3.297,0.75-5.751,2.796c-1.373,1.145-2.923,2.432-4.756,3.435     c3.084,0.318,5.626,1.153,7.096,3.824c0.759,1.378,1.026,2.884,0.945,4.445c1.141-0.77,2.149-1.744,2.989-2.945     c0.316-0.452,0.939-0.562,1.393-0.246c0.452,0.316,0.563,0.94,0.246,1.393c-1.338,1.914-3.038,3.355-5.033,4.333     c-0.645,2.456-1.959,4.953-3.465,7.23c0.068,0.879,0.197,3.139,0.025,6.015c2.711-1.429,4.897-3.276,6.497-5.516     c0.321-0.449,0.946-0.553,1.395-0.232c0.45,0.321,0.554,0.946,0.232,1.395c-2.004,2.804-4.808,5.044-8.324,6.68     c-0.633,5.679-2.552,12.735-7.907,16.695c1.451,0.555,3.737,1.087,5.93,0.162c4.403-1.858,11.327-15.84,12.348-24.934     C81.004,44.47,77.556,33.355,75.697,32.834z"/><path fill="#5168A0" d="M54.678,75.855c-0.001,0-0.002,0-0.003,0c-0.551,0-0.999-0.446-1-0.998c-0.001-0.552,0.445-1.001,0.997-1.002     c4.1-0.011,10.111-2.794,12.182-6.527c0.493-2.911,0.604-5.637,0.595-7.567c-2.74,3.552-5.475,6.125-5.738,6.371     c-0.403,0.376-1.036,0.354-1.413-0.05c-0.377-0.404-0.354-1.037,0.05-1.413c0.074-0.07,3.967-3.734,7.084-8.272     c0.043-0.09,0.101-0.174,0.168-0.247c1.534-2.271,2.854-4.745,3.4-7.089c0.012-0.086,0.021-0.172,0.054-0.252     c0.234-1.113,0.281-2.192,0.091-3.204c-3.654,5.387-8.294,9.278-14.154,11.831c-0.13,0.057-0.266,0.083-0.398,0.083     c-0.387,0-0.754-0.225-0.918-0.601c-0.221-0.506,0.012-1.096,0.518-1.316c5.898-2.569,10.488-6.586,14.031-12.241     c-1.629-2.275-4.793-2.378-9.067-2.518c-4.153-0.136-8.859-0.29-13.65-2.555c-0.905-0.428-1.802-1.129-2.75-1.871     c-1.519-1.188-3.082-2.411-4.563-2.411c-0.193,0-0.385,0.021-0.574,0.065c-0.214,0.05-0.46,0.285-0.694,0.663     c-2.28,3.672-2.144,17.845-0.38,25.351c1.843,7.84,7.604,18.403,13.242,21.632c1.603,0.917,3.082,1.176,4.405,0.767     c5.339-1.651,8.178-6.166,9.67-10.951C62.714,74.198,58.186,75.846,54.678,75.855z"/></g></g></g></svg>
                  </div>
                </div>
                <h3 class="font-weight-bold mb-2 wc-title mt-4"><countTo :startVal='0' :endVal='25376' :duration='3000'></countTo>ta</h3>
                <p
                  class="text-muted mb-0 font-size-15 wc-subtitle"
                > {{ $t('Vasiylik asosida') }} </p>
              </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="wc-box rounded text-center wc-box-primary p-4 mt-md-5">
                <div class="wc-box-icon">
                  <i class="mdi mdi-account-multiple"></i>
                </div>
                <h3 class="font-weight-bold mb-2 wc-title mt-4"><countTo :startVal='0' :endVal='15145' :duration='3000'></countTo>ta</h3>
                <p
                  class="text-muted mb-0 font-size-15 wc-subtitle"
                > {{ $t('Homiylik asosida') }} </p>
              </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="wc-box rounded text-center wc-box-primary p-4 mt-md-5">
                <div class="wc-box-icon">
                  <i class="mdi mdi-account-multiple-plus"></i>
                </div>
                <h3 class="font-weight-bold mb-2 wc-title mt-4"><countTo :startVal='0' :endVal='1108' :duration='3000'></countTo>ta</h3>
                <p
                  class="text-muted mb-0 font-size-15 wc-subtitle"
                > {{ $t('Patronatlik asosida') }} </p>
              </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="wc-box rounded text-center wc-box-primary p-4 mt-md-5">
                <div class="wc-box-icon">
                  <i class="mdi mdi-account-plus"></i>
                </div>
                <h3 class="font-weight-bold mb-2 wc-title mt-4"><countTo :startVal='0' :endVal='33730' :duration='3000'></countTo>ta</h3>
                <p
                  class="text-muted mb-0 font-size-15 wc-subtitle"
                > {{ $t('Farzandlik asosida') }} </p>
              </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="wc-box rounded text-center wc-box-primary p-4 mt-md-5">
                <div class="wc-box-icon">
                  <i class="mdi mdi-home-assistant"></i>
                </div>
                <h3 class="font-weight-bold mb-2 wc-title mt-4"><countTo :startVal='0' :endVal='132' :duration='3000'></countTo>ta</h3>
                <p
                  class="text-muted mb-0 font-size-15 wc-subtitle"
                > {{ $t('SOS bolalar') }} </p>
              </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="wc-box rounded text-center wc-box-primary p-4 mt-md-5">
                <div class="wc-box-icon">
                  <i class="mdi mdi-baby-carriage"></i>
                </div>
                <h3 class="font-weight-bold mb-2 wc-title mt-4"><countTo :startVal='0' :endVal='495' :duration='3000'></countTo>ta</h3>
                <p
                  class="text-muted mb-0 font-size-15 wc-subtitle"
                > {{ $t('Godaklar soni') }} </p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
export default {
    components: { countTo },
}
</script>

<style lang="scss">
.wc-box.rounded:hover{
  .my-iconn{
  svg{
    g{
      circle{
        fill : #fff
      }
    }
    path {
      fill : #fff
    }
  }
}
}

</style>