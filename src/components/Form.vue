<template>
    <div>
        <h3>form 실습</h3>
        <hr />
        <input type="checkbox" v-model="chk1" />약관동의
        <label v-text="chk1"></label>
        <hr />

        <input type="checkbox" value="html" v-model="chk2" />html
        <input type="checkbox" value="css" v-model="chk2" />css
        <input type="checkbox" value="javascript" v-model="chk2" />javascript
        <input type="checkbox" value="vue" v-model="chk2" />vue
        <p v-text="chk2"></p>
        <hr />

        <select v-model="sel1">
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <p v-text="sel1"></p>
        <hr />

        <select v-model="sel2" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <p v-text="sel2"></p>
        <hr />

        <input type="radio" value="coffee" v-model="rad1" />coffee
        <input type="radio" value="tea" v-model="rad1" />tea
        <input type="radio" value="water" v-model="rad1" />water
        <p v-text="rad1"></p>
        <hr />

    </div>
</template>

/* 변수를 쓸 때 watch와 data return에서 기본값이 어떤지 주의 */

<script>
    export default {
        watch:{ //상태변수 값 변화 감지
            chk1 : {
                handler(e){
                    console.log('chk1', e);
                }
            },  //체크박스가 하나일 때는 true, false
            chk2 : {
                handler(e){
                    console.log('chk2', e);
                }
            }
        },
        data() { //상태변수 설정
            return {
                rad1 : 'coffee',
                sel2 : ['A','C'], /* 기본적으로 A,C를 선택하겠다 */
                sel1 : 'A', /* 기본적으로 A라는 값을 선택해놓으려면 'A' */
                chk1 : true, /* 체크박스가 하나일 때 : 값은 true, false로 전환 */
                chk2 : ["html","css"],  /* 체크박스가 여러개일 경우는 배열로 */
                
            }
        }
        
    }
</script>

<style scoped>

</style>