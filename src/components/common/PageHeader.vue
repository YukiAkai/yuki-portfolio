<template>
  <div :class="{ 'header--sp': isSmartPhone }" class="header">
    <div class="header__item header-item">
      <img class="header-item__img" src="@/assets/img/header.png">
      <p class="header-item__text">Yuki's Portfolio</p>
    </div>
    <ul :class="{ 'header-menu--fixed': isSmartPhone && scrollY > 122 }" class="header__menu header-menu">
      <li v-for="(item, index) in items" :class="{ 'header-menu-item--current': isCurrentMenu(item.reg) }" :key="index" class="header-menu__item header-menu-item">
        <router-link :to="item.path" class="header-menu-item__link">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import layoutMixin from '@/mixins/layout'
export default {
  name: 'PageHeader',
  mixins: [layoutMixin],
  data () {
    return {
      items: [
        { title: 'Top', path: '/', reg: '^/$' },
        { title: 'Profile', path: '/profile/', reg: '^/profile/$' }
      ],
      scrollY: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    isCurrentMenu (reg) {
      const regexp = new RegExp(reg)
      return this.$route.path.match(regexp)
    },
    handleScroll () {
      this.scrollY = window.scrollY
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
  .header-menu {
    display: flex;
    list-style: none;
    .header-menu-item {
      width: 50%;
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
      &--current {
        pointer-events: none;
        background: #3571c4;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  &--sp {
    .header-item {
      &__text {
        font-size: 22px;
      }
    }
    .header-menu {
      &__img {
        width: auto;
        height: 122px;
      }
      .header-menu-item {
        &__link {
          font-size: 14px;
        }
      }
      &--fixed {
        position: fixed;
        top: 0;
        z-index: 2;
        width: 100%;
        max-width: 420px;
      }
    }
  }
}
</style>
