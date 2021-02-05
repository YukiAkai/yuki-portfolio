<template>
  <div
    :class="{ 'footer--sp': isSmartPhone }"
    class="footer">
    <small class="footer__text">&copy; 2021 Yuki Akai</small>
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
  position: absolute;
  bottom: 0;
  width: 990px;
  padding: 20px 0;
  text-align: center;
  background: #eee;
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
