<template>
  <div class="container" id="News">
      <h1>All News</h1>
      <p> {{ all_data }} </p>
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