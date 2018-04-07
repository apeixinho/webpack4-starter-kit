import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import './assets/styles/main.scss';
import myApp from './components/my-app/index';

if (PRODUCTION) {
  require('offline-plugin/runtime').install();
}

customElements.define('my-app', myApp);
