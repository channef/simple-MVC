class Model {
    // 数据模型初始化：绑定数据
    constructor(data) {
        this._data=data
    }
    // 提供数据增删改查操作
    create () { }
    delete () { }
    update (data) {this._data=data}
    get () { return this._data }
}
export default Model