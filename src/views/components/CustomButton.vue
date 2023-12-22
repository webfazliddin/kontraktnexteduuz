<template>
  <div>
      <button :disabled="disabled" @click="$emit('click')" :class="`my-btn-custom d-flex align-items-center justify-content-center my-btn-${variant} ${block ? 'block' : ''} ${disabled ? 'my-disabled' : ''}`"  >
          <slot></slot>
      </button>
  </div>
</template>

<script>
export default {
    props : {
        block : {
            type : Boolean,
            default : false
        },
        variant : {
            type : String,
            default : 'success'
        },
        disabled : {
            type : Boolean,
            default : false
        }
    }
}
</script>

<style lang='scss' scoped>
@import "../../assets/scss/_variables.scss";
.my-btn-custom{
    padding-top: 18px;
    padding-bottom: 18px;
    outline:none;
    width: auto;
    border:none;
    // background-color: $success-light;
    border-radius: 30px;
    font-size: 15px;
    // border: 2px solid $success-light;
    transition: 0.4s;
    // border: 1px solid;
    cursor: pointer;
}
.block{
    width : 100%
}
.my-btn-warning{
    background-color: #F8C80F;
}
.my-btn-secondary{
    background-color: #F7F7F7;
}
.my-btn-success{
    background-color:#0879f9;
}
.my-disabled{
    cursor: not-allowed
}
</style>