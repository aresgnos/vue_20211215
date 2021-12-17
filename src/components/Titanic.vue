<template>
    <div>
        <h3>Tatanic Survivors</h3>
        <table border="1">
            <thead>
             <tr>
                <td v-for="tmp in fields" v-bind:key="tmp">
                    {{tmp.name}}
                </td>
            </tr>
            </thead>


        
            <tbody>
                <tr v-for="tmp in items1" v-bind:key="tmp">
                    <td v-for="tmp1 in 7" v-bind:key="tmp1">
                        {{ tmp[tmp1-1] }}
                        <!-- tmp[0], tmp[1], tmp[2], ... tmp[6] -->
                    </td>
                </tr>

                <tr v-for="tmp in items2" v-bind:key="tmp">
                    <td v-for="tmp2 in 7" v-bind:key="tmp2">
                        {{ tmp[tmp2-1] }}
                    </td>
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
               fields : [],
               items1 : [],
               items2 : [],
            }
        },

        methods:{
            async handleData(){
                const url ='https://raw.githubusercontent.com/IBM/taxinomitis/master/resources/datasets/numbers/titanic.json'
                const headers = { 'Content-type':'application/json' };
                const response = await axios.get(url, headers);
               
                if(response.status === 200) {
                    this.fields = response.data.metadata.fields;
                    this.items1 = response.data.data.survived;
                    this.items2 = response.data.data.did_not_survive;
                    
                    //[{},{},{},{},{},{}]
                    console.log(this.fields)
                    console.log(this.items1)
                    console.log(this.items2)
                }
            }
        }
    }
</script>

<style scoped>

</style>