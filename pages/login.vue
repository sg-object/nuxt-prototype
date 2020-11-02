<template>
  <div class="_container">
    <div class="content">
      <div class="login-box">
        <div class="title">
          <div style="font-size: xxx-large; font-weight: bold; color: #4e73df">
            sg.object
          </div>
        </div>
        <div class="form">
          <input
            v-model="id"
            type="text"
            name="id"
            placeholder="아이디"
            maxlength="50"
          />
          <input
            v-model="password"
            type="password"
            name="password"
            placeholder="비밀번호"
            maxlength="30"
          />
          <button type="button" @click="login">로그인</button>
          <button type="button" @click="goJoin">회원가입</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { isEmail, isPassword, isBlank } from "@/components/utils/Validator"

export default Vue.extend({
  layout: "temp",
  data() {
    return {
      id: "a@a.co",
      password: "Aa123456!",
    }
  },
  methods: {
    async login() {
      isPassword("")
      if (!isEmail(this.id)) {
        alert("유효한 아이디가 아닙니다.")
      } else if (isBlank(this.password)) {
        alert("유효한 비밀번호가 아닙니다.")
      } else {
        await this.$auth.loginWith("local", {
          data: {
            loginId: this.id,
            password: this.password,
            autoLogin: false,
          },
        })
        // this.$router.push('/user');
      }
    },
    goJoin() {
      console.log("join!!!")
      this.$router.push("/join")
    },
  },
})
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/test.scss";
$radius: 20px;
$height: 40px;

input {
  height: $height;
  border-radius: $radius;
  border: 1px solid #d1d3e2;
  padding: 0px 15px;
}

input:focus {
  outline: none;
  box-shadow: 0 0 0 2px #d1d3e2;
}

button {
  height: $height;
  outline: none;
  border-radius: $radius;
  background-color: map-get($map: $colors, $key: point);
  color: white;
  border-style: none;
}

._container {
  @include temp-background;
  height: 100vh;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .login-box {
      display: flex;
      flex-direction: column;
      background-color: white;
      width: 420px;
      height: 340px;
      border-radius: 10px;

      .title {
        height: 98px;
        border-bottom: 1px solid #e3e4ed;
        display: flex;
        justify-content: center;
      }

      .form {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 20px 40px;
      }
    }
  }
}
</style>
