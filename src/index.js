import Vue from 'vue';

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
        }
    },
    mounted: function() {
        console.log("Look into my eyes you'll see who I am");
    },
    computed: {
        dataModel: function () {
            return JSON.stringify(this.$data, null, 2);
        },
    }
});
