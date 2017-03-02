
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('imageslider', require('./components/ImageSlider.vue'));

const app = new Vue({
    el: '#app',
    data:{
    	
    		slides: [
				{ id: 1, src: '/images/1.png', title: 'image 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, a excepturi fugiat nihil in deserunt, natus possimus est atque rem incidunt soluta. Itaque quis dolor perspiciatis natus vel, voluptate possimus.', url: '/' },
				{ id: 2, src: '/images/2.jpg', title: 'image 2', description: 'this is the second image', url: null },
				{ id: 3, src: '/images/3.png', title: 'image 3', description: 'this is the third image', url: null },
				{ id: 4, src: '/images/4.jpg', title: 'image 4', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus suscipit quaerat porro fuga ab incidunt eos magnam, soluta aut reiciendis placeat, nostrum repellendus earum assumenda expedita nisi, obcaecati excepturi itaque!', url: '/' }
				]
    	
    }
});
