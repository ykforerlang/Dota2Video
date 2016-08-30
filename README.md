Dota2Video
=====
Dota2赛事视频， Dota2精彩视频推荐， 

###启动服务端
app服务端为<a href='https://github.com/ykforerlang/Dota2Video'>Dota2VideoServer</a>。 本地启动需要启动这个web服务
并且修改 app/common/FetchNetData 和app/common/constant的ip，


##部分效果演示
####底部tarbar和顶部tar切换
<a href="https://github.com/ykforerlang/Dota2Video/blob/master/demo_images/v1.gif"><img src="https://github.com/ykforerlang/Dota2Video/blob/master/demo_images/v1.gif"></a>
<br>
####上拉刷新/下拉动态加载
<a href="https://github.com/ykforerlang/Dota2Video/blob/master/demo_images/v2.gif"><img src="https://github.com/ykforerlang/Dota2Video/blob/master/demo_images/v2.gif"></a>
<br>
####sticky效果/webView
<a href="https://github.com/ykforerlang/Dota2Video/blob/master/demo_images/v3.gif"><img src="https://github.com/ykforerlang/Dota2Video/blob/master/demo_images/v3.gif"></a>
<br>
####导航切换
<a href="https://github.com/ykforerlang/Dota2Video/blob/master/demo_images/v6.gif"><img src="https://github.com/ykforerlang/Dota2Video/blob/master/demo_images/v6.gif"></a>

##参考资料
1.react相关blog: https://www.kirupa.com/react/events_in_react.htm<br/>
                 http://browniefed.com/blog/getting-react-art-running-on-react-native/<br/>
                 http://browniefed.com/blog/2015/10/14/react-native-morphing-svg-paths-with-react-art/<br/>
                 https://github.com/skv-headless/react-native-scrollable-tab-view<br/>
                 https://github.com/reactjs<br/>
                 http://browniefed.com/react-native-animation-book/<br/>
                 https://leanpub.com/programming-react-native<br/>
                 http://wiki.jikexueyuan.com/project/react-native/scroll-view.html<br/>
                 事件合成和事件委托： https://github.com/facebook/react/blob/master/docs/docs/03-interactivity-and-dynamic-uis.zh-CN.md<br/>
2. ios 首屏： https://github.com/facebook/react-native/issues/1281<br/>
          http://bbs.reactnative.cn/topic/1850/react-native-ios-%E8%AE%BE%E7%BD%AE-launchscreen  <br/>    
           appicon: http://blog.it985.com/8048.html

##TODO
1. add android support
2. Animation 实现dota2 replay的动画
3. login/sign
4. 优化性能 --->listView修改为<a href="https://github.com/sghiassy/react-native-sglistview">react-native-sglistview</a>？---->或者用让不显示的头部去掉  用set native paddingTop占住空间？ 
