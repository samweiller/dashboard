import { injectReducer } from '../../../../store/reducers'

export default (store) => ({
  path : 'onboarding',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Onboarding = require('./containers/OnboardingContainer').default
      const reducer = require('./modules/onboarding').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'onboarding', reducer })

      /*  Return getComponent   */
      cb(null, Onboarding)

    /* Webpack named bundle   */
    }, 'onboarding')
  }
})
