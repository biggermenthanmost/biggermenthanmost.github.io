class BaseNav extends HTMLElement{
    connectedCallback(){
        const htmlFile = "baseElements/navigation.html"
        fetch(htmlFile)
        .then(response => response.text())
        .then(html => {
        this.innerHTML = html;
      })
    }
}

class BaseFooter extends HTMLElement{
    connectedCallback(){
        const htmlFile = "baseElements/footer.html"
        fetch(htmlFile)
        .then(response => response.text())
        .then(html => {
        this.innerHTML = html;
      })
    }
}

customElements.define('base-nav', BaseNav)
customElements.define('base-footer', BaseFooter)