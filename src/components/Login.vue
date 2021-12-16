<template>

    <div class="container">
        <h3>로그인</h3>
        <hr />

        <!-- {{ userid }} <br />
        {{ userpw }} <br />
         -->
        <div class="mydiv1">
        <label class="lbl1">아이디</label>
        <input type="text" v-model="member.userid" ref="userid" />
        </div>

        <div class="mydiv1">
        <label class="lbl1">암호</label>
        <input type="password" v-model="member.userpw" ref="userpw" />
        </div>

        <div class="mydiv1">
        <label class="btn"></label>
        <input type="button" value="로그인" id="btn1" @click="handleLogin" />
        </div>
        
    </div>
</template>

<script>
    export default {
        // 메소드 == 함수 == 기능구현
            methods : {
                handleLogin(){
                    if(this.userid ===""){
                        alert('아이디를 입력하세요.');
                        this.$refs.userid.focus();
                        return false;
                    }
                    if(this.userpw === ""){
                        alert('암호를 입력하세요.')
                        this.$refs.userpw.focus();
                        return false;
                    }
                }
            },

        // 상태변수의 변화를 감지
        watch : {
            // userid : {
            //     handler(e){ 
            //         console.log('watch=userid:', e);

            //     }
            // },
            // userpw : {
            //     handler(e){ 
            //         console.log('watch=userpw:', e);

            //     }
            // },
            member : {
                handler(e){
                    console.log('watch=member:', e);
                }
            }
        },         
        // 상태 (state 변수 설정)
        data() {
            return {
                // userid : 'aaa',
                // userpw : 'bbb',
                member : {
                     userid : 'aaa',
                     userpw : 'bbb',
                } //위에 것을 member 하나로 묶어서 던진다.
            }
        }
    // 이 위치에서 백엔드로 값을 전송해서 로그인   
    }
</script>


<style scoped>
@import '../assets/css/mystyle1.css';

</style>