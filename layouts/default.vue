
<template>
  <div>
    <CommonHeader />
    <Nuxt />
    <footer>
        <small class="copyright">&copy; 2021 Trace All Rights Reserved.</small>
      </footer>
  </div>
</template>
<style scoped>
footer {
  width: 100vw;
  height: 30px;
  text-align: center;
  background-color: black;
  position: fixed;
  bottom: 0;
} 
.copyright {
  color: white;
  margin-top: 10px;
  display: inline-block;
  font-size: small;
}
</style>