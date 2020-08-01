(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{380:function(t,s,a){"use strict";a.r(s);var n=a(18),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),a("ul",[a("li",[t._v("名称："),a("code",[t._v("dns")])]),t._v(" "),a("li",[t._v("类型：出站协议")])]),t._v(" "),a("p",[t._v("DNS 是一个出站协议，主要用于拦截和转发 DNS 查询。此出站协议只能接收 DNS 流量（包含基于 UDP 和 TCP 协议的查询），其它类型的流量会导致错误。")]),t._v(" "),a("p",[t._v("在处理 DNS 查询时，此出站协议会将 IP 查询（即 A 和 AAAA）转发给内置的 "),a("RouterLink",{attrs:{to:"/config/dns.html"}},[t._v("DNS 服务器")]),t._v("。其它类型的查询流量将被转发至它们原本的目标地址。")],1),t._v(" "),a("p",[t._v("DNS 出站协议在 V2Ray 4.15 中引入。")]),t._v(" "),a("h2",{attrs:{id:"outboundconfigurationobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outboundconfigurationobject"}},[t._v("#")]),t._v(" OutboundConfigurationObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.1.1.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("network")]),t._v(': "tcp" | "udp"')])]),t._v(" "),a("p",[t._v("(V2Ray 4.16+) 修改 DNS 流量的传输层协议，可选的值有 "),a("code",[t._v('"tcp"')]),t._v(" 和 "),a("code",[t._v('"udp"')]),t._v("。当不指定时，保持来源的传输方式不变。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("address")]),t._v(": address")])]),t._v(" "),a("p",[t._v("(V2Ray 4.16+) 修改 DNS 服务器地址。当不指定时，保持来源中指定的地址不变。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("port")]),t._v(": number")])]),t._v(" "),a("p",[t._v("(V2Ray 4.16+) 修改 DNS 服务器端口。当不指定时，保持来源中指定的端口不变。")])])}),[],!1,null,null,null);s.default=e.exports}}]);