/*

VUE.JS


ДИРЕКТИВЫ:

v-text - содержимое тэга
v-for - цикл 
v-if - условие 
v-else - иначе
v-bind: - делает определенные атрибуты тэга
v-model - связка HTML-элемента и свойства
v-on: - событие на HTML-элементе
v-html - вставляет HTML-код (нельзя ставить пользовательской ввод)
v-once - отрисовывает элемент только один раз
v-show - отображение элемента
v-pre - не компилирует элемент и его дочерние элементы
v-cloak - 

Экзэмпляр(инстанс) VUE
var vm = new Vue({
  опции
})

КОНСТРУКТУРЫ:

el - элемент (название класса, id, тэг)
template - элемент, который будет рендериться
data - данные, которые будут использоваться
methods - функции, которые будут применяться
  Жизненый цикл VueJS:
    beforeCreate
    created
    beforeMount
    mounted
    beforeUpdate
    updated
    beforeDestroy
    destroyed
computed - объект с функциями, которые работают с данными из data
watch - отслеживание изменения во всех опциях. Нужно указывать название элемента,
        который изменился и указывать, что делать если это изменилось.


КОМПОНЕНТЫ
Vue.component('name',{
   ... опции ...
})



*/


var app = new Vue({
  el: '#app',
  data: {
    message: 'Привет, Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Изучить JavaScript' },
      { text: 'Изучить Vue' },
      { text: 'Создать что-нибудь классное' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Привет, Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Привет, Vue!'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Овощи' },
      { id: 1, text: 'Сыр' },
      { id: 2, text: 'Что там ещё люди едят?' }
    ],
    groceryList1: [
      { id: 3, text: 'Не Овощи' },
      { id: 4, text: 'Не Сыр' },
      { id: 5, text: 'Не Что там ещё люди едят?' }
    ]
  }
})

var app8 = new Vue({
  el: '#app-8',
  data:{
    title: 'Hello, world!',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">Google</a>'
  },
  methods: {
    sayHello: function() {
      this.title = 'Hello!';
      return this.title;
    }
  }
})

var app9 = new Vue({
    el: '#app-9',
    data: {
        value: 0
    },
    computed: {
        result: function(){
            return this.value >= 37 ? 'done' : 'not there yet'
        }
    },
    watch: {
        result: function(){
            setTimeout(function(){this.value = 0;}, 5000);
        }
    }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app10 = new Vue({
  el: '#app-10',
  data: {
    groceryList: [
      { id: 0, text: 'Овощи' },
      { id: 1, text: 'Сыр' },
      { id: 2, text: 'Что там ещё люди едят?' }
    ]
  }
})


Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  methods:{
    cl : function(){
      if (this.count >= 12){
        this.count = 0;
        return this.count; 
      } 
    return this.count++;
    }
  },
  template: '<button v-on:click="cl()">Счётчик кликов — {{ count }}</button>'
})
var app11 = new Vue({
  el: "#app-11",
})


Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Ошибка!</strong>
      <slot></slot>
    </div>
  `
})
var app12 = new Vue({
  el: "#app-12",
})

var app13 = new Vue({
  el: '#app-13',
  data: {
    checked: document.getElementById('checkbox').checked,
  }
})


var app14 = new Vue({
  el: "#app-14",
  data: {
    items: 'Маша, Петя, Марина, Василий'.split(', ')
  }
})



















