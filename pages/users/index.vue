<template>
  <div>
    <p class="mt-3">Current Page: {{ currentPage }}</p>
    <b-button variant="primary" @click="goCreate"> 등록 </b-button>
    <b-table
      striped
      bordered
      hover
      :items="items"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(id)="data">
        <nuxt-link :to="path + data.value">
          {{ data.value }}
        </nuxt-link>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  asyncData({ $axios, $route }) {
    console.log("!!!!")
    // const a = await $axios.$get("products/100554019/auth")
    // console.log(a);
  },
  data() {
    return {
      fields: [
        "index",
        {
          key: "id",
          label: "아이디",
          // sortable: true,
        },
        {
          label: "이름",
          key: "last_name",
          // sortable: false,
        },
        {
          label: "성",
          key: "first_name",
          // sortable: false,
        },
      ],
      perPage: 5,
      currentPage: 1,
      items: [
        {
          id: 1,
          first_name: "Fred",
          last_name: "test",
        },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
      ],
    }
  },
  computed: {
    rows() {
      return this.items.length
    },
    path() {
      return this.$route.path + "/"
    },
  },
  methods: {
    goCreate() {
      this.$router.push(this.path + "0")
    },
    mutation_method() {
      this.$store.commit("mutation_test", 10)
    },
    action_method() {
      this.$store.dispatch("action_test", -10)
    },
  },
})
</script>
