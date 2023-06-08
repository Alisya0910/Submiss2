import RestaurantSource from '../../data/restaurant-source'
import UrlParser from '../../routes/url-parser'
import { createRestaurantDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator'
import LikeButtonInitiator from '../../utils/like-button-initiator'

const DETAIL = {
  async render () {
    return `
    <a href="#resto" class="skip-link">Menuju ke konten</a>
        <div id="resto" class="resto"></div>
        <div id="likeButtonContainer"></div>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurants = await RestaurantSource.detailRestaurant(url.id)
    const restaurantsContainer = document.querySelector('#resto')
    const likeButtonContainer = document.querySelector('#likeButtonContainer')

    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurants)
    likeButtonContainer.innerHTML = createLikeButtonTemplate()

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurants: restaurants.restaurant
    })
  }
}

export default DETAIL
