export default class HTMLContent extends HTMLElement {
    shadow:ShadowRoot;
    constructor() {
        super();
        this.shadow = null;
    }
    getRenderStr(htmlStr:string,dataObj:Object={}):string {
        let dataStr = ''
        for(const key of Object.keys(dataObj)) {
            dataStr+=`const ${key} = dataObj.${key};`
        }
        const compileHtml = new Function(dataStr+'return `'+htmlStr.replace(/`/g,'\\`')+'`;');
        return compileHtml();
    }
    render(htmlStr:string,dataObj:Object={}, mode:ShadowRootMode='open'):void {
        /**
         * 由于constructor元素还未初始化挂载
         * 所以this.attachShadow在constructor可能获取不到挂载
         * 所以建议在connectedCallback生命周期再执行render
         */
        if(!this.shadow) {this.shadow = this.attachShadow( { mode } );}
        this.shadow.innerHTML = this.getRenderStr(htmlStr,dataObj);
    }

    addStyleSheets(styleSheets:StyleSheetList):void {
        // this.shadowRoot.styleSheets暂时无法添加，所以只能保证成功
        const rulelist = []
        for (let i=0; i<styleSheets.length; i++) {
            const sheet = styleSheets[i];
            for (let j=0; j<sheet.cssRules.length;j++) {
                const rule = sheet.cssRules[j];
                rulelist.push(rule.cssText)
            }
        }
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = rulelist.join('\r\n')
        this.shadow.appendChild(style)
    }
  }