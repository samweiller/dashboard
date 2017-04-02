import { injectReducer } from '../../../../../../store/reducers'

export default (store) => ({
  path : 'incident/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Incident = require('./containers/IncidentContainer').default
      const reducer = require('./modules/incident').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'incident', reducer })

      /*  Return getComponent   */
      cb(null, Incident)

    /* Webpack named bundle   */
    }, 'incident')
  }
})
