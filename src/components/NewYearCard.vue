<template>
  <div :class="{ 'page-new-year--sp': isSmartPhone }" class="page-new-year">
    <div class="page-new-year__contents">
      <a v-for="(item, index) in items" :key="index" href="javascript:void(0)" class="new-year-card" @click="clickShowModal(item)">
        <img :src="item.modalImg" :alt="item.modalImgName" class="new-year-card__img" width="372" height="248">
        <p class="new-year-card__text">{{ item.modalImgName }}</p>
      </a>
    </div>
    <transition name="fade">
      <img-modal v-if="showModal" :modalImg="modalImg" :modalImgName="modalImgName" @clickCloseModal="closeModal()"/>
    </transition>
  </div>
</template>

<script>
import layoutMixin from '../mixins/layout'
import ImgModal from './ImgModal.vue'
export default {
  name: 'NewYearCard',
  mixins: [layoutMixin],
  components: {
    ImgModal
  },
  data () {
    return {
      showModal: false,
      modalImg: '',
      modalImgName: '',
      items: [
        {
          modalImg: require('../assets/img/new-year/2021.png'),
          modalImgName: '2021'
        },
        {
          modalImg: require('../assets/img/new-year/2020.png'),
          modalImgName: '2020'
        },
        {
          modalImg: require('../assets/img/new-year/2019.png'),
          modalImgName: '2019'
        },
        {
          modalImg: require('../assets/img/new-year/2018.png'),
          modalImgName: '2018'
        }
      ]
    }
  },
  methods: {
    clickShowModal (item) {
      var html = document.getElementsByTagName('html')
      html[0].classList.add('no-scroll')
      this.showModal = true
      this.modalImg = item.modalImg
      this.modalImgName = item.modalImgName
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
