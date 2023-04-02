import {Router} from "./router.js"

const router = new Router()

router. add('/', "/pages/home.html")
router. add('/TheUniverse', "/pages/The Universe.html")
router. add('/Exploration', "/pages/Exploration.html")
router. add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const explorationPage = document.querySelector('#Exploration')


