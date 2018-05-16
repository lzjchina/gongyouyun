<template>
  <div class="DetailMain">
    <!-- 公有云 -->
    <div class="detailcloudHuaweiBox">
      <div class="detailcloudHuawei">
        <!-- <img src="../../assets/icon1.png" > -->
      </div>
      <img src="../../assets/a_02.png" class="DefloatRight">
    </div>
    <!-- yun -->
    <div class="MGL200">
      <div class="detailcloud">
        <div class="yun">
          <img src="../../assets/icon1.png">
        </div>
        <div class="yun">
          <img src="../../assets/icon1.png">
        </div>
      </div>
      <img src="../../assets/a_01.png" ref="DefloatLeft" class="DefloatLeft">
      <img src="../../assets/leftyellowText.png" ref="leftyellowText" class="leftyellowText">
      <img src="../../assets/fenliued.png" ref="fenliued" class="fenliued">
    </div>
    <div class="MGL200">
      <img src="../../assets/yunset.png">
    </div>
    <!-- 房子 -->
    <div class="MGL200 detailhouse">
      <div class="detailhImg">
        <div class="detailhImgBox" style="width:calc(644 / 1920 * 100vw);height:calc(364 / 1920 * 100vw);">
          <img src="../../assets/dizuo.png" style="position:absolute;margin-top:calc(220 / 1920 * 100vw);margin-left:calc(-109 / 1920 * 100vw);">
          <img src="../../assets/kedu.png" style="position:absolute;margin-top:calc(186 / 1920 * 100vw);margin-left:calc(-14 / 1920 * 100vw);">
          <img src="../../assets/Louleft.png" class="leftblue" ref="leftblue" @touchstart="detailActive">
          <img src="../../assets/leftyellow.png" ref="leftyellow" class="leftyellow">
          <img src="../../assets/xinxiliu.png" class="xinxiliu" ref="Lxinxiliu">
        </div>
      </div>
      <div class="detailhImg">
        <div class="detailhImgBox" style="width:calc(644 / 1920 * 100vw);height:calc(364 / 1920 * 100vw);">
          <img src="../../assets/dizuo.png" style="position:absolute;margin-top:calc(220 / 1920 * 100vw);margin-left:calc(-109 / 1920 * 100vw);">
          <img src="../../assets/kedu.png" style="position:absolute;margin-top:calc(186 / 1920 * 100vw);margin-left:calc(-14 / 1920 * 100vw);">
          <img src="../../assets/Louright.png" class="Louright" ref="rightblue">
          <img src="../../assets/rightyellow.png" class="rightyellow" ref="rightyellow">
          <img src="../../assets/xinxiliu.png" class="xinxiliu" ref="Rxinxiliu">
        </div>
      </div>
    </div>
    <!-- 按钮 -->
    <div class="Detailbtg">
      <div @touchstart="jumpTo('/')"></div>
      <div @touchstart="jumpTo('/')"></div>
      <div @touchstart="jumpTo('/Bad')"></div>
      <div>CN</div>
      <div>EN</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addOn: true,
      reduceOn: false,
      changeRed: false
    }
  },
  methods: {
    jumpTo: function (msg) {
      this.$router.push(msg)
    },
    detailActive: function () {
      this.$refs.leftblue.style.opacity = 0.3
      this.$refs.leftyellow.style.zIndex = 3
      this.$refs.leftyellowText.style.display = 'block'
      var _this = this
      var num = 1
      var timer = setInterval(function () {
        _this.$refs.leftyellow.style.opacity = num * 0.1
        num++
        if (num > 10) {
          clearInterval(timer)
        }
      }, 100)
      // 第3秒右房子黄
      setTimeout(function () {
        _this.$refs.rightblue.style.opacity = 0.5
        _this.$refs.rightyellow.style.zIndex = 3
        var num1 = 1
        var num2 = 10
        var timer1 = setInterval(function () {
          _this.$refs.leftyellow.style.opacity = num2 * 0.1
          _this.$refs.rightyellow.style.opacity = num1 * 0.1
          num1++
          num2--
          if (num1 > 10) {
            _this.$refs.leftblue.style.zIndex = 4
            _this.$refs.leftblue.style.opacity = 1
            clearInterval(timer1)
          }
        }, 100)
      }, 3000)
      // 第6秒左右房子黄
      setTimeout(function () {
        _this.$refs.leftyellowText.style.display = 'none'
        _this.$refs.leftblue.style.opacity = 0.5
        _this.$refs.leftyellow.style.zIndex = 5
        var num3 = 1
        var num4 = 10
        var num5 = 1
        var timer2 = setInterval(function () {
          _this.$refs.leftyellow.style.opacity = num3 * 0.1
          num3++
          num4--
          num5++
          if (num3 > 10) {
            _this.$refs.fenliued.style.display = 'block'
            clearInterval(timer2)
          }
          if (num4 < 5) {
            _this.$refs.rightyellow.style.opacity = num5 * 0.1
          } else if (num4 >= 5) {
            _this.$refs.rightyellow.style.opacity = num4 * 0.1
          }
        }, 100)
      }, 6000)
    }
  }
}
</script>

