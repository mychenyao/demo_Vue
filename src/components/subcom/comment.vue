<template>
    <div id="tmpl">
        <!--评论组件-->
        <!--1.0 实现提交评论数据到服务器的静态结构-->
        <div id="postcomment">
            <h3>提交评论</h3>
            <p class="p"></p>
            <textarea placeholder="请输入您要评论的内容..." v-model="comment_content"></textarea>
            <mt-button type="primary" size="large" @click="postData">发表</mt-button>
        </div>

        <!--&lt;!&ndash;2.0 实现获取评论数据列表&ndash;&gt;-->
        <div id="list">
            <h3>评论列表</h3>
            <p class="p"></p>
            <div v-for="(item,index) in list">
                <div class="title">
                    <span>第{{index + 1}}楼:</span>
                    <span>用户：{{item.user_name}}</span>
                    <span>发表时间：{{item.add_time | datefmt("YYYY-MM-DD HH:mm:ss")}}</span>
                </div>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell" v-text="item.content"></li>
                </ul>
            </div>
        </div>

        <!--3.0 实现获取更多按钮-->
        <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>
<script>
    export default{
        props:["send"],
        data(){
            return {
                list:[],
                comment_content:"",
                pageIndex:1,
                flag:false
            }
        },
        created(){
            this.getData();
        },
        methods: {
            getData(){
                var pageIndex=this.pageIndex || 1,url = "http://182.254.146.100:8899/api/getcomments/"+this.send+"?"+"pageindex="+pageIndex;
                this.$http.get(url).then(function(response){
                    var data=response.body;
                    if(data.status!=0){
                        return;
                    };
                    if(this.flag){
                        this.list=this.list.concat(data.message);
                        return;
                    }
                    this.list=data.message;
                })
            },
            postData(){
                var url ="http://182.254.146.100:8899/api/postcomment/"+this.send;
                if(this.comment_content.trim()==""){
                    alert("内容不能为空");
                    return;
                };
                this.$http.post(url,{content:this.comment_content},{emulateJSON:true}).then(function(response){
                    this.comment_content="";
                    if(!this.flag){
                        this.getData();
                    }
                    alert(response.body.message);
                })
            },
            getmore(){
                this.pageIndex++;
                this.flag=true;
                this.getData();
            }
        }
    }
</script>
<style scoped>
    #postcomment{
        padding: 5px;
    }
    .p{
        height: 1px;
        width: 100%;
        border-bottom: 1px solid rgba(0,0,0,0.3);
    }

    /*2.0 评论列表的样式*/
    #list{
        padding: 5px;
    }
    .title{
        padding: 5px;
        color: #6d6d72;
        font-size: 15px;
        background-color: rgba(0,0,0,0.1);
    }
</style>
