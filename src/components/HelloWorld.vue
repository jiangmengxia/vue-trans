<template>
  <div class="hello">
    {{$t('login')}}<br/>
    <button @click="setLang('en')">{{$t('English')}}</button>
    <button @click="setLang('zh')">{{$t('Chinese')}}</button>
    <br/> <br/> <br/> <br/>
    <router-link to="/buy">{{$t('nextPage')}}</router-link>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      setLang(lang) {
        this.$i18n.setLocale(lang)
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
    text-decoration: none;
  }
</style>
