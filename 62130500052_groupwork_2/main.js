const app = {
  data() {
    return {
      msg: 'Hello, Vue3',
      shown: true,
      url: 'http://www.sit.kmutt.ac.th'
    }
  }
}
var mountedApp;
mountedApp = Vue.createApp(app).mount('#app')