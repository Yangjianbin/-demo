import wechat from './utils/wechat';
import doban from './utils/douban';
App({
  data:{
    name:'Douban 电影',
    version:'1.1.1'
  },
  wechat:wechat,
  douban:douban,
  onLaunch(){},
  onShow(){},
  onHide(){}
})