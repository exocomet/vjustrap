(function (Vue) {
    'use strict';

    Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

    // https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript/29736312#29736312

    function highlightJSON(json) {
        if (typeof json != 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }

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
        },
        mounted: function() {
            console.log("Look into my eyes you'll see who I am");
        },
        computed: {
            dataModel: function () {
                return JSON.stringify(this.$data, null, 2);
            },
            formattedDataModel: function() {
                return highlightJSON(this.dataModel);        }
        }
    });

}(Vue));
