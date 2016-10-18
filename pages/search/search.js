const app = getApp()
Page({
    data:{
        page:1,
        size:20,
        subtitle:'请在此输入搜索内容',
        movies:[],
        search:'',
        loading:false,
        hasMore:false
    },
    handleleLoadMore(){
        if(!this.data.hasMore) return
        this.setData({
            subtitle:'加载中...',
            loading:true
        })
        return app.douban.find('search',this.data.page++,this.data.size++,this.data.search).then(d=>{
            if(d.subjects.length){
                this.setData({
                    subtitle:d.title,movies:this.data.movies.concat(d.subjects),loading:false
                })
            }else{
                this.setData({
                    hasMore:false,
                    loading:false
                })
            }
        }).catch(e=>{
            this.setData({
                subtitle:'获取数据异常',
                loading:false,
            })
            console.error(e);
        })
    }
})