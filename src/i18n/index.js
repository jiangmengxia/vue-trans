import {install, Vue} from './install'

// console.log(install,'Vue',Vue)
/*自定义简化版的VueI18n*/
export default class VueI18n {
  constructor(options = {}) {
    const locale = options.locale || (localStorage.getItem('locale') || 'zh')

    this.locale = locale
    this._vm = null
    this._resetVM({locale})
    // self = this
  }

  // 重置viewModel
  _resetVM(data) {
    // console.log('Vue', Vue)
    this._vm = new Vue({
      data() {
        return data
      }
    })
  }

  destroyVm() {
    this._vm.$destroy()
  }

  watchLocale() {
    if (!this._root) {
      return null
    }
    const target = this._vm
    // vm.$watch返回的是一个取消观察的函数，用来停止触发回调
    // this._root.vm.$watch('locale', (val) => {

    this._vm.$watch('locale', (val) => {
      console.log('locale chaned to:', val)
      // target.$set(target, 'locale', val)
      target.locale = val
    }, {immediate: true})
    // return this._watcher
  }


  getLocale() {
    return this._vm.locale
  }

  /*默认语言设置*/
  setLocale(locale) {
    // this._vm.$set('locale', locale)
    this._vm.locale = locale
    localStorage.setItem('locale', locale)
  }

  translate = (key) => {
    let lang = this.getLocale()
    let messages;
    if (lang == 'zh')
      messages = require('./data/zh').messages
    else
      messages = require('./data/en').messages
    // console.log('messages', messages)
    console.log('key:', key, messages.key)
    return messages[key] || key
  }
}
VueI18n.install = install


