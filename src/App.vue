<template>
  <div id="app">
    <div id="nav">
      <div>
         <router-link to="/stock"><h2>Stock</h2></router-link>
      </div>
      <InputBox :path="this.$route.params.symbol" />
    </div>
    <router-view/>
  </div>
</template>

<script >
import InputBox from "@/components/SearchBox.vue";
export default {
    name: "nav-bar",
    components: {
        InputBox,
    },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  display:flex;
  padding: 20px;
  align-items: center;
  width: 100%;
  justify-content: space-around;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
