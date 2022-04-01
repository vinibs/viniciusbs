// Imports the route instance to set the App's routes
import { route } from '../../js/lira.js'
import '../components/main-menu/index.js'

import '../view/index.js'
import '../view/pages/about.js'
import '../view/pages/projects.js'
import '../view/errors/not-found.js'

route.set('/', 'app-index')
route.set('/about-me', 'about-me')
route.set('/projects', 'my-projects')

// Wildcard route for anything not listed above
route.set('*', 'not-found')