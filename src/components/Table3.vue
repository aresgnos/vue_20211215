<template>
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>숫자1</th>
                    <th>숫자2</th>
                    <th>숫자3</th>
                    <th>결과</th>
                    <th>버튼</th>
                </tr>
            </thead>
            
            <tbody>
                <tr v-for="(tmp, idx) in items" v-bind:key="tmp">
                    <td>{{tmp.no}}</td>
                    <td>{{tmp.num1}}</td>
                    <td>{{tmp.num2}}</td>
                    <td>{{tmp.num3}}</td>
                    <td>{{tmp.total}}</td>
                    <td>
                        <input type="button" value="+" @click="handlePlus(idx)" />
                        <input type="button" value="-" @click="handleMinus(idx)" />
                        <input type="button" value="*" @click="handleMul(idx)" />
                        <input type="button" value="/" @click="handleDiv(idx)" />
                    </td>   
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        created(){
            //백엔드로부터 데이터를 받을 때 (한번만 받을경우는 여기다 써도 됨)
            this.items = [
                { no:1, num1:3, num2:3, num3:34 },
                { no:1, num1:3, num2:3, num3:34 },
                { no:1, num1:3, num2:3, num3:34 },
            ];

            for(let tmp of this.items){
                tmp['total'] =0;
            }
        },
        data(){
            return {
                items:[],
            }
        },
        methods:{
            handlePlus(idx){
                console.log("Table3.vue => handlePlus", idx);
                this.items[idx]['total']=
                    this.items[idx].num1 +
                    this.items[idx].num2 +
                    this.items[idx].num3;         
            },
            
            handleMinus(idx){
                this.items[idx]['total']=
                    this.items[idx].num1 -
                    this.items[idx].num2 -
                    this.items[idx].num3;     
            },

            handleMul(idx){
                this.items[idx]['total']=
                    this.items[idx].num1 *
                    this.items[idx].num2 *
                    this.items[idx].num3;     
            },

            handleDiv(idx){
                this.items[idx]['total']=
                    this.items[idx].num1 /
                    this.items[idx].num2 /
                    this.items[idx].num3;     
            },
        }
    }

    // 테이블로 표시
    //번호1, 숫자1, 숫자2, 숫자3, 결과, 버튼
    //  1      3     3     34     ??    [더하기, 곱하기, 나누기, 빼기]
     
</script>

<style scoped>

</style>