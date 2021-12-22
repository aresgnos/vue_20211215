<template>
    <div>
        <h3>Board1.vue</h3>

    <el-table :data="items" style="width: 100%"
    @row-click="rowClick">
        <el-table-column prop="no" label="글번호" width="180" />
        <el-table-column prop="title" label="제목" width="180" />
        <el-table-column prop="writer" label="작성자" />
        <el-table-column prop="hit" label="조회수" />
        <el-table-column prop="regdate" label="날짜" />
    </el-table>

    <el-pagination layout="prev, pager, next" :total="500"
    @current-change="currentChange"></el-pagination>

    </div>
</template>

<script>
import axios from 'axios';

    export default {
        created(){
            this.handleData();

        },
        data(){
            return{
                items : [],
                page : 1, // 기본값, 변수로 만듦

            }
        },
        methods:{

            rowClick(row){
                console.log('Board1.vue => rowClick', row);
                this.$router.push({
                    name :'Board1One',
                    query : {no : row.no}
                });
            },

            currentChange(page){
                console.log('Board1.vue => currentChange', page);

                this.page = page;
                this.handleData();
            },

            async handleData(){
                const url = `http://ihongss.com/json/board.json?page=${this.page}`;
                const headers = {"Content-Type":"application/json"};

                const response = await axios.get(url, {headers:headers});
                //response.data => {ret: 'y' , data : Arry(10)}
                if(response.data.ret === 'y') {
                    this.items = response.data.data;
                }
                console.log(response);
            }
        }
    }

</script>

<style scoped>

</style>