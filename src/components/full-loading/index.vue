<template>
  <div v-if="_value" class="fixed">
    <div class="demo">
      <div class="cp-preloader cp-preloader_type1">
        <span class="cp-preloader__letter" data-preloader="L">L</span>
        <span class="cp-preloader__letter" data-preloader="O">O</span>
        <span class="cp-preloader__letter" data-preloader="A">A</span>
        <span class="cp-preloader__letter" data-preloader="D">D</span>
        <span class="cp-preloader__letter" data-preloader="I">I</span>
        <span class="cp-preloader__letter" data-preloader="N">N</span>
        <span class="cp-preloader__letter" data-preloader="G">G</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    _value: {
      get() {
        return this.value
      },
      set(val) {
        this.value = val
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/* basic style */
.fixed {
  @include fixed();
  z-index: 999;
}

.cp-preloader{
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  -webkit-transform: translate3d(-50%, -50%, 0);
          transform: translate3d(-50%, -50%, 0);
}

.cp-preloader__letter{
  display: inline-block;
  position: relative;
  overflow: hidden;
  color: rgba(0, 0, 0, .3);
}

.cp-preloader__letter:before{
  content: attr(data-preloader);
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation-duration: 3s;

          animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-fill-mode: backwards;
          animation-fill-mode: backwards;
}

.cp-preloader__letter:nth-child(2):before{
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}

.cp-preloader__letter:nth-child(3):before{
  -webkit-animation-delay: 0.45s;
          animation-delay: 0.45s;
}

.cp-preloader__letter:nth-child(4):before{
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
}

.cp-preloader__letter:nth-child(5):before{
  -webkit-animation-delay: 0.75s;
          animation-delay: 0.75s;
}

.cp-preloader__letter:nth-child(6):before{
  -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
}

.cp-preloader__letter:nth-child(7):before{
  -webkit-animation-delay: 1.05s;
          animation-delay: 1.05s;
}

/* type 1 */

.cp-preloader_type1 .cp-preloader__letter:before{
  -webkit-animation-name: cp-preloader1;
          animation-name: cp-preloader1;
}

@-webkit-keyframes cp-preloader1{

  0%, 100%{
    -webkit-transform: rotateY(-90deg);
            transform: rotateY(-90deg);
    opacity: 0;
  }

  20%, 50%{
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    opacity: 1;
  }

  65%{
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    opacity: .3;
  }

  80%{
    opacity: 0;
  }
}

@keyframes cp-preloader1{

  0%, 100%{
    -webkit-transform: rotateY(-90deg);
            transform: rotateY(-90deg);
    opacity: 0;
  }

  20%, 50%{
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    opacity: 1;
  }

  65%{
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    opacity: .3;
  }

  80%{
    opacity: 0;
  }
}

/* type 2 */

.cp-preloader_type2 .cp-preloader__letter:before{
  -webkit-animation-name: cp-preloader2;
          animation-name: cp-preloader2;
}

@-webkit-keyframes cp-preloader2{

  0%, 75%, 100%{
    -webkit-transform: rotateY(-90deg);
            transform: rotateY(-90deg);
    opacity: 0;
  }

  20%, 58%{
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    opacity: 1;
  }
}

@keyframes cp-preloader2{

  0%, 75%, 100%{
    -webkit-transform: rotateY(-90deg);
            transform: rotateY(-90deg);
    opacity: 0;
  }

  20%, 58%{
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    opacity: 1;
  }
}

/* type 3 */

.cp-preloader_type3 .cp-preloader__letter:before{
  -webkit-transform-origin: 0 50%;
          transform-origin: 0 50%;
  -webkit-animation-name: cp-preloader3;
          animation-name: cp-preloader3;
}

@-webkit-keyframes cp-preloader3{

  0%, 100%{
    -webkit-transform: rotateY(-90deg);
            transform: rotateY(-90deg);
    opacity: 0;
  }

  20%, 50%{
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    opacity: 1;
  }

  65%{
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    opacity: .3;
  }

  80%{
    opacity: 0;
  }
}

@keyframes cp-preloader3{

  0%, 100%{
    -webkit-transform: rotateY(-90deg);
            transform: rotateY(-90deg);
    opacity: 0;
  }

  20%, 50%{
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    opacity: 1;
  }

  65%{
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    opacity: .3;
  }

  80%{
    opacity: 0;
  }
}

/* type 4 */

.cp-preloader_type4 .cp-preloader__letter:before{
  -webkit-animation-name: cp-preloader4;
          animation-name: cp-preloader4;
}

@-webkit-keyframes cp-preloader4{

  0%, 100%{
    -webkit-transform: rotateY(-90deg) scale(1);
            transform: rotateY(-90deg) scale(1);
    opacity: 0;
  }

  20%, 50%{
    -webkit-transform: rotateY(0) scale(1);
            transform: rotateY(0) scale(1);
    opacity: 1;
  }

  75%{
    -webkit-transform: rotateY(0) scale(1.2);
            transform: rotateY(0) scale(1.2);
    opacity: 0;
  }
}

@keyframes cp-preloader4{

  0%, 100%{
    -webkit-transform: rotateY(-90deg) scale(1);
            transform: rotateY(-90deg) scale(1);
    opacity: 0;
  }

  20%, 50%{
    -webkit-transform: rotateY(0) scale(1);
            transform: rotateY(0) scale(1);
    opacity: 1;
  }

  75%{
    -webkit-transform: rotateY(0) scale(1.2);
            transform: rotateY(0) scale(1.2);
    opacity: 0;
  }
}

/* type 5 */

.cp-preloader_type5 .cp-preloader__letter:before{
  -webkit-animation-name: cp-preloader5;
          animation-name: cp-preloader5;
}

@-webkit-keyframes cp-preloader5{

  0%, 100%{
    -webkit-transform: rotateY(-90deg) scale(1);
            transform: rotateY(-90deg) scale(1);
    opacity: 0;
  }

  20%, 50%{
    -webkit-transform: rotateY(0) scale(1);
            transform: rotateY(0) scale(1);
    opacity: 1;
  }

  65%{
    -webkit-transform: rotateY(0) scale(0);
            transform: rotateY(0) scale(0);
    opacity: 0;
  }
}

@keyframes cp-preloader5{

  0%, 100%{
    -webkit-transform: rotateY(-90deg) scale(1);
            transform: rotateY(-90deg) scale(1);
    opacity: 0;
  }

  20%, 50%{
    -webkit-transform: rotateY(0) scale(1);
            transform: rotateY(0) scale(1);
    opacity: 1;
  }

  65%{
    -webkit-transform: rotateY(0) scale(0);
            transform: rotateY(0) scale(0);
    opacity: 0;
  }
}

/*
=====
DEMO  PRELOADERS
=====
*/

.cp-preloader__letter{
  font-size: 60px;
  letter-spacing: 10px;
}

.cp-preloader__letter:before{
  color: #fff;
}

/*
=====
DEMO
=====
*/

@media (max-width: 767px){

  html{
    font-size: 20%;
  }
}

@media (min-width: 768px){

  html{
    font-size: 62.5%;
  }
}

body{
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
  margin: 0;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
}

.demo{
  width: 100%;
  height: 100vh;
  position: relative;
}

.demo:nth-of-type(4n+1){
  background-color: #FFF;
}

</style>
