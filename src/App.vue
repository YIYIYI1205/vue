<template>
	<div>
		<span v-text="msg" class="red"></span>

		<router-link to="/login">登录</router-link>	
		<router-link to="/register">注册</router-link>	
		<router-view></router-view>
		<mt-button type="default">default</mt-button>
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            
		        </ul> 
		</div>
	</div>
</template>
<script>
export default { 
  data () {
    return {
      msg: 'fesfff'
    }
  }
}
</script>
<style scoped>
	
</style>