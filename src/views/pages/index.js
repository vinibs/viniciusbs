import { AboutMe } from './about/index.js'
import { Projects } from './projects/index.js'
import { Home } from './home/index.js'


window.customElements.define('app-index', Home)
window.customElements.define('about-me', AboutMe)
window.customElements.define('my-projects', Projects)