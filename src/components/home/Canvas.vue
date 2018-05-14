<template>
  <div class="myCanvas" id="myCanvasCont">
    <canvas id="aCan" class="YunCanvas" width="200" height="200"></canvas>
    <div class="bg1"></div>
    <!-- <img src="../../assets/images/index/a.png" alt="" id="oImg" width="300" height="300"> -->
    <img src="../../assets/a.png" alt="" id="oImg">
  </div>
</template>

<script>
export default {
  name: 'Canvas',
  data () {
    return {
    }
  },
  sockets: {
  },
  mounted () {
    var _this = this
    var Oca = document.querySelector('canvas')
    var drawImg = document.getElementById('oImg')
    var ctx = Oca.getContext('2d')
    var caImgW = Oca.width
    var caImgH = Oca.height
    var moveDistance = document.getElementById('myCanvasCont').offsetLeft
    setTimeout(function () {
      ctx.drawImage(drawImg, 0, 0, caImgW, caImgH)
      ctx.lineWidth = 20
      ctx.lineCap = 'round'
      ctx.globalCompositeOperation = 'destination-out'
      var onoff = true
      var mCan = document.getElementById('aCan')
      mCan.addEventListener('touchstart', function (e) {
        e.preventDefault()
        mCan.addEventListener('touchmove', function (e) {
          e.preventDefault()
          var tx = e.changedTouches[0].clientX - moveDistance
          var ty = e.changedTouches[0].clientY
          if (onoff) {
            onoff = false
            ctx.moveTo(tx, ty)
            ctx.lineTo(tx + 1, ty + 1)
          } else {
            ctx.lineTo(tx, ty)
          }
          ctx.stroke()
        })
        mCan.addEventListener('touchend', function (e) {
          e.preventDefault()
          var caW = Oca.width
          var caH = Oca.height
          var imageData = ctx.getImageData(0, 0, caW, caH)
          var allPX = imageData.height * imageData.width
          var num = 0
          for (var i = 0; i < allPX; i++) {
            if (imageData.data[4 * i + 3] === 0) {
              num++
            }
          }
          if (num > allPX / 1.5) {
            _this.$emit('removeME', '1')
            Oca.remove()
          }
          // this.removeEventListener('touchend')
          // this.removeEventListener('touchmove')
        })
      })
    }, 10)
  }
}
</script>

<style>
.myCanvas{
  position: relative;
  width: 200px;
  height: 200px;
}
.myCanvas .YunCanvas{
  position: absolute;
  z-index: 101;
}
.myCanvas .bg1{
  position: absolute;
  /*background: red;*/
  background: url(../../assets/logo.png);
  width: 100%;
  height: 100%;
}
#oImg{
  display: none;
}
</style>
