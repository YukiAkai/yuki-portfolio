<template>
  <div :class="{ 'header--sp': isSmartPhone }" class="header">
    <div class="header__item header-item">
      <img
        class="header-item__img"
        src="../assets/img/header.png">
      <p class="header-item__text">Yuki's Portfolio</p>
    </div>
    <ul class="header__menu header-menu">
      <li v-for="(item, index) in items" :key="index" class="header-menu__item header-menu-item">
        <router-link :to="item.path" class="header-menu-item__link">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import layoutMixin from '../mixins/layout'
export default {
  name: 'PageHeader',
  mixins: [layoutMixin],
  data () {
    return {
      items: [
        { title: 'Top', path: '/' },
        { title: 'Profile', path: '/profile' },
        { title: 'Activity', path: '/activity' },
        { title: 'Link', path: '/link' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  .header-item {
    position: relative;
    &__img {
      width: 100%;
      vertical-align: top;
    }
    &__text {
      position: absolute;
      right: 15px;
      bottom: 15px;
      font-family: "Chalkboard SE", "Comic Sans MS", Meiryo;
      font-size: 30px;
      font-weight: bold;
    }
  }
  &__menu {
    display: flex;
    list-style: none;
    .header-menu-item {
      width: 25%;
      text-align: center;
      background: #5389d6;
      @media (hover: hover) {
        &:hover {
          opacity: 0.7;
          transition: opacity 0.15s;
        }
      }
      &__link {
        display: block;
        padding: 10px 0;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
  &--sp {
    .header-item {
      &__text {
        font-size: 22px;
      }
    }
    .header-menu-item {
      &__link {
        font-size: 16px;
      }
    }
  }
}
</style>
