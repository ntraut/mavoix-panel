import Vue from 'vue'
import Vuex from 'vuex'

import devices from './devices'
import deviceInvitation from './device-invitation'
import tabEditor from './tab-editor'
import tabs from './tabs'
import assets from './assets'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      devices,
      deviceInvitation,
      tabs,
      tabEditor,
      assets
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
