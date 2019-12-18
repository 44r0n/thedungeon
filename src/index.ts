import Vue from 'vue';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import router from './router';
import 'buefy/dist/buefy.css';
import App from './App.vue';
import i18n from './translations/i18n';

import { library } from '@fortawesome/fontawesome-svg-core';

// TODO: separate icons
import { faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faDiceD20, faArrowRight, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faDiceD20, faArrowRight, faPlus, faTrash);
Vue.component('vue-fontawesome', FontAwesomeIcon);



Vue.use(VueRouter);
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});
Vue.component('app', App);

new Vue({
  i18n,
  router
}).$mount('#app');
