<template>
  <div class="header">
    <img class="header__logo" src="../assets/img/top.png" alt="Yuki's Portfolio">
    <ul class="header__menu header-menu">
      <li v-for="(item, index) in items" :key=index class="header-menu__item header-menu-item">
        <router-link class="header-menu-item__link" :to=item.path>{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
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
  &__logo {
    width: 100%;
    vertical-align: top;
  }
  &__menu {
    display: flex;
    list-style: none;
    .header-menu-item {
      width: 25%;
      background: #5389d6;
      text-align: center;
      &:hover {
        opacity: 0.7;
        transition: opacity 0.15s;
      }
      &__link {
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        padding: 10px 0;
        display: block;
      }
    }
  }
}
</style>
