<template>
    <div>
        <h4>메뉴2</h4>
        <h5>물품관리</h5>

        <!-- <tr v-for="scope.row in items" v-bind:key="scope.row"> -->

        <el-table :data="items" size="mini" style="width: 100%">
            <el-table-column label="아이디">
                <template #default="scope">     <!--items=scope, scope.row.id=tmp -->
                    <el-input size="mini" type="text" v-model="scope.row.id" />
                </template>
            </el-table-column>

            <el-table-column label="이름">
                <template #default="scope">    
                    <el-input size="mini" type="text" v-model="scope.row.name" />
                </template>
            </el-table-column>

            <el-table-column label="나이">
                <template #default="scope">     
                    <el-input size="mini" type="text" v-model="scope.row.age" />
                </template>
            </el-table-column> 
        </el-table>

        <!-- <table>
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>나이</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tmp in items" v-bind:key="tmp">
                    <td><input type="text" v-model="tmp.id" /></td>
                    <td><input type="text" v-model="tmp.name" /></td>
                    <td><input type="text" v-model="tmp.age" /></td>
                </tr>
            </tbody>
            </table> -->

       <el-button type="primary">일괄수정</el-button>

    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        created(){
            this.handleItem();
        },

        data(){
            return {
                items : [],                
            }
        },

        methods:{
            
                async handleItem() {
                const url = "http://ihongss.com/json/exam13.json";
                const headers = { 'Content-type':'application/json' };
                const response = await axios.get(url, headers);
                
                // 결과값 확인하기
                console.log(response);
                if(response.status === 200) {
                    this.items = response.data.data;
            }   
        }
    }
}
</script>

<style scoped>

</style>