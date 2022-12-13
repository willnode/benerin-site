import './app.css'
import App from './App.svelte'
import { FixerElement } from './lib/FixerElement';

const app = new App({
  target: document.getElementById('app'),
})

if (window.customElements) {
  customElements.define("u-x", FixerElement);
}

export default app
