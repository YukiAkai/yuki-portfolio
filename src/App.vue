<template>
  <div id="app" :class="isSmartPhone ? 'wrapper-sp' : 'wrapper'">
    <div class="contents-wrapper">
      <page-header />
      <router-view />
      <page-footer />
    </div>
  </div>
</template>

<script>
import layoutMixin from './mixins/layout'
import PageHeader from './components/common/PageHeader'
import PageFooter from './components/common/PageFooter'
export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  },
  mixins: [layoutMixin],
  mounted () {
    window.onresize = function () {
      const vh = document.documentElement.clientHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    window.onresize()
  },
  beforeDestroy () {
    window.onresize = null
  }
}
</script>

<style lang="scss">
@import "./assets/css/reset.css";
.wrapper {
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  min-width: 990px;
  max-width: 100%;
  height: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  padding: 20px 0 30px;
  margin: 0 auto;
  background: #faf2e5;
  .contents-wrapper {
    position: relative;
    height: 100%;
    min-height: 350px;
    padding-bottom: 56px;  // footerの高さ分空ける
    background: #fff;
    box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
  }
}
.wrapper-sp {
  overflow-x: hidden;
  background: #faf2e5;
  .contents-wrapper {
    width: auto;
    max-width: 420px;
    margin-right: auto;
    margin-left: auto;
    background: #fff;
  }
}
</style>
