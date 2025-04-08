<template>
  <div :class="{ 'page-umania--sp': isSmartPhone }" class="page-umania">
    <h1 class="page-umania__heading">Umania</h1>
    <div class="page-umania__catch page-umania-catch">
      日常のあらゆる場所でUMAにエンカウントできる位置ゲーアプリ
      <p class="page-umania-catch__sub">FirefoxOS ✕ HTML5 ✕ LOD WEBイノベーションハッカソン3位入賞</p>
    </div>
    <img class="page-umania__img" src="@/assets/img/umania.png" alt="Umania" width="335" height="228">
    <h2 class="page-umania__sub-heading">概要</h2>
    <div class="page-umania__detail">
      「マニアックなデータを使ったアプリ」というテーマで制作した作品。
      <br>
      UMA(未確認生物)を見つけると端末に通知が届く。見つけたUMAによっては一発で正体を現す場合もあれば、何度会ってもシルエットしかわからない場合もある。しかし、エンカウントすればするほど正体を現す確率が高くなる。正体を現したUMAは図鑑に記録することができる。
    </div>
    <h2 class="page-umania__sub-heading">開発環境</h2>
    <div class="page-umania__detail">
      FirefoxOS
    </div>
    <h2 class="page-umania__sub-heading">担当</h2>
    <div class="page-umania__detail">
      キャラクターデザイン
    </div>
    <div class="page-umania__character-desigin character-desigin">
      <h1 class="character-desigin__heading">キャラクターデザイン集</h1>
      <ul class="character-desigin__list character-desigin-list">
        <li v-for="(item, index) in items" :key="index" class="character-desigin-list__item character-desigin-item" @click="openModal(item)">
          <img v-lazy="require('@/assets/img/umania/' + item.imgSrc + '.png')" :alt="item.imgName" class="character-desigin-item__img" width="372" height="248">
          <p class="character-desigin-item__text">{{ item.imgName }}</p>
        </li>
      </ul>
    </div>
    <transition name="fade">
      <img-modal v-if="showModal" :imgDirectory="imgDirectory" :imgSrc="imgSrc" :imgName="imgName" @clickCloseModal="closeModal()"/>
    </transition>
    <router-link to="/" class="page-umania__top-link text-link"><span class="icon icon-arrow-left"></span>PAGE TOP</router-link>
  </div>
</template>

<script>
import layoutMixin from '@/mixins/layout'
import ImgModal from '../../common/ImgModal.vue'
import Umania from '@/assets/data/umania.json'
export default {
  name: 'KyotoShrineBattle',
  mixins: [layoutMixin],
  components: {
    ImgModal
  },
  data () {
    return {
      showModal: false,
      imgDirectory: 'umania/',
      imgSrc: '',
      imgName: '',
      items: Umania
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
.page-umania {
  $this: &;
  width: 990px;
  min-height: 350px;
  padding: 30px;
  margin: 0 auto;
  &__heading,
  &__sub-heading {
    margin-bottom: 20px;
    font-weight: bold;
  }
  &__heading {
    font-size: 30px;
  }
  &__sub-heading {
    margin: 30px 0 10px;
    font-size: 18px;
  }
  &__img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 30px auto;
  }
  &__detail {
    .text-link {
      text-decoration: underline;
    }
  }
  .page-umania-catch,
  .description-detail {
    &__sub {
      margin-top: 10px;
      font-size: 18px;
      font-weight: normal;
    }
  }
  .page-umania-catch {
    font-size: 18px;
    font-weight: bold;
  }
  .page-umania-description {
    padding: 20px;
    margin-top: 30px;
    background: #eee;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
    &__heading {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: bold;
    }
    &__img {
      display: block;
      max-width: 100%;
      margin: 30px auto 0;
    }
  }
  .character-desigin {
    margin-top: 40px;
    &__heading {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: bold;
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .character-desigin-item {
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
          background: #fff;
        }
        &__text {
          position: absolute;
          bottom: 10px;
          font-weight: bold;
          text-align: center;
        }
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
    padding: 20px;
    #{$this}__heading {
      font-size: 24px;
    }
    .page-umania-catch,
    .description-detail {
      &__sub {
        font-size: 16px;
        @media screen and (max-width: 320px) {
          font-size: 14px;
        }
      }
    }
    .page-umania-catch {
      font-size: 16px;
    }
    .character-desigin {
      .character-desigin-item {
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
