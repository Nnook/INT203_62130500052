const app = {
    data() {
      return {
        firstname: 'Prapaporn',
        lastname: 'Sila',
        status: 'Thailand'
      }
    }
  }
  var mountedApp;
  mountedApp = Vue.createApp(app).mount('#app')