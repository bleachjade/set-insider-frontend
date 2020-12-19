<template>
    <div class="stock-container" id="StockCard">
        <div v-if="typeof(lastestData.openPrice) != 'undefined'" class="stock-wrap">
            <div  class="stock-preview">
                <h2>{{ symbol }}</h2>
                <div class="preview-price">
                    <h3 id="openPriceTitle">openPrice</h3>
                    <h3 id="openPrice">{{ lastestData.openPrice }}</h3>
                </div>

                <div class="preview-price">
                    <h3 id="closePriceTitle">closePrice</h3>
                    <h3 id="closePrice">
                        {{ lastestData.closePrice }}
                        <i
                            class="fa fa-angle-double-up"
                            style="font-size:48px;color:red"
                            v-if="closePrice < openPrice"
                        ></i>
                        <i
                            class="fa fa-angle-double-up"
                            style="font-size:48px;color:lightgreen"
                            v-else
                        ></i>
                    </h3>
                </div>
            </div>

            <div class="stock-info">
                <div class="preview-info">
                    <h5 id="highestPriceTitle">highestPrice</h5>
                    <h5 id="highestPrice">{{ lastestData.highestPrice }}</h5>
                </div>

                <div class="preview-info">
                    <h5 id="lowestPriceTitle">lowestPrice</h5>
                    <h5 id="lowestPrice">{{ lastestData.lowestPrice }}</h5>
                </div>

                <div class="preview-info">
                    <h5 id="changeInValueTitle">changeInValue</h5>
                    <h5 id="changeInValue">{{ lastestData.changeInValue }}</h5>
                </div>

                <div class="preview-info">
                    <h5 id="changeInPercentageTitle">changeInPercentage</h5>
                    <h5 id="changeInPercentage">
                        {{ lastestData.changeInPercentage }}%
                    </h5>
                </div>
            </div>
        </div>
        <div v-else>

        </div>
    </div>
</template>

<script>
export default {
    name: "stock-card",
    props: {
        lastestData: Object,
        symbol: String,
    },
    
};
</script>
<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

div {
    font-family: Arial, Helvetica, sans-serif;
}
.stock-container {
    width: 100%;
    border-radius: 2em;
    overflow: hidden;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    margin: 2em;
    flex-wrap: wrap;

}
.stock-wrap {
    display: flex;
}
.stock-preview {
    width: 20em;
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: lightsalmon;
}
.stock-preview h2 {
    font-size: 2.6em;
    color: white;
}
.stock-preview h3 {
    color: white;
}
.stock-preview .preview-price {
    display: flex;
    justify-content: space-around;
    margin: 0;
}
.stock-info {
    padding-left: 2em;
    width: 40%;
}
.stock-info .preview-info {
    display: flex;
    justify-content: space-between;
}
@media (min-width: 600px) {
    h1:not(:first-child),
    h2:not(:first-child),
    h3:not(:first-child) {
        display: flex;
        margin: 0;
        align-items: center;
    }
}
</style>
