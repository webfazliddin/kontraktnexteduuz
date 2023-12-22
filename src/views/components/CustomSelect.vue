<template>
  <div class="my-custom-select">
      <label> {{ label }} </label>
      <v-select
            :options="options"
            :reduce="item => item[valueid]"
            :label="valuename"
            :placeholder="$t('choose')"
            :clearable="false"
            :searchable="searchable"
            :disabled="disabled"
            v-model="updateVal"
        >
            <template #open-indicator="{ attributes }">
                <span v-bind="attributes"> <img src="@/assets/images/design/arrow-down.svg" alt=""> </span>
            </template>
            <span slot="no-options"> {{ $t('nothinghere') }} </span>
        </v-select>
  </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
    components : {vSelect},
    props : {
        options : {
            type : Array,
            default : () => []
        },
        label : {
            type : String,
            default : ''
        },
        disabled : {
            type : Boolean,
            default : false
        },
        searchable:{
            type:Boolean,
            default:false
        },
        // placeholder: {
        //     type: String,
        //     required: false,
        //     default: "choose"
        // },
        valuename : {
            type : String,
            default : 'text'
        },
        valueid : {
            type : String,
            default : 'value'
        },
        value:{}
    },
    computed:{
        updateVal:{
            get: function(){
                return this.value
            },
            set:function(val){
                this.$emit('input',val)
            }
        }
    }
}
</script>

<style lang="scss" scope>
@import '../../assets/scss/_variables.scss';
.vs__dropdown-toggle{
    border: none;
}
.my-custom-select{
    width : 100%;
    background-color: #F7F7F7;
    border-radius: 4px;
    label {
        width: 100%;
        padding-left: 16px;
        // text-transform: uppercase;
        font-size: 12px;
    }
    .v-select.vs--single.vs--searchable{
        .vs__dropdown-toggle{
            border: none !important;
            .vs__selected-options{
                input{
                  
                    padding-left: 12px;
                    margin-bottom: 6px;
                    margin-top: 0;
                    &::placeholder{
                        font-size: 15px;
                        color : $input-text-placeholder
                    }
                }
                .vs__selected{
                    padding-left: 12px;
                    margin-top: 0;
                    margin-bottom: 6px;
                }
            }
            .vs__actions{
                .vs__open-indicator{
                    margin-top: -29px;
                    margin-right: 15px;
                }
                .vs__clear{
                    margin-top: -27px;
                }
            }
        }
        .vs__dropdown-menu{
            margin-top: 16px;
            border-radius: 12px;
            z-index: 10031 !important;
            overflow: hidden;
        }
    }
    
}
</style>