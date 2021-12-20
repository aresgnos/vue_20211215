<template>
    <div>
        <h3>CompProp 예제</h3>
        <Comp1 :num1="age" :str1="name" @addNum1="addNum1()"></Comp1>
        <hr />
        <Comp1 :num1="age+20" :str1="name+'aaa'" @addNum1="addNum1()"></Comp1>
        <!-- comp-1=Comp1 -->
        <hr />
        <Comp2 :n1="age+50" :s1="name+'송세라'" :k1="name+'배고파'" @subNum1="subNum1()"></Comp2>
    </div>
</template>

<script>
    import Comp1 from './comp/Comp1.vue';
    import Comp2 from './comp/Comp2.vue';

    export default {
        methods:{
            addNum1(){
                this.age++;
                //this.age = this.age + 1; 와 같음
            },
            subNum1(){
                this.age--;
            },
        },
        // 사용할 컴포넌트 등록
        components:{
            Comp1,
            Comp2,
        },
        //'comp-1 : Comp1 = Comp1
        //상태변수
        data(){
            return {
                name : '가나다',
                age : 23,
            }
        }
    }
</script>

<style scoped>

</style>