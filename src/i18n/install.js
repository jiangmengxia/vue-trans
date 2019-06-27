import mixin from './mixin'

export let Vue
import VueI18n from './index'

export function install(vue_) { //将mixin中提供的方法挂载到VUe实例中去
  Vue = vue_
  if (!!install.installed) {
    console.log('已安装')
    return
  }
  install.installed = true  // 单例 已安装
  Vue.mixin(mixin)
  let vueI18n = new VueI18n()
  console.log('locale:', vueI18n.getLocale())
  Vue.prototype.$t = vueI18n.translate
  Vue.prototype.$i18n = vueI18n
  vueI18n.watchLocale()
}


