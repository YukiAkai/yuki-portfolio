<template>
  <div :class="{ 'page-top--sp': isSmartPhone }" class="page-top">
    <h1 class="page-top__heading">このサイトについて</h1>
    <p class="page-top__note">趣味で描いたイラストや学生時代に制作したコンテンツを公開しています。</p>
    <ul class="page-top__list page-top-list">
      <li v-for="(item, index) in items" :key="index" class="page-top-list__item">
        <component
          :is="isInternalLink(item.path) ? 'router-link' : 'a'"
          :to="isInternalLink(item.path) ? item.path : ''"
          :href="isInternalLink(item.path) ? '' : item.path"
          class="top-item"
        >
          <img v-lazy="item.img" class="top-item__img">
          <p class="top-item__text">{{ item.title }}</p>
        </component>
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
          path: 'https://store.line.me/stickershop/product/1326071/ja',
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
        }
      ]
    }
  },
  methods: {
    isInternalLink (path) {
      return !/^https?:\/\//.test(path)
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
  &__heading {
    margin-bottom: 15px;
    font-size: 35px;
    font-weight: bold;
  }
  &__note {
    margin-bottom: 20px;
  }
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
      margin-bottom: 25px;
      .top-item {
        padding: 10px;
        background: #eee;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
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
    #{$this}__heading {
      font-size: 30px;
    }
    .page-top-list {
      &:before,
      &:after {
        content: none;
      }
      &__item {
        justify-content: center;
        width: 47%;
        margin-bottom: 20px;
        @media screen and (max-width: 320px) {
          margin-right: 15px;
        }
        &:nth-child(even) {
          margin-right: 0;
        }
        .top-item {
          &__text {
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>
