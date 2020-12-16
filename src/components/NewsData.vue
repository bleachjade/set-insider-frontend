<template>
  <div class="container" id="News">
      <h1>All News</h1>
      <ul id="NewsSocialData" class="demo">
          <div v-for="data in all_data" v-bind:key="data.id">
            <li v-for="(value, name) in data" v-bind:key="value.id">
            {{ name }}: {{ value }}
            </li>
            <p>   </p>
          </div>
        </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: "NewsSocialData",
    components: {},
    data(){
        return {
            all_data: []
        }
    },
    beforeMount() {
        axios
            .get("http://localhost:3001/stock/socialmedia-news?symbol=ACAP")
            .then(response => this.preparedData(response.data.result));
        },
    methods: {
        preparedData(data){
            this.all_data = data;
            console.log(data);
        }
    }
}

</script>

<style>
.home {
  text-align: center;
}

.p {
    text-align: center;
}
</style>