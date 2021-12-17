
import { createWebHistory, createRouter } from "vue-router";

// 1. 사용할 컴포넌트를 import
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/Login.vue';
import Join from '@/components/Join.vue';
import Board from '@/components/Board.vue';
import Form from '@/components/Form.vue';
import Iris from '@/components/Iris.vue';
import Iris1 from '@/components/Iris1.vue';
import Exam10 from '@/components/Exam10.vue';
import Exam21 from '@/components/Exam21.vue';
import Admin from '@/components/Admin.vue';
import Titanic from '@/components/Titanic.vue';
import Table1 from '@/components/Table1.vue';
import Table2 from '@/components/Table2.vue';
import Table3 from '@/components/Table3.vue';

// 2. URL과 함께 사용할 컴포넌트 연결
const routes = [
    // localhost:8080
    { path:'/', name:"HelloWorld", component:HelloWorld },
    // localhost:8080/login
    { path:'/login', name:"Login", component:Login },
    // localhost:8080/join
    { path:'/join', name:"Join", component:Join },
    // localhost:8080/board
    { path:'/board', name:"Board", component:Board },
    // localhost:8080/form
    { path:'/form', name:"Form", component:Form, },
    { path:'/iris', name:"Iris", component:Iris, },
    { path:'/iris1', name:"Iris1", component:Iris1, },
    { path:'/exam10', name:"Exam10", component:Exam10, },
    { path:'/exam21', name:"Exam21", component:Exam21, },
    { path:'/admin', name:"Admin", component:Admin, },
    { path:'/titanic', name:"Titanic", component:Titanic, },
    { path:'/table1', name:"Table1", component:Table1, },
    { path:'/table2', name:"Table2", component:Table2, },
    { path:'/table3', name:"Table3", component:Table3, },
];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;

// 페이지가 늘어날 때마다 1,2번을 추가하면 된다. 1번 2번 동시에!!