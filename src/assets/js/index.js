import '../styles/main.scss'
import Vue from 'vue'

window.$ = window.jQuery = require('jquery');
// import * as $ from 'jquery';


// require("@fancyapps/fancybox");
// require('./filter.js');
// require('./forms.js');


new Vue({
    el: "#header",
    data: {
        title: "Hello World",
    },

    methods: {

        headerHover() {
            // this.title = 'red'

        },
        headerLeaver() {
            // this.title = 'blue'
        },
    },

    created: function () {
        window.onscroll = function (e) {
            if(this.oldScroll > this.scrollY){
                this.title = 'red';
                console.log(this.title);
            } else{
                this.title = 'blue';

            }
            this.oldScroll = this.scrollY;

        };


    },
    destroyed: function () {

    }
});
