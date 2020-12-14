<template>
  <div class="container" id="CandleStick">
    <VueApexCharts type="candlestick" height="350" :options="chartOptions" :series="series"></VueApexCharts>
  </div>
</template>

<script>
// @ is an alias to /src
import VueApexCharts from "vue-apexcharts";
import axios from "axios";

export default {
  name: "CandleStick",
  components: {
    VueApexCharts
  },
  data() {
    return {
      series: [],
      chartOptions: {}
    };
  },
  beforeMount() {
    axios
      .get("http://localhost:3001/stock/price?symbol=SCC")
      .then(response => this.preparedData(response.data.result));
  },
  methods: {
    preparedData(stocks) {
      stocks.forEach(stock => {
        let date = stock.date.split("/");
        date[0] = parseInt(date[0]) - 543;
        stock.date = new Date(date.join("-"));
      });
      stocks.sort(function(a, b) {
        return a.date - b.date;
      });

      let data = [];
      let label = [];

      stocks.forEach(stock => {
        data.push({
          x: new Date(stock.date),
          y: [
            stock.openPrice,
            stock.highestPrice,
            stock.lowestPrice,
            stock.closePrice
          ]
        });
        let time = new Date(stock.date);
        label.push(time.toLocaleString());
      });

      console.log(label)

      this.series = [
        {
          name: "candle",
          data: data
        }
      ];

      this.chartOptions = { 
        chart: {
          type: "candlestick",
          height: 350
        },
        title: {
          text: "CandleStick Chart",
          align: "left"
        },
        tooltip: {
          enabled: true
        },
        xaxis: {
          categories: label
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      };
    }
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


