import RestaurantSource from '../../data/restaurant-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
        <section class="content">
        <h2 class="content-heading" id="content-heading">Finding Restaurant</h2>
        <div id="list-resto" class="list-resto">
      </section>
        `
  },

  async afterRender () {
    const restaurants = await RestaurantSource.listResto()
    const restaurantsContainer = document.querySelector('#list-resto')
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Home
