<template>
  <div class="container1">
    <header>
    <h3>header</h3>
    </header>

    
    
    <div>
      <nav>
      <router-link to="/">홈화면</router-link> /
      <router-link to="login">로그인</router-link> /
      <router-link to="join">회원가입</router-link> /
      <router-link to="board">게시판</router-link> 
      </nav>
    </div>

    <router-view></router-view>

    <footer>
    <h3>footer</h3>
    </footer>
  </div>
</template>

<script>
export default {

}


</script>

<style>
@import './assets/css/mystyle1.css';
</style>
