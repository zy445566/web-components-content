import HTMLContent from '../HTMLContent/index.js'
export default class MyHashRoute extends HTMLContent {
    path:string;
    tag:string;
    routeType:string;
    constructor() {
        super();
        this.path = this.getAttribute('path');
        this.tag = this.getAttribute('tag');
        this.routeType = 'hash'
        this.renderView()
        this.addListen();
    }

    addListen():void {
        const body = document.querySelector('body')
        const beforeHashChange = body.onhashchange || new Function();
        body.onhashchange = (ev)=>{
            beforeHashChange(ev)
            this.renderView()
        }
    }
    renderView():void {
        const html = window.location.hash.split("?")[0]==this.path?`<${this.tag} route-type="${this.routeType}"/>`:'';
        this.render(html)
    }
  }
