<template>
  <div :class="{ 'page-kyoto--sp': isSmartPhone }" class="page-kyoto">
    <h1 class="page-kyoto__heading">KYOTO SHRINE BATTLE !</h1>
    <div class="page-kyoto__catch page-kyoto-catch">
      厨二病じゃんけんゲーム
      <p class="page-kyoto-catch__sub">関西 オープンデータ ✕ ゲームハッカソン 学生チャレンジ 企業賞（別名: 厨二賞）受賞</p>
    </div>
    <img class="page-kyoto__img" src="@/assets/img/kyoto-shrine-battle.png" alt="KYOTO SHRINE BATTLE !" width="372" height="248">
    <h2 class="page-kyoto__sub-heading">概要</h2>
    <div class="page-kyoto__detail">
      「オープンデータを使ったゲーム」というテーマで制作した作品。
      <br>
      太一（プレイヤー）が荒ぶる神々によって腐敗した京都の観光地(神社等)を救う物語。太一は神々の怒りを抑えるため、4 つの神社に向かい、圧倒的かつ公平的一発勝負（じゃんけん）によって神々の怒りを押さえ込む。太一は足を運んだ先
      の観光地（神社）でその土地の神様を倒すことで、その土地の歴史や縁の情報を手に入れることができる。
    </div>
    <h2 class="page-kyoto__sub-heading">開発言語</h2>
    <div class="page-kyoto__detail">
      Unity
    </div>
    <h2 class="page-kyoto__sub-heading">使用したオープンデータ</h2>
    <div class="page-kyoto__detail">
      <a class="text-link" href="http://linkdata.org/work/rdf1s804i">「京都市観光スポットリスト2013」 (神社名, 緯度, 経度)</a>
    </div>
    <h2 class="page-kyoto__sub-heading">担当</h2>
    <div class="page-kyoto__detail">
      キャラクターデザイン
    </div>
    <div class="page-kyoto__character-desigin character-desigin">
      <h1 class="character-desigin__heading">キャラクターデザイン集</h1>
      <ul class="character-desigin__list character-desigin-list">
        <li v-for="(item, index) in items" :key="index" class="character-desigin-list__item character-desigin-item" @click="openModal(item)">
          <img :src="require('@/assets/img/kyoto/' + item.imgSrc + '.png')" :alt="item.imgName" class="character-desigin-item__img" width="372" height="248">
          <p class="character-desigin-item__text">{{ item.imgName }}</p>
        </li>
      </ul>
    </div>
    <transition name="fade">
      <img-modal v-if="showModal" :imgDirectory="imgDirectory" :imgSrc="imgSrc" :imgName="imgName" @clickCloseModal="closeModal()"/>
    </transition>
    <router-link to="/" class="page-kyoto__top-link text-link"><i class="icon icon-arrow-left"></i>PAGE TOP</router-link>
  </div>
</template>

<script>
import layoutMixin from '@/mixins/layout'
import ImgModal from '../../common/ImgModal.vue'
import KyotoShrineBattle from '@/assets/data/kyotoShrineBattle.json'
export default {
  name: 'KyotoShrineBattle',
  mixins: [layoutMixin],
  components: {
    ImgModal
  },
  data () {
    return {
      showModal: false,
      imgDirectory: 'kyoto/',
      imgSrc: '',
      imgName: '',
      items: KyotoShrineBattle
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
.page-kyoto {
  $this: &;
  width: 990px;
  min-height: 350px;
  padding: 30px 20px;
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
  .page-kyoto-catch,
  .description-detail {
    &__sub {
      margin-top: 10px;
      font-size: 18px;
      font-weight: normal;
    }
  }
  .page-kyoto-catch {
    font-size: 18px;
    font-weight: bold;
  }
  .page-kyoto-description {
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
    .page-kyoto-catch,
    .description-detail {
      &__sub {
        font-size: 16px;
        @media screen and (max-width: 320px) {
          font-size: 14px;
        }
      }
    }
    .page-kyoto-catch {
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
