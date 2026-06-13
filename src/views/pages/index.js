import { AboutMe } from './about/index.js'
import { Projects } from './projects/index.js'
import { Home } from './home/index.js'
import { Media } from './media/index.js'


window.customElements.define('app-index', Home)
window.customElements.define('about-me', AboutMe)
window.customElements.define('featured-projects', Projects)
window.customElements.define('media-content', Media)