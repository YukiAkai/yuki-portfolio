<template>
  <div class="header">
    <div class="header__item header-item">
      <img class="header-item__img" src="../assets/img/header.png">
      <p class="header-item__text">Yuki's Portfolio</p>
    </div>
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
  .header-item {
    position: relative;
    &__img {
      width: 100%;
      vertical-align: top;
    }
    &__text {
      font-family: "Chalkboard SE", "Comic Sans MS", Meiryo;
      font-size: 30px;
      font-weight: bold;
      position: absolute;
      bottom: 15px;
      right: 15px;
    }
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
