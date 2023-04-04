import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import CarouselContainer from "./CarouselContainer.js"

  createApp({
    components: {
      CarouselContainer
    },
    data() {
      return {
        message: '',
        progress: 90,
        carousel: [
          {id: 1, imgSrc: 'https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg', alt: 'cone'},
          {id: 2, imgSrc: 'https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg', alt: 'grape'},
          {id: 3, imgSrc: 'https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg', alt: 'lemon'},
          {id: 4, imgSrc: 'https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg', alt: 'orange'},
          {id: 5, imgSrc: 'https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg', alt: 'pineapple'},
          {id: 6, imgSrc: 'https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg', alt: 'cherries'},
          {id: 7, imgSrc: 'https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg', alt: 'strawberry'}
        ]
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