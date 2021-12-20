<template>

    <div class="container">
        <h3>회원가입</h3>
        <hr />

        <div style="width : 800px; padding:20px;">
            <el-form label-width="120px">
            
                <el-form :inline="true" label-width="120px">
                    <el-form-item  label="아이디">
                        <el-input v-model="userid"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button type="primary">중복확인</el-button>
                    </el-form-item>
                </el-form>    


                <el-form-item label="암호">
                        <el-input v-model="userpw" show-password></el-input>
                </el-form-item>

                <el-form-item label="암호확인">
                        <el-input v-model="userpw1" show-password></el-input>
                </el-form-item>

                <el-form-item label="이름">
                        <el-input v-model="name"></el-input>
                </el-form-item>



                <el-form  :inline="true" label-width="120px">
                    <el-form-item label="이메일">
                        <el-input v-model="email"></el-input>
                    </el-form-item>

                    <el-form-item label="">
                        <label>@</label>
                    </el-form-item>    

                    <el-form-item label="">
                        <el-select v-model="value" placeholder="Select">
                            <el-option>
                            <v-for="options" :key="tmp"
                            :label="options.label"
                            :value="options.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>    



                <el-form-item label="">
                    <el-checkbox v-model="chk" label="약관동의">
                </el-checkbox>
                </el-form-item>

                <el-form-item label="">
                <el-button type="primary" @click="handleLogin">회원가입</el-button>
                <el-button type="primary">로그인</el-button>
                </el-form-item>
            

            </el-form>
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
    
                options: [
                    { value: 'Option1', label: 'hanmail.net',},
                    { value: 'Option2', label: 'Option2',},
                    { value: 'Option3', label: 'Option3',},
                    { value: 'Option4', label: 'Option4',},
                    { value: 'Option5', label: 'Option5',} , 
                ],
                value:''
                
    }
  },
            
       
    // 이 위치에서 백엔드로 값을 전송해서 로그인   
    }
</script>

<style>

</style>