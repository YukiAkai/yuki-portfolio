<template>
  <div class="page-top" :class="{ 'page-top--sp': isSmartPhone }">
    <div class="page-top__contents">
      <router-link v-for="(item, index) in items" :key=index :to=item.path class="top-content">
        <p class="top-content__text">{{ item.title }}</p>
        <img class="top-content__img" :src=item.img>
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
  padding: 30px 20px 10px;
  margin: 0 auto;
  width: 990px;
  min-height: 350px;
  &__contents {
    display: flex;
    flex-wrap: wrap;
    .top-content {
      background: #eee;
      box-shadow: 0 3px 3px rgba(0,0,0,0.2);
      position: relative;
      width: 220px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin: 0 17px 20px 0;
      padding: 20px 10px 10px;
      &__text {
        font-weight: bold;
        text-align: center;
        line-height: 1.2;
        height: 40px;
      }
      &__img {
        max-width: 100%;
      }
    }
  }
  &--sp {
    padding: 30px 4% 10px;
    width: auto;
    .top-content {
      width: 47%;
      margin-right: 20px;
      justify-content: center;
      &:nth-child(even) {
        margin-right: 0;
      }
    }
  }
}
</style>
