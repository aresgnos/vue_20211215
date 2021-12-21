<template>
    <div>
        <h3>admin/Menu5.vue</h3>
        <el-table :data="items" size="mini" style="width: 100%">
            <el-table-column prop="userid" label="아이디" width="180" />
            <el-table-column prop="username" label="이름" width="180" />
            <el-table-column prop="userage" label="나이" />
            <el-table-column label="버튼">
                <!-- <slot name="default"></slot> -->
                <template #default="scope">
                    <el-button size="mini" type="info">수정</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">삭제</el-button>
                </template>
            </el-table-column>    
        </el-table>

        <el-dialog v-model="dialogVisible" title="삭제알림" width="30%">
            <span>정말 삭제하시겠습니까??</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="handleDeleteAction()">삭제</el-button>
                    <el-button @click="dialogVisible=false">취소</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        created() {
            this.handleData();
        },

        data(){
            return{
                items : [],
                dialogVisible : false,
                idx : -1, // 삭제 버튼 누를 때 임시로 보관되는 변수
            }
        },
        
        // 자동으로 호출되지 않음
        methods:{
            // 다이얼로그 표시
            handleDelete(idx){
                console.log("Menu5.vue => handleDelete", idx);
                this.dialogVisible = true;
                this.idx = idx;
            },
               
                // let tmpItem = [];
                // for(let i=0;i<this.items.length; i++){
                //     if(i !== idx){
                //         tmpItem.push(this.items[i]);
                //     }
                // }
                // this.items = tmpItem;

                // let arr = [];
                // arr.push({id:'a',name:'b'}); //배열에 추가
                // arr.pop() // 배열에서 제거(뒤에서부터)
                // arr.splice(4, 1); // 배열에서 제거(위치, 개수)
                
                // 데이터 삭제하기
                // 새로운 변수에 삭제하는 항목을 제외하고 복사
                // 새로운 변수 값을 items에 넣음


            //실제 삭제 수행시 삭제하는 idx를 알 수 없음
             handleDeleteAction(){
                console.log("Menu5.vue => handleDeleteAction");

                let tmpItem = [];
                for(let i=0;i<this.items.length; i++){
                    if(i !== this.idx){
                        tmpItem.push(this.items[i]);
                    }
                }
                this.items = tmpItem;

                this.dialogVisible = false;
             },

            // 백엔드로부터 데이터 받음 
            handleData(){
                this.items = [
                    {userid : 'a', username : 'b', userage:34},
                    {userid : 'b', username : 'b', userage:24},
                    {userid : 'c', username : 'b', userage:64},
                    {userid : 'd', username : 'b', userage:84},
                    {userid : 'e', username : 'b', userage:94}
                ];
                
                
            }
        }
    }
</script>

<style scoped>

</style>