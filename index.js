const { createApp } = Vue

  createApp({
    data() {
      return {
        message: '',
        progress: 90
      }
    },
    methods: {
      handleLeft() {
        this.message = ''
        this.progress--
        if (this.progress < 0) {
          this.progress = 0
          this.message = `You can't go below 0!`
        }
      },
      handleRight() {
        this.message = ''
        this.progress++
        if (this.progress > 100) {
          this.progress = 100
          this.message = `You can't go above 100!`
        }
      }
    },
    computed: {
      cssVars() {
        return {
          '--value': this.progress,
          '--size': '20rem',
          '--thickness': '7px'
        }
      }
    }
  }).mount('#app')