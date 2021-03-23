class View {
    // 视图初始化
    constructor(el,template) { 
        this.el = document.querySelector(el)
        this.template = template
    }
    render () { } // 渲染视图
}
export default View