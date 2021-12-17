<template>
    <div class="container">
        <table border="1">
            <thead>
                <tr>
                    <th>체크</th>
                    <th>아이디</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>할인율</th>
                    <th>합계</th>
                </tr>
            </thead>
            
            <tbody>
                <tr v-for="(tmp,idx) in items" v-bind:key="tmp">
                    <td><input type="checkbox" v-model="tmp.chk" /></td>
                    <td>{{tmp.id}}</td>
                    <td>{{tmp.price}}</td>
                    <td>
                        <select v-model="tmp.selcount" @change="handleCheck(idx)">
                            <option v-for="tmp1 in tmp.count" v-bind:key="tmp1">
                                {{tmp1}}
                            </option>
                        </select>
                    </td>
                    <td>{{tmp.discountrate}}</td>
                    <td>{{tmp.total}}</td>
                </tr>
            </tbody>
        </table>

        
        <div style= "margin-top:20px; margin-bottom:20px">
            <input type="button" value="삭제" @click="handleDelete()" />
            <input type="button" value="복사" @click="handleCopy()" />
            <input type="button" value="이동" @click="handleMove()" />
        </div>
    
           <table border="1">
            <thead>
                <tr>
                    <th>체크</th>
                    <th>아이디</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>할인율</th>                    
                    <th>합계</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tmp,idx) in items1" v-bind:key="tmp">
                    <td><input type="checkbox" v-model="tmp.chk" /></td>
                    <td>{{tmp.id}}</td>
                    <td>{{tmp.price}}</td>
                    <td>
                        <select v-model="tmp.selcount" @change="handleCheck(idx)">
                            <option v-for="tmp1 in tmp.count" v-bind:key="tmp1">
                                {{tmp1}}
                            </option>
                        </select>
                    </td>
                    <td>{{tmp.discountrate}}</td>
                    <td>{{tmp.total}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        created(){
            this.handleData();
        },

        //리턴값이 있는 계산
        computed : {
            },

        //상태변수
        data(){
            return {
                items : [],
                items1 : [],
            }
        },


        //메소드
        methods : {
            
            //기존에 3개 있는 것 중에서 false인 것 찾아서
            //itemTemp로 복사함
            //itemTemp값을 items로 변경
            handleDelete(){
                let itemTemp = [];
                for (let tmp of this.items){
                    if(tmp.chk === false){
                        itemTemp.push(tmp);
                    }
                }
                console.log(itemTemp);
                this.items = itemTemp;
            },

            handleCopy(){
                let itemTemp = [];
                for (let tmp of this.items){
                    if(tmp.chk === true){
                        itemTemp.push( Object.create( tmp ) );
                    }
                }
                console.log(itemTemp);
                this.items1 = itemTemp;
            },

            handleMove(){
                let itemTemp = [];
                
                for (let tmp of this.items){
                    // 밑에 테이블에 추가하기
                    if(tmp.chk === true){
                        this.items1.push( Object.create( tmp ) );
                    }
                    else{ //위에 테이블 변경할 항목 저장
                        itemTemp.push( Object.create( tmp ) );
                    }
                }
                //위에 테이블 변경
                this.item = itemTemp;
            },

            // 데이터 받기
            handleData(){
                this.items = [
                    { id:'a1', price:90, count:7, discountrate:10 },
                    { id:'a2', price:1990, count:5, discountrate:15 },
                    { id:'a4', price:2300, count:4, discountrate:17 },
                ];

                for(let tmp of this.items){
                    tmp.chk = false;
                    tmp['selcount'] = 1;
                    // = tmp.selcount = 1'
                    tmp['total'] =
                        tmp.selcount * tmp.price * (100 - tmp.discountrate)/100;

                    tmp.total = Math.round (tmp.total);
                }
                //처음 받은 값(4) + 추가(2) = 6개의 키
                //{id, price, count, discountrate, selcount, total, chk}
                console.log(this.items);
            },

            handleCheck(idx){
                console.log(typeof this.items[idx].selcount );
                console.log('Table2.vue => handleCheck', idx);

                this.items[idx].total
                = this.items[idx].selcount
                    * this.items[idx].price
                    * (100-this.items[idx].discountrate)/100;

                this.items[idx].total = Math.round(this.items[idx].total);
            },
        }
    }

            //테이블로 화면 만들기
            //count select로
            //select가 선택되면 total = price * 선택된 수량 * (100-discountrate)/100;
</script>

//[ {id: }, {id: }, {id: }, {id: } ]
// for (let tmp of this.items){
    tmp['필요한 키값'] = 20;
} // 반복문 돌리기

<style scoped>

</style>