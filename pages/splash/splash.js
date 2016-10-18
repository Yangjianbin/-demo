const app = getApp()
Page({
    data:{
        movies:[],
        loading:true
    },
    getCache(){
        return new Promise(resolve=>{
            app.wechat.getStorage('last_splash_data').then(res=>{
                if(res.data.expires < Date.now()){
                    console.log('storage expires')
                    return resolve(null)
                }
                return resolve(res.data)
            }).catch(e=>resolve(null))
        })
    },
    handleStart(){
        wx.redirectTo({url:'../board/board'})
    },
    onLoad(){
        this.getCache().then(cache=>{
            if(cache){
                return this.setData({movies:cache.movies,loading:false})
            }
            app.douban.find('coming_soon',1,3).then(d=>{
                this.setData({movies:d.subjects,loading:false})
                return app.wechat.setStorage('last_splash_data',{
                    movies:d.subjects,
                    expires:Date.now() + 1 * 24 * 60 * 60 * 1000
                })
            }).then(()=>console.log('storage last splash data'))
        })
    }
})