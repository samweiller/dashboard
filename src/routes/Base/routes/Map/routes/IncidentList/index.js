import { injectReducer } from '../../../../../../store/reducers'

export default (store) => ({
  path : 'incidents',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const IncidentList = require('./containers/IncidentListContainer').default
      const reducer = require('./modules/incidentList').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'incidentList', reducer })

      /*  Return getComponent   */
      cb(null, IncidentList)

    /* Webpack named bundle   */
    }, 'incidentList')
  }
})
