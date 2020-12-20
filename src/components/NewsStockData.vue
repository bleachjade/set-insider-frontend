<template>
  <div id="News">
    <h1 id="hh1">Stock Official News</h1>
    <main>
      <ul id="NewsStockData" class="demo">
        <div
          v-for="data in datas"
          v-bind:key="data.id"
          class="container1 container"
        >
          <li>Date Published: {{ data.date }}</li>
          <li>News Source: {{ data.source }}</li>
          <li>Name: {{ data.name }}</li>
          <li>
            News Link:
            <a v-bind:href="data.link"> {{ data.link }} </a>
          </li>
        </div>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: "NewsStockData",
  components: {},
  props: {
    datas: Array,
  },
}
</script>

<style>
div {
  font-family: Arial, Helvetica, sans-serif;
}
div #News {
  overflow: scroll;
  height: 80vh;
}
::-webkit-scrollbar {
  width: 20px;
}
a {
  text-decoration: none;
  color: lightgoldenrodyellow;
  word-break: break-word;
}
a:hover {
  color: lightcyan;
}
.home {
  text-align: center;
}

h1 {
  text-align: center;
}

.p {
  text-align: center;
}

.container1 {
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  background-color: lightskyblue;
  color: #fff;
  padding: 2.5em;
  margin: 1em;
  border-radius: 1.5em;
}
@import "../assets/css/NewsList.scss";
</style>
