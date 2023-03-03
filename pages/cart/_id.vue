<template>
  <div class="container">
    <h2></h2>
    <div class="cart-item" v-for="(item,index) in items" :key="index">
      <Item />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items:[]
    }
  },
  methods: {
    async getItems() {
      await this.$axios.get('/api/item')
    }
  }
}
</script>

<style scoped>
.cart-item {
  width: 60%;
  margin-left: 10px;
}

</style>