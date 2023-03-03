<template>
  <div class="container">
    <div class="wrap">
    <img class="item-img" src="@/assets/img/sandal.jpg" alt="サンダル">
    <div class="item">
      <p class="item-name">sandal</p>
      <p class="item-delete">削除する</p>
    </div>
    <div class="item-content">
      <p>個数</p>
      <input type="number" v-model="quantity">
      <p>￥3000　税込</p>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  plops: ['item'],
  data() {
    return {
      quantity:''
    }
  }
}
</script>>

</script>
<style scoped>
.wrap {
  width: 100%;
  height: auto;
  border-top: 1px solid gray;
  display: flex;
  justify-content: space-between;
}

.wrap:last-child {
  border-bottom: 1px solid gray;
}

.item {
  width: 35%;
  padding:10px;
}

.item-name {
  width: 100%;
  margin: 30px 0 40px;
  font-size: larger;
  font-weight: bolder;
}

.item-delete {
  font-size: small;
}

.item-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: 20% 0;
  margin: 5px;
}

.item-content {
  display: flex;
  align-items: center;
}

input {
  width: 40px;
  height: 10px;
  margin: 0 10px;
}
</style>