<template>
    <div>
        <h3>관리자페이지:컴포넌트이용</h3>
        <div>
        <input type="button" value="menu1" @click="changeMenu(1)" />
        <input type="button" value="menu2" @click="changeMenu(2)" />
        <input type="button" value="menu3" @click="changeMenu(3)" />
        <input type="button" value="menu4" @click="changeMenu(4)" />
        <input type="button" value="menu5" @click="changeMenu(5)" />
        </div>

        <div>
            <component :is="currentComp"></component>
            <!-- currentComp = 변수명 -->
        </div>
    
    </div>
       
</template>

<script>
    // 필요한 컴포넌트 가져오기
    import Menu1 from './admin/Menu1.vue';
    import Menu2 from './admin/Menu2.vue';
    import Menu3 from './admin/Menu3.vue';
    import Menu4 from './admin/Menu4.vue';
    import Menu5 from './admin/Menu5.vue';

    export default {
        
        // 컴포넌트 등록
        components:{
            'menu-1' : Menu1,
            'menu-2' : Menu2,
            'menu-3' : Menu3,
            'menu-4' : Menu4,
            'menu-5' : Menu5,
        },

        // 상태변수
        data(){
            return{
                compList : [null, 'menu-1','menu-2','menu-3', 'menu-4', 'menu-5'],
                currentComp : 'menu-1' // 초기값
            }
        },

        // 메소드
        methods:{
            changeMenu(no){
                this.currentComp = this.compList[no];
            }
        }
    }
</script>

<style scoped>

</style>