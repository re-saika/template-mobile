import Vue from 'vue'
import Component from './index.vue'

const Loading = Vue.extend(Component)

const instance = new Loading({
  el: document.createElement('div')
})

instance.show = () => {
  instance.value = true
  document.body.appendChild(instance.$el)
}

instance.hide = () => {
  document.body.removeChild(instance.$el)
}

export default instance
