<template>
  <div class="footer" :class="{ 'footer--sp': isSmartPhone }">
    <small class="footer__text">© 2021 Yuki Akai</small>
  </div>
</template>

<script>
import layoutMixin from '../mixins/layout'
export default {
  name: 'PageFooter',
  mixins: [layoutMixin]
}
</script>
<style lang="scss" scoped>
.footer {
  background: #eee;
  text-align: center;
  padding: 20px 0;
  position: absolute;
  bottom: 0;
  width: 990px;
  &__text {
    font-size: 12px;
    color: #999;
  }
  &--sp {
    position: relative;
    width: auto;
  }
}
</style>
