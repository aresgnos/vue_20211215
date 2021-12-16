<template>
    <div>
        <h3>일별 박스 오피스</h3>
        <h4>20120101~20120101</h4>
        <table>
            <thead>
                <tr>
                    <th>rank</th>
                    <th>movieCd</th>
                    <th>movieNm</th>
                    <th>openDt</th>
                    <th>salesShare</th>
                    <th>SalesAcc</th>
                    <th>audiCnt</th>
                    <th>scrnCnt</th>

                </tr>
            </thead>

            <tbody>
               <tr v-for="tmp in items" v-bind:key="tmp">
                    <td><input type="text" v-model="tmp.rank" /></td>
                    <td><input type="text" v-model="tmp.movieCd" /></td>
                    <td><input type="text" v-model="tmp.movieNm" /></td>
                    <td><input type="text" v-model="tmp.openDt" /></td>
                    <td><input type="text" v-model="tmp.salesShare" /></td>
                    <td><input type="text" v-model="tmp.salesAcc" /></td>
                    <td><input type="text" v-model="tmp.audiCnt" /></td>
                    <td><input type="text" v-model="tmp.scrnCnt" /></td>
                </tr>
            </tbody>
        </table>

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
                items:[],
            }
        },

        methods:{
            async handleData(){
                const url = "http://ihongss.com/json/exam21.json";
                const headers = { 'Content-type':'application/json' };
                const response = await axios.get(url, headers);
                
                console.log(response.data.boxOfficeResult.dailyBoxOfficeList);
                if(response.status === 200) {
                    this.items = (response.data.boxOfficeResult.dailyBoxOfficeList);
                }
            }
        }
    }
</script>

<style scoped>

</style>