<template>
    <div>
        <h3>Iris의 상세내용예시</h3>
        <p>{{ no }}</p>
        <p>{{ key }}</p>
        <p>{{ name }}</p>
        {{ $route.query.name }}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                no : this.$route.query.no, 
                key : this.$route.query.key ,
                name : this.$route.query.name , /* 주소의 ? 값 받기 */
            }
        }
    }
</script>

<style scoped>

</style>