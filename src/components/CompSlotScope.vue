<template>
    <div>
        <h4>부모 : CompSlotScope.vue</h4>

        <comp-4 :data="title">
            <template #tag1="slotProps">
                {{slotProps.user.firstname}}<br />
                {{slotProps.user.lastname}}<br />
                <!-- 특정 위치에서 데이터를 꺼내기 위해서 쓴다. -->
                
                <span>***@$%$%^$#%^전달되어 표시되는 태그들~~~</span>
                <br />
            </template>
        </comp-4>
    </div>
</template>

<script>
    // 1. import하기
    import Comp4 from './comp/Comp4.vue'
    export default {
            // 2. components 등록
            components:{
                Comp4,
            },
            // 상태변수
            data(){
                return{
                    title : '송세라'
                }
            }
        }
</script>

<style scoped>

</style>