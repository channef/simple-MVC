import Model from "./mvc/model"
import View from "./mvc/View"
import Controller from "./mvc/controller"

class App{
    constructor({ data, el, template, methods }) {
        this.model = new Model(data)
        this.view = new View(el, template)
        this.controller = new Controller(this.model, this.view, methods)
    }
}
export default App