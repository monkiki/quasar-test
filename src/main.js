import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import {
  ClosePopup,
  Dialog,
  Notify,
  QBtn,
  QCard,
  QCardActions,
  QCardSection,
  QDialog,
  QDrawer,
  QHeader,
  QIcon,
  QItem,
  QItemLabel,
  QItemSection,
  QLayout,
  QList,
  QPage,
  QPageContainer,
  QToolbar,
  QToolbarTitle,
  Quasar
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QCard,
    QCardSection,
    QCardActions,
    QDialog
  },
  directives: {
    ClosePopup
  },
  plugins: {
    Notify,
    Dialog
  }
 });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
