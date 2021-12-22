<template>
    <div>
        

        <el-descriptions
                class="margin-top"
                title="게시판 상세 내용"
                :column="1"
                :size="size"
                border>
        <el-descriptions-item label="글번호" label-align="center">
            {{item.no}}</el-descriptions-item>
        

         <el-descriptions-item label="글제목" label-align="center">
            {{item.title}}</el-descriptions-item>
        

        <el-descriptions-item label="작성자" label-align="center">
            {{item.writer}}</el-descriptions-item>

        <el-descriptions-item label="조회수" label-align="center">
            {{item.hit}}</el-descriptions-item>

        <el-descriptions-item label="이미지" label-align="center">
            <el-image :src="item.img" style="width:80%" />
            </el-descriptions-item>
        
        </el-descriptions>
        
    <el-button type="primary"><a href="/board1">목록으로</a></el-button>
    <!-- <router-link to="/board1">목록으로</router-link> -->
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        created() {
             this.handleData();
        },

        data(){
            return {
                no : this.$route.query.no,
                item : [],
            }
        },

        methods:{
            async handleData(){
                const url = `http://ihongss.com/json/boardone.json?no=${this.no}`;
                const headers = {"Content-Type":"application/json"};
                const response = await axios.get(url, {headers:headers});
                if(response.data.ret === 'y') {
                    this.item = response.data.data;
                console.log(response);
                }
            }
        }  
    }
</script>

<style scoped>

    
</style>