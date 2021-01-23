<template>
  <div class="modal modal__overlay" @click.self="clickCloseModal">
    <div :class="{ 'modal-box--sp': isSmartPhone }" class="modal__box modal-box">
      <img :src="modalImg" :alt="modalImgName" class="modal-box__img">
      <div class="modal-box__close" @click="clickCloseModal">
        <i class="icon icon-close"></i>
      </div>
    </div>
  </div>
</template>
<script>
import layoutMixin from '../mixins/layout'
export default {
  mixins: [layoutMixin],
  props: {
    modalImg: {
      type: String,
      default: ''
    },
    modalImgName: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickCloseModal () {
      this.$emit('clickCloseModal')
    }
  }
}
</script>
<style lang="scss" scoped>
.modal {
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .modal-box {
    position: relative;
    z-index: 100;
    display: flex;
    align-items: flex-start;
    width: 410px;
    height: auto;
    padding: 10px;
    background: #fff;
    &__img {
      max-width: 100%;
    }
    &__close {
      position: absolute;
      top: -20px;
      right: -20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      cursor: pointer;
      background: #333;
      border-radius: 50%;
      transition: transform 0.2s;
      @media (hover: hover) {
        &:hover {
          transform: scale(1.3);
        }
      }
      .icon {
        width: 15px;
        height: 15px;
        background-image: url("../assets/svg/icon-close.svg");
        background-size: 100%;
      }
    }
    &--sp {
      width: 320px;
      @media screen and (max-width: 320px) {
        width: 260px;
      }
      // SP横向き
      @media screen and (max-height: 575px) and (orientation: landscape) {
        width: 210px;
      }
      @media screen and (max-height: 320px) and (orientation: landscape) {
        width: 180px;
      }
    }
  }
}
</style>
