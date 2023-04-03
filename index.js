const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        progress: 40
      }
    },
    computed: {
      cssVars() {
        return {
          '--value': this.progress
        }
      }
    }
  }).mount('#app')