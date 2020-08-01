(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{399:function(t,r,a){"use strict";a.r(r);var e=a(18),_=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"核心设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心设计"}},[t._v("#")]),t._v(" 核心设计")]),t._v(" "),a("p",[t._v("本文描述了 V2Ray 内核（v2ray-core）的设计思路。")]),t._v(" "),a("h2",{attrs:{id:"目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),a("ul",[a("li",[t._v("V2Ray 内核提供了一个平台，支持必要的网络代理功能，在其之上可以进二次开发，以提供更好的用户体验；")]),t._v(" "),a("li",[t._v("以跨平台为首要原则，以减少二次开发的成本；")])]),t._v(" "),a("h2",{attrs:{id:"架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[t._v("#")]),t._v(" 架构")]),t._v(" "),a("p",[a("img",{attrs:{src:"/arch.svg",alt:"Architecture"}})]),t._v(" "),a("p",[t._v("内核分为三层：应用层、代理层和传输层。每一层内包含数个模块，模块间互相独立，同类型的模块可以无缝替换。")]),t._v(" "),a("h2",{attrs:{id:"应用层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[t._v("#")]),t._v(" 应用层")]),t._v(" "),a("p",[t._v("应用层包含一些代理层中常用的功能，这些功能被抽象出来，以便在不同的代理模块中复用。应用层的模块应为纯软件实现，不与硬件或平台相关的技术有关。")]),t._v(" "),a("p",[t._v("重要模块列表：")]),t._v(" "),a("p",[t._v("chapter_02/03_routing.html")]),t._v(" "),a("ul",[a("li",[t._v("Dispatcher: 用于把入站代理所接收到的数据，传送给出站代理；")]),t._v(" "),a("li",[t._v("Router: 内置路由，详见 "),a("RouterLink",{attrs:{to:"/chapter_02/03_routing.html"}},[t._v("路由配置")]),t._v("；")],1),t._v(" "),a("li",[t._v("DNS: 内置的 DNS 缓存；")]),t._v(" "),a("li",[t._v("Proxy Manager: 入站代理的管理器；")])]),t._v(" "),a("h2",{attrs:{id:"代理层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理层"}},[t._v("#")]),t._v(" 代理层")]),t._v(" "),a("p",[t._v("代理层分为两部分：入站代理（Inbound Proxy）和出站代理（Outbound Proxy）。两部分相互独立，入站代理不依赖于某个特定的出站代理，反之亦然。所有已实现的"),a("a",{attrs:{href:"https://www.v2ray.com/chapter_02/02_protocols.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("协议列表"),a("OutboundLink")],1),t._v("一览。")]),t._v(" "),a("h3",{attrs:{id:"入站代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入站代理"}},[t._v("#")]),t._v(" 入站代理")]),t._v(" "),a("ul",[a("li",[t._v("实现 "),a("a",{attrs:{href:"https://github.com/v2fly/v2ray-core/blob/master/proxy/proxy.go#L14",target:"_blank",rel:"noopener noreferrer"}},[t._v("proxy.Inbound"),a("OutboundLink")],1),t._v(" 接口；")])]),t._v(" "),a("h3",{attrs:{id:"出站代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出站代理"}},[t._v("#")]),t._v(" 出站代理")]),t._v(" "),a("ul",[a("li",[t._v("实现 "),a("a",{attrs:{href:"https://github.com/v2fly/v2ray-core/blob/master/proxy/proxy.go#L21",target:"_blank",rel:"noopener noreferrer"}},[t._v("proxy.Outbound"),a("OutboundLink")],1),t._v(" 接口；")])]),t._v(" "),a("h2",{attrs:{id:"传输层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[t._v("#")]),t._v(" 传输层")]),t._v(" "),a("p",[t._v("传输层提供一些网络数据传输相关的工具模块。")])])}),[],!1,null,null,null);r.default=_.exports}}]);