<template>
  <div :class="{ 'page-top--sp': isSmartPhone }" class="page-top">
    <ul class="page-top__list page-top-list">
      <li v-for="(item, index) in items" :key="index" class="page-top-list__item">
        <router-link :to="item.path" class="list-item">
          <img :src="item.img" class="list-item__img">
          <p class="list-item__text">{{ item.title }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import layoutMixin from '@/mixins/layout'
export default {
  name: 'Top',
  mixins: [layoutMixin],
  data () {
    return {
      items: [
        {
          title: 'DOYAGAERU',
          path: '/doyagaeru/',
          img: require('@/assets/img/top_doya.png')
        },
        {
          title: 'New Year Card',
          path: '/new-year-card/',
          img: require('@/assets/img/top_new-year.png')
        },
        {
          title: 'Comic Symbols',
          path: '/comic-symbols/',
          img: require('@/assets/img/top_manpu.png')
        },
        {
          title: 'KYOTO SHRINE BATTLE !',
          path: '/kyoto-shrine-battle/',
          img: require('@/assets/img/top_kyoto.png')
        },
        {
          title: 'Umania',
          path: '/umania/',
          img: require('@/assets/img/top_umania.png')
        },
        {
          title: 'Catooon House',
          path: '/catooon-house/',
          img: require('@/assets/img/top_catooon.png')
        },
        {
          title: 'Processing',
          path: '/processing/',
          img: require('@/assets/img/top_processing.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-top {
  max-width: 990px;
  min-height: 350px;
  padding: 30px 20px 10px;
  margin: 0 auto;
  .page-top-list {
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
    &__item {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 220px;
      padding: 10px;
      margin-bottom: 25px;
      background: #eee;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
      .list-item {
        &__img {
          max-width: 100%;
        }
        &__text {
          margin-top: 10px;
          font-weight: bold;
          text-align: center;
        }
      }
    }
  }
  &--sp {
    width: auto;
    padding: 30px 4% 10px;
    .page-top-list {
      &:before,
      &:after {
        content: none;
      }
      &__item {
        justify-content: center;
        width: 47%;
        margin-right: 20px;
        margin-bottom: 20px;
        @media screen and (max-width: 320px) {
          margin-right: 15px;
        }
        &:nth-child(even) {
          margin-right: 0;
        }
        .list-item {
          &__text {
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>
