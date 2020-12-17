<template>
  <div class="container" id="Stock">
    <InputBox :path="this.$route.params.symbol" />
    <StockCard />
    <CandleStick :id="this.$route.params.symbol" :series="series" :chartOptions="chartOptions" />
    <CandleStick />
    <div>
      <div id="parent_div_1">
        <NewsSocialData />
      </div>

      <div id="parent_div_2">
        <NewsStockData />
      </div>
    </div>
  </div>
</template>
<script>
import CandleStick from "@/components/CandleStick.vue";
import InputBox from "@/components/SearchBox.vue";
import StockCard from "@/components/StockCard.vue";
import NewsSocialData from "@/components/NewsSocialData.vue";
import NewsStockData from "@/components/NewsStockData.vue";
import dayjs from "dayjs";
import axios from "axios";

export default {
  name: "stock",
  components: {
    CandleStick,
    StockCard,
    InputBox,
    NewsSocialData,
    NewsStockData
  },
  data() {
    return {
      series: [],
      chartOptions: {},
      data: [],
      symbol: ''
    };
  },
  beforeRouteUpdate(to, from, next) {
    if (typeof (from.params.symbol) != "undefined") {
      this.symbol = to.params.symbol
      axios
        .get(`http://localhost:3001/stock/price?symbol=${to.params.symbol}`)
        .then(response => {
          console.log(response.data.result)
          if (typeof (response.data.result) != "undefined") {
            this.preparedChartData(response.data.result)
          }
        }
        )
        .catch(error => console.log(error));
    }

    next()
  },
  methods: {
    preparedChartData(stocks) {
      stocks.forEach(stock => {
        let date = stock.date.split("/");
        date[0] = parseInt(date[0]) - 543;
        stock.date = new Date(date.join("-"));
      });
      stocks.sort(function (a, b) {
        return a.date - b.date;
      });

      let data = [];

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
      });

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
          type: 'category',
          labels: {
            formatter: function (val) {
              return dayjs(val).format('ddd DD MMM YY');
            }
          }
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

.container {
  display: -moz-box;
}
#parent_div_1 {
  width: 550px;
  height: auto;
  border: 10px solid black;
  margin-left: 0px;
  float: left;
  border-radius: 25px;
  background-color: silver;
}

#parent_div_2 {
  width: 550px;
  height: auto;
  border: 10px solid black;
  margin-right: 10px;
  float: right;
  border-radius: 25px;
  background-color: silver;
}
</style>


