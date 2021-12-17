<template>
    <div>
        <h3>주문목록</h3>
        <table border="1">
            <thead>
                <tr>
                    <th>체크</th>
                    <th>아이디</th>
                    <th>나이</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>합계</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(tmp, idx) in items" v-bind:key="tmp">
                    <td>
                        <input type="checkbox" v-model="tmp.chk" 
                            @change="handleCheck(idx)" />
                    </td>
                    <td>{{ tmp.id }}</td>
                    <td>{{ tmp.age }}</td>
                    <td>{{ tmp.price }}</td>
                    <td>
                        {{tmp.cnt1}}
                        <select v-model="tmp.cnt1" @change="handleCheck(idx)">
                            <option v-for="tmp1 in tmp.cnt" v-bind:key="tmp1">
                                {{tmp1}}
                            </option>    
                        </select>    
                    </td>
                    <td>{{ tmp.sum }}</td>
                </tr>

                <tr>
                    <td colspan="2">합계</td>
                    <td>{{ sumAge }}</td>
                    <td>{{ sumPrice }}</td>
                    <td></td>
                    <td>{{ sumTotal }}</td>
                </tr>

            </tbody>    
        </table>    
    </div>
</template>

<script>
    export default {
        // 생명주기(자동호출)
        created(){
            this.handleData();
        },
        mounted(){

        },

        // 미리계산 (리턴값)
        computed : {
            sumAge() {
                let sum = 0;
                for(let tmp of this.items ) {
                    sum += tmp.age;
                }
                return sum;
            },

            sumPrice() {
                let sum = 0;
                for(let tmp of this.items ) {
                    sum += tmp.price;
                }
                return sum;
            },

            sumTotal() {
                let sum = 0;
                for(let tmp of this.items ) {
                    sum += tmp.sum;
                }
                return sum;
            }, 
        },

        // 상태변수
        data() {
            return {
                items : [],
            }
        },

        // 메소드, 함수
        methods : {
            handleCheck(idx){
                console.log('Table1.vue => handleCheck', idx);
                if( this.items[idx].chk === true ){
                    this.items[idx].sum = 
                        this.items[idx].price * this.items[idx].cnt1;
                }
                else {
                    this.items[idx].sum = 0;
                }
            },

            async handleData(){
                // 벡엔드로 부터 데이터를 받았다고 가정
                this.items = [
                    { id:'a1', age:34, price:123, cnt:20 },
                    { id:'a2', age:25, price:130, cnt:2 },
                    { id:'a3', age:54, price:223, cnt:8 },
                    { id:'a4', age:74, price:23,  cnt:77 },
                    { id:'a5', age:24, price:13,  cnt:19 },
                ];

                //for 배열 번호 반복 0 1 2 3 4
                for(let i=0; i<this.items.length; i++){
                    this.items[i]['chk'] = false;  
                    this.items[i]['sum'] = 0; 
                    this.items[i]['cnt1'] = 1;
                }

                //forEach 배열내의 내용을 1개씩 복사
                //for(let tmp of this.items) {
                //    tmp['chk'] = false;
                //}

                // 벡엔드에서 받은 값 출력 [{},{},{},{},{}]
                console.log(this.items);
            }
        }
    }
</script>

<style scoped>

</style>

