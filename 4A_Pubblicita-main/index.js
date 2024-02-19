class Notizie extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        let content = JSON.parse(this.getAttribute("content"));
        let location = window.location.href;
        location = location.substring(0, location.length - 10);
        
        let html = `
            <div id="boxNotizie">
                <hr/>
                <div class="imgCollection">
                    <img src="${location + content.image1}" width="150px" height="200px" >
                    <img src="${location + content.image2}" width="150px" height="200px" >
                    <img src="${location + content.image3}" width="150px" height="200px" >
                </div>
            </div>
        `;

        let css = `
            #boxNotizie {
                display: flex;
                flex-direction:column;
                width: 100%;
                height: 300px;
            }
        `;

        this.shadowRoot.innerHTML = `<style>${css}</style>${html}`;
    }

}

customElements.define("notizie-box", Notizie);


class Pubblicita extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        
        let location = window.location.href;
        location = location.substring(0, location.length - 10);

        let html = `
            <div id="boxPubblicita">
                <hr/>
                <div class="imgCollection" style="height:100%; display:flex; align-items:center; justify-content:space-evenly;">
                    <img src="${location + "img/fruttorosso.png"}" width="50px" height="70px" style=background-color:white;>
                    <img src="${location + "img/fruttorosso.png"}" width="50px" height="70px" style=background-color:white;>
                    <img src="${location + "img/fruttoviola.png"}" width="50px" height="70px" style=background-color:white;>
                </div>
                <div style="width:100%; display:flex; justify-content:center; align-items:center; color:red;">Gioca con noi. CLICCA QUI!!</div>
                
            </div>
        `;

        let css = `
            #boxPubblicita {
                display: flex;
                flex-direction:column;
                width: 300px;
                height: 135px;
                background-color:yellow;
            }
        `;

        this.shadowRoot.innerHTML = `<style>${css}</style>${html}`;
    }

}

customElements.define("pubblicita-box", Pubblicita);


class TestoMov extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    
    connectedCallback(){
        let content = this.getAttribute("content");
        let a = document.createElement('div');
        a.id = "txtMov";
        a.textContent = content;
        this.shadowRoot.appendChild(a);
        let css = document.createElement('style');
        css.textContent = 
        `
        #txtMov{color:black;
            width:100%;
            height: 25px; 
            white-space: nowrap; 
            animation: moveText 15s linear infinite;       
        }
        @keyframes moveText {
            0% { transform: translateX(100%); } 
            100% { transform: translateX(-100%); }
        }`
        this.shadowRoot.appendChild(css)
    }
}
customElements.define("testo-movimento", TestoMov);