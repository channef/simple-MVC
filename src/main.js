import App from './app'
new App({
    data: 100,
    el:'#app',
    template: `<div>{{data}}<div>
    <div><button id="add">+1</button></div>
    <div><button id="sub">-1</button></div>
    <div><button id="mul">x10</button></div>
    <div><button id="div">/10</button></div>
    `,
    methods: [
        {
            DomID: 'add',
            fn: function () { this.model.update(this.model.get()+1) }
        },
        {
            DomID: 'sub',
            fn: function () { this.model.update(this.model.get()-1) }
        },
        {
            DomID: 'mul',
            fn: function () { this.model.update(this.model.get()*10) }
        },
        {
            DomID: 'div',
            fn: function () { this.model.update(this.model.get()/10) }
        }
    ]
})