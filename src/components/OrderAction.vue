<template>
    <div>

    </div>
</template>

<script>
    import { ElMessageBox } from 'element-plus'
        // 이쪽 컴포넌트로 와서 주문처리 후 다시 다른 페이지로 이동
        // 따라서 화면이 없음!!

    export default {
        created(){
            console.log(this.$route.params.code);
            console.log(this.$route.params.count);
            
            ElMessageBox.alert('결제완료 되었습니다.', '결제완료', {
                confirmButtonText: 'OK',
                callback: (action) => {
                    console.log(action);
                    this.$router.push({path:'/shop'});
                },
            });

            // 쇼핑몰 메인으로 이동
            this.$router.push({path:'/shop'});
        }
    }
</script>

<style scoped>

</style>