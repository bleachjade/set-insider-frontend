<template>
  <div class="stock-container">
    <div id="nav">
      <label> Stock name </label>
      <InputBox :path="this.$route.params.symbol" />
    </div>
    <div class="container" id="Stock">
      <div class="flex-row">
        <div class="flex-small third-fourht">
          <StockCard :lastestData="this.lastestData" :symbol="this.symbol" />
          <CandleStick
            :id="this.$route.params.symbol"
            :series="series"
            :chartOptions="chartOptions"
          />
        </div>
        <div class="flex-small one-fourht news-container">
          <NewsStockData :datas="this.data_officials" />
          <NewsSocialData :datas="this.data_socials" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputBox from "@/components/SearchBox.vue"
import CandleStick from "@/components/CandleStick.vue"
import StockCard from "@/components/StockCard.vue"
import NewsSocialData from "@/components/NewsSocialData.vue"
import NewsStockData from "@/components/NewsStockData.vue"
import dayjs from "dayjs"
import axios from "axios"

const link = "https://set-insider-backend.herokuapp.com"

export default {
  name: "stock",
  components: {
    InputBox,
    CandleStick,
    StockCard,
    NewsSocialData,
    NewsStockData,
  },
  data() {
    return {
      series: [],
      chartOptions: {},
      lastestData: {},
      symbol: "",
      data_officials: [],
      data_socials: [],
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (typeof from.params.symbol != undefined) {
      this.symbol = to.params.symbol

      axios
        .get(`${link}/stock/price?symbol=${to.params.symbol}`)
        .then((response) => {
          console.log(response.data.result)
          if (response.data.result != undefined) {
            this.preparedChartData(response.data.result)
          }
        })
        .catch((error) => console.log(error))

      axios
        .get(`${link}/stock/official-news?symbol=${to.params.symbol}`)
        .then((response) => (this.data_officials = response.data.result))

      axios
        .get(`${link}/stock/socialmedia-news?symbol=${to.params.symbol}`)
        .then((response) => (this.data_socials = response.data.result))
    }

    next()
  },
  methods: {
    preparedChartData(stocks) {
      stocks.forEach((stock) => {
        let date = stock.date.split("/")
        date[0] = parseInt(date[0]) - 543
        stock.date = new Date(date.join("-"))
      })
      stocks.sort(function(a, b) {
        return a.date - b.date
      })

      let data = []

      stocks.forEach((stock) => {
        data.push({
          x: new Date(stock.date),
          y: [
            stock.openPrice,
            stock.highestPrice,
            stock.lowestPrice,
            stock.closePrice,
          ],
        })
      })

      this.lastestData = stocks[stocks.length - 1]

      this.series = [
        {
          name: "candle",
          data: data,
        },
      ]

      this.chartOptions = {
        chart: {
          type: "candlestick",
          height: 350,
        },
        title: {
          text: "CandleStick Chart",
          align: "left",
        },
        tooltip: {
          enabled: true,
        },
        xaxis: {
          type: "category",
          labels: {
            formatter: function(val) {
              return dayjs(val).format("ddd DD MMM YY")
            },
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      }
    },
  },
  created() {
    this.preparedChartData()
  },
}
</script>

<style>
html {
  background-color: white;
}

.chart {
  text-align: center;
}

.home {
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
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

.news-container {
  display: flex;
}

#nav {
  display: flex;
  padding: 20px;
  align-items: center;
  width: 100%;
  justify-content: center;
  background: rgb(44, 44, 44);
}

label {
  font-size: 24px;
  color: white;
  margin-right: 16px;
}
</style>
