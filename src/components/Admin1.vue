<template>
    <div>
        <h3>관리자페이지:컴포넌트이용</h3>
        <div>
        <input type="button" value="menu1" @click="changeMenu(1)" />
        <input type="button" value="menu2" @click="changeMenu(2)"/>
        <input type="button" value="menu3" @click="changeMenu(3)" />
        </div>

        <div>
            <h5>v-if를 사용한 예제</h5>
            <menu-1 v-if="menu===1"></menu-1>
            <menu-2 v-if="menu===2"></menu-2>
            <menu-3 v-if="menu===3"></menu-3>
        </div>
        <hr >

        <div>
            <h5>components 태그 사용 예제</h5>
            <component :is="currentComp"></component>

            <!-- currentComp = 변수명 -->
        </div>
        <hr />

        <div>
            <h5>component 추가/삭제</h5>
           <component v-for="item in compItems" 
                v-bind:key="item"
                :is="item"></component>

            <input type="button" value="컴포넌트추가" @click=handleComp(1) />
            <input type="button" value="컴포넌트삭제" @click=handleComp(2) />
        </div>
    
    
    </div>
       
</template>

<script>
    // 필요한 컴포넌트 가져오기
    import Menu1 from './admin/Menu1.vue';
    import Menu2 from './admin/Menu2.vue';
    import Menu3 from './admin/Menu3.vue';

    export default {
        
        // 컴포넌트 등록
        components:{
            'menu-1' : Menu1,
            'menu-2' : Menu2,
            'menu-3' : Menu3,
        },

        // 상태변수
        data(){
            return{
                compItems : ['menu-3', 'menu-3', 'menu-3'],
                currentComp : 'menu-1',
                compList : [null, 'menu-1','menu-2','menu-3'],
                menu : 1
            }
        },

        // 메소드
        methods:{
            changeMenu(no){
                this.menu = no;
                this.currentComp = this.compList[no];
            },

            handleComp(no){
                if (no === 1){
                    this.compItems.push('menu-3');
                }
                else if(no === 2){
                    this.compItems.pop();
                }
            }
        }
    }
</script>

<style scoped>

</style>