<template>
    <div>

        <el-row :gutter="20" v-for="tmp in items.length/cnt" :key="tmp" style="margin-top:30px">
            <el-col :span="6" v-for="tmp1 in cnt" :key="tmp1">
                <el-image :src="items[(tmp-1)*cnt+(tmp1-1)].img" style="cursor:pointer" @click="handleOrder( items[(tmp-1)*cnt+(tmp1-1)].code)" />  
                <p>물품명 : {{ items[(tmp-1)*cnt+(tmp1-1)].name }}</p>
                <p>가격 : {{ items[(tmp-1)*cnt+(tmp1-1)].price }}</p>
                <p>수량 : {{ items[(tmp-1)*cnt+(tmp1-1)].qty }}</p>
            </el-col>
        </el-row>

        <!-- <div v-for="tmp in items" :key="tmp.code"
        style="display:inline-block; padding:20px;">
            <img :src="tmp.img" style="width:100px" />
            <p>{{tmp.name}}</p>
            <p>{{tmp.price}}</p>
        </div>
        <br /> -->
    </div>
</template>

<script>

    export default {
        created() {
            this.handleData();
        },

        data(){
            return{
                items: [],
                cnt: 4,
            }    
        },

        methods : {
            handleOrder(code) {
                console.log("Shop.vue => handleOrder", code);
                
                // 주문페이지로 이동
                // path로 사용할 경우 query로 전달, params는 전달 안됨
                // name 사용할 경우 query로 전달, params도 전달됨 (권장)
                // query는 주소창에 정보가 표시
                // params는 주소창에 정보가 표시되지 않음(데이터가 한번만 옴, 받았을 때 한번)
                // params는 중요한 정보일 때
                this.$router.push({
                    name : 'Order',
                    // = path:'/order',
                    query : {icode :code},
                    params : { key : '숨김정보'}
                });
            },

            handleData() {
                for(let i=0; i<12; i++){ // 0 1 2 ~ 11
                    this.items.push({
                        code : (i+1),
                        name : '사과' + i,
                        price : 1000 + i,
                        qty : 1000 - i,
                        img : 'https://picsum.photos/500/300?image='+(1+i)
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>