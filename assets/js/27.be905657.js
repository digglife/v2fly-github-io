(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{409:function(t,s,a){"use strict";a.r(s);var e=a(11),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"shadowsocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocks"}},[t._v("#")]),t._v(" Shadowsocks")]),t._v(" "),a("ul",[a("li",[t._v("名称："),a("code",[t._v("shadowsocks")])]),t._v(" "),a("li",[t._v("类型：入站 / 出站")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Shadowsocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shadowsocks"),a("OutboundLink")],1),t._v(" 协议，包含入站和出站两部分，兼容大部分其它版本的实现。")]),t._v(" "),a("p",[t._v("与官方版本的兼容性：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("支持 TCP 和 UDP 数据包转发，其中 UDP 可选择性关闭；")])]),t._v(" "),a("li",[a("p",[t._v("加密方式：")]),t._v(" "),a("ul",[a("li",[t._v("AES-256-GCM")]),t._v(" "),a("li",[t._v("AES-128-GCM")]),t._v(" "),a("li",[t._v("ChaCha20-Poly1305 或称 ChaCha20-IETF-Poly1305")]),t._v(" "),a("li",[t._v("（V2Ray 4.27.0+） none 或称 plain")])]),t._v(" "),a("p",[t._v("不推荐的 (未来会被移除)")]),t._v(" "),a("ul",[a("li",[t._v("AES-256-CFB")]),t._v(" "),a("li",[t._v("AES-128-CFB")]),t._v(" "),a("li",[t._v("ChaCha20")]),t._v(" "),a("li",[t._v("ChaCha20-IETF")])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v('"none" 不加密方式下，服务器端不会验证 "password" 中的密码。一般需要加上 TLS 并在传输层使用安全配置，例如 WebSocket 配置较长的 path')])]),t._v(" "),a("p",[t._v("Shadowsocks 的配置分为两部分，"),a("code",[t._v("InboundConfigurationObject")]),t._v(" 和 "),a("code",[t._v("OutboundConfigurationObject")]),t._v("，分别对应入站和出站协议配置中的 "),a("code",[t._v("settings")]),t._v(" 项。")]),t._v(" "),a("h2",{attrs:{id:"inboundconfigurationobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inboundconfigurationobject"}},[t._v("#")]),t._v(" InboundConfigurationObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love@v2ray.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aes-256-gcm"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"密码"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("email")]),t._v(": string")])]),t._v(" "),a("p",[t._v("邮件地址，可选，用于标识用户")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("method")]),t._v(": string")])]),t._v(" "),a("p",[t._v("必填。可选的值见 "),a("a",{attrs:{href:"#%E5%8A%A0%E5%AF%86%E6%96%B9%E5%BC%8F%E5%88%97%E8%A1%A8"}},[t._v("加密方式列表")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("password")]),t._v(": string")])]),t._v(" "),a("p",[t._v("必填，任意字符串。Shadowsocks 协议不限制密码长度，但短密码会更可能被破解，建议使用 16 字符或更长的密码。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("level")]),t._v(": number")])]),t._v(" "),a("p",[t._v("用户等级，默认值为 "),a("code",[t._v("0")]),t._v("。详见 "),a("RouterLink",{attrs:{to:"/config/policy.html"}},[t._v("本地策略")]),t._v("。")],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("network")]),t._v(': "tcp" | "udp" | "tcp,udp"')])]),t._v(" "),a("p",[t._v("可接收的网络连接类型，默认值为 "),a("code",[t._v('"tcp"')]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"outboundconfigurationobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outboundconfigurationobject"}},[t._v("#")]),t._v(" OutboundConfigurationObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love@v2ray.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"加密方式"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"密码"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("servers")]),t._v(": ["),a("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v("]")])]),t._v(" "),a("p",[t._v("一个数组，其中每一项是一个 "),a("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"serverobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverobject"}},[t._v("#")]),t._v(" ServerObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love@v2ray.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"加密方式"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"密码"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("email")]),t._v(": string")])]),t._v(" "),a("p",[t._v("邮件地址，可选，用于标识用户")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("address")]),t._v(": address")])]),t._v(" "),a("p",[t._v("Shadowsocks 服务器地址，支持 IPv4、IPv6 和域名。必填。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("port")]),t._v(": number")])]),t._v(" "),a("p",[t._v("Shadowsocks 服务器端口。必填。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("method")]),t._v(": string")])]),t._v(" "),a("p",[t._v("必填。可选的值见"),a("a",{attrs:{href:"#%E5%8A%A0%E5%AF%86%E6%96%B9%E5%BC%8F%E5%88%97%E8%A1%A8"}},[t._v("加密方式列表")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("password")]),t._v(": string")])]),t._v(" "),a("p",[t._v("必填。任意字符串。Shadowsocks 协议不限制密码长度，但短密码会更可能被破解，建议使用 16 字符或更长的密码。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("level")]),t._v(": number")])]),t._v(" "),a("p",[t._v("用户等级")]),t._v(" "),a("h2",{attrs:{id:"加密方式列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加密方式列表"}},[t._v("#")]),t._v(" 加密方式列表")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"aes-256-gcm"')])]),t._v(" "),a("li",[a("code",[t._v('"aes-128-gcm"')])]),t._v(" "),a("li",[a("code",[t._v('"chacha20-poly1305"')]),t._v(" 或 "),a("code",[t._v('"chacha20-ietf-poly1305"')])]),t._v(" "),a("li",[a("code",[t._v('"none"')]),t._v(" 或 "),a("code",[t._v('"plain"')])])])])}),[],!1,null,null,null);s.default=r.exports}}]);