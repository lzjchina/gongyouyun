<template>
  <div class="main">
    <div class="quan1">
      <div class="quan2"></div>
      <div class="logos"></div>
      <img src="../../assets/Cloud.png" class="cloud">
      <!-- 遮罩 -->
      <div class="cover" id="reCover" ref="coverbg" @touchstart="removeCover">
        <img src="../../assets/Cloudc.png" class="cloud cloudCover">
      </div>
      <!-- applogo -->
      <div class="starmain">
        <!-- <div class="appStar starPositin1 rotateStarApp"><img src="../../assets/logos/1.png"></div> -->
        <div class="appStar starPositin1 rotateStarApp"><img src="../../assets/1.png"></div>
        <div class="appStar starPositin2 rotateStarApp"><img src="../../assets/logos/logo2.png"></div>
        <div class="appStar starPositin3 rotateStarApp"><img src="../../assets/logos/logo3.png"></div>
        <div class="appStar starPositin4 rotateStarApp"><img src="../../assets/logos/logo4.png"></div>
        <div class="appStar starPositin5 rotateStarApp"><img src="../../assets/logos/logo5.png"></div>
        <div class="appStar starPositin6 rotateStarApp"><img src="../../assets/logos/logo6.png"></div>
        <div class="appStar starPositin7 rotateStarApp"><img src="../../assets/logos/logo7.png"></div>
        <div class="appStar starPositin8 rotateStarApp"><img  width="120" height="120" src="../../assets/logos/logo8.png"></div>
        <div class="appStar starPositin9 rotateStarApp"><img  width="120" height="120" src="../../assets/logos/logo9.png"></div>
        <div class="appStar starPositin10 rotateStarApp"><img src="../../assets/logos/logo10.png"></div>
        <div class="appStar starPositin11 rotateStarApp"><img src="../../assets/logos/logo11.png"></div>
        <div class="appStar starPositin12 rotateStarApp"><img src="../../assets/logos/logo12.png"></div>
        <div class="appStar starPositin13 rotateStarApp"><img src="../../assets/logos/logo13.png"></div>
        <div class="appStar starPositin14 rotateStarApp"><img src="../../assets/logos/logo14.png"></div>
        <div class="appStar starPositin15 rotateStarApp"><img src="../../assets/logos/logo15.png"></div>
        <div class="appStar starPositin16 rotateStarApp"><img src="../../assets/logos/logo16.png"></div>
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
      ],
      logoImg: [
        {
          'id': 1,
          'Imgsrc': '../../assets/logos/logo1.png'
        },
        {
          'id': 2,
          'Imgsrc': '../../assets/logos/logo2.png'
        },
        {
          'id': 3,
          'Imgsrc': '../../assets/logos/logo3.png'
        },
        {
          'id': 4,
          'Imgsrc': '../../assets/logos/logo4.png'
        },
        {
          'id': 5,
          'Imgsrc': '../../assets/logos/logo5.png'
        },
        {
          'id': 6,
          'Imgsrc': '../../assets/logos/logo6.png'
        },
        {
          'id': 7,
          'Imgsrc': '../../assets/logos/logo7.png'
        },
        {
          'id': 8,
          'Imgsrc': '../../assets/logos/logo8.png'
        },
        {
          'id': 9,
          'Imgsrc': '../../assets/logos/logo9.png'
        },
        {
          'id': 10,
          'Imgsrc': '../../assets/logos/logo10.png'
        },
        {
          'id': 11,
          'Imgsrc': '../../assets/logos/logo11.png'
        },
        {
          'id': 12,
          'Imgsrc': '../../assets/logos/logo12.png'
        },
        {
          'id': 13,
          'Imgsrc': '../../assets/logos/logo13.png'
        },
        {
          'id': 14,
          'Imgsrc': '../../assets/logos/logo14.png'
        },
        {
          'id': 15,
          'Imgsrc': '../../assets/logos/logo15.png'
        },
        {
          'id': 16,
          'Imgsrc': '../../assets/logos/logo16.png'
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
  beforemounted () {
    window.location.reload()
  },
  mounted () {
    var _this = this
    // console.log(this.currentStarPositon)
    // 在这里触发connect事件
    this.$socket.emit('connect', 'val')
    // 聚集
    var num = 0
    var firstGet = true
    var cloudCv = document.getElementsByClassName('cloudCover')[0]
    cloudCv.ontouchend = function (event) {
      event.preventDefault()
      this.remove()
    }
    var OappStar = document.getElementsByClassName('appStar')
    for (var i = 0; i < OappStar.length; i++) {
      this.currentStarPositon[i].left = OappStar[i].offsetLeft
      this.currentStarPositon[i].top = OappStar[i].offsetTop
      // console.log(this.currentStarPositon[i].top)
    }
    var Ostarmain = document.getElementsByClassName('starmain')[0]
    // var currentMsg = this.currentStarPositon
    Ostarmain.addEventListener('touchstart', function (event) {
      event.preventDefault()
      // var fingerX = event.changedTouches[0].clientX
      var fingerY = event.changedTouches[0].clientY
      document.getElementsByClassName('logos')[0].style.display = 'none'
      for (var i = OappStar.length - 1; i >= 0; i--) {
        OappStar[i].style.display = 'block'
      }
      if (firstGet) {
        setTimeout(function () {
          getAll(OappStar, 920, 571, 300, 30)
        }, 10)
      }
      setTimeout(function () {
        firstGet = false
      }, 2000)
      var timer = setInterval(function () {
        num++
        // console.log(num)
      }, 1000)
      this.addEventListener('touchmove', function (event) {
        event.preventDefault()
        // var MovefingerX = event.changedTouches[0].clientX
        // var MovefingerY = event.changedTouches[0].clientY
        // getAll(OappStar, MovefingerX, MovefingerY, 100, 60)
        var moveTop = fingerY - event.changedTouches[0].clientY
        if (num >= 2 && moveTop > 50) {
          num = 0
          // console.log(123)
          flyTo(OappStar, '-200', 0.3)
          clearInterval(timer)
          // jumpIntoBad()
          // console.log(12)
          firstGet = true
          setTimeout(function () {
            _this.$router.push('/Detail')
          }, 1600)
          // window.location.href = 'http://localhost:8080/#/Bad'
        }
        if (firstGet === false) {
          clearInterval(timer)
          flyTo(OappStar, '-200', 0.3)
          firstGet = true
          setTimeout(function () {
            _this.$router.push('/Detail')
            _this.$socket.emit('emit_method', 'pc_video3')
          }, 3000)
        }
      })
      this.addEventListener('touchend', function (event) {
        // clearInterval(timer)
        if (num <= 1) {
          // num = 0
          // getAllBack(OappStar, currentMsg)
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
      // console.log(x, y)
      var ahd = avd * Math.PI / 180
      for (var i = 0; i < obj.length; i++) {
        obj[i].style.left = Math.sin((ahd * i)) * radius + x + 'px'
        obj[i].style.top = Math.cos((ahd * i)) * radius + y + 'px'
      }
    }
    // 恢复原位
    // function getAllBack (obj, positionMsg) {
    //   for (var i = 0; i < obj.length; i++) {
    //     obj[i].style.left = positionMsg[i].left + 'px'
    //     obj[i].style.top = positionMsg[i].top + 'px'
    //   }
    // }
    // 往上飞
    function flyTo (obj, position, time) {
      for (var i = 0; i < obj.length; i++) {
        obj[i].style.transform = 'all ' + time + 's'
        obj[i].style.top = position + 'px'
      }
    }
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
    jumpToBad: function () {
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
  z-index: 1;
}
.quan2 {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  /*background: url(../../assets/quan2.png) calc(315 / 1200 * 100vw) center no-repeat;*/
  background: url(../../assets/quan2.png);
  background-repeat: no-repeat;
  background-position: calc(500 / 1920 * 100vw) center;
  animation: rotatequan2 4s linear infinite;
  z-index: 2;
  background-size: calc(1001 / 1920 * 100vw) calc(858 / 1920 * 100vw);
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
  left: calc(50% - (370 / 1920 * 100vw));
  top: calc(50% -  (310 / 1920 * 100vw));
  width: calc( 600 / 1920 * 100vw);
  animation: rotatecloud 1s infinite;
  z-index: 3;
}
.ca {
  position: absolute;
  left: calc(50% - 100px);
}
.appStar {
  /*width: 50px;
  height: 50px;*/
  /*background: lightblue;*/
  text-align: center;
  /*line-height: 50px;*/
  position: absolute;
  transition: all 2s;
  left: 0;
  top: 0;
  display: none;
}
.rotateStarApp {
  /*animation: rotateStar 2s linear infinite;*/
}
.starPositin1 {
  left: 1400px;
  top: 1100px;
  opacity: 0.8;
}
.starPositin2 {
  left: 1400px;
  top: 50px;
}
.starPositin3 {
  left: 300px;
  top: 500px;
}
.starPositin4 {
  left: 1400px;
  top: 800px;
}
.starPositin5 {
  left: 200px;
  top: 120px;
}
.starPositin6 {
  left: -40px;
  top: 835px;
}
.starPositin7 {
  left: 1600px;
  top: 600px;
}
.starPositin8 {
  left: 680px;
  top: 1058px;
}
.starPositin9 {
  left: 1422px;
  top: 310px;
}
.starPositin10 {
  left: 960px;
  top: 170px;
}
.starPositin11 {
  left: 650px;
  top: -5px;
}
.starPositin12 {
  left: 200px;
  top: 550px;
}
.starPositin13 {
  left: 1400px;
  top: 50px;
}
.starPositin14 {
  left: 400px;
  top: 900px;
}
.starPositin15 {
  left: 100px;
  top: 50px;
}
.starPositin16 {
  left: 50px;
  top: 170px;
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
  left: 0;
  top: 0;
  /*background: transparent;*/
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
  left: 0;
  top: 0;
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
    /*width: 40em;
    height: 40em;
    margin-left: 4em;*/
    transform: scale(1);
  }
  50% {
    /*width: 44em;
    height: 44em;
    margin-left: 0em;*/
    transform: scale(1.05);
  }
  100% {
    /*width: 40em;
    height: 40em;
    margin-left: 4em;*/
    transform: scale(1);
  }
}
</style>
