<template>
  <div :class="{ 'page-new-year--sp': isSmartPhone }" class="page-new-year">
    <h1 class="page-new-year__heading">年賀状イラスト</h1>
    <p class="page-new-year__note">
      年賀状&SNSでの新年の挨拶用のイラスト
    </p>
    <ul class="page-new-year__list new-year-card">
      <li v-for="(item, index) in items" :key="index" class="new-year-card__item card-item" @click="openModal(item)">
        <img v-lazy="require('@/assets/img/new-year/' + item.imgSrc + '.png')" :alt="item.imgName" class="card-item__img" width="372" height="248">
        <p class="card-item__text">{{ item.imgName }}</p>
      </li>
    </ul>
    <transition name="fade">
      <img-modal v-if="showModal" :imgDirectory="imgDirectory" :imgSrc="imgSrc" :imgName="imgName" @clickCloseModal="closeModal()"/>
    </transition>
    <router-link to="/" class="page-new-year__top-link text-link"><span class="icon icon-arrow-left"></span>PAGE TOP</router-link>
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
      imgDirectory: 'new-year/',
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
      this.imgDirectory = this.imgDirectory
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
  padding: 30px;
  margin: 0 auto;
  &__heading {
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
  }
  &__note {
    margin-bottom: 30px;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .card-item {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 220px;
      padding: 10px 10px 40px;
      margin-bottom: 25px;
      cursor: pointer;
      background: #eee;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      @media (hover: hover) {
        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
        }
      }
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
  &__top-link {
    display: inline-flex;
    align-items: center;
    margin-top: 15px;
    .icon {
      width: 16px;
      height: 16px;
      margin-right: 6px;
      background-image: url("../../../assets/svg/icon-arrow-left.svg");
      background-size: 100%;
    }
  }
  &--sp {
    width: auto;
    padding: 20px 4%;
    #{$this}__heading {
      font-size: 24px;
    }
    #{$this}__list {
      .card-item {
        justify-content: center;
        width: 47%;
        min-height: 250px;
        padding-bottom: 30px;
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
    #{$this}__top-link {
      margin-top: 20px;
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
