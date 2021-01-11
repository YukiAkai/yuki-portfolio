<template>
  <div class="page-top">
    <div class="page-top__contents">
      <router-link v-for="(item, index) in items" :key=index :to=item.path class="top-content">
        <p class="top-content__text">{{ item.title }}</p>
        <img class="top-content__img" :src=item.img>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      items: [
        {
          title: 'Comic Symbols',
          path: '/commic-symbols',
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
          img: require('../assets/img/top_pro-map.png')
        },
        {
          title: 'Processing',
          path: '/processing',
          img: require('../assets/img/top_processing.png')
        },
        {
          title: 'New Year’s Card',
          path: '/new-year-card',
          img: require('../assets/img/top_new-year.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-top {
  padding: 20px 20px 0;
  &__contents {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 990px;
    .top-content {
      position: relative;
      width: 220px;
      display: block;
      margin: 0 0 20px 22px;
      &__text {
        font-family: "Comic Sans MS";
        font-weight: bold;
        text-align: center;
        z-index: 2;
        width: 100%;
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
