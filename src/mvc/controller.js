class Controller{
    constructor(model, view, methods) {
        this.model = model
        this.view = view
        this.methods=methods
        this.init()
        this.bindMethods()
    }
    // 初始化方法
    init () {
        // 实现视图渲染方法
        this.view.render = () => { this.view.el.innerHTML = this.view.template.replace('{{data}}',this.model.get()) }
        this.view.render() //渲染视图
    }
    // 绑定按钮事件
    bindMethods () {
        [].forEach.call(this.methods, element => {
            // 采用事件委托的方式绑定事件到容器元素上，防止视图重新渲染时子元素被替换导致监听事件失效
            this.view.el.addEventListener('click',  (e) => {
                if (e.target.id === element.DomID)
                {
                    element.fn.call(this,arguments) // 执行对应方法
                    this.view.render() // 重新渲染视图
                }
            })
        })
    }
}
export default Controller