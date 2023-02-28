<template>
  <div class="container">
    <div class="top">
      <img class="top-img" src="@/assets/img/sandal.jpg" alt="NewArrivals">
      <div class="top-content">
        <h1 class="top-main-ttl">New Arrivals</h1>
        <h3 class="top-sub-ttl">for BOYS & GIRLS</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.top {
  width: 90vw;
  position: relative;
}
.top-img {
  width: 100%;
  position: absolute;
  z-index: 0;
}

.top-content {
  position: absolute;
  top:25vw;
  left:55%;
  z-index: 1;
}

.top-main-ttl {
  font-size: 5vw;
}
.top-sub-ttl {
  font-size: 2vw;
}

.ttl{
  display: inline-block;
  font-size: larger;
  width: 100%;
  margin-top: 90%;
}

</style>
