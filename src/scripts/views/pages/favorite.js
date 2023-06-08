import FavoriteRestoIdb from '../../data/fav-resto-idb'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Like = {
  async render () {
    return `
    <a href="#content" class="skip-link">Menuju ke konten</a>
      <div class="content">
        <h2 class="content__heading">Your Liked Movie</h2>
        <div id="resto" class="resto">
 
        </div>
      </div>
    `
  },

  async afterRender () {
    const restaurants = await FavoriteRestoIdb.getAllResto()
    const restaurantsContainer = document.querySelector('#resto')

    restaurants.forEach((restaurants) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurants)
    })
  }
}

export default Like
