<template>
  <div :class="{ 'page-top--sp': isSmartPhone }" class="page-top">
    <div class="page-top__contents">
      <router-link v-for="(item, index) in items" :key="index" :to="item.path" class="top-content">
        <p class="top-content__text">{{ item.title }}</p>
        <img :src="item.img" class="top-content__img">
      </router-link>
    </div>
  </div>
</template>

<script>
import layoutMixin from '../mixins/layout'
export default {
  name: 'Top',
  mixins: [layoutMixin],
  data () {
    return {
      items: [
        {
          title: 'DOYAGAERU',
          path: '/doyagaeru',
          img: require('../assets/img/top_doya.png')
        },
        {
          title: 'New Year’s Card',
          path: '/new-year-card',
          img: require('../assets/img/top_new-year.png')
        },
        {
          title: 'Comic Symbols',
          path: '/comic-symbols',
          img: require('../assets/img/top_manpu.png')
        },
        {
          title: 'KYOTO SHRINE BATTLE !',
          path: '/kyoto-shrine-battle',
          img: require('../assets/img/top_kyoto.png')
        },
        {
          title: 'Umania',
          path: '/umania',
          img: require('../assets/img/top_umania.png')
        },
        {
          title: 'Catooon House',
          path: '/catooon-house',
          img: require('../assets/img/top_catooon.png')
        },
        {
          title: 'Processing',
          path: '/processing',
          img: require('../assets/img/top_processing.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-top {
  $this: &;
  max-width: 990px;
  min-height: 350px;
  padding: 30px 20px 10px;
  margin: 0 auto;
  &__contents {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &:before,
    &:after {
      display: block;
      width: 220px;
      height: 0;
      content: "";
    }
    &:before {
      order: 1;
    }
    .top-content {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 220px;
      padding: 20px 10px 10px;
      margin-bottom: 25px;
      background: #eee;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
      &__text {
        height: 40px;
        font-weight: bold;
        line-height: 1.2;
        text-align: center;
      }
      &__img {
        max-width: 100%;
      }
    }
  }
  &--sp {
    width: auto;
    padding: 30px 4% 10px;
    #{$this}__contents {
      &:before,
      &:after {
        content: none;
      }
    }
    .top-content {
      justify-content: center;
      width: 47%;
      margin-right: 20px;
      margin-bottom: 20px;
      &:nth-child(even) {
        margin-right: 0;
      }
    }
  }
}
</style>
