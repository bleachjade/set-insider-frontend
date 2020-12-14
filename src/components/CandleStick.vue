<template>
  <div class="container" id="CandleStick">
    <VueApexCharts type="candlestick" height="350" :options="chartOptions" :series="series"></VueApexCharts>
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


