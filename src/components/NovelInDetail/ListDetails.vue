<template>
    <div  class="ListDetails">
        <div class="book">
            <strong>{{bookcentent.title}}</strong>
            <p>{{bookcentent.cpContent}}</p>
        </div>
    </div>
</template>

<script>
    import api from  '../../service/api'
    export default {
        name: "ListDetails",
        props: ['bookcentent'],
        data() {
            return {
            }
        },

    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .ListDetails{
        z-index: 10;
        background-color: #f2f6fc;
        .book{
            width: 100%;
            height: 100%;
            margin: auto;
            strong{
                margin-top: 20px;
                width: 100%;
                line-height: 50px;
               border-bottom: 2px solid black;
                font-size: 22px;
            }
            p{
                width: 90%;
                line-height: 30px;
                font-size: 16px;
                padding: 0 20px 20px 20px;
                margin: 10px 0 0 0;
                text-align: center;

            }
        }
    }
</style>
