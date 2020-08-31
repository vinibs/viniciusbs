// Imports the route instance to set the App's routes
import { route } from '../../js/lira.js'
import '../components/main-menu.js'

import '../view/index.js'
import '../view/pages/about.js'
import '../view/pages/projects.js'
import '../view/errors/not-found.js'
import '../view/pages/aniversario-vic.js'

route.set('/', 'app-index')
route.set('/about-me', 'about-me')
route.set('/projects', 'my-projects')

const date = new Date()
if (date.getFullYear() === 2020 && date.getMonth() + 1 === 9 && date.getDate() >= 24 && date.getDate() <= 26)
    route.set('/feliz-aniversario', 'aniversario-vic')

// Wildcard route for anything not listed above
route.set('*', 'not-found')