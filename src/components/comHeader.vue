<template>
	<header class="head">
	  <div class="head-left"><i class="x-icon x-icon-back"></i></div>
	  <h2>
	  	{{title}}
	  </h2>
	  <div class="head-right"></div>
	</header>
</template>

<script>
	export default {
		data () {
			return {
				// 模拟一个默认值
				timeEntry: {
				  user: { 
				  	name: '二哲', 
				  	email: 'kodo@forchange.cn', 
				  	image: 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256' 
				  }
				}
			}
		},
		props: ['title']
	}
</script>

<style>
	.head {
	  height: 40px;
	  line-height: 40px;
	  padding: 0 10px;
	  position: relative;
	  box-sizing: border-box;
	  color: #fff;
	  background-color: #FF7D41;
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%;
	  z-index: 1000;
	}
	.head h2 {
	  text-align: center;
	  font-weight: normal;
	  font-size: 18px;
	}
	.head a {
	  color: #fff;
	}
	.head-left,
	.head-right {
	  position: absolute;
	  top: 0;
	}
	.head-left {
	  left: 15px;
	}
	.head-right {
	  right: 15px;
	  font-size: 14px;
	}
	.head + .weui_cells {
	  margin-top: 0;
	}
	.head .head-btn img {
	  width: 22px;
	  vertical-align: middle;
	}
	.head + .wrap {
	  padding-top: 40px;
	}
	.wrap.mb62 {
	  padding-bottom: 62px;
	}
	.head + .weui_navbar {
	  top: 40px;
	  position: fixed;
	}
	.head + .weui_navbar + .weui_tab_bd {
	  padding-top: 90px;
	}

	.x-icon-back {
	  background-image: url('../assets/7-4.png');
	}

</style>