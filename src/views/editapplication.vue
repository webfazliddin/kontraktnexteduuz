<template>
  <div>
    <b-overlay :show="Loading" :style="{ height: Loading ? '100vh' : 'auto' }">
      <div v-if="Application.fromDtm != true && !Loading">
        <div class="" style="margin-top: 200px">
          <b-row>
            <b-col>
              <div class="pricing-box rounded px-4 pt-4 pb-2">
                <fieldset>
                  <b-row>
                    <b-col sm="12" md="8" lg="6" class="my-1">
                      <custom-label
                        :label="$t('FIO')"
                        :content="Application.student"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="4" lg="6" class="my-1">
                      <custom-label
                        :label="$t('pinfl')"
                        :content="Application.pinfl"
                      ></custom-label>
                    </b-col>
                  </b-row>
                </fieldset>
                <fieldset class="mt-3">
                  <legend>{{ $t("StudentInfo") }} :</legend>
                  <b-row>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('generalorganization')"
                        :content="Application.organization"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('edulevel')"
                        :content="Application.eduLevel"
                      ></custom-label>
                      <!-- <custom-select
                      :label="$t('edulevel')"
                      v-model="Application.eduLevelId"
                      :options="EdulevelList"
                    ></custom-select> -->
                    </b-col>
                    <!-- <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        v-if="Application.faculty != 'Noaniq fakultet'"
                        :label="$t('faculty')"
                        :content="Application.faculty"
                      ></custom-label>
                    </b-col> -->
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('speciality')"
                        :content="Application.eduSpeciality"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('eduType')"
                        :content="Application.eduType"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('eduForm')"
                        :content="Application.eduForm"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('eduLanguage')"
                        :content="Application.eduLanguage"
                      ></custom-label>
                      <!-- <custom-select
                      :label="$t('eduLanguage')"
                      v-model="Application.eduLanguageId"
                      :options="LanguageList"
                    ></custom-select> -->
                    </b-col>
                    <!-- <b-col sm="12" md="6" lg="4" class="my-1">
                    <custom-select
                      :label="$t('studentCategory')"
                      v-model="Application.studentCategoryId"
                      :options="StudentCategoryList"
                    ></custom-select>
                  </b-col> -->
                    <b-col
                      sm="12"
                      md="6"
                      lg="4"
                      class="my-1"
                      v-if="!!Application.socialCategory"
                    >
                      <custom-label
                        :label="$t('socialCategory')"
                        :content="Application.socialCategory"
                      ></custom-label>
                      <!-- <custom-select
                      :label="$t('socialCategory')"
                      v-model="Application.socialCategoryId"
                      :options="SocialCategoryList"
                    ></custom-select> -->
                    </b-col>
                    <b-col
                      sm="12"
                      md="6"
                      lg="4"
                      class="my-1"
                      v-if="!!Application.studentCategory"
                    >
                      <custom-label
                        :label="$t('studentCategory')"
                        :content="Application.studentCategory"
                      ></custom-label>
                      <!-- <custom-select
                      :label="$t('socialCategory')"
                      v-model="Application.socialCategoryId"
                      :options="SocialCategoryList"
                    ></custom-select> -->
                    </b-col>
                  </b-row>
                </fieldset>
                <fieldset class="mt-3 mb-3">
                  <legend>{{ $t("Contract") }} :</legend>
                  <b-row>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('eduYear')"
                        :content="Application.eduYear"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('applicationType')"
                        :content="Application.applicationPurpose"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('applicationPurposeType')"
                        :content="Application.applicationType"
                      ></custom-label>
                    </b-col>
                    <b-col sm="12" md="6" lg="4" class="my-1">
                      <custom-label
                        :label="$t('contractType')"
                        :content="Application.contractType"
                      ></custom-label>
                    </b-col>
                    <b-col
                      sm="12"
                      md="6"
                      lg="4"
                      class="my-1"
                      v-if="!Application.stateExpense"
                    >
                      <custom-select
                        :label="$t('contractSideType')"
                        :style="
                          Application.contractSideTypeId == 0 ||
                          Application.contractSideTypeId == null
                            ? 'color:#F43958;font-weight:bold; '
                            : ' '
                        "
                        v-model="Application.contractSideTypeId"
                        :options="ContractSideTypeList"
                      ></custom-select>
                    </b-col>
                    <b-col
                      sm="12"
                      md="6"
                      v-if="!Application.stateExpense"
                      lg="4"
                      class="my-1"
                    >
                      <custom-select
                        :style="
                          Application.contractSumTypeId == 0 ||
                          Application.contractSumTypeId == null
                            ? 'color:#F43958;font-weight:bold;'
                            : ''
                        "
                        :label="$t('contractSumType')"
                        v-model="Application.contractSumTypeId"
                        :disabled="Application.contractTypeId == 4"
                        @input="ChangeContractSum"
                        :options="ContractSumTypeList"
                      ></custom-select>
                    </b-col>
                    <b-col
                      sm="12"
                      md="12"
                      lg="12"
                      class="mt-2 my-1"
                      v-if="
                        Application.genderId == 2 && Application.eduTypeId == 2  && Application.contractTypeId ==
                         4
                      "
                    >
                      <b-form-group v-slot="{ ariaDescribedby }">
                        <b-form-radio
                          v-model="Application.stateExpense"
                          :aria-describedby="ariaDescribedby"
                          name="some-radios"
                          :value="true"
                          >{{ $t("StateExpense") }}</b-form-radio
                        >
                        <!-- <b-form-radio
                          v-model="Application.stateExpense"
                          class="mt-2"
                          :aria-describedby="ariaDescribedby"
                          name="some-radios"
                          :value="false"
                          >{{ $t("MyExpense") }}</b-form-radio
                        > -->
                      </b-form-group>
                    </b-col>
                  </b-row>
                </fieldset>
                <fieldset
                  class="mt-4 mb-3"
                  v-if="Application.contractSideTypeId == 2"
                >
                  <b-row>
                    <b-col sm="12" md="6" lg="4">
                      <custom-input
                        :style="
                          contractorinn.inn == '' ||
                          contractorinn.inn == 0 ||
                          contractorinn.inn == null ||
                          contractorinn.inn == undefined
                            ? 'color:#F43958;font-weight:bold'
                            : ''
                        "
                        :label="$t('inn')"
                        v-model="contractorinn.inn"
                        v-mask="'#########'"
                        :placeholder="$t('inn')"
                      ></custom-input>
                    </b-col>
                    <b-col md="2" sm="12">
                      <b-button
                        block
                        @click="SearchInn"
                        variant="outline-primary"
                        size="lg"
                      >
                        <p class="m-0 p-0 p-1">
                          <b-spinner v-if="SearchLoading" small></b-spinner>
                          {{ $t("search") }}
                        </p>
                      </b-button>
                    </b-col>
                  </b-row>
                </fieldset>
                <fieldset
                  v-if="
                    !!ContractorData.fullName &&
                    Application.contractSideTypeId == 2
                  "
                >
                  <legend>{{ $t("Contractor") }} :</legend>
                  <b-row>
                    <b-col sm="12" md="9" lg="9">
                      <custom-label
                        :label="$t('fullname')"
                        :content="ContractorData.fullName"
                      ></custom-label>
                    </b-col>
                    <b-col md="2" sm="12">
                      <b-button
                        block
                        @click="DeleteINN"
                        variant="outline-danger"
                        size="lg"
                      >
                        <p class="m-0 p-0 p-1">
                          {{ $t("delete") }}
                        </p>
                      </b-button>
                    </b-col>
                  </b-row>
                </fieldset>
                <fieldset class="mt-3 mb-3">
                  <b-row>
                    <b-col sm="12" md="10" lg="8">
                      <p style="color: red">*{{ $t("checkedu") }}</p>
                    </b-col>
                    <b-col
                      class="text-right"
                      v-if="
                        PriceData.ContractPrice != 0 &&
                        !Application.stateExpense &&
                        (Application.eduFormId != 2 ||
                          Application.eduTypeId != 2)
                      "
                    >
                      {{ $t("ContractPrice") }} <br />
                      <div class="d-flex justify-content-end ml-3">
                        <p
                          class="p-2 font-weight-bold mobileText ml-3"
                          v-if="!isContractEightPercent"
                          style="white-space: nowrap"
                        >
                          {{
                            $options.filters.currency(PriceData.ContractPrice, {
                              symbol: "",
                              fractionCount: 2,
                            })
                          }}{{ $t("summa") }}
                        </p>
                        <span class="d-flex p-1" v-if="isContractEightPercent">
                          <p
                            class="mr-1 mobileText ml-3"
                            style="white-space: nowrap"
                          >
                            {{
                              $options.filters.currency(
                                PriceData.TotalContractPrice,
                                {
                                  symbol: "",
                                  fractionCount: 2,
                                }
                              )
                            }}
                          </p>
                          <!-- <p class="mr-1 mobileText">-</p>
                          <p style="color: red" class="mr-1 mobileText">10%</p>
                          <p class="mr-1 mobileText">=</p>
                          <p
                            class="mr-1 font-weight-bold mobileText"
                            style="white-space: nowrap"
                          >
                            {{
                              $options.filters.currency(
                                PriceData.ContractPrice,
                                {
                                  symbol: "",
                                  fractionCount: 2,
                                }
                              )
                            }}
                          </p> -->
                          {{ $t("summa") }}
                        </span>
                      </div>
                    </b-col>
                  </b-row>
                </fieldset>
              </div>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col sm="12" md="12" class="text-right">
              <b-button
                class="mr-1"
                variant="danger"
                @click="$router.push({ name: 'Application' })"
              >
                {{ $t("back") }}
              </b-button>
              <!-- </b-col>
            <b-col sm="12" md="6" class="text-right "> -->
              <b-button
                variant="success"
                :disabled="isDisabled === true"
                @click="SaveData"
              >
                <b-spinner small v-if="SaveLoading"></b-spinner>
                {{ $t("send") }}
              </b-button>
            </b-col>
          </b-row>
        </div>
      </div>
      <div
        v-if="Application.fromDtm == true"
        style="margin-top: 200px"
      >
        <b-row>
          <b-col sm="12" lg="6">
            <h2 @click="$router.go(-1)" style="cursor: pointer">
              <b-icon-chevron-left></b-icon-chevron-left>
              {{ $t("Application") }}
            </h2>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col>
            <div class="pricing-box rounded px-4 pt-4 pb-2">
              <fieldset>
                <legend>{{ $t("Applicant") }} :</legend>
                <b-row>
                  <b-col sm="12" md="6" lg="5" class="my-1">
                    <custom-label
                      :label="$t('FIO')"
                      :content="Application.student"
                    ></custom-label>
                  </b-col>
                  <b-col sm="12" md="6" lg="2" class="my-1">
                    <custom-label
                      :label="$t('eduLanguage')"
                      :content="Application.eduLanguage"
                    ></custom-label>
                  </b-col>
                  <b-col sm="12" md="6" lg="2" class="my-1">
                    <custom-label
                      :label="$t('ball')"
                      :content="Application.ball"
                    ></custom-label>
                  </b-col>
                  <!-- <b-col sm="12" md="6" lg="4">
                    <custom-label
                      :label="$t('eduForm')"
                      :content="Application.eduForm"
                    ></custom-label>
                  </b-col> -->
                </b-row>
                <b-row class="mt-3">
                  <!-- <b-col sm="12" md="6" lg="4">
                    <custom-label
                      :label="$t('eduForm')"
                      :content="Application.eduForm"
                    ></custom-label>
                  </b-col> -->
                </b-row>
              </fieldset>
              <fieldset class="mt-1">
                <!-- <legend>{{ $t("selelctuniversity") }} :</legend> -->
                <b-row>
                  <b-col sm="12" md="12">
                    <p style="font-size: 18px; font-weight: 550">
                      {{ $t("selelctuniversity") }} :
                    </p>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col
                    sm="12"
                    md="6"
                    v-for="(item, index) in DtmPlan"
                    :key="index"
                    v-show="DtmPlan.length > 0"
                  >
                    <!-- <div class="pricing-box rounded px-4 pt-4 pb-2"> -->
                    <!-- <b-row>
                        <b-col sm="9"></b-col>
                        <b-col sm="3" class="text-center">
                          <b-button
                            block
                            @click="CreateApplication(item)"
                            variant="primary"
                            class="
                              btn btn-sm
                              anim-opacity
                              btn-primary
                              mr-2
                              mt-2
                              pr-btn
                            "
                            >{{ $t("CreateApplication") }}</b-button
                          >
                        </b-col>
                      </b-row> -->
                    <b-row>
                      <b-col sm="12" md="12" class="mt-2">
                        <b-card no-body class="mb-1">
                          <b-card-header
                            header-tag="header"
                            class="p-3"
                            role="tab"
                          >
                            <b-row>
                              <b-col sm="12">
                                <p class="font-size-15 text-left mb-0 pb-0">
                                  {{ index + 1 }}.
                                  {{ $t("generalorganization") }} :
                                  <b> {{ item.organization }}</b>
                                </p>
                              </b-col>
                              <b-col sm="12">
                                <p class="font-size-15 text-left mb-0 pb-0">
                                  {{ $t("speciality") }} :
                                  <b>{{ item.eduSpeciality }}</b>
                                </p>
                              </b-col>
                              <b-col sm="12">
                                <p class="font-size-15 text-left mb-0 pb-0">
                                  {{ $t("eduForm") }} :
                                  <b>{{ item.eduForm }}</b>
                                </p>
                              </b-col>
                              <b-col sm="12" v-if="item.accepted">
                                <p class="font-size-15 text-left mb-0 pb-0">
                                  {{ $t("tavsiya") }} :
                                  <b>{{ item.tavsiya }}</b>
                                </p>
                              </b-col>
                              <b-col sm="12" md="12">
                                <p
                                  class="mb-0 pb-0"
                                  style="color: green; font-weight: bold"
                                >
                                  {{ $t("passingball") }} :
                                  {{ item.passingBall }}
                                </p>
                              </b-col>
                              <b-col sm="12" md="12">
                                <p
                                  class="mb-0 pb-0"
                                  style="color: red; font-weight: bold"
                                  v-if="item.passingBall > item.ball"
                                >
                                  {{ $t("difference") }} :
                                  {{
                                    (item.passingBall * 10 - item.ball * 10) /
                                    10
                                  }}
                                </p>
                              </b-col>
                              <b-col sm="12" md="12" class="text-right">
                                <b-button
                                  v-if="
                                    (item.isGrand != true && item.accepted) ||
                                    !isCreateApplicantion ||
                                    (item.passingBall * 1 - item.ball * 1 > 0 &&
                                      index == 0)
                                  "
                                  block
                                  @click="CreateApplication(item)"
                                  variant="primary"
                                  class="
                                    btn btn-sm
                                    anim-opacity
                                    btn-primary
                                    mr-2
                                    pr-btn
                                  "
                                  >{{ $t("CreateApplication") }}</b-button
                                >
                              </b-col>
                            </b-row>
                          </b-card-header>
                        </b-card>
                      </b-col>
                    </b-row>
                    <!-- </div> -->
                  </b-col>
                </b-row>
                <!-- <b-row
                  v-for="(item, index) in DtmPlan"
                  :key="index"
                  v-show="DtmPlan.length > 0"
                >
                  <b-col sm="12" md="6" lg="4" class="mt-2 my-1">
                    <custom-input
                      :label="$t('organization')"
                      disabled
                      v-model="item.organization"
                      :placeholder="$t('organization')"
                    ></custom-input>
                  </b-col>
                  <b-col sm="12" md="6" lg="6" class="mt-2 my-1">
                    <custom-input
                      :label="$t('eduSpeciality')"
                      disabled
                      v-model="item.eduSpeciality"
                      :placeholder="$t('eduSpeciality')"
                    ></custom-input>
                  </b-col>
                  <b-col sm="12" md="2" class="mt-2 my-1 text-left">
                     <b-button variant="success" pill @click="CreateApplication(item)" block>
              <b-spinner
                v-if="false"
                small
              ></b-spinner>
              {{ $t("CreateApplication") }}
            </b-button>
                  </b-col>
                </b-row> -->
              </fieldset>
            </div>
          </b-col>
        </b-row>
        <b-row class="mt-5"> </b-row>
      </div>
      <b-modal
        v-model="CreateDtmModal"
        size="lg"
        hide-footer
        hide-header
        no-close-on-backdrop
        centered
      >
        <b-row>
          <b-col class="d-flex justify-content-between align-items-center">
            <span> {{ $t("createapplication") }} </span>
            <!-- <img class="cursor-pointer"  src="/images/design/fill-close.svg" alt=""> -->
            <b-icon-x
              scale="2.5"
              style="cursor: pointer; z-index: 9"
              @click="CloseCreateModal"
            ></b-icon-x>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col>
            <p class="font-size-8 text-left mb-0 pb-0">
              {{ $t("generalorganization") }} :
              <b> {{ DTMOrganization.organization }}</b>
            </p>
          </b-col>
          <b-col sm="12">
            <p class="font-size-8 text-left mb-0 pb-0">
              {{ $t("speciality") }} :
              <b>{{ DTMOrganization.speciality }}</b>
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col>
            <custom-select
              :label="$t('contractSideType')"
              :searchable="false"
              @input="ChangeContractSideType"
              v-model="Application.contractSideTypeId"
              :options="ContractSideTypeList"
            ></custom-select>
          </b-col>
        </b-row>
        <div>
          <b-row class="mt-3" v-if="Application.contractSideTypeId == 2">
            <b-col md="9" sm="12">
              <custom-input
                v-model="contractorinn.inn"
                :placeholder="$t('123456789')"
                v-mask="'#########'"
                :label="$t('inn')"
              ></custom-input>
            </b-col>
            <b-col md="3" sm="12">
              <b-button block @click="SearchInn" variant="outline-primary">
                <p class="m-0 p-0 p-1">
                  <b-spinner v-if="SearchLoading" small></b-spinner>
                  {{ $t("search") }}
                </p>
              </b-button>
            </b-col>
          </b-row>
          <b-row class="mt-3" v-if="!!ContractorData.fullName">
            <b-col sm="12" md="9" lg="9">
              <custom-label
                :label="$t('fullname')"
                :content="ContractorData.fullName"
              ></custom-label>
            </b-col>
            <b-col md="3" lg="3" sm="12">
              <b-button block @click="DeleteINN" variant="outline-danger">
                <p class="m-0 p-0 p-1">
                  {{ $t("delete") }}
                </p>
              </b-button>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col>
              <custom-select
                :searchable="false"
                :label="$t('contractSumType')"
                v-model="Application.contractSumTypeId"
                @input="ChangeContractSum"
                :options="ContractSumTypeList2"
              ></custom-select>
            </b-col>
          </b-row>
          <b-row
            class="mt-3"
            v-if="Application.eduFormId != 2 || Application.eduTypeId != 2"
          >
            <b-col class="text-right">
              {{ $t("ContractPrice") }} <br />
              <div class="d-flex justify-content-end ml-3">
                <p
                  class="p-2 font-weight-bold mobileText ml-3"
                  v-if="!isContractEightPercent"
                  style="white-space: nowrap"
                >
                  {{
                    $options.filters.currency(PriceData.ContractPrice, {
                      symbol: "",
                      fractionCount: 2,
                    })
                  }}
                  {{ $t("summa") }}
                </p>
                <span class="d-flex" v-if="isContractEightPercent && isShow">
                  <p class="mr-1 mobileText ml-3" style="white-space: nowrap">
                    {{
                      $options.filters.currency(PriceData.TotalContractPrice, {
                        symbol: "",
                        fractionCount: 2,
                      })
                    }}
                  </p>
                  <!-- <p class="mr-1 mobileText">-</p>
                  <p style="color: red" class="mr-1 mobileText">10%</p>
                  <p class="mr-1 mobileText">=</p>

                  <p
                    class="font-weight-bold mobileText"
                    style="white-space: nowrap"
                  >
                    {{
                      $options.filters.currency(PriceData.ContractPrice, {
                        symbol: "",
                        fractionCount: 2,
                      })
                    }} -->
                    <!-- <br> -->
                    {{ $t("summa") }}
                  </p>
                </span>
              </div>
            </b-col>
          </b-row>
        </div>
        <b-row class="mt-3">
          <b-col>
            <!-- <custom-button v-if="!Restore.isRestore" @click.native="RestorePassword" block> <b-spinner v-if="RestoreLoading" small style="margin-right:8px"></b-spinner> {{ $t('Smskodloish') }} </custom-button> -->
            <b-button
              variant="primary"
              :disabled="isDisabled === true"
              pill
              @click="SaveData"
              block
            >
              <b-spinner
                v-if="SaveLoading"
                small
                style="margin-right: 8px"
              ></b-spinner>
              {{ $t("send") }}
            </b-button>
          </b-col>
        </b-row>
        <b-row> </b-row>
      </b-modal>
    </b-overlay>

    <Footer />
  </div>
