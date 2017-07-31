<template>
    <div id="tmpl">
        <!--1.0 实现新闻详情-->
        <div class="title">
            <h4 v-text="info.title"></h4>
            <p class="info">{{info.add_time}}  {{info.click}}次浏览</p>
        </div>
        <div id="content" v-html="info.content" ></div>
        <!--2.0 实现评论组件的集成-->
        <!--10.2 实现评论组件-->
        <comment :send ="id"></comment>
    </div>
</template>
<script>
    import comment from "../subcom/comment.vue";
export default {
    components:{
        comment
    },
    data(){
        return{
            id:0,
            info:{}
        }
    },
    created(){
        this.id=this.$route.params.id;
        this.getData();
    },
    methods:{
        getData(){
            var url = "http://182.254.146.100:8899/api/getnew/"+this.id;
            this.$http.get(url).then(function(response){
                var data=response.body;
                if(data.status!=0){
                    return;
                };
                this.info=data.message[0];
            })
        }
    }
}
</script>
<style scoped>
   #content,.title{
      margin:0 5px;
   }
</style>
