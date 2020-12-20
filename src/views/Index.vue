<template>
  <div class="main-container">
    <div class="content-container">
      <div class="content-wrap homepage-content">
        <div class="center">
          <div class="sub-content-box">
            <h1>SET Insider</h1>
            <h2>Why us?</h2>
            <p>
              SET Insider Provide you all the information about the stocks in
              Thailand. You are provided with price graphs, news from the
              official and news from the social medias. All of them are FREE!.
              As we are in the development phase, the stocks will be available
              only the stocks in SET50 because free tier database is limited to
              10,000 rows.
            </p>
          </div>
            <router-link to="/stock">
          <div class="btn">
            Proceed to App
          </div>
            </router-link>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<style>
html {
  background-image: url("../assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

html {
  height: 100%;
  widows: 100%;
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.homepage-content {
  text-align: center;
}

.sub-content-box > h1,
h2 {
  color: rgb(44, 44, 44);
}

.sub-content-box {
  margin: 0 auto;
  width: 100%;
  padding: 16px;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
}

.sub-content-box > p {
  margin: 16px 32px;
}

.btn {
  color: rgb(44, 44, 44);
  margin: 32px auto;
  padding: 16px;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  width: 100%;
}

.btn:hover {
  transform: scale(1.05);
  transition: ease-in-out 0.3s;
}

route-link {
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
  color: black;
}

a:hover {
  color: rgb(44, 44, 44);
  text-decoration: none;
}

@media only screen and (max-width: 700px) {
  .btn {
    width: 500px;
  }

  .sub-content-box {
    margin: 0;
    width: 500px;
  }
}

@media only screen and (max-width: 500px) {
  .btn {
    width: 300px;
  }

  .sub-content-box {
    margin: 0;
    width: 300px;
  }
}
</style>