</template>

<script>
import {
  BIconPlus,
  BIconPaperclip,
  BIconTrash,
  BIconCheck2Circle,
  BIconChevronLeft,
  BIconX,
  BIconExclamationTriangleFill,
  BIconCheckCircleFill,
} from "bootstrap-vue";
import CustomSelect from "./components/CustomSelect.vue";
import CustomInput from "./components/CustomInput.vue";
import CustomDatePicker from "./components/CustomDatepicker.vue";
import CustomLabel from "./components/CustomLabel.vue";
import ApplicationService from "../services/application.service";
import ManualService from "../services/manual.service";
import ContractorService from "../services/contractor.service";
import ContractPriceCalcService from "../services/contractpricecalc.service";
export default {
  components: {
    BIconPlus,
    CustomSelect,
    CustomInput,
    CustomDatePicker,
    CustomLabel,
    BIconPaperclip,
    BIconTrash,
    BIconCheck2Circle,
    BIconChevronLeft,
    BIconX,
    BIconExclamationTriangleFill,
    BIconCheckCircleFill,
  },
  data() {
    return {
      Application: {},
      DtmPlanObject: {
        id: 0,
        organizationId: 0,
        contractTypeId: 0,
        eduFormId: 0,
        eduLanguageId: 0,
        eduSpecialityId: 0,
        eduFacultyId: 0,
        ball: 0,
        passingBall: 0,
        accepted: true,
      },
      SendLoading: false,
      isShow: false,
      infomodaldata: {
        organization: "",
        docnumber: "",
      },
      CreatedData: {
        docNumber: "",
        docDate: "",
        studentId: 0,
        personId: 0,
        applicationTypeId: 0,
        applicationPurposeId: 0,
        organizationId: 0,
        facultyId: 0,
        eduTypeId: 0,
        eduLanguageId: 0,
        eduLevelId: 0,
        eduSpecialityId: 0,
        eduFormId: 0,
        eduYearId: 0,
        contractTypeId: 0,
        contractSideTypeId: 0,
        contractSumTypeId: 0,
        contractorId: 0,
        socialCategoryId: 0,
        contractAmount: "",
        fromDtm: true,
        ball: 0,
        passingBall: 0,
        accepted: true,
        privileges: [],
        DtmPlan: [],
      },
      FromDtmData: {
        IsFromDtm: false,
      },
      filter: {
        id: 0,
        message: "",
      },
      SendLoading: false,
      isContractEightPercent: false,
      EdulevelList: [],
      ContractTypeList: [],
      ApplicationList: [],
      CreateDtmModal: false,
      DTMOrganization: {
        organization: "",
        speciality: "",
      },
      filterPrice: {
        applicationPurposeId: 0,
        eduSpecialityId: 0,
        contractSumTypeId: 0,
        facultyId: 0,
        eduTypeId: 0,
        eduFormId: 0,
      },
      ApplicationPurposeList: [],
      FacultyList: [],
      ContractSideTypeList: [],
      ContractSumTypeList: [],
      ContractSumTypeList2: [],
      LanguageList: [],
      // StudentCategoryList: [],
      SocialCategoryList: [],
      DtmPlan: [],
      EduYearList: [],
      contractorinn: {
        inn: "",
      },
      ContractorData: {
        fullName: "",
      },
      SaveLoading: false,
      isCreateApplicantion: false,
      isDisabled: false,
      SearchLoading: false,
      PriceData: {
        ContractPrice: 0,
        TotalContractPrice: 0,
      },
      Loading: false,
      lang: localStorage.getItem("locale"),
      SendId: 0,
      ContractPercent: 0,
      SendModalOpen: false,
    };
  },
  created() {
    this.Loading = true;
    if (
      this.$route.params.id == 1 ||
      this.$route.params.id == 2 ||
      this.$route.params.id == 3
    ) {
      ApplicationService.GetBySourceType(this.$route.params.id)
        .then((res) => {
          this.Application = res.data;
          this.FromDtmData.IsFromDtm = this.Application.fromDtm;
          this.Application.sourceTypeId = this.$route.params.id;
          if(this.Application.contractTypeId == 4){
          this.Application.contractSumTypeId = 2  
          }
          if (!!res.data.contractor) {
            this.ContractorData = res.data.contractor;
          }
          if (res.data.contractor) {
            this.contractorinn.inn = this.ContractorData.inn;
          }
          this.isCreateApplicantion =
            res.data.dtmPlan.filter((item) => item.accepted === true).length > 0
              ? true
              : false;
          this.DtmPlan = res.data.dtmPlan;
          ManualService.FacultySelectList(this.Application.organizationId).then(
            (res) => {
              this.FacultyList = res.data;
            }
          );
          ManualService.ContractSumTypeList(this.Application.eduFormId).then(
            (res) => {
              this.ContractSumTypeList = res.data;
            }
          );
          if (res.data.contractor == null) {
            this.ContractorData = {};
          }
          this.Loading = false;
        })
        .catch((error) => {
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
          this.$router.push({
            name: "Application",
          });
        });
    } else {
      ApplicationService.Get(this.$route.params.id)
        .then((res) => {
          this.Application = res.data;
          this.FromDtmData.IsFromDtm = this.Application.fromDtm;
          if (!!res.data.contractor) {
            this.ContractorData = res.data.contractor;
          }
          if (res.data.contractor) {
            this.contractorinn.inn = this.ContractorData.inn;
          }
          if (
            this.$route.params.id != 1 &&
            this.$route.params.id != 2 &&
            this.$route.params.id != 3
          ) {
            this.Application.fromDtm = false;
          }
          this.isCreateApplicantion =
            res.data.dtmPlan.filter((item) => item.accepted === true).length > 0
              ? true
              : false;
          this.DtmPlan = res.data.dtmPlan;
          ManualService.FacultySelectList(this.Application.organizationId).then(
            (res) => {
              this.FacultyList = res.data;
            }
          );
          ManualService.ContractSumTypeList(this.Application.eduFormId).then(
            (res) => {
              this.ContractSumTypeList = res.data;
            }
          );
          if (res.data.contractor == null) {
            this.ContractorData = {};
          }
          if (
            this.$route.params.id != 1 &&
            this.$route.params.id != 2 &&
            this.$route.params.id != 3 && this.Application.eduFormId != 2 && this.Application.contractTypeId != 4
          ) {
            ApplicationService.GetPrice(this.Application)
              .then((res1) => {
                this.PriceData.TotalContractPrice = res1.data.amount;
                if (res1.data.discount == 0) {
                  (this.isContractEightPercent = false),
                    (this.PriceData.ContractPrice = res1.data.amount);
                }
                if (res1.data.discount != 0) {
                  (this.isContractEightPercent = true),
                    (this.PriceData.ContractPrice = res1.data.calculatedAmount);
                }
              })
              .catch((error) => {
                // this.makeToast(error.response.data, "error");
                if (error.response.data.status == 500) {
                  this.makeToast(this.$t("errormessage500"), "error");
                } else {
                  this.makeToast(error.response.data, "error");
                }
              });
          }
          this.Loading = false;
        })
        .catch((error) => {
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
          this.$router.push({
            name: "Application",
          });
        });
    }
    // .catch((error) => {
    //   this.makeToast(error.response.data, "error");
    // });
    // ManualService.EdulevelSelectList().then((res) => {
    //   this.EdulevelList = res.data;
    // });
    // ManualService.EduContractTypeSelectList().then((res) => {
    //   this.ContractTypeList = res.data;
    // });
    ManualService.ApplicationTypeSelectList().then((res) => {
      this.ApplicationList = res.data;
    });
    ManualService.ContractSideTypeSelectList().then((res) => {
      this.ContractSideTypeList = res.data;
    });
    // ManualService.ApplicationPurposeSelectList().then((res) => {
    //   this.ApplicationPurposeList = res.data;
    // });
    // ManualService.EduYearList().then((res) => {
    //   this.EduYearList = res.data;
    // });
    // ManualService.EduLanguageList().then((res) => {
    //   this.LanguageList = res.data;
    // });
    // ManualService.StudentCategoryList().then((res) => {
    //   this.StudentCategoryList = res.data;
    // });
    // ManualService.SocialCategoryList().then((res) => {
    //   this.SocialCategoryList = res.data;
    // });
  },
  methods: {
    BindValue(value) {
      this.Application.dateofbirth = value;
    },
    changeState() {
      alert(Application.stateExpense);
      this.Application.stateExpense = true;
    },
    changeMy() {
      alert(Application.stateExpense);
      this.Application.stateExpense = false;
    },
    ChangeContractSideType() {
      this.ContractorData.fullName = "";
      this.contractorinn.inn = "";
    },
    SearchInn() {
      if (this.contractorinn.inn.length == 9) {
        this.SearchLoading = true;
        ContractorService.GetByInn(this.contractorinn.inn)
          .then((res) => {
            this.ContractorData = res.data;
            this.SearchLoading = false;
          })
          .catch((error) => {
            // this.makeToast(error.response.data, "error");
            if (error.response.data.status == 500) {
              this.makeToast(this.$t("errormessage500"), "error");
            } else {
              this.makeToast(error.response.data, "error");
            }
          });
      }
    },
    CreateApplication(item) {
      this.DTMOrganization.organization = item.organization;
      this.DTMOrganization.speciality = item.eduSpeciality;
      this.DtmPlanObject = {};
      this.DtmPlanObject.organizationId = item.organizationId;
      this.DtmPlanObject.eduFacultyId = item.eduFacultyId;
      this.DtmPlanObject.contractTypeId = item.contractTypeId;
      this.DtmPlanObject.eduFormId = item.eduFormId;
      this.DtmPlanObject.eduLanguageId = item.eduLanguageId;
      this.DtmPlanObject.eduSpecialityId = item.eduSpecialityId;
      // this.DtmPlanObject.SelectedPlanId = item.orderId;
      this.DtmPlanObject.ball = item.ball;
      this.DtmPlanObject.passingBall = item.passingBall;
      this.DtmPlanObject.selectedPlanId = item.id;
      this.DtmPlanObject.accepted = item.accepted;
      this.Application.facultyId = this.DtmPlanObject.eduFacultyId;
      this.Application.ball = item.ball;
      this.Application.organizationId = this.DtmPlanObject.organizationId;
      this.Application.eduSpecialityId = this.DtmPlanObject.eduSpecialityId;
      this.Application.selectedPlanId = this.DtmPlanObject.selectedPlanId;
      this.Application.eduFormId = this.DtmPlanObject.eduFormId;
      this.Application.eduLanguageId = this.DtmPlanObject.eduLanguageId;
      this.Application.contractSideTypeId =
        this.DtmPlanObject.contractSideTypeId;
      var keys = Object.keys(item);
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] != "id") {
          this.Application[keys[i]] = item[keys[i]];
        }
      }
      ManualService.ContractSumTypeList(this.Application.eduFormId).then(
        (res) => {
          this.ContractSumTypeList2 = res.data;
        }
      );
      this.CreateDtmModal = true;
      this.isShow = false;
    },
    DeleteINN() {
      this.contractorinn.inn = "";
      this.ContractorData.fullName = "";
      this.ContractorData.id = "";
    },
    CloseCreateModal() {
      this.Application.contractSideTypeId = 0;
      this.Application.contractSumTypeId = 0;
      (this.contractorinn.inn = ""),
        (this.ContractorData.fullName = ""),
        (this.PriceData.ContractPrice = ""),
        (this.PriceData.TotalContractPrice = ""),
        (this.CreateDtmModal = false);
      this.isShow = false;
    },
    check() {
      if (
        this.Application.student === 0 ||
        this.Application.student === null ||
        this.Application.student === undefined ||
        this.Application.student === ""
      ) {
        this.makeToast(this.$t("studentNotCorrect"), "error");
        return false;
      }
      if (
        this.Application.pinfl === 0 ||
        this.Application.pinfl === null ||
        this.Application.pinfl === undefined ||
        this.Application.pinfl === ""
      ) {
        this.makeToast(this.$t("pinflNotCorrect"), "error");
        return false;
      }
      if (
        this.Application.applicationTypeId === 0 ||
        this.Application.applicationTypeId === null ||
        this.Application.applicationTypeId === undefined ||
        this.Application.applicationTypeId === ""
      ) {
        this.makeToast(this.$t("applicationTypeNotSelect"), "error");
        return false;
      }
      if (
        this.Application.organizationId === 0 ||
        this.Application.organizationId === null ||
        this.Application.organizationId === undefined ||
        this.Application.organizationId === ""
      ) {
        this.makeToast(this.$t("organizationNotCorrect"), "error");
        return false;
      }
      if (this.Application.contractSideTypeId == 2) {
        if (
          this.ContractorData.id === 0 ||
          this.ContractorData.id === null ||
          this.ContractorData.id === undefined ||
          this.ContractorData.id === ""
        ) {
          this.makeToast(this.$t("contractorNotCorrect"), "error");
          return false;
        }
      }
      if (this.Application.stateExpense != true) {
        if (
          this.Application.contractSideTypeId === 0 ||
          this.Application.contractSideTypeId === null ||
          this.Application.contractSideTypeId === undefined ||
          this.Application.contractSideTypeId === ""
        ) {
          this.makeToast(this.$t("contractSideTypeNotSelect"), "error");
          return false;
        }
        if (
          this.Application.contractSumTypeId === 0 ||
          this.Application.contractSumTypeId === null ||
          this.Application.contractSumTypeId === undefined ||
          this.Application.contractSumTypeId === ""
        ) {
          this.makeToast(this.$t("contractSumTypeNotSelect"), "error");
          return false;
        }
      }

      return true;
    },
    ChangeContractSum() {
      if (
        this.Application.contractSumTypeId === 0 ||
        this.Application.contractSumTypeId === null ||
        this.Application.contractSumTypeId === undefined ||
        this.Application.contractSumTypeId === ""
      ) {
        this.PriceData.ContractPrice = 0;
        this.PriceData.TotalContractPrice = 0;
        this.isShow = false;
        return false;
      }
      this.isDisabled = true;
      if (this.Application.eduFormId == 2 || this.Application.eduTypeId == 2 || this.Application.contractTypeId == 4) {
        this.isDisabled = false;
       }

      if (this.Application.eduFormId != 2 && this.Application.contractTypeId != 4) {
        ApplicationService.GetPrice(this.Application)
          .then((res) => {
            this.isShow = true;
            this.PriceData.TotalContractPrice = res.data.amount;
            if (res.data.discount == 0) {
              (this.isContractEightPercent = false),
                (this.PriceData.ContractPrice = res.data.amount);
              this.isDisabled = false;
            }
            if (res.data.discount != 0) {
              this.isShow = true;
              (this.isContractEightPercent = true),
                (this.PriceData.ContractPrice = res.data.calculatedAmount);
              this.isDisabled = false;
            }
          })
          .catch((error) => {
            this.isDisabled = false;
            // this.makeToast(error.response.data, "error");
            if (error.response.data.status == 500) {
              this.makeToast(this.$t("errormessage500"), "error");
            } else {
              this.makeToast(error.response.data, "error");
            }
          });
      }
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
    // OpenSendModal() {
    //   this.SendModalOpen = true;
    //   this.filter.id = this.SendId.id;
    //   this.filter.message = "";
    // },
    // Send() {
    //   this.SendLoading = true;
    //   this.filter.message = "";
    //   ApplicationService.Send(this.filter)
    //     .then((res) => {
    //       this.SendLoading = false;
    //       // this.$bvModal.hide("SendModal" + this.SendId.id);
    //       this.SendModalOpen = false;
    //       this.makeToast(this.$t("SuccessSave"), "success");
    //       this.$router.push({ name: "Application" });
    //     })
    //     .catch((error) => {
    //       this.makeToast(error.response.data, "error");
    //       this.SendLoading = false;
    //       this.this.SendModalOpen = false;
    //     });
    // },

    SaveData() {
      if (!this.check()) {
        return false;
      }
      if (this.Application.contractSideTypeId == 2) {
        if (this.contractorinn.inn == "" || this.contractorinn.inn == null) {
          this.makeToast(this.$t("innNotSelect"), "error");
          return false;
        }
      }
      if (
        this.Application.contractSideTypeId == 2 &&
        this.contractorinn.inn.length != 9
      ) {
        this.makeToast(this.$t("innNotCorrect"), "error");
        return false;
      }
      this.SaveLoading = true;
      this.isDisabled = true;
      this.Application.contractor = this.ContractorData.fullName;
      this.Application.contractorId = this.ContractorData.id;
      if (this.Application.fromDtm == true) {
        this.Application.DtmPlan = this.DtmPlanObject;
        this.CreatedData.docNumber = this.Application.docNumber;
        this.CreatedData.docDate = this.Application.docDate;
        this.CreatedData.studentId = this.Application.studentId;
        this.CreatedData.personId = this.Application.personId;
        this.CreatedData.applicationTypeId = this.Application.applicationTypeId;
        this.CreatedData.applicationPurposeId =
          this.Application.applicationPurposeId;
        this.CreatedData.organizationId = this.Application.organizationId;
        this.CreatedData.facultyId = this.Application.facultyId;
        this.CreatedData.eduTypeId = this.Application.eduTypeId;
        this.CreatedData.eduLanguageId = this.Application.eduLanguageId;
        this.CreatedData.eduLevelId = this.Application.eduLevelId;
        this.CreatedData.eduSpecialityId = this.Application.eduSpecialityId;
        this.CreatedData.eduFormId = this.Application.eduFormId;
        this.CreatedData.eduYearId = this.Application.eduYearId;
        this.CreatedData.selectedPlanId = this.Application.selectedPlanId;
        this.CreatedData.sourceTypeId = this.Application.sourceTypeId;
        this.CreatedData.contractTypeId =
          this.Application.DtmPlan.contractTypeId;
        this.CreatedData.contractSideTypeId =
          this.Application.contractSideTypeId;
        this.CreatedData.abiturId = this.Application.abiturId;
        this.CreatedData.contractSumTypeId = this.Application.contractSumTypeId;
        this.CreatedData.contractorId = this.Application.contractorId;
        this.CreatedData.socialCategoryId = this.Application.socialCategoryId;
        this.CreatedData.contractAmount = this.PriceData.ContractPrice;
        this.CreatedData.fromDtm = true;
        this.CreatedData.ball = this.Application.DtmPlan.ball;
        this.CreatedData.passingBall = this.Application.DtmPlan.passingBall;
        this.CreatedData.accepted = this.Application.DtmPlan.accepted;
        this.CreatedData.DtmPlan = this.DtmPlan;
        ApplicationService.Update(this.CreatedData)
          .then((res) => {
            this.SaveLoading = false;
            this.isDisabled = false;
            this.infomodaldata.organization = res.data.organization;
            this.infomodaldata.docnumber = res.data.docNumber;
            this.$router.push({
              name: "Application",
              query: {
                infomodal: 1,
                organizationFilial: this.infomodaldata.organization,
                applicationNumber: this.infomodaldata.docnumber,
              },
            });
          })
          .catch((error) => {
            this.SaveLoading = false;
            this.CreateDtmModal = false;
            this.isDisabled = false;
            // this.makeToast(error.response.data, "error");
            if (error.response.data.status == 500) {
              this.makeToast(this.$t("errormessage500"), "error");
            } else {
              this.makeToast(error.response.data, "error");
            }
          });
      } else {
        this.Application.fromDtm = this.FromDtmData.IsFromDtm;
        ApplicationService.Update(this.Application)
          .then((res1) => {
            this.SaveLoading = false;
            this.infomodaldata.organization = res1.data.organization;
            this.infomodaldata.docnumber = res1.data.docNumber;
            this.$router.push({
              name: "Application",
              query: {
                infomodal: 1,
                organizationFilial: this.infomodaldata.organization,
                applicationNumber: this.infomodaldata.docnumber,
              },
            });
            this.isDisabled = false;
          })
          .catch((error) => {
            this.SaveLoading = false;
            this.isDisabled = false;
            this.CreateDtmModal = false;
            // this.makeToast(error.response.data, "error");
            if (error.response.data.status == 500) {
              this.makeToast(this.$t("errormessage500"), "error");
            } else {
              this.makeToast(error.response.data, "error");
            }
          });
      }
    },
  },
};
</script>

<style lang="scss">
.application-modal {
  .modal-xl {
    min-width: 1300px !important;
  }
}
</style>
