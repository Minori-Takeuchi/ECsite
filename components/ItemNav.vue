<template>
  <div class="container" @click="goItemPage">
    <img class="item-img" :src="`http://localhost:8000/storage/${item.item_img}`" alt="サンダル">
    <p class="item-content">{{ item.item_name }}</p>
    <p class="item-content">￥{{ item.price.toLocaleString() }} 税込</p>
  </div>
</template>

<script>
export default {
  props: {
    item:{}
  },
  methods: {
    goItemPage() {
      console.log(this.item)
      this.$router.push({ path: `/item/${this.item.id}` })
    },
  }
}
</script>

<style scoped>

.container {
  width: 100%;
}
.item-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin: 5px;
}
.item-content {
  width: 100%;
  padding-left: 10px;
}
</style>