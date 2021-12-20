<template>
    <div>
        <h4>Comp1 컴포넌트</h4>
        <p>{{ str1 }}</p>
        <p>{{ num1 }}</p>
        <input type="button" value="num1의 값증가" @click="handleNum1()" />

    </div>
</template>

<script>
    export default {
        // 생명주기
        created(){

            
        },
        mounted(){


        },

        // props 변수 : 부모컴포넌트에서 전달되는 값
        props : {
            str1 : {
                type : String,
                default : ''
            },
            num1 : {
                type : Number,
                default : 0
            }

        },
        // 상태변수
        data(){
            return {

            }
        },
       
       // 메소드
        methods:{
            handleNum1() {
                console.log('Comp1.vue=>handleNum1');

                //컴포넌트를 사용했던 부모의 이벤트를 호출함.
                this.$emit('addNum1');
            }

        },

        // 리턴 값이 있는 메소드
        computed:{

        }
    }
</script>

<style scoped>

</style>