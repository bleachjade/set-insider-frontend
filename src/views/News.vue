<template>
    <div class="container" id="News">
    <NewsSocialData/>
    <NewsStockData/>
    </div>
</template>

<script>
import NewsSocialData from "@/components/NewsSocialData.vue";
import NewsStockData from "@/components/NewsStockData.vue";

export default {
  name: "News",
  components: {
    NewsSocialData,
    NewsStockData
  }
};
</script>

<style>
</style>