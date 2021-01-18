# web-components-content
WebComponents base components 

# install
```sh
npm install web-components-content
```

# use
### HTMLContent
```js
import indexHtml from './index.html'
import {HTMLContent} from 'web-components-content'
export default class MyHome extends HTMLContent {
    constructor() {
        super();
        this.render(indexHtml,{name:'Tom'});
        this.addStyleSheets(document.styleSheets);
        this.init();
    }
}
```
OR
```js
const indexHtml ='<h1>${name}</h1>';
import {HTMLContent} from 'web-components-content'
export default class MyHome extends HTMLContent {
    constructor() {
        super();
        this.render(indexHtml,{name:'Tom'});
        this.addStyleSheets(document.styleSheets);
        this.init();
    }
}
```
### MyHashRoute
```html
<!-- app.html -->
<my-router>
    <my-hash-route path="" tag="my-home"></my-hash-route>
    <my-hash-route path="#my-monitor" tag="my-monitor"></my-hash-route>
</my-router>
```
```js
import appHtml from './app.html'
import {HTMLContent,MyHashRoute,MyRouter} from 'web-components-content'
import MyHome from '@/pages/MyHome/index.js'
import myMonitor from '@/pages/myMonitor/index.js'
class AppContainer extends HTMLContent {
    constructor() {
        super();
        this.render(appHtml)
        this.addStyleSheets(document.styleSheets)
    }
}
window.customElements.define('app-container', AppContainer);
window.customElements.define('my-home', MyHome);
window.customElements.define('my-monitor', myMonitor);
window.customElements.define('my-router', MyRouter);
window.customElements.define('my-hash-route', MyHashRoute);
```

### MyBrowseRoute
```html
<!-- app.html -->
<my-router>
    <my-browse-route path="/" tag="my-home"></my-browse-route>
    <my-browse-route path="/my-monitor" tag="my-monitor"></my-browse-route>
</my-router>
```
```js
import appHtml from './app.html'
import {HTMLContent,MyBrowseRoute,MyRouter} from 'web-components-content'
import MyHome from '@/pages/MyHome/index.js'
import myMonitor from '@/pages/myMonitor/index.js'
class AppContainer extends HTMLContent {
    constructor() {
        super();
        this.render(appHtml)
        this.addStyleSheets(document.styleSheets)
    }
}
window.customElements.define('app-container', AppContainer);
window.customElements.define('my-home', MyHome);
window.customElements.define('my-monitor', myMonitor);
window.customElements.define('my-router', MyRouter);
window.customElements.define('my-browse-route', MyBrowseRoute);
```