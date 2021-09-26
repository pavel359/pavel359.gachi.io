import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

export class StartPage extends LitElement {

  constructor() {
    super();

    this.welcomeOpacity = { opacity: 1 };
    this.popupVisibility = {visibility: 'hidden'};
    this.container = { transform: `translate3d(0px, 0px, 0px)`};
    this.container1 = { transform: `translate3d(0px, 0px, 0px)`};
    this.container2 = { transform: `translate3d(0px, 0px, 0px)`};
    this.arr = ['#E7484F', '#F68B1D', '#FCED00', '#009E4F', '#00AAC3', '#732982'];
    this.currentColor = 0;
    this.computedStyle = 0;
    this.computedStyleInitial = 0;
    this.iterator = 0;
  }

  getSliderWidth = () => {
    let container = this.renderRoot.querySelector('#container');
    this.computedStyleInitial = Number(window.getComputedStyle(container).getPropertyValue("width").replace('px',''));
    return Number(window.getComputedStyle(container).getPropertyValue("width").replace('px',''));
  }

  slider = () => {
    this.container = { transform: `translate3d(-${this.computedStyle}px, 0px, 0px)`};
    this.container1 = { transform: `translate3d(-${this.computedStyle}px, 0px, 0px)`};
    this.container2 = { transform: `translate3d(-${this.computedStyle}px, 0px, 0px)`};
    this.iterator++;
    this.computedStyle += this.getSliderWidth();
    console.log(this.computedStyle);
    if (this.iterator==3) {
      this.container1 = { transform: `translate3d(${this.computedStyleInitial*3}px, 0px, 0px)`};
    };

    if (this.iterator==4) {
      this.container1 = { transform: `translate3d(${this.computedStyleInitial*2}px, 0px, 0px)`};
      this.container2 = { transform: `translate3d(${this.computedStyleInitial*2}px, 0px, 0px)`};
    };

    if (this.iterator == 5) {
      this.container1 = { transform: `translate3d(${this.computedStyleInitial}px, 0px, 0px)`};
      this.container2 = { transform: `translate3d(${this.computedStyleInitial}px, 0px, 0px)`};
      this.computedStyle = 0;
      this.iterator=0
    };
    this.requestUpdate();
    setTimeout(() =>this.slider(), 4000);
  }

  getLetter = () => {
    return this.renderRoot.querySelector('#rainbow').textContent.split('');
  }

  getColor = () => {
    if (this.currentColor<=5) {
      return this.arr[this.currentColor++];
    }
    else {
      this.currentColor=0;
      return this.arr[this.currentColor++];
    }
  }

  colorize = () => {
    let html = '';
    let letters = this.getLetter();
    letters.forEach(element => html +="<span  style=\"color:" + this.getColor() + "\">"
        + element + "</span>");
    return html;
  };

  becomeRainbow = () => {
    this.renderRoot.querySelector('#rainbow').innerHTML = this.colorize();
  };
  firstUpdated() {
    this.becomeRainbow();
    this.slider();
  }

  _scroll = () => {
    let Opacity=(document.documentElement.clientHeight-(window.pageYOffset*3.5))/document.documentElement.clientHeight;
    let OpacityFixed = Opacity.toFixed(3);
    this.welcomeOpacity = {opacity: OpacityFixed};
    if (pageYOffset>0) {
      this.renderRoot.querySelector('#header').classList.add('headerShadow');
    }
    else {
      this.renderRoot.querySelector('#header').classList.remove('headerShadow');
    }
    this.requestUpdate();
    console.log(OpacityFixed);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', this._scroll);
  }

  _clickHandler = () =>{
    this.popupVisibility = (JSON.stringify(this.popupVisibility) == JSON.stringify({visibility: 'hidden'}))? {visibility: 'visible'}:{visibility: 'hidden'};
    this.requestUpdate();
  }



