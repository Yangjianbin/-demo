const URI = 'https://api.douban.com/v2/movie';

//抓取特定类型的电影api
function fetchApi(type,params){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:`${URI}/${type}`,
            data:Object.assign({},params),
            header:{'Content-Type':'application/json'},
            success:resolve,
            fail:reject
        })
    })
}
// 获取列表类型数据
function find(type,page = 1,count = 20,search = ''){
    const params = {
        start:(page - 1) * count ,
        count:count
    }
    return fetchApi(type,search?Object.assign(params,{q:search}):params).then(res=>res.data)
}

//获取单条类型的数据
function findOne(id){
    return fetchApi('subject/'+id).then(res=>res.data)
}

module.exports = {find,findOne}