<style>
div {
  margin: 0;
  padding: 0;
}
.DetailMain {
  width: 100%;
  height: 100%;
  background: url(../../assets/detbg.png);
}
.MGL200 {
  margin-left: calc(200 / 1920 * 100vw);
}
.detailcloudHuaweiBox {
  height: calc(361 / 1920 * 100vw);
}
.detailcloudHuawei {
  width: calc(372 / 1920 * 100vw);
  height: calc(361 / 1920 * 100vw);
  background: url(../../assets/DetailCloud.png);
  margin-left: calc(1430 / 1920 * 100vw);
  position: absolute;
  top: calc(115 / 1920 * 100vw);
}
.detailcloudHuawei > img {
  width: calc(355 / 1920 * 100vw);
  margin-top: calc(20 / 1920 * 100vw);
}
.detailcloud {
  display: flex;
  /*justify-content: space-around;*/
}
.yun {
  width: calc(477 /1920 * 100vw);
  height: calc(271 / 1920 * 100vw);
  margin: 0 calc(111 / 1920 * 100vw) 0 calc(65 / 1920 * 100vw);
  background: url(../../assets/yun.png)
}
.yun > img {
  margin-left: calc(30 / 1920 * 100vw);
  margin-top: calc(10 / 1920 * 100vw);
}
.detailhouse {
  display: flex;
  /*justify-content: space-around;*/
}
.detailhImg {
  margin: 0 calc(10 / 1920 * 100vw) 0 calc(65 / 1920 * 100vw);
}
.detailMain {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.Detailbtg {
  display: flex;
  color: #0b263a;
  position: absolute;
  bottom: calc(52 / 1920 * 100vw);
  right: 0
}
.Detailbtg > div {
  width: calc(72 / 1920 * 100vw);
  height: calc(72 / 1920 * 100vw);
  font-size: calc(24 / 1920 * 100vw);
  border-radius: 50%;
  background: #0288a6;
  margin-right: calc(30 / 1920 * 100vw);
  text-align: center;
  line-height: calc(72 / 1920 * 100vw);
}
.Detailbtg > div:nth-child(1) {
  background-image: url(../../assets/back.png);
  background-repeat: no-repeat;
  background-position: center;
}
.Detailbtg > div:nth-child(2) {
  background-image: url(../../assets/home.png);
  background-repeat: no-repeat;
  background-position: center;
}
.Detailbtg > div:nth-child(3) {
  background-image: url(../../assets/next.png);
  background-repeat: no-repeat;
  background-position: center;
}
.Detailbtg > div:nth-child(5) {
  position: absolute;
  right: calc(30 / 1920 * 100vw);
  margin-right: 0px;
}
.DefloatRight {
  position: absolute;
  right: calc(100 / 1920 * 100vw);
  top: calc(200 / 1920 * 100vw);
}
.DefloatLeft {
  position: absolute;
  left: calc(530 / 1920 * 100vw);
  top: calc(450 / 1920 * 100vw);
}
.leftyellowText {
  position: absolute;
  left: calc(530 / 1920 * 100vw);
  top: calc(252 / 1920 * 100vw);
  display: none;
}
.fenliued {
  position: absolute;
  left: calc(700 / 1920 * 100vw);
  top: calc(252 / 1920 * 100vw);
  display: none;
}
.proBox {
  width: calc(100 / 1920 * 100vw);
  height: calc(24 / 1920 * 100vw);
  border: 1px solid gray;
  border-radius: calc(12 / 1920 * 100vw);
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
  width: calc(100 / 1920 * 100vw);
  height: calc(100 / 1920 * 100vw);
  cursor: pointer;
  background-color: blue;
  color: white;
}
.house1 .prepressBarBox {
  width: calc(10 / 1920 * 100vw);
  height: calc(24 / 1920 * 100vw);
  border-radius: calc(12 / 1920 * 100vw);
  overflow: hidden;
  transition: all 2s;
}
.house1 .prepressBarBox .prepressBarCont{
  width: calc(100 / 1920 * 100vw);
  height: calc(24 / 1920 * 100vw);
  border-radius: calc(12 / 1920 * 100vw);
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
  width: calc(100 / 1920 * 100vw);
  height: calc(100 / 1920 * 100vw);
  cursor: pointer;
  background-color: orange;
  color: white;
}
.house2 .prepressBarBox {
  width: 0px;
  height: calc(24 / 1920 * 100vw);
  border-radius: calc(12 / 1920 * 100vw);
  overflow: hidden;
  transition: all 1s;
}
.house2 .prepressBarBox .prepressBarCont{
  width: calc(100 / 1920 * 100vw);
  height: calc(24 / 1920 * 100vw);
  border-radius: calc(12 / 1920 * 100vw);
  background: linear-gradient(to right, #000, #f00 50%, #090);
}
.clod {
  width: calc(100 / 1920 * 100vw);
  height: calc(100 / 1920 * 100vw);
  background-color: green;
}
.leftyellow {
  position: absolute;
  margin-left: calc(37 / 1920 * 100vw);
  margin-top: calc(44 / 1920 * 100vw);
  z-index: 0;
  opacity: 0;
}
.leftblue {
  position: absolute;
  z-index: 1;
  margin-left: calc(37 / 1920 * 100vw);
  margin-top: calc(44 / 1920 * 100vw);
}
.rightyellow {
  position: absolute;
  margin-left: calc(-46 / 1920 * 100vw);
  margin-top: calc(44 / 1920 * 100vw);
  z-index: 0;
  opacity: 0;
}
.Louright {
  position: absolute;
  margin-left: calc(-46 / 1920 * 100vw);
  margin-top: calc(44 / 1920 * 100vw);
  z-index: 1;
}
.xinxiliu {
  opacity: 0.3;
  margin-top: calc(-20 / 1920 * 100vw);
  /*animation: moveXinXL 1s;*/
}
@keyframes moveXinXL {
  0% {
    margin-top: calc(-30 / 1920 * 100vw);
  }
  25% {
    margin-top: calc(-40 / 1920 * 100vw);
  }
  75% {
    margin-top: calc(-50 / 1920 * 100vw);
  }
  100% {
    margin-top: calc(-60 / 1920 * 100vw);
  }
}
</style>
