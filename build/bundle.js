(function (Vue) {
    'use strict';

    Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

    // Vue.component('foo-input', {
    //     props: {
    //         'x': Number
    //     },
    //     data: function() {
    //         return {val: 0};
    //     },
    //     template: '<div>{{val}} <input v-model="val"></div>'
    // });

    const operators = [
        {id: 'add', title: 'Add'},
        {id: 'subtract', title: 'Subtract'},
    ];


    var app = new Vue({
        el: '#app',
        data: {
            text: "",
            textArea: "",
            numeric: 0,
            rangeMin: -100,
            range: 0,
            // textarea,
            // select,
            radioStuff: ['foddddo', 'badasdadaar'],
            selectedRadio: undefined,
            selectStuff: ['foo', 'bar'],
            selectedStuff: undefined,

            operators: operators,
            selectedOperator: operators[0],

            selectedArray: [],
            toggleBoolean: undefined,
            toggleValue: undefined,
        },
        methods: {
            add: function(val) {
                this.numeric += val;
            },
            subtract: function(val) {
                this.numeric -= val;
            },
            performCalculation: function(value) {
                // value === this.range
                if(this.selectedOperator.id == 'add') {
                    this.add(value);
                } else if (this.selectedOperator.id == 'subtract') {
                    this.subtract(value);
                }
            },
            fetchData: function () {
                // Taken from: https://vuejs.org/v2/examples/commits.html
                // var xhr = new XMLHttpRequest()
                // var self = this
                // xhr.open('GET', apiURL + self.currentBranch)
                // xhr.onload = function () {
                //     self.commits = JSON.parse(xhr.responseText)
                //     console.log(self.commits[0].html_url)
                // }
                // xhr.send()
            }
        },
        mounted: function() {
            console.log('asd');
        },
        computed: {
            dataModel: function () {
                return JSON.stringify(this.$data, null, 2);
            },
        }
    });

}(Vue));
