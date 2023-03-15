import styles from "./Navbar.css" assert { type: "css" };

const close_menu_icon_url = "./NAVBAR/square-close.png";
const menu_icon_url = "./NAVBAR/square.png";

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.adoptedStyleSheets.push(styles);
    this.render();
    const iconBtn = this.shadowRoot.getElementById("button_icon");
    const menuBtn = this.shadowRoot.querySelector(".menu-btn");
    const nav = this.shadowRoot.querySelector("nav");
    const link = this.shadowRoot.querySelector("nav .nav-links");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("opened");
      nav.classList.toggle("nav-open");
      link.classList.toggle("fade-in");
    });
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
  
    <nav>
    <button class="menu-btn ">
      <img src="./NAVBAR/square.png" alt="menu button" id="button_icon">

    </button>

    <div class="nav-links">
      <a href="" class="link">Home</a>
      <a href="" class="link">Contact</a>
      <a href="" class="link">Profile</a>
      <a href="" class="link">About</a>
    </div>
  </nav>
       
      `;
  }
}

customElements.define("nav-bar", Navbar);
