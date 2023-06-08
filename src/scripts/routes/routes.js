import DETAIL from '../views/pages/detail'
import Favorite from '../views/pages/favorite'
import Home from '../views/pages/home'

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': DETAIL
}

export default routes
