<template>
    <div>
        <h3>Iris 실습</h3>
        <table border="1">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>꽃받침 길이</th>
                    <th>꽃받침 너비</th>
                    <th>꽃잎 길이</th>
                    <th>꽃잎 너비</th>
                    <th>꽃의 품종</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(tmp, idx) in items" v-bind:key="tmp">
                    <td>{{ (idx+1) }}</td>
                    <td>
                    <!--   localhost:8080/iris1?no=34 -->
                        <router-link :to="{
                            path:'/iris1', 
                            query:{no:(idx+1), key:'asdf', name:'def'}
                        }">
                    <!-- => //localhost:8080/iris1?no=1&key=asdf&name=def의 주소가 만들어짐
                            무슨 번호를 눌러서 왔는지 알 수 있다. -->
                            {{tmp.sepalLength}}
                        </router-link>
                    </td>
                    <td>{{tmp.sepalWidth}}</td>
                    <td>{{tmp.petalLength}}</td>
                    <td>{{tmp.petalWidth}}</td>
                    <td v-text="tmp.species"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        created() { //life cycle생명주기
            this.handleIris(); //메소드 호출하기

        },
        data() { //state변수
            return{
                items : [],
            }
        },
        methods:{ //메소드(함수)
            async handleIris() {
                // 백엔드의 서버 주소
                const url = 'https://raw.githubusercontent.com/domoritz/maps/master/data/iris.json'
                
                // 호출하는 데이터의 종류가 json  헤드 정의
                const headers = { 'Content-type':'application/json' };

                // 호출하기
                const response = await axios.get(url, headers);

                //결과값 확인하기
                console.log(response);
                if(response.status === 200){
                    this.items = response.data;
                    //[{},{},...{150개}]
                    console.log(this.items); //데이터가 잘 들어갔는지 확인
                }

            }
        }
    }
</script>
    

<style scoped>

</style>