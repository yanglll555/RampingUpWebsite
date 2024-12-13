import tools from '../assets/js/utils'

export default ({ app, route, store }) => {
  function setLocale(locale) {
    app.i18n.setLocale(locale)
  }
  if (window.navigator) {
    const userLocale = app.i18n.getBrowserLocale(),
      locales = app.i18n.locales.map(item => item.code),
      index = locales.indexOf(userLocale),
      localLocale = tools.triggleLocale()
    if (localLocale && locales.indexOf(localLocale) > -1) {
      // rediret to the language that user selected last time
      // 重定向至用户最后一次选择的语言
      setLocale(localLocale)
    } else if (index > -1) {
      // redirect to user prefer language
      // 重定向至用户偏好语言
      setLocale(locales[index])
    }
  }
}