import { AboutMe } from './about.js'
import { Projects } from './projects.js'
import { Home } from './home.js'


window.customElements.define('app-index', Home)
window.customElements.define('about-me', AboutMe)
window.customElements.define('my-projects', Projects)