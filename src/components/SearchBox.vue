<template>
    <div id="inputbox">
        <div class="autocomplete">
            <input
                class="box"
                type="search"
                v-model="search"
                @input="onChange"
                placeholder="Search Symbol"
            />
            <div v-if="search != ''">
                <ul v-show="isOpen" class="autocomplete-results">
                    <router-link
                        :to="{
                            name: 'StockSymbol',
                            params: { symbol: symbol },
                        }"
                        v-for="symbol in filteredList"
                        :key="symbol"
                        tag="li"
                        class="autocomplete-result"
                        >{{ symbol }}</router-link
                    >
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "input-box",
    data() {
        return {
            isOpen: false,
            search: "",
            symbols: [],
        };
    },
    props: {
        path: String,
    },
    computed: {
        filteredList() {
            let result = this.symbols.filter((symbol) => {
                return symbol.toLowerCase().includes(this.search.toLowerCase());
            });
            let i;
            if (result.length >= 5) {
                i = 5;
            } else {
                i = result.length;
            }
            return result.slice(0, i);
        },
    },
    beforeCreate() {
        axios
            .get("https://set-insider-backend.herokuapp.com/stock/symbol")
            .then((response) => (this.symbols = response.data.result))
            .catch((error) => console.log(error));
    },
    mounted() {
        document.addEventListener("click", this.handleClickOutside);
    },
    destroyed() {
        document.removeEventListener("click", this.handleClickOutside);
    },

    methods: {
        handleClickOutside(evt) {
            if (!this.$el.contains(evt.target)) {
                this.isOpen = false;
                this.arrowCounter = -1;
            }
        },
        onChange() {
            this.isOpen = true;
        },
    },
    watch: {
        $route() {
            this.search = this.path;
            this.isOpen = false;
        },
    },
};
</script>

<style>

.autocomplete {
    position: relative;
    width: 100%;
    z-index: 1000;
    margin: 0px;

}

.autocomplete-results {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    background: #ffffff;
    height: auto;
    overflow: auto;
    width: 100%;
    position: absolute;
    float: right;
}

.autocomplete-results li {
    list-style: none;
    text-align: left;
    padding: 10px 40px 10px 20px;
    border-bottom: 1px solid #eeeeee;
    cursor: pointer;
    position: relative;
}

.autocomplete-results li:hover {
    background-color: #4aae9b;
    color: white;
}

.autocomplete-results li:last-of-type {
    border-bottom: none;
}

.box {
    margin-bottom: 0px;
    color: white;
}

.chart {
    text-align: center;
}

.home {
    text-align: center;
}
</style>
