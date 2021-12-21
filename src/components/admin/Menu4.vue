<template>
    <div>
        <h4>이미지 여러개 첨부</h4>
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이미지</th>
                    <th>상품명</th>
                    <th>가격</th>
                    <th>판매수량</th>
                </tr>
            </thead>

            <tbody>
                <!-- idx를 넣어줘야 각각 따로 움직인다. -->
                <tr v-for="(tmp, idx) in count" :key="tmp">
                    <td>{{tmp}}</td>
                    <td>
                        <input type="file" ref="file" style="display:none;"
                        @change="handleImg($event, idx)" /> 
                        <!-- e(위치)도 가고 idx도 간다. -->
                        <img :src="imgsrc[idx]" @click="handleFile(idx)"
                            style="width:40px; cursor:pointer;" />
                    </td>
                    <td><input type="text" v-model="itemname[idx]" placeholder="상품명" /></td>
                    <td><input type="text" v-model="itemprice[idx]" placeholder="가격" /></td>
                    <td><input type="text" v-model="itemqty[idx]" placeholder="수량" /></td>
                </tr>
            </tbody>
        </table>
        <input type="button" ref="btn1" value="항목추가" />
        <input type="button" value="항목삭제" />
        <input type="button" value="일괄등록" />  
    </div>
</template>

<script>
    export default {

        methods: {
            handleImg(e, idx) {
                console.log("Menu4.vue => handleImg", e, idx);

                let self = this; 
                if(e.target.files[0]) { // 이미지 읽기
                    const reader = new FileReader();
                    reader.addEventListener('load', function(e1) {
                        self.imgsrc[idx] = e1.target.result;
                    });
                    reader.readAsDataURL(e.target.files[0]);
                }
            },

            handleFile(idx) {
                console.log("Menu4.vue => handleFile", idx); 
                console.log(this.$refs.btn1); // ref="btn1" 한번
                console.log(this.$refs.file); // ref="file" 배열

                // this.$refs.btn1.click(); // 한개 클릭시
                this.$refs.file[idx].click(); // idx를 이용하여 배열 [idx]
            }
        },

        created(){
            for(let i=0;i<this.count;i++){ // 0 1 2 3 4 
                this.imgsrc.push(
                    require('../../assets/img/default.jpg') );
            }
        },

        data() {
            return {
                /* 항목의 개수 기본값 : 5 */
                count : 5,

                /* defalut 이미지 설정 */
                imgsrc : [],

                /* v-model로 연결 */
                itemname : [],
                itemprice :[],
                itemqty: [],

            }
        }
    }
</script>

<style scoped>

</style>