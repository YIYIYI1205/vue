import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import login from "./components/login.vue";
import register from "./components/register.vue";
import Mint from "mint-ui";
import 'mint-ui/lib/style.min.css'; 
import "mint-ui/lib/style.min.css";
import "./static/mui/css/mui.css";
Vue.use(VueRouter);
Vue.use(Mint);
var router=new VueRouter({
	routes:[
			{path:"/login",component:login},
			{path:"/register",component:register},
		]
})
new Vue({
	el:'#app', 
	router,
	render:c=>c(App)
})
