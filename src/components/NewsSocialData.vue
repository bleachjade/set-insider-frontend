<template>
  <div id="News">
      <h1>Stock Social Media News</h1>
      <main>
      <ul id="NewsSocialData" class="demo">
          <div v-for="data in datas" v-bind:key="data.id" class="container1">
            <li>
             Date Published: {{ data.date }}
            </li>
            <li>
             Name: {{ data.name }}
            </li>
            <li>
             News Link: <a v-bind:href=" data.link "> {{ data.link }} </a>
            </li>
          </div>
        </ul>
      </main>
  </div>
</template>

<script>

export default {
    name: "NewsSocialData",
    components: {},
    props: {
      datas: Array
    }
}

</script>

<style scoped>
div {
  font-family: Arial, Helvetica, sans-serif;
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
    background-color: lightcoral;
    color: #fff;
    padding: 2.5em;
    margin: 1em;
    border-radius: 1.5em;
    word-wrap: break-word;
}
@import "../assets/css/NewsList.scss";
</style>