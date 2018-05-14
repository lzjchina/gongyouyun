<template>
  <div class="main">
    <div class="quan1">
      <div class="quan2"></div>
      <div class="logos"></div>
      <img src="../../assets/Cloud.png" class="cloud">
      <!-- <div  @touchend="clickButton(1)">
        test
      </div>
      <router-link to="/Detail" tag="button">跳转</router-link>
      <button @touchend="jumpToDetail">移动端</button> -->
      <!-- <Canvas class="ca"></Canvas> -->
      <!-- <div class="myCanvas" id="myCanvasCont">
        <canvas id="aCan" class="YunCanvas" width="250" height="250"></canvas>
        <div class="bg1"></div>
        <img src="../../assets/images/index/a.png" alt="" id="oImg" width="300" height="300">
        <img src="../../assets/a.png" alt="" id="oImg">
      </div> -->
      <!-- 遮罩 -->
      <div class="cover" id="reCover" ref="coverbg" @touchstart="removeCover"></div>
      <!-- applogo -->
      <div class="starmain">
        <div class="appStar starPositin1 rotateStarApp">1</div>
        <div class="appStar starPositin2 rotateStarApp">2</div>
        <div class="appStar starPositin3 rotateStarApp">3</div>
        <div class="appStar starPositin4 rotateStarApp">4</div>
        <div class="appStar starPositin5 rotateStarApp">5</div>
        <div class="appStar starPositin6 rotateStarApp">6</div>
        <div class="appStar starPositin7 rotateStarApp">6</div>
        <div class="appStar starPositin8 rotateStarApp">6</div>
        <div class="appStar starPositin9 rotateStarApp">6</div>
        <div class="appStar starPositin10 rotateStarApp">6</div>
        <div class="appStar starPositin11 rotateStarApp">6</div>
        <div class="appStar starPositin12 rotateStarApp">6</div>
        <div class="appStar starPositin13 rotateStarApp">6</div>
        <div class="appStar starPositin14 rotateStarApp">6</div>
        <div class="appStar starPositin15 rotateStarApp">6</div>
        <div class="appStar starPositin16 rotateStarApp">6</div>
      </div>
    </div>
  </div>
</template>

