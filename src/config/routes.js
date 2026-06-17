// Imports the route instance to set the App's routes
import { route } from '/js/lira.js'
import '../components/index.js'
import '../layout/index.js'
import '../views/index.js'

route.set('/', 'app-index')
route.set('/about-me', 'about-me')
route.set('/projects/', 'featured-projects')
route.set('/projects/view/{projectId}', 'featured-projects')
route.set('/media', 'media-content')

// Wildcard route for anything not listed above
route.set('*', 'not-found')