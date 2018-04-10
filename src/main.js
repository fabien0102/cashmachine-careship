// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App'
import ApolloClient from 'apollo-boost'

// Install the vue plugin
Vue.use(VueApollo)

Vue.config.productionTip = false

// Create apollo stack (to communicate with the graphql server)
const apolloClient = new ApolloClient({ uri: '/.netlify/functions/graphql' })
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

new Vue({
  el: '#app',
  components: { App },
  provide: apolloProvider.provide(),
  template: '<App/>'
})
