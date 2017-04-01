import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'base',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Base = require('./components/BaseView').default

      // Setup reducers that we'll need for Base
      const menuReducer = require('./containers/Menu/modules/menu').default
      injectReducer(store, { key: 'menu', reducer: menuReducer })

      const chatReducer = require('./containers/Chat/modules/chat').default
      injectReducer(store, { key: 'chat', reducer: chatReducer })

      /*  Return getComponent   */
      cb(null, Base)

    /* Webpack named bundle   */
    }, 'base')
  },

  getChildRoutes (location, cb) {
    require.ensure([], (require) => {

      const Map = require('./routes/Map').default(store)
      const mapReducer = require('./routes/Map/modules/map').default
      injectReducer(store, { key: 'map', reducer: mapReducer })

      const Onboarding = require('./routes/Onboarding').default(store)
      const onboardingReducer = require('./routes/Onboarding/modules/onboarding').default
      injectReducer(store, { key: 'onboarding', reducer: onboardingReducer })

      cb(null, [
        Map,
        Onboarding,
      ])
    })
  },
})
