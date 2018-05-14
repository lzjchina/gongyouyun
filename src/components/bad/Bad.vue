<template>
  <div class="detailMain">
    <div class="house1">
      <div class="h1Img" @touchstart="H1adding(100, 2)" @touchend="H1added">
        house1
      </div>
      <!-- 进度条 -->
      <div class="proBox">
        <div class="prepressBarBox" ref="h1barBox">
          <div class="prepressBarCont"></div>
        </div>
      </div>
    </div>
    <div class="house2">
      <div class="h2Img" @touchstart="H2reduce(60, 1)">
        house2
      </div>
      <!-- 进度条 -->
      <div class="proBox">
        <div class="prepressBarBox" ref="h2barBox">
          <div class="prepressBarCont"></div>
        </div>
      </div>
    </div>
    <div class="clod" ref="yun"></div>
    <button type="button" @touchstart="jumpToBad">崩溃</button>
  </div>
</template>

<script>
export default {
  name: 'Detail1',
  data () {
    return {
      addOn: true,
      reduceOn: false,
      changeRed: false
    }
  },
  methods: {
    H1adding: function (percent, actionTime) {
      var _this = this
      if (this.addOn) {
        setTimeout(function () {
          _this.$refs.h1barBox.style.width = percent + 'px'
          _this.$socket.emit('emit_method', 'pc_video1')
          _this.reduceOn = true
          _this.addOn = false
        }, actionTime)
      }
    },
    H1added: function () {
      // console.log('2')
    },
    H2reduce: function (percent, actionTime) {
      var _this = this
      if (this.reduceOn) {
        setTimeout(function () {
          _this.$socket.emit('emit_method', 'pc_video2')
          _this.$refs.h1barBox.style.width = percent + 'px'
          _this.$refs.h2barBox.style.width = percent + 'px'
          _this.reduceOn = false
          _this.changeRed = true
        }, actionTime)
      } else if (this.changeRed) {
        setTimeout(function () {
          _this.$socket.emit('emit_method', 'pc_video3')
          _this.$refs.h1barBox.style.width = '100px'
          _this.$refs.h2barBox.style.width = '100px'
          _this.$refs.yun.style.backgroundColor = 'red'
          _this.reduceOn = false
          _this.changeRed = false
        }, actionTime)
      }
    },
    jumpToBad: function () {
      this.$router.push('/Bad')
    }
  }
}
</script>

<style>
.detailMain {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.proBox {
  width: 100px;
  height: 24px;
  border: 1px solid gray;
  border-radius: 12px;
}
.house1 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
}
.house1 .h1Img {
  width: 100px;
  height: 100px;
  cursor: pointer;
  background-color: blue;
  color: white;
}
.house1 .prepressBarBox {
  width: 10px;
  height: 24px;
  border-radius: 12px;
  overflow: hidden;
  transition: all 2s;
}
.house1 .prepressBarBox .prepressBarCont{
  width: 100px;
  height: 24px;
  border-radius: 12px;
  background: linear-gradient(to right, #000, #f00 50%, #090);
}
.house2 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout:none;
  -webkit-user-select:none;
}
.house2 .h2Img {
  width: 100px;
  height: 100px;
  cursor: pointer;
  background-color: orange;
  color: white;
}
.house2 .prepressBarBox {
  width: 0px;
  height: 24px;
  border-radius: 12px;
  overflow: hidden;
  transition: all 1s;
}
.house2 .prepressBarBox .prepressBarCont{
  width: 100px;
  height: 24px;
  border-radius: 12px;
  background: linear-gradient(to right, #000, #f00 50%, #090);
}
.clod {
  width: 100px;
  height: 100px;
  background-color: green;
}
</style>
