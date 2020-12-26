<template>
  <div>
    <Alert></Alert>
    <main role="main">
      <Banner :picture="bannerImg" :title="pageTitle"></Banner>
      <div class="album py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4 info-list">
              <div class="rwd-info-scroll">
                <div
                  v-for="item in data"
                  :key="item.id"
                  class="col-12"
                >
                  <div class="info">
                    <h5 class="info-title">{{ item.name }}</h5>
                    <div class="info-text">
                      <p>
                        <font-awesome-icon icon="mobile-alt" /><a :href="'tel:' + item.tel"> {{ item.tel }}</a>
                      </p>
                      <p>
                        <font-awesome-icon icon="map-marker-alt" /> {{ item.address }}
                      </p>
                      <a
                        href="#"
                        class="btn"
                        @click.prevent="Navigation(item.local[0], item.local[1])"
                        >Navigation
                      </a>
                    </div>
                  </div>
                  <!-- <ul class="list-unstyled" style="text-align: center;">
                    <li style="border-bottom: 1px solid #d7cfcf;">
                      <h6>{{ item.name }}</h6>
                    </li>
                    <li>
                      <font-awesome-icon icon="mobile-alt" /><a
                        :href="'tel:' + item.tel"
                        > {{ item.tel }}</a
                      >
                    </li>
                    <li>
                      <font-awesome-icon icon="map-marker-alt" /> {{ item.address }}
                    </li>
                    <a
                      href="#"
                      class="btn"
                      @click.prevent="Navigation(item.local[0], item.local[1])"
                      >Navigation</a
                    >
                  </ul> -->
                </div>
              </div>
            </div>
            <div class="col-md-8 d-flex flex-column">
              <div class="map">
                <l-map
                  ref="myMap"
                  :zoom="zoom"
                  :center="center"
                  :options="options"
                  style="height: 50vh;"
                >
                  <!-- 載入圖資 -->
                  <l-tile-layer :url="url" :attribution="attribution" />

                  <!-- 自己所在位置 -->
                  <l-marker ref="location" :lat-lng="center">
                    <l-popup>
                      你的位置
                    </l-popup>
                  </l-marker>
                  <!-- 創建標記點 -->
                  <l-marker
                    :lat-lng="item.local"
                    v-for="item in data"
                    :key="item.id"
                  >
                    <!-- 標記點樣式判斷 -->
                    <l-icon
                      :icon-url="
                        item.name === '夢時代購物中心'
                          ? icon.type.gold
                          : icon.type.black
                      "
                      :shadow-url="icon.shadowUrl"
                      :icon-size="icon.iconSize"
                      :icon-anchor="icon.iconAnchor"
                      :popup-anchor="icon.popupAnchor"
                      :shadow-size="icon.shadowSize"
                    />
                    <!-- 彈出視窗 -->
                    <l-popup>
                      {{ item.name }}
                    </l-popup>
                  </l-marker>
                </l-map>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import Alert from '../components/Alert.vue'
import Banner from '../components/Banner'
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    Alert,
    Banner
  },
  data () {
    return {
      bannerImg: {
        backgroundImage: "url('https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1371&q=80')"
      },
      pageTitle: 'Information',
      // 模擬資料
      data: [
        {
          id: 1,
          name: 'Taoyuan HQ',
          local: [24.990031, 121.313311],
          tel: '03-999-8888',
          address: 'No. 2, Changshou St., Taoyuan Dist., Taoyuan City 330'
        },
        {
          id: 2,
          name: 'Taipei 101 Flagship Store',
          local: [25.034034, 121.564571],
          tel: '02-9999-8888',
          address: 'No. 7, Sec. 5, Xinyi Rd., Xinyi Dist., Taipei City, 110'
        },
        {
          id: 3,
          name: 'Kaohsiung Branch Store',
          local: [22.66982, 120.302265],
          tel: '07-111-2345',
          address: 'No. 777, Boai 2nd Road, Zuoying District, Kaohsiung City, 813'
        },
        {
          id: 4,
          name: 'Zhongli Branch Store',
          local: [24.962541, 121.223647],
          tel: '03-111-2222',
          address: 'No. 357, Yuanhua Rd., Zhongli Dist., Taoyuan City, 320'
        }
      ],

      zoom: 13,
      center: [24.990031, 121.313311],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      options: {
        zoomControl: false
      },
      icon: {
        type: {
          black:
            'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
          gold:
            'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png'
        },
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }
    }
  },
  methods: {
    Navigation (lat, lnt) {
      const vm = this
      vm.$refs.myMap.mapObject.flyTo([lat, lnt], 18)
      // 一般情況下用flyTo直接用map.flyTo就行，但要在vue元件使用leaflet的功能都要有vm.$refs.ref(自己取的).mapObject.功能，例如這裡的vm.$refs.myMap.mapObject.flyTo()
    }
  },
  beforeDestroy () {
    this.$store.dispatch('updateLoading', true)
  },
  mounted () {
    // 等地圖創建後執行
    this.$nextTick(() => {
      this.$store.dispatch('updateLoading', false)
      // 獲得目前位置
      navigator.geolocation.getCurrentPosition(position => {
        const p = position.coords
        // 將中心點設為目前的位置
        this.center = [p.latitude, p.longitude]
        // 將目前的位置的標記點彈跳視窗打開
        this.$refs.location.mapObject.openPopup()
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "@/assets/helpers/_variables";
@import 'src/assets/helpers/functionColors';

.info-list::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  border-radius: 20px;
}
.info-list::-webkit-scrollbar-track {
  border-radius: 20px;
}

.info-list::-webkit-scrollbar-thumb {
  background-image: radial-gradient(darken($lighter-background, 45%), transparent);
}

.info-list {
  overflow: scroll;
  @media (min-width: 769px){
    height: 50vh;
  }
}

.info {
  text-align: center;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: darken($lighter-background, 5%);
  box-shadow: 0 15px 9px -12px #000000c9;
  .info-title{
    background-color: $background;
    color: lighten($background,65%);
    border-radius: 5px 5px 0 0;
    padding: 8px;
    margin: 0;
  }
  .info-text{
    padding: 10px;
  }
  a{
    color: $link-text;
    &:hover{
      color: $link-text-hover;
    }
  }
}
.btn {
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  &:hover {
    border: none;
    background-color: $background;
    color: $lighter-background;
  }
}

@media (max-width: 769px) {
  .info-list {
    overflow-y: hidden;
  }
  .rwd-info-scroll {
    flex-direction: row;
    display: flex;
    margin-right: -15px;
    margin-left: -15px;
  }
}
</style>
