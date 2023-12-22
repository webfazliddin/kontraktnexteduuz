<template>
  <div>
    <label for="" style="text-align:left !important" v-if="label">
      {{ label }} <code style="color: red" v-if="required"> * </code>
    </label>
    <b-form-input
      :horizontal="horizontal"
      :disabled="disabled"
      class="mb-0 CurrenyInput"
      type="text"
      v-model="displayValue"
      @blur="onBlured"
      @focus="isInputActive = true"
      @keyup="$emit('keyup')"
      :size="size"
      :state="state"
    />
  </div>
</template>

<script>
import { BFormInput } from "bootstrap-vue";
export default {
  components: {
    BFormInput,
  },
  props: {
    value: {},
    decimals: {},
    horizontal: {
      default: false,
      type: Boolean,
    },
    label: {
      default: "",
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    size: {
      default: "md",
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
    state : null
    // type : {
    //   type: String,
    //   default: 'text'
    // }
  },
  data() {
    return {
      isInputActive: false,
    };
  },
  computed: {
    displayValue: {
      get: function () {
        let numberdec = 2;
        if (
          isNaN(this.decimals) ||
          this.decimals === null ||
          this.decimals === ""
        ) {
          numberdec = 2;
        } else {
          numberdec = parseFloat(this.decimals);
        }
        if (this.isInputActive) {
          // Cursor is inside the input field. unformat display value for user
          return isNaN(this.value) || this.value === null || this.value === ""
            ? 0
            : this.value.toString().replace(".", ",");
        } else {
          return isNaN(this.value) || this.value === null || this.value === ""
            ? this.value
            : this.decimalToRussianF(this.value, numberdec);
        }
      },
      set: function (modifiedValue) {
        // Recalculate value after ignoring "$" and "," in user input
        let newValue = parseFloat(
          modifiedValue.replace(",", ".").replace(/[^.0-9a-z]/gi, "")
        );
        // Ensure that it is not NaN
        if (isNaN(newValue)) {
          newValue = 0;
        }
        // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
        // $emit the event so that parent component gets it
        this.$emit("input", newValue);
      },
    },
    // displayValue: {
    //     get: function() {
    //         if (this.isInputActive) {
    //             // Cursor is inside the input field. unformat display value for user
    //             return this.value.toString().replace('.', ',')
    //         } else {
    //             // User is not modifying now. Format display value for user interface
    //             return this.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1 ")
    //         }
    //     },
    //     set: function(modifiedValue) {
    //         // Recalculate value after ignoring "$" and "," in user input
    //         // let newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, ""))
    //         let newValue = parseFloat(modifiedValue.replace(",", ".").replace(/[^.0-9a-z]/gi, ''));
    //         // Ensure that it is not NaN
    //         if (isNaN(newValue)) {
    //             newValue = 0
    //         }
    //         // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
    //         // $emit the event so that parent component gets it
    //         this.$emit('input', newValue)
    //     }
    // }
  },
  methods: {
    decimalToRussianF(value, fraction) {
      var number = value;
      return new Intl.NumberFormat("ru-RU", {
        maximumFractionDigits: fraction,
        minimumFractionDigits: fraction,
      }).format(number);
    },
    onBlured(){
      this.isInputActive = false
      this.$emit("blur")
    }
  },
};
</script>

<style>
.CurrenyInput {
  text-align: right;
}
/* .CurrenyInputleft {
  text-align: left;
} */
</style>