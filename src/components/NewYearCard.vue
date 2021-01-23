<template>
  <div class="page-new-year">
    <div v-for="(item, index) in items" :key="index">
      <img :src="item.modalImg" :alt="item.modalImgName" class="page-comic__img" width="372" height="248" @click="clickShowModal(item)">
    </div>
    <img-modal v-if="showModal" :modalImg="modalImg" :modalImgName="modalImgName" />
  </div>
</template>

<script>
import ImgModal from './ImgModal.vue'
export default {
  name: 'NewYearCard',
  components: {
    ImgModal
  },
  data () {
    return {
      showModal: false,
      modalImg: '',
      modalImgName: '',
      items: [
        {
          modalImg: require('../assets/img/new-year/2020.png'),
          modalImgName: '2020'
        },
        {
          modalImg: require('../assets/img/new-year/2021.png'),
          modalImgName: '2021'
        }
      ]
    }
  },
  methods: {
    clickShowModal (item) {
      this.showModal = true
      this.modalImg = item.modalImg
      this.modalImgName = item.modalImgName
    }
  }
}
</script>

<style lang="scss" scoped>
.page-new-year {
  width: 990px;
  min-height: 350px;
  padding: 20px;
  margin: 0 auto;
}
</style>
