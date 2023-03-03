<template>
  <div class="container">
    <form @submit.prevent="login">
      <div class="wrap">
        <h2 class="ttl">ログイン</h2>
        <h3 class="sub-ttl">会員のお客さま</h3>
        <p>メールアドレスとパスワードを入力してログインしてください。</p>
        <label>メールアドレス：</label>
        <input type="email" v-model="email" placeholder="email" required /><br>
        <label>パスワード：</label>
        <input type="password" v-model="password" placeholder="password" required /><br>
      </div>
      <button class="login-btn btn" type="submit">ログイン</button>
    </form>
    <form @submit.prevent="register">
      <div  class="wrap">
        <h2 class="ttl">新規会員登録</h2>
        <h3 class="sub-ttl">初めてご利用の方・会員以外の方</h3>
        <p>初めてご利用のお客様は、こちらから会員登録を行ってください。</p>
        <label>メールアドレス：</label>
        <input type="email" v-model="email" placeholder="email" required /><br>
        <label>パスワード：</label>
        <input type="password" v-model="password" placeholder="password" required /><br>
        <label>お名前：</label>
        <input type="text" v-model="name" placeholder="name" required /><br>
      </div>
      <button class="register-btn btn" type="submit">新規会員登録</button>
    </form>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      name: null,
      email: null,
      password: null,
    };
  },
  methods: {
    async register() {
      try {
        await this.$axios.post("http://localhost:8000/api/auth/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        await this.$auth.loginWith("laravelJWT", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        this.$router.push("/");
      } catch {
        alert("メールアドレスがすでに登録されています");
      }
    },
    async login() {
      try {
        await this.$auth.loginWith("laravelJWT", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        this.$router.push("/");
      } catch {
        alert("メールアドレスまたはパスワードが間違っております");
      }
    },
  },
};
</script>
<style scoped>
.container {
  width: 100vw;
  display: flex;
  justify-content: center;
}
.wrap {
  width: 320px;
  margin: 120px 10px 0 ;
  height: 250px;
}
.ttl {
  color: rgb(63, 63, 63);
  font-size: 24px;
  margin-bottom: 20px;
}
.sub-ttl {
  border-bottom: 2px solid;
  font-weight: bold;
  margin-bottom: 10px;
}

p{
  font-size: small;
  padding:10px 5px 20px;
}

label {
  width: 120px;
  display: inline-block;
  text-align: right;
  font-size: small;
  margin: 10px 0;
}

.btn {
  display: block;
  margin:  0 auto;
  width: 150px;
  border: none;
  color: white;
  cursor: pointer;
}
.login-btn {
  background-color: black;
}
.register-btn {
  background-color: rgb(20, 163, 20);
}
</style>