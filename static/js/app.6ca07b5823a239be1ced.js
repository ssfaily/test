webpackJsonp([1],{"+BTi":function(t,n){},"/bpg":function(t,n){},"43YB":function(t,n){},Dte2:function(t,n){},GXEp:function(t,n){},H3rH:function(t,n){},Mf0D:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e("Dte2"),e("+BTi");var a=e("q4le"),s=e.n(a),i=(e("isE6"),e("LR6y")),c=e.n(i),o=(e("jZDA"),e("91Nw")),l=e.n(o),r=(e("d7TW"),e("ajQY")),u=e.n(r),d=(e("Q6SQ"),e("LQMI")),p=e.n(d),f=(e("V5v9"),e("D8db")),v=e.n(f),m=(e("/bpg"),e("ACGT")),_=e.n(m),h=(e("Mf0D"),e("exT9")),C=e.n(h),g=(e("bwiK"),e("SExR")),b=e.n(g),P=(e("H3rH"),e("6mNG")),S=e.n(P),x=(e("cDSy"),e("e0Bm")),w=e.n(x),L=(e("GXEp"),e("mtrD")),y=e.n(L),E=e("7+uW"),F=(e("tvR6"),{render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]});var A=e("VU/8")({name:"App"},F,!1,function(t){e("aoFO")},"data-v-5a0ac634",null).exports,B=e("/ocq"),M={data:function(){return{menuData:[{label:"项目成果",icon:"menu",children:[{path:"/page1",name:"page1",label:"项目成果1",icon:"s-opportunity",url:"Item/PageOne"},{path:"/page2",name:"page2",label:"项目成果2",icon:"s-opportunity",url:"Item/PageTwo"}]},{label:"科研成果",icon:"document",children:[{path:"/page3",name:"page3",label:"科研成果1",icon:"setting",url:"Research/PageThree"},{path:"/page4",name:"page4",label:"科研成果2",icon:"setting",url:"Research/pageFour"}]}]}},methods:{handleOpen:function(t,n){console.log(t,n)},handleClose:function(t,n){console.log(t,n)},clickMenu:function(t){this.$route.path===t.path||"/home"===this.$route.path&&"/"==t.path||this.$router.push(t.path)}},computed:{noChildren:function(){return this.menuData.filter(function(t){return!t.children})},hasChildren:function(){return this.menuData.filter(function(t){return t.children})},isCollapse:function(){return this.$store.state.tab.isCollapse}}},R={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:t.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:t.handleOpen,close:t.handleClose}},[e("h3",[t._v(t._s(t.isCollapse?"成果":"成果展示网站"))]),t._v(" "),t._l(t.hasChildren,function(n){return e("el-submenu",{key:n.label,attrs:{index:n.label}},[e("template",{slot:"title"},[e("i",{class:"el-icon-"+n.icon}),t._v(" "),e("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(n.label))])]),t._v(" "),t._l(n.children,function(n){return e("el-menu-item-group",{key:n.path},[e("el-menu-item",{attrs:{index:n.name},on:{click:function(e){return t.clickMenu(n)}}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(n.label))])])],1)})],2)})],2)},staticRenderFns:[]};var $={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"header-container"},[n("div",{staticClass:"l-content"},[n("el-button",{attrs:{icon:"el-icon-menu",size:"mini"},on:{click:this.handleMenu}}),this._v(" "),n("span",{staticClass:"tex"},[this._v("首页")])],1),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"r-content"},[n("span",{staticClass:"el-right"},[n("img",{staticClass:"yang",attrs:{src:e("doMO")}})])])}]};var D={data:function(){return{}},components:{CommonAside:e("VU/8")(M,R,!1,function(t){e("PcVn")},"data-v-3ebd0896",null).exports,CommonHeader:e("VU/8")({data:function(){return{}},methods:{handleMenu:function(){this.$store.commit("collapseMenu")}}},$,!1,function(t){e("Omas")},"data-v-46208e2c",null).exports}},O={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("el-container",[n("el-aside",{attrs:{width:"200px"}},[n("common-aside")],1),this._v(" "),n("el-container",{staticClass:"wit"},[n("el-header",[n("common-header")],1),this._v(" "),n("el-main",[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var W=e("VU/8")(D,O,!1,function(t){e("OYlu")},"data-v-144d8ba0",null).exports,V={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-row",[e("el-col",{attrs:{span:24}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"yang_i"},[e("div",{staticClass:"yang_info"},[e("p",{staticClass:"name"},[t._v("WiFi指纹室内定位中的隐私建模")])])]),t._v(" "),e("div",{staticClass:"infor"},[e("p",[t._v("发表会议："),e("span",[t._v("ProvSec 2018")])])])]),t._v(" "),e("el-card",{staticClass:"box-card"},[e("p",{staticClass:"title"},[t._v("整体概述")]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("本文研究了隐私保护Wifi指纹室内定位(PPIL)方案的隐私模型。我们表明，许多现有的模型是不充分的，并对敌手的力量做出了不切实际的假设。\n                    为了涵盖最先进的实际攻击，我们提出了一个正式的安全模型，该模型在以往通用的设置之外细化了客户端和服务器端隐私的安全目标，特别地，\n                    我们的模型考虑了各种恶意行为，例如揭露原理机密、在位置查询中选择恶意Wifi指纹、指定目标客户端的位置区域等。此外，我们以不可区分的方式构建客户端隐私，\n                    敌手难以区分客户端的真实位置和随机位置。服务器端的隐私要求攻击者不能生成一个与服务器真实数据库相似功能的虚构数据库。\n                    特别地，我们用以前没有形式化的球状方法正式定义了数据库之间的相似性。通过对现有PPIL协议安全性的分析，我们证明了模型的有效性和适用性。\n                ")])])])],1)],1)},staticRenderFns:[]};var H=e("VU/8")({data:function(){return{}}},V,!1,function(t){e("NSJv")},"data-v-990709c2",null).exports,T={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-row",[e("el-col",{attrs:{span:24}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"yang_i"},[e("div",{staticClass:"yang_info"},[e("p",{staticClass:"name"},[t._v("高速隐私位置接近性检测协议")])])]),t._v(" "),e("div",{staticClass:"infor"},[e("p",[t._v("发表会议："),e("span",[t._v("CANS 2018")])])])]),t._v(" "),e("el-card",{staticClass:"box-card"},[e("p",{staticClass:"title"},[t._v("整体概述")]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("如今，许多移动设备(例如,智能手机或平板电脑)可以方便地实时测量和报告精确位置，因此近年来出现了一些基于移动网络的位置服务( Location-Based Services，LBS\n                    )。一个基本的LBS是位置邻近性检测，它使用户能够检测到其他用户是否在附近。这种有前景的功能促进了社交应用的发展，帮助用户在紧急情况下找到附近的朋友[13]、Uber汽车或医疗人员[14]。尽管一些用户并不反对分享自己的位置，但LBSs很容易被误用来跟踪用户，所以许多隐私感知用户还是希望保护自己的位置不被第三方泄露。这引起了我们对这些用户隐私保护的关注。虽然位置服务隐私保护有一些成熟的方案，但是对于位置信息的获取过程还缺乏安全高效的协议。\n                    在这项工作中，\n                    我们基于SMPC(安全多方计算)和AHPKE(同态加密)这两种安全计算技术，设计、实现和评估了多种位置隐私接近性检测协议(PPLP)，在实现位置接近性检测服务的同时保护通信双方的位置信息。我们根据不同的应用场景设计了不同的PPLP协议，这些应用场景包括：1)有限的网络带宽；2)有限的电量和计算能力；3)运行时间敏感。此外，我们对协议进行了优化：对基于AHPKE的协议使用Bloom\n                    filter(布隆过滤器)[2]，对基于布尔电路的协议使用Conditional Swap\n                    (条件交换门)[4]。为降低移动终端设备的计算和网络开销，我们安全地将主要计算过程外包给两个计算服务器。从具体的性能数据来说，实际协议的总运行时间小于两百毫秒，在线运行时间小于五十毫秒，并且数据通信开销需要数百字节到一千字节之间。未来我们将在移动设备上实现我们的协议\n\n                ")])])])],1)],1)},staticRenderFns:[]};var k=e("VU/8")({data:function(){return{}}},T,!1,function(t){e("TJw5")},"data-v-bb659334",null).exports,I={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-row",[e("el-col",{attrs:{span:24}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"yang_i"},[e("div",{staticClass:"yang_info"},[e("p",{staticClass:"name"},[t._v(" 面向Wifi指纹的室内定位隐私安全模型研究及其应用")])])]),t._v(" "),e("div",{staticClass:"infor"},[e("p",[t._v("发表会议："),e("span",[t._v("jowua 2019")])])])]),t._v(" "),e("el-card",{staticClass:"box-card"},[e("p",{staticClass:"title"},[t._v("整体概述")]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("人们在公共室内环境中花费了大量的时间，包括商场、图书馆、机场、大学校园等。这提高了人们对各种基于室内位置的应用程序的兴趣[1，2]，如室内导航、老年人援助和应急响应等。然而，在室内环境中，传统的全球定位系统（Global\n                    Positioning System,GPS）可能由于被建筑物阻碍导致信号强度微弱，从而无法使用。为了获得在建筑物内部的位置，用户必须依赖建筑物内部的某个服务器提供的室内定位服务（Indoor\n                    Location\n                    Services,ILS）。ILS最广泛使用的方法是基于WiFi指纹技术的方法[3，4，5，6，7，8，9，10，11]。目前应用最广泛的是基于WiFi指纹技术[3、4、5、6、7、8、9、10、11]的ILS。这种方法非常有效和流行，\n                    因为它使用了建筑物里现有的WiFi基础设施。对于基于WiFi指纹的ILS，服务器会保存一个包含不同参考位置的WiFi接入点（Access\n                    Points,AP）的信号强度的数据库（例如文献[12，表1]）。粗略地说，客户端测量WiFi接入点在当前(未知)位置的信号强度并发送给服务器。服务器基于地理位置数据库计算客户端的位置，例如，通过计算客户端的输入指纹和数据库中的参考指纹之间的k近邻欧几里德距离（k-nearest\n                    Euclidean distances）。最后，服务器将位置发送给客户端。然而，这种缺乏经验的解决方案无法阻止恶意服务器跟踪客户端位置这种侵犯客户端隐私的行为。\n                ")])])])],1)],1)},staticRenderFns:[]};var U=e("VU/8")({data:function(){return{}}},I,!1,function(t){e("jZ/6")},"data-v-2731191c",null).exports,N={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-row",[e("el-col",{attrs:{span:24}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"yang_i"},[e("div",{staticClass:"yang_info"},[e("p",{staticClass:"name"},[t._v("高速隐私位置接近性检测协议")])])]),t._v(" "),e("div",{staticClass:"infor"},[e("p",[t._v("发表会议："),e("span",[t._v("CANS 2018")])])])]),t._v(" "),e("el-card",{staticClass:"box-card"},[e("p",{staticClass:"title"},[t._v("整体概述")]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("如今，许多移动设备(例如,智能手机或平板电脑)可以方便地实时测量和报告精确位置，因此近年来出现了一些基于移动网络的位置服务( Location-Based Services，LBS\n                    )。一个基本的LBS是位置邻近性检测，它使用户能够检测到其他用户是否在附近。这种有前景的功能促进了社交应用的发展，帮助用户在紧急情况下找到附近的朋友[13]、Uber汽车或医疗人员[14]。尽管一些用户并不反对分享自己的位置，但LBSs很容易被误用来跟踪用户，所以许多隐私感知用户还是希望保护自己的位置不被第三方泄露。这引起了我们对这些用户隐私保护的关注。虽然位置服务隐私保护有一些成熟的方案，但是对于位置信息的获取过程还缺乏安全高效的协议。\n                    在这项工作中，\n                    我们基于SMPC(安全多方计算)和AHPKE(同态加密)这两种安全计算技术，设计、实现和评估了多种位置隐私接近性检测协议(PPLP)，在实现位置接近性检测服务的同时保护通信双方的位置信息。我们根据不同的应用场景设计了不同的PPLP协议，这些应用场景包括：1)有限的网络带宽；2)有限的电量和计算能力；3)运行时间敏感。此外，我们对协议进行了优化：对基于AHPKE的协议使用Bloom\n                    filter(布隆过滤器)[2]，对基于布尔电路的协议使用Conditional Swap\n                    (条件交换门)[4]。为降低移动终端设备的计算和网络开销，我们安全地将主要计算过程外包给两个计算服务器。从具体的性能数据来说，实际协议的总运行时间小于两百毫秒，在线运行时间小于五十毫秒，并且数据通信开销需要数百字节到一千字节之间。未来我们将在移动设备上实现我们的协议\n\n                ")])])])],1)],1)},staticRenderFns:[]};var j=e("VU/8")({data:function(){return{}}},N,!1,function(t){e("43YB")},"data-v-50b74602",null).exports;E.default.use(B.a);var G=[{path:"/",component:W,redirect:"page1",children:[{path:"page1",component:H},{path:"page2",component:k},{path:"page3",component:U},{path:"page4",component:j}]}],K=new B.a({routes:G}),Q=e("NYxO");E.default.use(Q.a);var Y=new Q.a.Store({modules:{tab:{state:{isCollapse:!1},mutations:{collapseMenu:function(t){t.isCollapse=!t.isCollapse}}}}});E.default.config.productionTip=!1,E.default.component(y.a.name,y.a),E.default.component(w.a.name,w.a),E.default.component(S.a.name,S.a),E.default.use(b.a),E.default.use(C.a),E.default.use(_.a),E.default.use(v.a),E.default.use(p.a),E.default.use(u.a),E.default.use(l.a),E.default.use(c.a),E.default.use(s.a),new E.default({el:"#app",router:K,store:Y,components:{App:A},template:"<App/>"})},NSJv:function(t,n){},OYlu:function(t,n){},Omas:function(t,n){},PcVn:function(t,n){},Q6SQ:function(t,n){},TJw5:function(t,n){},V5v9:function(t,n){},aoFO:function(t,n){},bwiK:function(t,n){},cDSy:function(t,n){},d7TW:function(t,n){},doMO:function(t,n,e){t.exports=e.p+"static/img/yangzheng.b0ee3f4.png"},isE6:function(t,n){},"jZ/6":function(t,n){},jZDA:function(t,n){},tvR6:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.6ca07b5823a239be1ced.js.map