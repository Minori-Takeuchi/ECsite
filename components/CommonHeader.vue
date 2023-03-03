<template>
  <header>
    <h1 class="title">Trace</h1>
    <nav class="nav">
      <ul class="menu-group">
        <li class="menu-item">
          <div class="menu-item-name" v-if="$auth.loggedIn">Name：{{ $auth.user.name }}</div>
        </li>
        <li class="menu-item">
          <img class="menu-item-img" src="@/assets/img/cart.png" alt="カート"
          @click="goCartPage">
        </li>
        <li class="menu-item">
          <img class="menu-item-img" src="@/assets/img/user.png" alt="注文履歴"
            @click="goMyPage">
        </li>
        <li class="menu-item" v-show="$auth.loggedIn">
          <img class="menu-item-img" src="@/assets/img/logout.png" alt="ログアウト" @click="logout">
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    async logout() {
      try {
        await this.$auth.logout();
        this.$router.push("/logout");
      } catch (error) {
        alert('ログアウトしました')
      }
    },
    goCartPage() {
      if (this.$auth.loggedIn) {
        this.$router.push({ path: `/cart/${this.$auth.user.id}` })
        console.log(this.$params)
      } else {
        alert('ログインしてください')
      }
    },
    goMyPage() {
      if (this.$auth.loggedIn) {
        this.$router.push({ path: `/user/${this.$auth.user.id}` })
        console.log(this.$params)
      } else {
        alert('ログインしてください')
      }
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  height: 50px;
  padding: 0 50px;
  background-color: rgb(255, 255, 255);
  align-items: center;
  justify-content: space-between;
}

.title {
  margin-right: auto;
  font-size: 24px;
}

.menu-group{
  display: flex;
  align-items: center;
}

.menu-item {
  list-style: none;
  padding: 10px;
}
.menu-item-img {
  display: block;
  width: 20px;
  cursor: pointer;
}

</style>