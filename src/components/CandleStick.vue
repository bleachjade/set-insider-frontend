<template>
  <div class="container" id="CandleStick">
    <div v-if="series == []"></div>
    <div v-else>
    <VueApexCharts type="candlestick" height="350" :options="chartOptions" :series="series"></VueApexCharts>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VueApexCharts from "vue-apexcharts";

export default {
  name: "candle-stick",
  components: {
    VueApexCharts
  },
  props: {
      series: Array,
      chartOptions: Object,
      symbol: String
  }
};
</script>

<style>
.chart {
  text-align: center;
}

.home {
  text-align: center;
}
</style>


