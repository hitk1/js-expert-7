export default class Controller {
    #view
    #service

    constructor({ view, service}){
        this.#view = view
        this.#service = service

        this.#view.configureOnBtnClick(this.onButtonStart.bind(this))
    }

    static async initialize(deps){
        const controller = new Controller(deps)
        controller.log('not yet detected eye blink! Click in the button to begin')
        return controller.init()
    }

    async init(){
        
    }

    log(text){
        this.#view.log(`logger: ${text}`)
    }

    onButtonStart(){
        this.log('Initializing detection..')
    }
}