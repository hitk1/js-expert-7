import Camera from '../../../lib/shared/camera.js'
import { supportsWorkerType } from '../../../lib/shared/util.js'
import Controller from './controller.js'
import Service from './service.js'
import View from './view.js'

const getWorker = () => {
    if (supportsWorkerType()) {
        const worker = new Worker('./src/worker.js', { type: 'module' })
        return worker
    }

    const workerMock = {
        async postMessage(){},
        onmessage(message){}
    }

    return workerMock
}

const worker = getWorker()

const [rootPath] = window.location.href.split('/pages/')
const camera = await Camera.init()

const factory = {
    async initalize() {
        return Controller.initialize({
            view: new View(),
            service: new Service({})
        })
    }
}

export default factory