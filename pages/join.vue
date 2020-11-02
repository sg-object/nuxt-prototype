<template>
  <div class="_container">
    <div class="content">
      <div class="join-box">
        <div class="title">
          <div style="font-size: xxx-large; font-weight: bold; color: #4e73df">
            회원가입
          </div>
        </div>
        <b-form @submit="join">
          <b-form-group
            id="input-group-1"
            label-cols-lg="2"
            label="아이디"
            label-for="input-id"
            description="* 4~15자 이내 영문, 숫자 및 특수문자(_), (.) 포함가능"
          >
            <b-form-input
              id="input-id"
              v-model="id"
              type="text"
              required
              placeholder="아이디 입력(4~15자리)"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label-cols-lg="2"
            label="비밀번호"
            label-for="input-1"
            description="* 9~16자 이내 영문자 + 숫자 + 특수문자 조합 필수"
          >
            <b-form-input
              id="input-1"
              v-model="password"
              type="password"
              required
              placeholder="비밀번호 입력(9~16자리)"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label-cols-lg="2"
            label="비밀번호 확인"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="chkPassword"
              type="password"
              required
              placeholder="비밀번호 입력(9~16자리)"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label-cols-lg="2"
            label="이름"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="name"
              type="text"
              required
              placeholder="이름"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label-cols-lg="2"
            label="부서"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="id"
              type="text"
              required
              placeholder="부서"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label-cols-lg="2"
            label="직책"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="id"
              type="text"
              required
              placeholder="직책"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label-cols-lg="2"
            label="담당그룹"
            label-for="input-1"
          >
            <multiselect
              v-model="value"
              tag-placeholder="Add this as new tag"
              placeholder="담당그룹을 선택하세요"
              label="name"
              track-by="code"
              :options="options"
              :multiple="true"
              :taggable="true"
              @tag="addTag"
            ></multiselect>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label-cols-lg="2"
            label="이메일"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="id"
              type="email"
              required
              placeholder="이메일 주소 입력"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label-cols-lg="2"
            label="내선전화"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="id"
              type="text"
              required
              placeholder="전화번호 입력('-' 없이 입력)"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label-cols-lg="2"
            label="휴대폰"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="id"
              type="text"
              required
              placeholder="휴대폰번호 입력('-' 없이 입력)"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label-cols-lg="2"
            label="닉네임"
            label-for="input-1"
            description="* 고객 커뮤니케이션 용도로 필요한 경우에 맞게 입력 ex) API 운영자, CS 담당 운영자"
          >
            <b-form-input
              id="input-1"
              v-model="id"
              type="text"
              required
              placeholder="닉네임"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label-cols-lg="2"
            label="비고"
            label-for="input-1"
          >
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="기타 신청 관련 특이사항 입력"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <div style="display: flex; justify-content: flex-end">
            <div>
              <b-button variant="dark" @click="cancel">취소</b-button>
              <b-button variant="primary" @click="join">회원가입</b-button>
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
// import { isEmail, isPassword, isBlank } from "@/components/utils/Validator"

export default {
  layout: "temp",
  auth: false,
  data() {
    return {
      id: "",
      password: "",
      chkPassword: "",
      name: "",
      email: "",
      phone: "",
      nickName: "",
      etc: "",
      ttt: "",
      text: "",
      arr: [],
      value: [],
      options: [
        { name: "Vue.js", code: "vu" },
        { name: "Javascript", code: "js" },
        { name: "Open Source", code: "os" },
      ],
    }
  },
  computed: {},
  methods: {
    join() {
      console.log("join")
    },
    cancel() {
      this.$router.back()
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      }
      this.options.push(tag)
      this.value.push(tag)
    },
  },
}
</script>

<style lang="scss" scoped>
._container {
  @include temp-background;
  padding: 50px;

  .content {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 750px;
    border-radius: 10px;

    .join-box {
      display: flex;
      flex-direction: column;
      padding: 30px;

      .title {
        height: 98px;
        border-bottom: 1px solid #e3e4ed;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
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
