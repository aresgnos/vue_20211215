<template>
    <div>
        <h4>Comp2 컴포넌트</h4>
        <span>{{ s1 }}</span>
        <span v-text="n1"></span>
        <span v-text="k1"></span>
        <input type="button" value="num1의 값감소" @click="handleNum1()" />
    </div>
</template>

<script>
    export default {
        // 사용을 하게 되는 부모컴포넌트에서 전달되는 값
        props : {
            s1 : {
                type : String,
                default : ''
            },
            n1 : {
                type : Number,
                default : 0
            },
            k1 : {
                type : String,
                default : ''
            },

        },

         methods:{
            handleNum1() {
                console.log('Comp2.vue=>handleNum1');

                //컴포넌트를 사용했던 부모의 이벤트를 호출함.
                this.$emit('subNum1');
            }

        },

    }
</script>

<style scoped>

</style>