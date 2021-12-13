<template>
  <div>
    <div id="root">
      <header>
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/decks">Decks</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/profile">Profile</nuxt-link>
          </li>
        </ul>
      </header>
    </div>
    <NuxtLink to="/test">Home page</NuxtLink>

    <h1>FKKKKKKKK</h1>

    <test />

    <bangOcCho v-if="show"/>

    <button v-if="!show" @click="show = true">Show List</button>

    <a href="https://luong.vnpost.vn/ProfessionalStaff/CalculateSalary">Lương</a>
  </div>
</template>

<script>
import bangOcCho from "./thanh/bangOcCho.vue"
export default {
  data() {
    return {
      show: true
    }
  },
  components: { 
    bangOcCho,
    dirs: [
      '~/components',
    ]
  },
  async asyncData({ $content, params }) {
    
  },  
}
</script>
