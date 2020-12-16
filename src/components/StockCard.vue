<template>
    <div class="stock-container" id="StockCard">
        <div class="stock-wrap">
            <div class="stock-preview">
                <h2>PTT</h2>
                <div class="preview-price">
                    <h3 id="openPriceTitle">openPrice</h3>
                    <h3 id="openPrice">40.5</h3>
                </div>
                
                <div class="preview-price">
                    <h3 id="closePriceTitle">closePrice</h3>
                    <h3 id="closePrice">41</h3>
                </div>
                
            </div>

            <div class="stock-info">
                <div class="preview-info">
                    <h5 id="highestPriceTitle">highestPrice</h5>
                    <h5 id="highestPrice">41.5</h5>
                </div>

                <div class="preview-info">
                    <h5 id="lowestPriceTitle">lowestPrice</h5>
                    <h5 id="lowestPrice">40.25</h5>
                </div>

                <div class="preview-info">
                    <h5 id="changeInValueTitle">changeInValue</h5>
                    <h5 id="changeInValue">1</h5>
                </div>

                <div class="preview-info">
                    <h5 id="changeInPercentageTitle">changeInPercentage</h5>
                    <h5 id="changeInPercentage">2.5</h5>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
div {
    font-family: Arial, Helvetica, sans-serif;
}
.stock-container {
    width: 60%;
    border-radius: 2em;
    overflow: hidden;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    margin: 2em;
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
@media (min-width: 600px){
h1:not(:first-child), h2:not(:first-child), h3:not(:first-child) {
    display: flex;
    margin: 0;
    align-items: center;
    }
    }
</style>