  static get styles() {
    return css // language=CSS
    `
        
      .bg {
        z-index: -1;
        position: fixed;
        overflow: hidden;
        margin-top: 64px;
        width: 100%;
        height: 100%;
        left: 0px;
      }
      
      .bgImage {
        height: 100%;
        width: 100%;
        background-repeat: repeat;
        background-image: url("src/images/background.png");
        animation: slidebg 60s linear infinite;
      }
      
      @keyframes slidebg {
        from {
          background-position-y: 0px;
          background-position-x: 0vw;
        }
        
        to {
          background-position-y: 0px;
          background-position-x: 116.5vw;
        }
        
      }

      .regButton:hover {
        animation-play-state: running;
      }
      
      .createAccButton {
        width: 20vw;
        height: 8vh;
        border: hidden;
        border-radius: 4px;font-size: 20px;
        display: grid;
        place-content: center;
        gap: 1ch;
        background: linear-gradient(135deg, rgba(255,0,24,1) 0%, rgba(255,165,44,1) 16%, rgba(255,255,65,1) 33%, rgba(0,128,24,1) 50%, rgba(0,0,249,1) 67%, rgba(134,0,125,1) 83%);
      }
      
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f8f8f8;
        height: 64px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 4;
        transition: all 0.5s ease-out;
      }
      
      .headerShadow {
        box-shadow: 0 20px 30px 0 rgba(28,9,80,.10);
      }
      
      .headerLeft {
        padding-left: 32px;
      }
      
      .headerIcon {
        width: 42px;
        height: 42px;
      }
      
      .headerCenter {
        
      }
      
      .headerText {
        font-size: 40px;  
      }
      
      .headerRight {
        padding-right: 32px;
      }
      
      .headerUser {
        width: 42px;
        height: 42px;
      }

      .shadowBox {
        z-index:8;
        position: absolute;
        width: 100%;
        height: 100vh;
        background-color: #000000;
        opacity: 0.5;
      }

      .crossButton {
        z-index:9;
        position: absolute;
        right: 10px;
        top: 10px;
        width: 40px;
        height: 40px;
        cursor: pointer;
        transition: all 1s ease;
      }

      .crossButton:hover {
        transform: rotate(180deg);
      }

      .popupRegistration {
        z-index:10;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        left: 30vw;
        width: 40vw;
        height: 100vh;
        background-color: white;
      }

      .regImage {
        margin-top: 4vh;
        margin-bottom: 4vh;
      }

      .regTerms {
        font-size: 1.2em;
        text-align: center;
        line-height: 1.4;
        word-wrap: break-word;
        margin: 60px 80px 0px 80px;
      }

      .aTerms {
        color: #667180;
        text-decoration: underline;
      }

      .regButton {
        margin-top: 60px;
        background-color: #343A40;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        width: 14vw;
        height: 40px;
        border: hidden;
        border-radius: 4px;
        font-size: 1.2em;
        color: #667180;
      }

      .regButton{
        background-image: linear-gradient(
            to right,
            #E7484F,
            #E7484F 16.65%,
            #F68B1D 16.65%,
            #F68B1D 33.3%,
            #FCED00 33.3%,
            #FCED00 49.95%,
            #009E4F 49.95%,
            #009E4F 66.6%,
            #00AAC3 66.6%,
            #00AAC3 83.25%,
            #732982 83.25%,
            #732982 100%,
            #E7484F 100%
        );
        animation: slidein 1.5s linear infinite;
        animation-play-state: paused;
      }

      .regButton:hover {
        animation-play-state: running;
      }

      @keyframes slidein {
        to {
          background-position:14vw;
        }
      }
      
      .welcome {
        height: 100vh;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1ch;
        font-size: 4.4em;
        font-weight:bold;
        color: rgb(248, 248, 248);
      }
      
      .welcomeMessage {
        line-height: 1.1
      }

      .mainContent {
        margin: 0px 10vw 0 10vw;
        background-color: #f8f8f8;
      }

      .slider {
        margin: 16px 45px 0px 45px;
        width: 90%;
        padding: 0;
        overflow: hidden;
        display: flex;
        touch-action: pan-y;
        box-sizing: inherit;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      
      ul {
        list-style-type: none;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
      }

      .container {
        min-width: calc(33.3333% - 0px);
        max-width: calc(33.3333% - 0px);
        padding: 8px;
        flex-grow: 1;
        box-sizing: inherit;
      }
      
      li {
        display: list-item;
        text-align: -webkit-match-parent;
      }
      
      .card {
        position: relative;
        padding: 24px;
        margin: 0;
        height: 100%;
        box-shadow: 0 2px 6px 0 rgba(102 113 128 0.14);
        border-radius: 8px;
        border-color: #e6eaf0;
        border-style: solid;
        border-width: 1px;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 4px;
        margin-inline-end: 4px;
      }
      
      .message {
        word-wrap: break-word;
        font-size: 1.2em;
        text-align: left;
        padding-left: 5px;
        margin-bottom: 12px;
      }
      
      .author {
        word-wrap: break-word;
        font-size: 1.2em;
        text-align: left;
        padding-left: 5px;
        margin-bottom: 8px;
      }
      
      .bottom {
        margin: 0px 10vw 0 10vw;
        background-color: #f8f8f8;
        box-sizing: border-box;
        border-radius: 4px;
      }
      
      .links {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      .gachiLink {
        transition: all .2s ease-in-out;
      }
      
      .gachiLink:hover {
         transform: scale(1.2);
      }
      
      .linkIcon {
        width: 32px;
        height: 32px;
      }
      
      a {
        text-decoration: none;
      }
      
      .tooltip {
        position: relative;
        background: pink;
        padding: 5px 12px;
        margin: 5px;
        font-size: 15px;
        border-radius: 100%;
        color: #FFF;
      }

      .tooltip:before,
      .tooltip:after {
        position: absolute;
        content: '';
        opacity: 0;
        transition: all 0.4s ease;
      }

      .tooltip:before {
        border-width: 10px 8px 0 8px;
        border-style: solid;
        border-color: pink transparent transparent transparent;
        top: -15px;
        transform: translateY(20px);
      }

      .tooltip:after {
        content: attr(data-tooltip);
        background: pink;
        width: 160px;
        height: 40px;
        font-size: 13px;
        font-weight: 300;
        top: -75px;
        left: -10px;
        padding: 10px;
        border-radius: 5px;
        letter-spacing: 1px;
        transform: translateY(20px);
      }

      .tooltip:hover::before,
      .tooltip:hover::after {
        opacity: 1;
        transform: translateY(-2px);
      }

      @keyframes shake {
        0% {
          transform: rotate(2deg);
        }
        50% {
          transform: rotate(-3deg);
        }
        70% {
          transform: rotate(3deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }

      .anim:hover {
        animation: shake 500ms ease-in-out forwards;
      }
      
      p {
        
      }
    
    `;
  }

