// 适用于vant 的分页，自动加载
// 如果是触底加载的需要用云店的
// 如果是后台管理点击下一页的需要用云店后台的
const defaultPage = {
  page: 0,
  total: 0,
  size: 10,
  totalPage: 10
}
export default {
  data() {
    return {
      page: this.$_.cloneDeep(defaultPage)
    }
  },
  computed: {
    pageEnd() {
      return this.page.page >= this.page.totalPage
    }
  },
  methods: {
    setPageOption(options) {
      this.$_.assign(this.page, {
        page: options.current_page || 1,
        totalPage: options.totalPage || 0,
        total: options.totle_count || 0
      })
    },
    resetPageOption() {
      this.page = this.$_.cloneDeep(defaultPage)
    }
  }
}
