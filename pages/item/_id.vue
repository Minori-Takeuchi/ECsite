<template>
  <div class="container">
    <div class="item-wrap">
      <div class="item-wrap-m">
        <img class="item-img" :src="`http://localhost:8000/storage/${item.img}`" alt="サンダル">
        <div class="items">
          <p class="item-name">{{ item.name }}</p>
          <p class="item-price">￥{{ item.price }}(税込)</p>
          <form @submit.prevent="insertCartItem">
          <label>個数</label>
          <input type="number"  class="cart-item" v-model="cartItem">
          <button type="submit">カートに入れる</button>
          </form>
        </div>
      </div>
      <div class="item-wrap-s">
        <p>{{ item.content }}</p>
        <p>{{ item.explanation }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: {},
      cartItem:'',
    }
  },
  methods: {
    async fetchItem() {
      const resItemData = await this.$axios.get(`/api/item/${this.$route.params.id}`)
      this.item = {
        name: resItemData.data.data[0].item_name,
        price: resItemData.data.data[0].price.toLocaleString(),
        img: resItemData.data.data[0].item_img,
        content: resItemData.data.data[0].content,
        explanation: resItemData.data.data[0].explanation,
      }
    },
    insertCartItem() {
      const sendData = {
        user_id:this.$auth.user.id
      }
    }
  },
  async created() {
    await this.fetchItem()
  },
  }
</script>

<style scoped>
.container {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
}
.item-wrap {
  width: 60%;
}
.item-wrap-m {
  display: flex;
}
.item-img {
  width: 30%;
  height: 200px;
  object-fit: cover;
  margin: 5px;
}
.items {
  padding:30px 10px;
}
.item-price {
  padding-top: 10px;
  font-size: larger;
  font-weight: bolder;
}
</style>