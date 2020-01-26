const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('about-one', '/about/about-one')
routes.add('about-two', '/about/about-two')

routes.add('team-one', '/team/team-one')
routes.add('team-two', '/team/team-two')

routes.add('pricing-one', '/pricing/pricing-one')
routes.add('pricing-two', '/pricing/pricing-two')
routes.add('pricing-three', '/pricing/pricing-three')

routes.add('blog-one', '/blog/blog-one')
routes.add('blog-two', '/blog/blog-two')
routes.add('blog-details', '/blog/blog-details')