  render() {
    return html`
        <div class="app">
            <div class="bg">
                <div class="bgImage"></div>
            </div>
            <div class="header" id="header">
                <div class="headerLeft">
                <img src="src/images/icon_gachinder.svg" class="headerIcon">
                </div>
                <div class="headerCenter">
                <span id="rainbow" class="headerText">Gachinder</span>
                </div>
                <div class="headerRight">
                <img src="src/images/icon-user-149071.svg" class="headerUser">
                </div>
            </div>
            <div class="popup" style="${styleMap(this.popupVisibility)}">
                <div class="shadowBox"></div>
                <img class="crossButton" src="src/images/cross.svg" @click="${this._clickHandler}">
                <div class="popupRegistration">
                    <div class="regImage">
                        <img style="width: 80px; height: 80px" src="src/images/icon_gachinder.svg">
                    </div>
                    <span class="regTerms">создать аккаунт</span>
                    <div class="regTerms">
                        <span >Нажимая "Зарегестрироваться" вы принимаете наши <a class="aTerms" href="">Условия
                        </a>. Чтобы узнать, как мы обрабатываем ваши данные, ознакомьтесь с нашей <a class="aTerms" href="">Политика Конфиденциальности
                        </a> и <a class="aTerms" href="">Политика в отношении файлов Cookie</a>.</span>
                    </div>
                    <div class="anim"><span class="tooltip" data-tooltip="username must consist of 29 symbols.">?</span></div>
                    <button class="regButton">Зарегестрироваться</button>
                </div>
            </div>
            <div class="welcome" id="welcome" style="${styleMap(this.welcomeOpacity)}">
                <span id="rainbow" class="welcomeMessage">Welcome to the Dungeon!</span>
                <button class="createAccButton" @click="${this._clickHandler}">become a real man</button>
            </div>
            <div class="mainContent">
                <ul id="slider" class="slider">
                    <li id="container" class="container" data-index="1" style="${styleMap(this.container1)}">
                        <div class="card">
                            <span class="author">Van Darkholme</span>
                            <div></div>
                            <span class="message">This gay website turns me on </span>
                        </div>
                    </li>
                    <li id="container" class="container" data-index="2" style="${styleMap(this.container2)}">
                        <div class="card">
                            <span class="author">Actor from sexual harassment in the workplace</span>
                            <div></div>
                            <span class="message">You've got a fat cock? I've got a fat cock too. Maybe we should rub our fat cocks together sometime?</span>
                        </div>
                    </li>
                    <li id="container" class="container" style="${styleMap(this.container)}">
                        <div class="card">
                            <span class="author">Billy Herington</span>
                            <div></div>
                            <span class="message">We must pull up our pants</span>
                        </div>
                    </li>
                    <li id="container" class="container" style="${styleMap(this.container)}">
                        <div class="card">
                            <span class="author">Steeve Rambo</span>
                            <div></div>
                            <span class="message">without further interruption, start chatting and suck some dick</span>
                        </div>
                    </li>
                    <li id="container" class="container" style="${styleMap(this.container)}">
                        <div class="card">
                            <span class="author">Brad McGuire</span>
                            <div></div>
                            <span class="message">Our daddy taught us not to be ashamed of our cringe dialogues</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="bottom">
                <div class="links">
                    <div class="gachiLink">
                        <a href="https://vk.com/gachimuchi">
                        <img class="linkIcon" src="src/images/vk.svg">Russian gachi community</a>
                    </div>
                    <div class="gachiLink">
                        <a href="https://www.twitch.tv/vansamaofficial?lang=ru">
                        <img class="linkIcon" src="src/images/twitch.svg">VanDarkholme Twitch</a>
                    </div>
                    <div class="gachiLink">
                        <a href="https://discord.com/invite/vansamaofficial">
                        <img class="linkIcon" src="src/images/discord.svg">VanDarkholme Discord</a>
                    </div>
                </div>
            </div>
            
            
            
            
            
            
        </div>
        `;
  }
}

customElements.define('start-page', StartPage);
