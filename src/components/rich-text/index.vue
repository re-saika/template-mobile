<template>
  <div class="rich" v-html="content" />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.rich /deep/ img {
  display: block;
  margin: 0 auto;
  max-width: 100% !important;
  height: auto !important;
}

.rich /deep/ p {
  max-width: 100%;
  word-break: break-all;
  font-size: .24rem; // 默认字体大小
}
</style>
