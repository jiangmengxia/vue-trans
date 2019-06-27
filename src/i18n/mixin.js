import VueI18n from './index'

export default {
  beforeCreate() {
    // this._i18n = new VueI18n()

    // this._i18n.watchLocale()
  },
  destroy() {
    console.log('18n destroyed')
    this.$i18n.destroyVm()
  }
}
