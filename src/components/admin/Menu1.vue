<template>
    <div>
        <h4>메뉴1</h4>
        <h5>물품등록</h5>

        <el-table :data="code" size="mini" style="width: 100%">
            <el-table-column label="아이디">
                <template #default="tmp">     <!--items=scope, scope.row.id=tmp -->
                    <el-input size="mini" type="text" v-model="code[tmp]" />
                </template>
            </el-table-column>
        </el-table>
     



            <input type="button" @click="addCount" value="항목추가" />
            <input type="button" @click="subCount" value="항목삭제" />
            
            {{ code }}
            {{ name }}
            {{ price }}
            {{ quantity }}
            <table>
                <tbody>
                    <tr v-for="tmp in count" v-bind:key="tmp">
                        <td>{{ tmp }}</td>
                        <td><input type="text" v-model="code[tmp]" placeholder="물품코드" /></td>
                        <td><input type="text" v-model="name[tmp]" placeholder="물품명" /></td>
                        <td><input type="text" v-model="price[tmp]" placeholder="가격" /></td>
                        <td><input type="text" v-model="quantity[tmp]" placeholder="판매수량" /></td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
    export default {
        
        data(){
            return {
                count : 5,
                code : [],
                name : [],
                price : [],
                quantity : []
            }
        },

       methods:{
           addCount(){
                //this.count = this.count + 1; 를 줄여서 아랫것
                this.count++;
                if(this.count > 10) {
                    this.count = 10;
                }
            }, 
            //카운트
            subCount(){
                this.count--; //감소시킴
                if(this.count < 1){
                    this.count = 1; //줄일 때 최소 1개
                } 
            },
       }   
        
    }
</script>

<style scoped>

</style>