<template>
    <div class="bookbtn">
        <button @click="chapterup">上一章</button>
        <button>目录</button>
        <button @click="chapterdown">下一章</button>
    </div>
</template>

<script>
    export default {
        name: "BookBtn",
        methods:{
            chapterup(){
                this.$emit('prev')
            },
            chapterdown(){
                this.$emit('next')
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .bookbtn{
        position: relative;
        display:flex;
        top: 0px;
        left: 0;
        width: 100%;
        height: 50px;
        z-index: 20;
        button{
            flex: 1;
            border-bottom: 0;
            border-top: 0;
            font-size: 18px;
        }
    }
</style>