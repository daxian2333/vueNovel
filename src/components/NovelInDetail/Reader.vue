<template>
        <div class="reader">
            <div class="readercontainer">
            <ListDetails :bookcentent="bookcentent"></ListDetails>
             <BookBtn @prev="chapterUp" @next="chapterDown"></BookBtn>
            </div>
        </div>
</template>

<script>
    import api from '../../service/api'
    import ListDetails from '../NovelInDetail/ListDetails'
    import BookBtn from  '../NovelInDetail/BookBtn'
    export default {
        name: "Reader",
        data() {
            return {
                bookcentent: {},
                listdetail:{},
                Total:0,
                mun:0
            }
        },
        components: {
            ListDetails,
            BookBtn
        },
        created() {
            this.getdetail();
        },
        methods: {
            getdetail() {
                api.getChapters(this.$route.params.id).then(res => {
                   console.log(res)
                    this.listdetail = res.data.chapters;
                    this.getChapterContent();
                    console.log(this.listdetail)  //获取到了该小说所有的link源
                })
            },
            getChapterContent(){
                    api.getBookChapter(this.listdetail[this.mun].link).then(res=>{
                        console.log(res)  //获取到了该小说所有的章节
                        this.bookcentent = res.data.chapter;
                        // this.Total = this.listdetail.length - 1 ;
                    }).catch(err=>{
                        alert('获取章节失败')
                        console.log(err)
                    })
                },
            chapterUp(){
                if(this.mun === 0){
                    alert('这是第一章')
                    return
                }
                this.mun -= 1;
                api.getBookChapter(this.listdetail[this.mun].link).then(res=>{
                    console.log(res)
                    this.bookcentent = res.data.chapter;
                })
                console.log(this.mun)
            },
            chapterDown(){
                if( 0 >= this.listdetail.length - 1){
                    this.mun = this.listdetail.length - 1;
                    alert('没有勒')
                    return
                }
                this.mun += 1;
                api.getBookChapter(this.listdetail[this.mun].link).then(res=>{
                   // console.log(res)
                    this.bookcentent = res.data.chapter;
                })
                console.log(this.mun)
            }
        }
    }
</script>

<style scoped>

</style>
