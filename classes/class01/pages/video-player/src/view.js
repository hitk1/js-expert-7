export default class View {
    #btnInit = document.querySelector('#init')
    #statusElement = document.querySelector('#status')

    enableButton(){
        this.#btnInit.disabled = false
    }

    configureOnBtnClick(func) {
        this.#btnInit.addEventListener('click', func)
    }

    log(text) {
        this.#statusElement.innerHTML = text
    }
}