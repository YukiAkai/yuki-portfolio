<template>
  <div class="footer">
    <small class="footer__text">© 2021 Yuki Akai</small>
  </div>
</template>

<script>
export default {
  name: 'PageFooter'
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
}
</style>
