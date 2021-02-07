<template>
  <div :class="{ 'page-new-year--sp': isSmartPhone }" class="page-new-year">
    <div class="page-new-year__contents">
      <a v-for="(item, index) in items" :key="index" href="javascript:void(0)" class="new-year-card" @click="openModal(item)">
        <img :src="require('@/assets/img/new-year/' + item.imgSrc + '.png')" :alt="item.imgName" class="new-year-card__img" width="372" height="248">
        <p class="new-year-card__text">{{ item.imgName }}</p>
      </a>
    </div>
    <transition name="fade">
      <img-modal v-if="showModal" :imgSrc="imgSrc" :imgName="imgName" @clickCloseModal="closeModal()"/>
    </transition>
  </div>
</template>

<script>
import layoutMixin from '@/mixins/layout'
import ImgModal from '../../common/ImgModal.vue'
import NewYearCard from '@/assets/data/newYearCard.json'
export default {
  name: 'NewYearCard',
  mixins: [layoutMixin],
  components: {
    ImgModal
  },
  data () {
    return {
      showModal: false,
      imgSrc: '',
      imgName: '',
      items: NewYearCard
    }
  },
  methods: {
    openModal (item) {
      var html = document.getElementsByTagName('html')
      html[0].classList.add('no-scroll')
      this.showModal = true
      this.imgSrc = item.imgSrc
      this.imgName = item.imgName
    },
    closeModal () {
      var html = document.getElementsByTagName('html')
      html[0].classList.remove('no-scroll')
      this.showModal = false
    }
  }
}
</script>

<style lang="scss" scoped>
.page-new-year {
  $this: &;
  width: 990px;
  min-height: 350px;
  padding: 30px 20px 10px;
  margin: 0 auto;
  &__contents {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .new-year-card {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 220px;
      padding: 10px 10px 40px;
      margin-bottom: 25px;
      background: #eee;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
      &__img {
        max-width: 100%;
        height: auto;
      }
      &__text {
        position: absolute;
        bottom: 10px;
        font-weight: bold;
        text-align: center;
      }
    }
  }
  &--sp {
    width: auto;
    padding: 30px 4% 10px;
    #{$this}__contents {
      .new-year-card {
        justify-content: center;
        width: 47%;
        padding-bottom: 30px;
        margin-right: 20px;
        margin-bottom: 20px;
        @media screen and (max-width: 320px) {
          margin-right: 15px;
        }
        &:nth-child(even) {
          margin-right: 0;
        }
        &__text {
          bottom: 8px;
          font-size: 10px;
        }
      }
    }
  }
  // モーダルのアニメーション
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
