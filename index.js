import Vue from 'vue';
import HelloDevelopers from './components/HelloDevelopers';

new Vue({
    el: '#app',
    components: {
        'hello-developers': HelloDevelopers,
    }
})