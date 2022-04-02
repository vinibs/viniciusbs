// Imports the route instance to set the App's routes
import { route } from '/js/lira.js'
import '../components/index.js'
import '../view/index.js'

route.set('/', 'app-index')
route.set('/about-me', 'about-me')
route.set('/projects', 'my-projects')

// Wildcard route for anything not listed above
route.set('*', 'not-found')