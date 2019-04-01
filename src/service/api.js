import axios from 'axios'
import qs from 'querystring'
export default {
    getRankCategory(){
        return axios.get('/api/ranking/gender')
    },
    //获取带子分类的分类
    getSubCategory(){
        return axios.get('/api/cats/lv2')
    },
    //获取书籍详情
    getBookInfo(id){
        return axios.get('/api/book/'+id)
    },
    //获取书籍相关推荐
    getRecommend(id){
        return axios.get('/api/book/'+id+'/recommend')
    },
    //获取书籍章节
    getChapters(id){
        return axios.get('/api/atoc/'+id+'?view=chapters')
    },
    //获取章节详细内容
    getBookChapter(link){
        return axios.get('/content/chapter/'+link)
    },
    getSearchHotwords(){
        return axios.get('/api/book/search-hotwords');
    },
    //获取分类详情
    getCategoryInfo(name){
        return axios.get('/api/book/by-categories?gender=male&type=hot&major='+ name +'&minor=&start=0&limit=50')
    },
    //获取排名详情
    getRank(rankid){
        return axios.get('/api/ranking/'+rankid)
    },
    //获取小说正版源于盗版源(混合)
    getBookSources(id){
        return axios.get('/api/btoc?view=summary&book='+id)
        // http://api.zhuishushenqi.com/atoc?view=summary&book=548d9c17eb0337ee6df738f5
    },
    //获取搜索结果
    getSearchResult(val){
        return axios.get('/api/book/fuzzy-search?query='+val)
    },

}
