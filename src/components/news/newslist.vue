<template>
    <div id="tmpl">
        <!--1.0 实现新闻资讯列表样式-->
		 <ul class="mui-table-view">
			<li v-for="item in list" class="mui-table-view-cell mui-media">
				      <router-link  v-bind="{to:'/news/newsinfo/'+item.id}">
                          <img class="mui-media-object mui-pull-left" :src="item.img_url">
                          <div class="mui-media-body">
                             {{item.title}}
                             <p class='mui-ellipsis' v-text="item.zhaiyao"></p>
                            <div class="ft">
                                <span>发表时间:{{item.add_time | datefmt("YYYY-MM-DD HH:mm:ss")}}</span>
                                <span class="click">点击数：{{item.click}}</span>
                            </div>
                          </div>
				  </router-link>    
			</li>
		</ul> 
    </div>
</template>
<script>
export default {
	data(){
		return{
			list:[],
		}
	},
    created(){
	  this.getData();
    },
    methods:{
	    getData(){
	        var url="http://182.254.146.100:8899/api/getnewslist";
	        this.$http.get(url).then(function(response){
	            var data=response.body;
	            if(data.status!=0){
	                return;
                };
	            this.list=data.message;
            })
        }
    }
}
</script>
<style scoped>
 .mui-table-view img{
 	height:80px;
 	width:80px;
 }
 .mui-table-view .mui-media-object{
	 max-width: 80px;
	 line-height: 80px;
 }

	.ft{
		margin-top: 1.5em;
		font-size: 14px;
		color:#0094ff;
	}

 .ft .click{
	 margin-left: 20px;
 }
</style>
