!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=26)}([function(t,e,n){t.exports=n(7)},function(t,e){function n(t,e,n,r,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(a,i){var o=t.apply(e,r);function s(t){n(o,a,i,s,c,"next",t)}function c(t){n(o,a,i,s,c,"throw",t)}s(void 0)})}}},function(t,e){t.exports={loadData:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return $.ajax({url:t,data:e,success:function(t){return t}})},loadProduct:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return $.ajax({url:t,type:"POST",data:e,success:function(t){return t}})}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e){t.exports='<div class="index">    <div class="index-main"></div>    <nav>        <ul>            <li id="home"><a href="#index/home">                <span><i class="iconfont icon-home_light"></i></span>                <p>首页</p>            </a></li>            <li id="electricAppliance"><a href="#index/electricAppliance">                <span><i class="iconfont icon-settings_light"></i></span>                <p>电器馆</p>            </a></li>            <li id="active"><a href="#index/active">                <img src="images/index/logo/bottom_icon.png" alt="">            </a></li>            <li id="cart"><a href="#index/cart">                <span><i class="iconfont icon-cart_light"></i></span>                <p>购物车</p>            </a></li>            <li id="my"><a href="#index/my">                <span><i class="iconfont icon-my_light"></i></span>                <p>我的</p>            </a></li>        </ul>    </nav>    <div class="returnTop">        <img src="http://m.sjgo365.com/Content/themes/img/top.png" alt="">     </div></div>'},function(t,e){t.exports='<div class="index-home">    <header>        <header>            <a href="#index/search"><i class="iconfont icon-sort"></i></a>            <img src="images/index/logo/sjg_logo.png" alt="">            <a href="#index/my">登录</a>        </header>        <form action="" method="GET">            <input type="text">            <span><i class="iconfont icon-search"></i></span>        </form>    </header>    <main>        <div>            <div class="swiper-container">            </div>            <nav>            </nav>            <div class="select">            </div>            <div class="dynamicActs">            </div>        </div>    </main></div>'},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,n,r){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),o=new L(r||[]);return i._invoke=function(t,e,n){var r=u;return function(a,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===a)throw i;return I()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var s=P(o,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?h:d,c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(t,n,o),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u="suspendedStart",d="suspendedYield",p="executing",h="completed",f={};function v(){}function m(){}function g(){}var y={};y[i]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(_([])));w&&w!==n&&r.call(w,i)&&(y=w);var j=g.prototype=v.prototype=Object.create(y);function $(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function b(t){var e;this._invoke=function(n,a){function i(){return new Promise(function(e,i){!function e(n,a,i,o){var s=l(t[n],t,a);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,o)},function(t){e("throw",t,i,o)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,o)})}o(s.arg)}(n,a,e,i)})}return e=e?e.then(i,i):i()}}function P(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,P(t,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=l(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,f;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,f):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:I}}function I(){return{value:e,done:!0}}return m.prototype=j.constructor=g,g.constructor=m,g[s]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},$(b.prototype),b.prototype[o]=function(){return this},t.AsyncIterator=b,t.async=function(e,n,r,a){var i=new b(c(e,n,r,a));return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},$(j),j[s]="Generator",j[i]=function(){return this},j.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=_,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return s.type="throw",s.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:_(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e){t.exports='<div class="swiper-wrapper">    {{each slider}}    <div class="swiper-slide"><img src="http://m.sjgo365.com/Content/themes/index/images/{{$value.src}}" alt=""></div>    {{/each}}</div><div class="swiper-pagination"></div>'},function(t,e){t.exports='<ul class="mainNav-1">    {{each navbar.category}}    <li><a href="">        <img src="http://m.sjgo365.com/Content/themes/index/images/{{$value.src}}" alt="">        <p>{{$value.text}}</p>    </a></li>    {{/each}}</ul><ul class="mainNav-2">    {{each navbar.channel}}    <li><a href="">        <img src="http://m.sjgo365.com/Content/themes/index/images/{{$value.src}}" alt="">        <p>{{$value.text}}</p>    </a></li>    {{/each}}</ul>'},function(t,e){t.exports='<h2><span>全球优选限时购</span></h2><ul class="flashSaleNav">    {{each flashSale}}    <li data = {{$index}}>{{$value.category}}    </li>    {{/each}}</ul><ul class="flashSaleMain"></ul>'},function(t,e){t.exports='{{each data.products}}    {{if $value.productTag === "包邮"}}        <li><a href="#details?{{$value.productID}}">            <img src="http://img.sjgo365.com/ProductImage220/{{$value.productID}}.jpg" alt="">            <div>                <h3>{{$value.productName}}</h3>                <span class="currentPrice">￥</span>                <p><span>包邮</span></p>            </div>        </a></li>    {{else if $value.productTag === ""}}        <li><a href="#details?{{$value.productID}}">            <img src="http://img.sjgo365.com/ProductImage220/{{$value.productID}}.jpg" alt="">            <div>                <h3>{{$value.productName}}</h3>                <span class="currentPrice">￥</span>            </div>        </a></li>    {{/if}}{{/each}}'},function(t,e){t.exports='<h2>更多活动</h2><ul>    {{each dynamicActs}}    <li>        <a href=""><img src="http://m.sjgo365.com/Content/themes/index/images/{{$value.src}}" alt=""></a>        <ul>            {{each $value.products}}            <li><a href="#details?{{$value.productID}}">                <img src="http://img.sjgo365.com/ProductImage220/{{$value.productID}}.jpg" alt="">                <p>{{$value.productName}}</p>                <span class="currentPrice2"></span>            </a></li>            {{/each}}        </ul>    </li>    {{/each}}</ul>'},function(t,e){t.exports='<div class="index-electricAppliance">    <header>        <div class="swiper-container">        </div>        <div class="menu"></div>    </header>    <main>        <div class="bursting">            <h2><span>- 热销爆款 -</span></h2>            <div class="select">            </div>        </div>        <div class="newProducts">            <h2><span>- 新品专区 -</span></h2>            <div>            </div>        </div>    </main></div>'},function(t,e){t.exports='<div class="swiper-wrapper">    {{each slider}}    <div class="swiper-slide"><img src="http://m.sjgo365.com/activity/eahome/images/{{$value.src}}" alt=""></div>    {{/each}}</div><div class="swiper-pagination"></div>'},function(t,e){t.exports='<ul class="selectHeader">    {{each bursting}}        <li data = "{{$index}}"><span>{{$value.navText}}</span></li>    {{/each}}</ul><div class="selectMain"></div>'},function(t,e){t.exports='<div class="area">    <div>        <div>            <h3>{{data.mainTitle}}</h3>            <p>{{data.subTitle}}</p>            <a href="">{{data.entryText}}</a>        </div>    </div>    <div>    </div></div><ul class="products">    {{each data.products}}        <li>            <a href="#details?{{$value.id}}">                <img src="http://img.sjgo365.com/ProductImage220/{{$value.id}}.jpg" alt="">                <p>{{$value.desc}}</p>                <strong class="currentPrice"></strong>            </a>        </li>    {{/each}}</ul>'},function(t,e){t.exports='<ul>    {{each newProducts}}        <li><a href="#details?{{$value.id}}">            <img src="./images/elec/u=4246834486,3428281355&fm=26&gp=0.jpg" data="http://img.sjgo365.com/ProductImage220/{{$value.id}}.jpg" alt="">            <p>{{$value.desc}}</p>            {{if $value.salePrice == ""}}                <strong>￥{{$value.staticPrice}}</strong>            {{else}}                <strong>￥{{$value.salePrice}}</strong>            {{/if}}        </a></li>    {{/each}}</ul>'},function(t,e){t.exports="<div>    index-active</div>"},function(t,e){t.exports="<div>    index-cart</div>"},function(t,e){t.exports='<div class="index-my">    <header>        <a href="" class="back">            <i class="iconfont icon-back_light"></i>        </a>        <h2>登录我的世纪购</h2>    </header>    <form action="">        <div class="user">            <i class="iconfont icon-my_fill_light"></i>            <input type="text" placeholder="手机/用户名">        </div>        <div class="password">            <i class="iconfont icon-lock"></i>            <input type="password" placeholder="请输入密码">        </div>    </form>    <div class="tip">        <div class="show">            <input type="checkbox">            显示密码        </div>        <div class="zhuce">            <a href="">忘记密码</a>            <a href="">注册</a>        </div>    </div>    <button>登录</button></div>'},function(t,e){t.exports='<div class="index-search">    <header>        <a href="">            <i class="iconfont icon-back_light"></i>        </a>        <div>            <input type="text" name="" id="" placeholder="搜索你想要找的商品">            <i class="iconfont icon-search"></i>        </div>    </header>    <main>    </main></div>'},function(t,e){t.exports='<ul>    {{each categories}}        <li>            {{$value.category}}            <ul>                {{each $value.cateItems}}                    <li>                        <a href="">{{$value.text}}</a>                    </li>                {{/each}}            </ul>        </li>    {{/each}}</ul>'},function(t,e){t.exports='<div class="details">    <header>        <span class="back">            <i class="iconfont icon-back_light"></i>        </span>        <h2>商品详情</h2>    </header>    <main></main>    <div class="returnTop">        <img src="http://m.sjgo365.com/Content/themes/img/top.png" alt="">     </div>    <footer>        <div class="index">            <span>首页</span>        </div>        <div class="collection">            <i class="iconfont icon-like"></i>            <span>收藏</span>        </div>        <div class="cart">            <i class="iconfont icon-cart_light"></i>            <span>购物车</span>        </div>        <div class="number">            <div class="reduce">                <span>-</span>            </div>            <input type="number" value="1" class="number-main">            <div class="increase">                <span>+</span>            </div>        </div>        <div class="joinCart">            <span>加入购物车</span>        </div>    </footer></div>'},function(t,e){t.exports='<p>温馨提示：新老包装随机发货</p><div>    <img src="http://img.sjgo365.com/ProductImage/{{id}}/%E8%AF%A6%E6%83%85%E9%A1%B5-01.jpg" alt="">    <img src="http://img.sjgo365.com/ProductImage/{{id}}/%E8%AF%A6%E6%83%85_%EF%BC%881%EF%BC%89.jpg" alt="">    <img src="http://img.sjgo365.com/ProductImage/{{id}}/%E8%AF%A6%E6%83%85%E9%A1%B5-02.jpg" alt="">    <img src="http://img.sjgo365.com/ProductImage/{{id}}/%E8%AF%A6%E6%83%85_%EF%BC%882%EF%BC%89.jpg" alt="">    <img src="http://img.sjgo365.com/ProductImage/{{id}}/%E8%AF%A6%E6%83%85%E9%A1%B5-03.jpg" alt="">    <img src="http://img.sjgo365.com/ProductImage/{{id}}/%E8%AF%A6%E6%83%85_%EF%BC%883%EF%BC%89.jpg" alt="">    <img src="http://img.sjgo365.com/ProductImage/{{id}}/%E8%AF%A6%E6%83%85%E9%A1%B5-04.jpg" alt="">    <img src="http://img.sjgo365.com/ProductImage/{{id}}/%E8%AF%A6%E6%83%85_%EF%BC%884%EF%BC%89.jpg" alt=""></div>'},function(t,e){t.exports='<div class="detailsMain">    <div class="swiper-container">        <div class="swiper-wrapper">            <div class="swiper-slide"><img src="http://img.sjgo365.com/ProductImage800/{{data.productID}}.jpg" alt=""></div>            <div class="swiper-slide"><img src="http://img.sjgo365.com/ProductImage800/1_{{data.productID}}.jpg" alt=""></div>            <div class="swiper-slide"><img src="http://img.sjgo365.com/ProductImage800/2_{{data.productID}}.jpg" alt=""></div>            <div class="swiper-slide"><img src="http://img.sjgo365.com/ProductImage800/3_{{data.productID}}.jpg" alt=""></div>        </div>        <div class="swiper-pagination"></div>    </div>    <div class="title">        <p>{{data.productName}}</p>        <div>            <strong>￥{{data.currentPrice}}.</strong>            <span>00</span>        </div>        <span>商品编号：{{data.productID}}</span>    </div>    <div class="comment">        <a href="">            <span>0条评论</span>            <i class="iconfont icon-back_light"></i>        </a>    </div>    <div class="productDetails">        <div class="tips">            <span>上拉查看商品详情</span>            <i class="iconfont icon-back_light"></i>            <i class="iconfont icon-back_light"></i>            <i class="iconfont icon-back_light"></i>        </div>        <div class="detailsMore">        </div>    </div>    <div class="loading">    </div></div>'},function(t,e,n){"use strict";n.r(e);var r=n(3),a=n.n(r),i=n(4),o=n.n(i),s=n(5);var c={reader:function(){$(".container").html(s),$("index>nav a").tap(function(t){t.preventDefault()})}},l=n(0),u=n.n(l),d=n(1),p=n.n(d),h=n(2),f=n.n(h),v=n(8);function m(){return(m=p()(u.a.mark(function t(){var e,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.loadData("/sjgo/Content/themes/index/json/slider.json");case 2:e=t.sent,n=template.render(v,{slider:e}),$(".swiper-container").html(n),new Swiper(".swiper-container",{loop:!0,autoplay:!0,pagination:{el:".swiper-pagination"}});case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}var g={reader:function(){return m.apply(this,arguments)}},y=n(9);function x(){return(x=p()(u.a.mark(function t(){var e,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.loadData("/sjgo/Content/themes/index/json/navbar.json");case 2:e=t.sent,n=template.render(y,{navbar:e}),$(".index-main main nav").html(n);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}var w={reader:function(){return x.apply(this,arguments)}},j=n(10),b=n(11);function P(){return(P=p()(u.a.mark(function t(){var e,n,r,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(){return(a=p()(u.a.mark(function t(n){var r,a,i;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e[n],a=[],r.products.forEach(function(t){a.push(t.productID)}),t.next=5,f.a.loadProduct("/sjgo/Products/GetProductRealTimeInfo",{productID:a.join()});case 5:a=t.sent,i=template.render(b,{data:r}),$(".flashSaleMain").html(i),$(".currentPrice").each(function(t,e){$(e).html("￥"+a.data[t].currentPrice)});case 9:case"end":return t.stop()}},t)}))).apply(this,arguments)},r=function(t){return a.apply(this,arguments)},t.next=4,f.a.loadData("/sjgo/Content/themes/index/json/flashSale.json");case 4:e=t.sent,n=template.render(j,{flashSale:e}),$(".select").html(n),$(".flashSaleNav li:first-child").addClass("active"),r(0),$(".flashSaleNav li").on("click",function(){$(this).addClass("active").siblings().removeClass("active");var t=$(this).attr("data");return r(t)});case 10:case"end":return t.stop()}},t)}))).apply(this,arguments)}var E={reader:function(){return P.apply(this,arguments)}},k=n(12);function L(){return(L=p()(u.a.mark(function t(){var e,n,r,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.loadData("/sjgo/Content/themes/index/json/dynamicActs.json");case 2:return e=t.sent,n=template.render(k,{dynamicActs:e}),$(".dynamicActs").html(n),r=[],e.forEach(function(t){t.products.forEach(function(t){r.push(t.productID)})}),t.next=9,f.a.loadProduct("/sjgo/Products/GetProductRealTimeInfo",{productID:r.join()});case 9:a=t.sent,$(".currentPrice2").each(function(t){$(this).html("￥"+a.data[t].currentPrice)});case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}var _={reader:function(){return L.apply(this,arguments)}},I=n(6);var T={reader:function(){$(".index-main").html(I),g.reader(),w.reader(),E.reader(),_.reader();var t=new BScroll(".index-home>main",{scrollY:!0,click:!0,bounce:!1,probeType:3});$(".returnTop").tap(function(e){t.scrollTo(0,0,1e3)}),t.on("beforeScrollStart",function(){this.refresh()}),t.on("scroll",function(){this.y<-180?$(".returnTop").css({display:"block"}):$(".returnTop").css({display:"none"})}),$("index-home>header>header>a").tap(function(t){t.preventDefault()})}},S=n(14);function A(){return(A=p()(u.a.mark(function t(){var e,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.loadData("/sjgo/activity/eahome/json/slider.json");case 2:e=t.sent,n=template.render(S,{slider:e}),$(".swiper-container").html(n),new Swiper(".swiper-container",{loop:!0,autoplay:!0,pagination:{el:".swiper-pagination"}});case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}var C={reader:function(){return A.apply(this,arguments)}},D=n(15),F=n(16);function O(){return(O=p()(u.a.mark(function t(){var e,n,r,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(){return(a=p()(u.a.mark(function t(n){var r,a,i;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e[n],a=[],r.products.forEach(function(t){a.push(t.id)}),t.next=5,f.a.loadProduct("/sjgo/Products/GetProductRealTimeInfo",{productID:a.join()});case 5:a=t.sent,i=template.render(F,{data:r}),$(".selectMain").html(i),$(".currentPrice").each(function(t,e){$(e).html("￥"+a.data[t].currentPrice)});case 9:case"end":return t.stop()}},t)}))).apply(this,arguments)},r=function(t){return a.apply(this,arguments)},t.next=4,f.a.loadData("/sjgo/activity/eahome/json/hotproducts.json");case 4:e=t.sent,n=template.render(D,{bursting:e}),$(".select").html(n),$(".selectHeader li:first-child").addClass("active"),r(0),$(".selectHeader li").on("click",function(){$(this).addClass("active").siblings().removeClass("active");var t=$(this).attr("data");return r(t)});case 10:case"end":return t.stop()}},t)}))).apply(this,arguments)}var R={reader:function(){return O.apply(this,arguments)}},N=n(17);function B(){return(B=p()(u.a.mark(function t(){var e,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.loadData("/sjgo/activity/eahome/json/newproducts.json");case 2:e=t.sent,0,n=template.render(N,{newProducts:e,start:0}),$(".newProducts>div").html(n);case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}var G={reader:function(){return B.apply(this,arguments)}},M=n(13);function U(){return(U=p()(u.a.mark(function t(){var e,n,r,a,i;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=function(){if(!(a>$(".newProducts img").length)){for(var t=a;t<a+3;t++)$(".newProducts img").eq(t).attr("src",$(".newProducts img").eq(t).attr("data"));a+=3,n+=r}},$(".index-main").html(M),t.next=4,C.reader();case 4:return t.next=6,R.reader();case 6:return t.next=8,G.reader();case 8:e=new BScroll(".index-main",{scrollY:!0,click:!0,bounce:!1,probeType:3}),$(".returnTop").tap(function(t){e.scrollTo(0,0,1e3)}),e.on("beforeScrollStart",function(){this.refresh()}),n=document.querySelector(".newProducts").offsetTop,r=document.querySelectorAll(".newProducts>div>ul>li")[0].offsetHeight,a=0,e.on("scroll",function(){this.y<-180?$(".returnTop").css({display:"block"}):$(".returnTop").css({display:"none"}),this.y<-n&&i()});case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}var Y={reader:function(){return U.apply(this,arguments)}},q=n(18);var H={reader:function(){var t=template.render(q);$(".index-main").html(t)}},V=n(19);var z={reader:function(){var t=template.render(V);$(".index-main").html(t)}},J=n(20);var K={reader:function(){var t=template.render(J);$(".index-main").html(t),$("back").tap(function(t){t.preventDefault(),history.back()})}},Q=n(22);function W(){return(W=p()(u.a.mark(function t(){var e,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.loadData("/sjgo/Content/themes/index/json/categories.json");case 2:e=t.sent,n=template.render(Q,{categories:e}),$(".index-search main").html(n),$("main>ul>li:first-child").addClass("active"),$("main>ul>li").tap(function(){$(this).addClass("active").siblings().removeClass("active")});case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}var X={reader:function(){return W.apply(this,arguments)}},Z=n(21);var tt={reader:function(){$(".index-main").html(Z),$(".index-search>header>a").tap(function(t){t.preventDefault(),history.back()}),X.reader()}},et=n(25);function nt(){return(nt=p()(u.a.mark(function t(){var e,n,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=location.href.split("?")[1],t.next=3,f.a.loadProduct("/sjgo/Products/GetProductRealTimeInfo",{productID:e});case 3:n=(n=t.sent).data[0],r=template.render(et,{data:n}),$("main").html(r),new Swiper(".swiper-container",{loop:!0,autoplay:!0,pagination:{el:".swiper-pagination"}});case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)}var rt={reader:function(){return nt.apply(this,arguments)}},at=n(23),it=n(24);function ot(){return(ot=p()(u.a.mark(function t(){var e,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return $(".container").html(at),$(".back").tap(function(t){t.preventDefault(),history.back()}),t.next=4,rt.reader();case 4:e=new BScroll(".details main",{scrollY:!0,tap:!0,bounce:{top:!1,bottom:!0,left:!1,right:!1},probeType:3}),$(".returnTop").tap(function(){e.scrollTo(0,0,1e3)}),e.on("beforeScrollStart",function(){this.refresh()}),e.on("scroll",function(){console.log(this.y),this.y<-180?$(".returnTop").css({display:"block"}):$(".returnTop").css({display:"none"})}),n=null,e.on("touchEnd",n=function(){if(this.y-this.maxScrollY<0){this.stop();var t=location.href.split("?")[1],r=template.render(it,{id:t});$(".detailsMore").html(r),$(".tips").html("<span>商品详情</span>"),e.removeEventListener("touchEnd",n)}});case 10:case"end":return t.stop()}},t)}))).apply(this,arguments)}var st={reader:function(){return ot.apply(this,arguments)}};new({Router:function(){function t(e){a()(this,t),this.mode=e.mode,this.routes={index:c,"index/home":T,"index/electricAppliance":Y,"index/active":H,"index/cart":z,"index/my":K,"index/search":tt,details:st},this.init()}return o()(t,[{key:"init",value:function(){"hash"===this.mode&&(window.addEventListener("load",this.hashRead.bind(this)),window.addEventListener("hashchange",this.hashRead.bind(this)))}},{key:"hashRead",value:function(t){t.newURL&&(this.oldURL=t.oldURL.split("#")[1],this.oldURL&&(this.oldURL=this.oldURL.split("?")[0])),console.log(),this.path=location.hash.slice(1).split("?")[0],this.pathList=this.path.split("/"),this.loadView()}},{key:"loadView",value:function(){var t=this,e="",n="";if(this.oldURL){var r=this.oldURL.split("/");this.pathList.forEach(function(a,i){0===i&&""===a?(t.controllers("index"),t.controllers("index/home")):t.pathList[i]==r[i]?e+="/".concat(t.pathList[i]):t.pathList[i]!=r[i]&&(e+="/".concat(t.pathList[i]),n=e.slice(1),t.controllers(n))})}else this.pathList.forEach(function(r,a){0===a&&""===r?(t.controllers("index"),t.controllers("index/home")):(e+="/".concat(t.pathList[a]),n=e.slice(1),t.controllers(n))});""===this.pathList[0]?this.active("home"):"index"===this.pathList[0]&&this.active(this.pathList[1])}},{key:"controllers",value:function(t){this.routes[t].reader()}},{key:"active",value:function(t){$("#".concat(t)).addClass("active").siblings().removeClass("active")}}]),t}()}.Router)({mode:"hash"})}]);