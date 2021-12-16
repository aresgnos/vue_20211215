<template>
    <div>
        <h3>T a t n i c</h3>
        <table>
             <tr>
                <td v-for="tmp in items.fields" v-bind:key="tmp">
                    {{tmp.name}}
                </td>
                <td v-for="tmp in items.survived" v-bind:key="tmp">
                    {{tmp.}}
                </td>
            
            </tr>
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
                const url ='https://raw.githubusercontent.com/IBM/taxinomitis/master/resources/datasets/numbers/titanic.json'
                const headers = { 'Content-type':'application/json' };
                const response = await axios.get(url, headers);
               
                console.log(response);
                if(response.status === 200) {
                    this.items = response.data.metadata;
                    console.log(response.data.metadata);
                }
                console.log(response);
                if(response.status === 200) {
                    this.items = response.data.data;
                    console.log(response.data.data);
                }
                
            }
        }
    }
</script>

<style scoped>

</style>