<template>
    <div>
        <div class="container">
        <h3>회원가입</h3>
        <hr />
        <div class="mydiv1">
            <label class="lbl1">아이디</label>
            <input type="text" placeholder="아이디" v-model="userid" ref="userid" />
            <input type="button" value="중복확인" id="btnIdCheck" />
        </div>

        <div class="mydiv1">
            <label class="lbl1">암호</label>
            <input type="password" placeholder="암호" v-model="userpw" ref="userpw" />
        </div>

        <div class="mydiv1">
            <label class="lbl1">암호확인</label>
            <input type="password" placeholder="암호확인" v-model="userpw1" ref="userpw1" />
        </div>

        <div class="mydiv1">
            <label class="lbl1">이름</label>
            <input type="text" placeholder="이름" v-model="name" ref="name" />
        </div>
    
        <div class="mydiv1">
            <label class="lbl1">이메일</label>
            <input type="text" placeholder="이메일" v-model="email" ref="email" />
            <label>@</label>
            <select>
            <option>naver.com</option>
            <option>daum.net</option>
            <option>gmail.com</option>
            </select>
        </div>

        <div class="mydiv1">
            <label class="lbl1">약관동의</label>
            <input type="checkbox" v-model="chk" /><label>약관동의</label>
        </div>

        <div class="mydiv1">
            <label class="lbl1"></label>
            <input type="button" value="회원가입" id=btn1 @click="handleLogin" />
            <a href="login.html"><input type="button" value="로그인" /></a>
        </div>
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
                    if(this.userpw1 === ""){
                        alert('암호를 입력하세요.')
                        this.$refs.userpw1.focus();
                        return false;
                    }
                    if(this.userpw !== this.userpw1) {
                    alert('암호가 일치하지 않습니다.')
                    this.$refs.userpw1.focus();
                    return false;
                    }
                    if(this.name === ""){
                        alert('이름을 입력하세요.')
                        this.$refs.name.focus();
                        return false;
                    }
                    if(this.email === ""){
                        alert('이메일을 입력하세요.')
                        this.$refs.email.focus();
                        return false;
                    }
                    if(this.chk === ""){
                        alert('약관동의에 체크하세요.')
                        return false;
                    }
                }
            },

        // 상태변수의 변화를 감지
        watch : {
            userid : {
                handler(e){ 
                    console.log('watch=userid:', e);
                }
            },
        userpw : {
                handler(e){ 
                    console.log('watch=userpw:', e);
                }
            },
        userpw1 : {
            handler(e){ 
                console.log('watch=userpw1:', e);
            }
        },
        name : {
            handler(e){ 
                console.log('watch=name:', e);
            }
        },
        email : {
            handler(e){ 
                console.log('watch=email:', e);
            }
        },
        chk : {
            handler(e){ 
                console.log('watch=chk:', e);
            }
        },
        },         
        // 상태 (state 변수 설정)
        data() {
            return {
                userid : "",
                userpw : "",
                userpw1: "",
                name:"",
                email:"",
                chk:"",
            }
        }
    // 이 위치에서 백엔드로 값을 전송해서 로그인   
    }
</script>

<style scoped>
@import '../assets/css/mystyle1.css';
</style>