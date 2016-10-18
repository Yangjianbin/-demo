const app = getApp()
Page({
    data:{
        boards:[
            {key:'in_theaters',name:'正在热映'},
            {key:'coming_soon',name:'即将上映'},
            {key:'top250',name:'TOP250'},
            {key:'us_box',name:'北美票房榜'}
        ],
        movies:[],
        loading:true
    },
    onLoad(){
        app.douban.find('in_theaters',1,5).then(d=>this.setData({movies:d.subjects,loading:false})).catch(e=>{
            console.error(e);
            this.setData({loading:false})
        })
    }

})