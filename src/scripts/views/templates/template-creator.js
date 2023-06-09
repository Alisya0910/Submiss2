import CONFIG from '../../globals/config'

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="resto__title">${restaurant.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + '/' + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="resto_info">
    <h3>Information</h3>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
  </div>
  <div class="resto__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p><br>
    <h3>Menu</h3>
    <p>Makanan: </p>
    <p>${restaurant.menus.foods.map((food) => food.name)}</p>
    <p>Minuman: </p>
    <p>${restaurant.menus.drinks.map((drink) => drink.name)}</p><br>
    <div class="review">
    <h3>Review Customer</h3>
    <div class="review-card">
    ${restaurant.customerReviews.reduce((show, value) => show.concat(`<br><div class="card-review">
    <b>${value.name}</b>
    <p>${value.date}</p>
    <p>${value.review}</p>
    </div>
    `), '')}
    </div>
  </div>
`

const createRestaurantItemTemplate = (restaurant) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster" alt="${restaurant.name}"
           src="${CONFIG.BASE_IMAGE_URL + '/' + restaurant.pictureId}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
