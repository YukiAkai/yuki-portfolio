<template>
  <div class="overflow">
    <div class="modal">
      <img :src="modalImg" :alt="modalImgName">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    modalImg: {
      type: String,
      default: ''
    },
    modalImgName: {
      type: String,
      default: ''
    }
  }
}
</script>
