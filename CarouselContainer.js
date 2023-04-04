export default {
    props: {
        carouselItem: Object
    },
    template:`
        <div class="carousel-item">
            <img :src="carouselItem.imgSrc" :alt="carouselItem.alt">
        </div>
    `
}