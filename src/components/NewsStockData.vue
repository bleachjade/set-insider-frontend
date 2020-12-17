<template>
  <div class="container" id="News">
      <h1>Stock Official News</h1>
      <main>
      <ul id="NewsStockData" class="demo">
          <div v-for="data in all_data" v-bind:key="data.id" class="container1">
            <li>
             Date Published: {{ data.date }}
            </li>
            <li>
             News Source: {{ data.source }}
            </li>
            <li>
             Name: {{ data.name }}
            </li>
            <li>
             News Link: <a v-bind:href=" data.link "> {{ data.link }} </a>
            </li>
            <li>
             ID: {{ data.id }} 
            </li>
          </div>
        </ul>
      </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: "NewsStockData",
    components: {},
    data(){
        return {
            all_data: []
        }
    },
    beforeMount() {
        axios
            .get("http://localhost:3001/stock/official-news?symbol=ACAP")
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

h1 {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.p {
    text-align: center;
}

.container1 {
  width: auto;
  height: auto;
  background-color: grey;
  color: #fff;
  padding: 20px;
  position: relative;
  margin: 0px;
  border-radius: 25px;
}
@import "../assets/css/NewsList.scss";
</style>