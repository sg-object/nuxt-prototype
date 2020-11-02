<template>
  <div style="padding: 20px">
    <b-form id="test" @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="id"
          type="email"
          required
          placeholder="Enter email"
          :disabled="!isInput"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="id"
          type="email"
          required
          placeholder="Enter email"
          :disabled="!isInput"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="id"
          type="email"
          required
          placeholder="Enter email"
          :disabled="!isInput"
        ></b-form-input>
      </b-form-group>

      <div>
        <div v-if="isInput">
          <b-button variant="primary">등록</b-button>
          <b-button variant="danger" @click="cancel">취소</b-button>
        </div>
        <div v-else>
          <b-button variant="dark" @click="goList">목록</b-button>
          <b-button variant="primary" @click="update">수정</b-button>
        </div>
      </div>
    </b-form>
    <div>{{ id }}</div>
    <div>{{ name }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  asyncData({ $axios, params }) {
    if (params.id > 0) {
      return {
        id: "id",
        name: "name",
        phone: "phone",
        isInput: false,
      }
    }
    return {
      id: "",
      name: "",
      phone: "",
      isInput: true,
    }
  },
  data() {
    return {
      aa: "a",
    }
  },
  computed: {},
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      console.log(evt)
    },
    update() {
      this.isInput = true
    },
    cancel() {
      this.isInput = false
    },
    goList() {
      this.$router.push("/users")
      // this.$router.back()
    },
  },
})
</script>

<style lang="scss" scoped>
input:disabled {
  background-color: white;
  border-style: none;
}
</style>
