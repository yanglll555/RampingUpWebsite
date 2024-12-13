import Vue from "vue";;
import VueGtag from "vue-gtag";

export default ({ app: { router }, store }) => {
  if (process.client && process.env.NODE_ENV === 'production') {
    Vue.use(VueGtag, {
      config: { id: "G-CMF7TCKKXY" },
      appName: 'Ramping Up',
      pageTrackerScreenviewEnabled: true,
      pageTrackerTemplate(to) {
        return {
          page_title: to.name,
          page_path: to.path
        }
      }
    }, router);

    window.gtag('config', 'G-CMF7TCKKXY')
  }
}