<script>
import Canvas from '../../components/home/Canvas'
export default {
  name: 'Index',
  components: {
    Canvas
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tempNum: 0,
      currentStarPositon: [
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        }
      ],
      nowStarPosition: [
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        },
        {
          'left': '',
          'top': ''
        }
      ]
    }
  },
  sockets: {
    connect: function (data) {
      this.id = this.$socket.id
    },
    customEmit: function (val) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    },
    login: function (value) {
      console.log(value)
      // 监听login(后端向前端emit  login的回调)
    },
    removeME: function (data) {
      console.log(data)
    }
  },
  beforeMount () {
    var OappStar = document.getElementsByClassName('appStar')
    for (var i = 0; i < OappStar.length; i++) {
      this.currentStarPositon[i].left = OappStar[i].offsetLeft
      this.currentStarPositon[i].top = OappStar[i].offsetTop
    }
  },
  mounted () {
    var _this = this
    // console.log(this.currentStarPositon)
    // 在这里触发connect事件
    this.$socket.emit('connect', 'val')
    // 聚集
    var num = 0
    var OappStar = document.getElementsByClassName('appStar')
    for (var i = 0; i < OappStar.length; i++) {
      this.currentStarPositon[i].left = OappStar[i].offsetLeft
      this.currentStarPositon[i].top = OappStar[i].offsetTop
      // console.log(this.currentStarPositon[i].top)
    }
    var Ostarmain = document.getElementsByClassName('starmain')[0]
    var currentMsg = this.currentStarPositon
    Ostarmain.addEventListener('touchstart', function (event) {
      event.preventDefault()
      var fingerX = event.changedTouches[0].clientX
      var fingerY = event.changedTouches[0].clientY
      // console.log(fingerX)
      // console.log(fingerY)
      document.getElementsByClassName('logos')[0].style.display = 'none'
      for (var i = OappStar.length - 1; i >= 0; i--) {
        OappStar[i].style.display = 'block'
      }
      setTimeout(function () {
        getAll(OappStar, fingerX, fingerY, 300, 20)
      }, 10)
      var timer = setInterval(function () {
        num++
        // console.log(num)
      }, 500)
      this.addEventListener('touchmove', function (event) {
        event.preventDefault()
        // var MovefingerX = event.changedTouches[0].clientX
        // var MovefingerY = event.changedTouches[0].clientY
        // getAll(OappStar, MovefingerX, MovefingerY, 100, 60)
        var moveTop = fingerY - event.changedTouches[0].clientY
        if (num >= 3 && moveTop > 100) {
          flyTo(OappStar, '-100')
          clearInterval(timer)
          // jumpIntoDetail()
          // console.log(12)
          setTimeout(function () {
            _this.$router.push('/Detail')
          }, 1000)
          // window.location.href = 'http://localhost:8080/#/Detail'
        }
      })
      this.addEventListener('touchend', function (event) {
        clearInterval(timer)
        if (num <= 1) {
          num = 0
          getAllBack(OappStar, currentMsg)
        }
      })
    })
    // 集合
    function getAll (obj, x, y, radius, avd) { // 半径radius avd每一个BOX对应的角度
      // 起始角度
      // var stard = 0
      // 半径
      // var radius = 100
      // 每一个BOX对应的角度
      // var avd = 360 / obj.length
      // 每一个BOX对应的弧度
      var ahd = avd * Math.PI / 180
      for (var i = 0; i < obj.length; i++) {
        obj[i].style.left = Math.sin((ahd * i)) * radius + x + 'px'
        obj[i].style.top = Math.cos((ahd * i)) * radius + y + 'px'
      }
    }
    // 恢复原位
    function getAllBack (obj, positionMsg) {
      for (var i = 0; i < obj.length; i++) {
        obj[i].style.left = positionMsg[i].left + 'px'
        obj[i].style.top = positionMsg[i].top + 'px'
      }
    }
    // 往上飞
    function flyTo (obj, position) {
      for (var i = 0; i < obj.length; i++) {
        obj[i].style.top = position + 'px'
      }
    }
    // 跳转到Detail
    // function jumpIntoDetail () {
    //   this.$router.push('/Detail')
    // }
    // var Oca = document.querySelector('canvas')
    // var drawImg = document.getElementById('oImg')
    // var ctx = Oca.getContext('2d')
    // var caImgW = Oca.width
    // var caImgH = Oca.height
    // var moveDistanceX = document.getElementById('myCanvasCont').offsetLeft
    // var moveDistanceY = document.getElementById('myCanvasCont').offsetTop
    // setTimeout(function () {
    //   ctx.drawImage(drawImg, 0, 0, caImgW, caImgH)
    //   ctx.lineWidth = 20
    //   ctx.lineCap = 'round'
    //   ctx.globalCompositeOperation = 'destination-out'
    //   var onoff = true
    //   var mCan = document.getElementById('aCan')
    //   mCan.addEventListener('touchstart', function (e) {
    //     e.preventDefault()
    //     mCan.addEventListener('touchmove', function (e) {
    //       e.preventDefault()
    //       var tx = e.changedTouches[0].clientX - moveDistanceX
    //       var ty = e.changedTouches[0].clientY - moveDistanceY
    //       if (onoff) {
    //         onoff = false
    //         ctx.moveTo(tx, ty)
    //         ctx.lineTo(tx + 1, ty + 1)
    //       } else {
    //         ctx.lineTo(tx, ty)
    //       }
    //       ctx.stroke()
    //     })
    //     mCan.addEventListener('touchend', function (e) {
    //       e.preventDefault()
    //       var caW = Oca.width
    //       var caH = Oca.height
    //       var imageData = ctx.getImageData(0, 0, caW, caH)
    //       var allPX = imageData.height * imageData.width
    //       var num = 0
    //       for (var i = 0; i < allPX; i++) {
    //         if (imageData.data[4 * i + 3] === 0) {
    //           num++
    //         }
    //       }
    //       if (num > allPX / 1.5) {
    //         Oca.remove()
    //         document.getElementById('reCover').remove()
    //       }
    //       // this.removeEventListener('touchend')
    //       // this.removeEventListener('touchmove')
    //     })
    //   })
    // }, 10)
  },
  methods: {
    clickButton: function (val) {
      if (this.tempNum > 4) {
        this.tempNum = 0
      }
      // $socket is socket.io-client instance
      this.$socket.emit('emit_method', 'pc_video' + this.tempNum)
      this.tempNum += val
      this.$socket.emit('start')
    },
    jumpToDetail: function () {
      this.$router.push('/Detail')
    },
    removeCover: function () {
      this.$refs.coverbg.remove()
      this.$socket.emit('emit_method', 'pc_video2')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main {
  width: 100%;
  height: 100%;
  background: url(../../assets/BG.png) center center no-repeat;
  background-size: 100% 100%;
}
.quan1 {
  width: 100%;
  height: 100%;
  background: url(../../assets/quan1.png) center center no-repeat;
}
.quan2 {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  /*background: url(../../assets/quan2.png) calc(315 / 1200 * 100vw) center no-repeat;*/
  background: url(../../assets/quan2.png);
  background-repeat: no-repeat;
  background-position: calc(315 / 1200 * 100vw) center;
  /*animation: rotatequan2 2s linear infinite;*/
}
.logos {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(../../assets/logos.png) center center no-repeat;
}
.cloud {
  position: absolute;
  left: calc(50% - 280 / 1200 * 100vw);
  top: calc(50% -  200 / 1200 * 100vw);
  animation: rotatecloud 1s linear infinite;
}
.ca {
  position: absolute;
  left: calc(50% - 100px);
}
.appStar {
  width: 50px;
  height: 50px;
  background: lightblue;
  text-align: center;
  line-height: 50px;
  position: absolute;
  transition: all 1s;
  left: 0;
  top: 0;
  display: none;
}
.rotateStarApp {
  /*animation: rotateStar 2s linear infinite;*/
}
.starPositin1 {
  left: 0;
  top: 50px;
}
.starPositin2 {
  left: 100px;
  top: 50px;
}
.starPositin3 {
  left: 300px;
  top: 500px;
}
.starPositin4 {
  left: 100px;
  top: 500px;
}
.starPositin5 {
  left: 200px;
  top: 120px;
}
.starPositin6 {
  left: 700px;
  top: 50px;
}
.starPositin7 {
  left: 700px;
  top: 50px;
}
.starPositin8 {
  left: 700px;
  top: 50px;
}
.starPositin9 {
  left: 700px;
  top: 50px;
}
.starPositin10 {
  left: 700px;
  top: 50px;
}
.starPositin11 {
  left: 700px;
  top: 50px;
}
.starPositin12 {
  left: 700px;
  top: 50px;
}
.starPositin13 {
  left: 700px;
  top: 50px;
}
.starPositin14 {
  left: 700px;
  top: 50px;
}
.starPositin15 {
  left: 700px;
  top: 50px;
}
.starPositin16 {
  left: 700px;
  top: 50px;
}
.cover {
  /*width: calc(360 / 1200 * 100vw);
  height: calc(360 / 1200 * 100vw);
  border-radius: 50%;
  top: calc(50% - 180 / 1200 * 100vw);
  left: calc(50% - 180 / 1200 * 100vw);*/
  width: 100%;
  height: 100%;
  position: absolute;
  background: gray;
  opacity: 0.3;
  z-index: 98;
}
.ca {
  z-index: 100;
}
.starmain {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
}
.myCanvas{
  position: absolute;
  width: 250px;
  height: 250px;
  left: calc(50% - 120px);
  top: 100px;
}
.myCanvas .YunCanvas{
  position: absolute;
  z-index: 101;
}
.myCanvas .bg1{
  position: absolute;
  /*background: red;*/
  /*background: url(../../assets/logo.png);*/
  width: 100%;
  height: 100%;
}
#oImg{
  opacity: 0;
  display: none;
}
@keyframes rotateStar{
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
}
@keyframes rotatequan2{
  0% {
    transform:rotate(0deg);
  }
  50% {
    transform:rotate(45deg);
  }
  100% {
    transform:rotate(0deg);
  }
}
@keyframes rotatecloud{
  0% {
    width: 40em;
    height: 40em;
  }
  50% {
    width: 45em;
    height: 45em;
  }
  100% {
    width: 40em;
    height: 40em;
  }
}
</style>
