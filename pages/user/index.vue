<template>
  <div>
    <img :src="obj.imgPath" style="width: 300px; height: 300px;" />
    <div>{{ obj }}</div>
    <div>================================================================================================================</div>
    <div>================================================================================================================</div>
    <button @click="mutation_method">mutation</button>
    <button @click="action_method">action</button>
    <div>getter : {{ computed_test }}</div>
    <div>{{ text }}</div>
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: function(){
    return {
      text: 'this is text'
    }
  },
  async asyncData({ $axios }) {
  const a = await $axios.$get('products/100554019/auth')
  //console.log(a);
    return { obj: a };
  },
  methods: {
    mutation_method(){
      this.$store.commit('mutation_test', 10)
    },
    action_method(){
      this.$store.dispatch('action_test', -10)
    }
  },
  computed: {
    computed_test() {
      return this.$store.getters.get_test;
    }
  }
})
</script>