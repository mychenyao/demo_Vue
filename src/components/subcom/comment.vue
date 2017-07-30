<template>
    <div id="tmpl">
        <!--评论组件-->
        <!--1.0 实现提交评论数据到服务器的静态结构-->
        <!--<div id="postcomment">-->
            <!--<h3>提交评论</h3>-->
            <!--<p class="p"></p>-->
            <!--<textarea placeholder="请输入您要评论的内容..." v-model="postcontent"></textarea>-->
            <!--<mt-button type="primary" size="large" @click="postcomment">发表</mt-button>-->
        <!--</div>-->

        <!--&lt;!&ndash;2.0 实现获取评论数据列表&ndash;&gt;-->
        <!--<div id="list">-->
            <!--<h3>评论列表</h3>-->
            <!--<p class="p"></p>-->
            <!--&lt;!&ndash;<div v-for="(item,index) in list">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="title">&ndash;&gt;-->
                    <!--&lt;!&ndash;<span>第{{index + 1}}楼:</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;<span>用户：{{item.user_name}}</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;<span>发表时间：{{item.add_time}}</span>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;<ul class="mui-table-view">&ndash;&gt;-->
                    <!--&lt;!&ndash;<li class="mui-table-view-cell" v-text="item.content"></li>&ndash;&gt;-->
                <!--&lt;!&ndash;</ul>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</div>-->

        <!--3.0 实现获取更多按钮-->
        <!--<mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>-->
    </div>
</template>
<script>
    export default{
        props:["send"],
        data(){
            return {}
        },
        created(){
            this.getData();
        },
        methods: {
            getData(){
                var url = "http://182.254.146.100:8899/api/getcomments/"+this.send+"?"+"pageindex=1";
                this.$http.get(url).then(function(response){
                    var data=response.body;
                })

            }

        }
    }
</script>
<style scoped>

</style>
