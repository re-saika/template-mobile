<template>
  <div class="mask" v-if="_value" @click="_value = false">
    <div class="follow">
      <img class="follow__img" src="./follow.png" />
      <div class="follow__word">长按二维码关注珠实荟!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'follow',
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
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba($color: #000000, $alpha: .7);
}
.follow {
  z-index: 101;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  border-radius: 16px;
  &__img {
    width: 400px;
    height: 400px;
    display: block;
  }
  &__word {
    font-size: 30px;
    text-align: center;
    padding: 30px 0;
    font-weight: bold;
  }
}
</style>
