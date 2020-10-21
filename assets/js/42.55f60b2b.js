(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{425:function(a,s,t){"use strict";t.r(s);var e=t(11),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"第一步-学会编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一步-学会编译"}},[a._v("#")]),a._v(" 第一步：学会编译")]),a._v(" "),t("h2",{attrs:{id:"windows-平台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-平台"}},[a._v("#")]),a._v(" Windows 平台")]),a._v(" "),t("p",[a._v("若你正在使用 Windows，只需参考这篇文章："),t("a",{attrs:{href:"https://github.com/v2ray/discussion/issues/756",target:"_blank",rel:"noopener noreferrer"}},[a._v("[Tutorial] Windows 下手动编译、交叉编译 V2Ray 的详细方法"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"前序工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前序工作"}},[a._v("#")]),a._v(" 前序工作")]),a._v(" "),t("p",[a._v("V2Ray 使用 "),t("a",{attrs:{href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Golang"),t("OutboundLink")],1),a._v(" 作为主要编程语言，团队发布流程上使用 "),t("a",{attrs:{href:"https://bazel.build/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Bazel"),t("OutboundLink")],1),a._v(" 作为构建工具。推荐使用 Linux 或 macOS 进行开发，少量的脚本可能无法在 Windows 上正常运行。")]),a._v(" "),t("ul",[t("li",[a._v("安装 Golang: "),t("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[a._v("golang.org/doc/install"),t("OutboundLink")],1),a._v("，至少 1.15.x")]),a._v(" "),t("li",[a._v("安装 Bazel: "),t("a",{attrs:{href:"https://docs.bazel.build/versions/master/install.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("docs.bazel.build/install"),t("OutboundLink")],1),a._v(" （手工/脚本构建方式无需）")])]),a._v(" "),t("h2",{attrs:{id:"多种构建方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多种构建方式"}},[a._v("#")]),a._v(" 多种构建方式")]),a._v(" "),t("h3",{attrs:{id:"拉取-v2ray-源代码和依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取-v2ray-源代码和依赖"}},[a._v("#")]),a._v(" 拉取 V2Ray 源代码和依赖")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/v2fly/v2ray-core.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" v2ray-core "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" go mod download\n")])])]),t("p",[a._v("注意：在无法正常访问 Google 的网络环境，依赖无法被正常拉取，需要先设置 "),t("code",[a._v("GOPROXY")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" -w "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOPROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://goproxy.io,direct\n")])])]),t("h3",{attrs:{id:"手工构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手工构建"}},[a._v("#")]),a._v(" 手工构建")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("本小节的命令需要在 V2Ray 项目根目录内运行。")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CGO_ENABLED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" go build -o "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/v2ray -trimpath -ldflags "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-s -w -buildid="')]),a._v(" ./main\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CGO_ENABLED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" go build -o "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/v2ctl -trimpath -ldflags "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-s -w -buildid="')]),a._v(" -tags confonly ./infra/control/main\n")])])]),t("p",[a._v("运行以上命令会在当前用户的 "),t("code",[a._v("$HOME")]),a._v(" 目录下生成刚构建的 "),t("code",[a._v("v2ray")]),a._v("、"),t("code",[a._v("v2ctl")]),a._v(" 可执行文件，即可正常使用。")]),a._v(" "),t("p",[a._v("构建其他 CPU 架构、其他系统（Windows/macOS）的可执行文件，属于 Golang 的交叉编译流程，主要是控制 "),t("code",[a._v("GOOS")]),a._v(" / "),t("code",[a._v("GOARCH")]),a._v(" 两个环境变量，详情请参阅 Golang 相关文档。")]),a._v(" "),t("p",[a._v("下面演示如何构建可运行在 Windows 64 位系统的 "),t("code",[a._v("v2ray.exe")]),a._v("、"),t("code",[a._v("wv2ray.exe")]),a._v("、"),t("code",[a._v("v2ctl.exe")]),a._v(" 可执行文件：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CGO_ENABLED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("windows "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 go build -o "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/v2ray.exe -trimpath -ldflags "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-s -w -buildid="')]),a._v(" ./main\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CGO_ENABLED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("windows "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 go build -o "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/wv2ray.exe -trimpath -ldflags "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-s -w -H windowsgui -buildid="')]),a._v(" ./main\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CGO_ENABLED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("windows "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 go build -o "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/v2ctl.exe -trimpath -ldflags "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-s -w -buildid="')]),a._v(" -tags confonly ./infra/control/main\n")])])]),t("p",[a._v("执行 "),t("code",[a._v("go tool dist list")]),a._v(" 查看所有支持的系统与架构。某些架构还需要控制其它环境变量，如 "),t("code",[a._v("arm")]),a._v(" 的 "),t("code",[a._v("GOARM")]),a._v("，用于设置运行时 CPU 浮点协处理器的版本。")]),a._v(" "),t("h3",{attrs:{id:"脚本构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚本构建"}},[a._v("#")]),a._v(" 脚本构建")]),a._v(" "),t("p",[a._v("以上手工构建的只是 v2ray 可执行程序本身，发行包内还包含了地址库（"),t("code",[a._v("geoip.dat")]),a._v("、"),t("code",[a._v("geosite.dat")]),a._v("）、配置文件等其他文件。使用打包脚本可方便地制作出适用于多种操作系统、多种 CPU 架构的发布包。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://raw.githubusercontent.com/v2fly/v2ray-core/master/release/user-package.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("755")]),a._v(" user-package.sh\n./user-package.sh\n")])])]),t("p",[a._v("直接执行以上脚本即可在当前目录生成适用于 64 位 linux 操作系统的可执行文件，文件名类似于 "),t("code",[a._v("v2ray-custom-linux-amd64-20201008-104530.zip")]),a._v("，即为发布包。")]),a._v(" "),t("p",[a._v("你还可以使用一些个性化参数来定制发布包：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("windows")]),a._v(" 构建 Windows 版本的发布包")]),a._v(" "),t("li",[t("code",[a._v("darwin")]),a._v(" 构建 darwin（macOS）版本的发布包")]),a._v(" "),t("li",[t("code",[a._v("tgz")]),a._v(" 发布包使用 "),t("code",[a._v("tar.gz")]),a._v(" 格式")]),a._v(" "),t("li",[t("code",[a._v("386")]),a._v(" 构建 32 位可执行文件")]),a._v(" "),t("li",[t("code",[a._v("arm")]),a._v(" 构建适用于 arm 架构 CPU 的可执行文件")]),a._v(" "),t("li",[t("code",[a._v("mips")]),a._v(" 构建适合于 mips 架构 CPU 的可执行文件，请参阅 Golang 交叉编译文档")]),a._v(" "),t("li",[t("code",[a._v("nodat")]),a._v(" 不包含域名/IP 数据库 "),t("code",[a._v("geoip.dat")]),a._v("、"),t("code",[a._v("geosite.dat")]),a._v("（可以减小发布包的大小）")]),a._v(" "),t("li",[t("code",[a._v("noconf")]),a._v(" 不包含范例 JSON、Systemd/Systemv 等配置文件")]),a._v(" "),t("li",[t("code",[a._v("nosource")]),a._v(" 不要从远端拉取 V2Ray 源代码（此选项适用于本地已有 V2Ray 源代码的情况。运行脚本前必须先进入到本地 v2ray 代码根目录）")])]),a._v(" "),t("p",[a._v("以上参数没有次序要求，只需要按需传给脚本。下面以构建一个适用于 32 位 Windows 操作系统、不带地址库、不带样例配置的发布包为例：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./user-package.sh windows "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("386")]),a._v(" nodat noconf\n")])])]),t("p",[a._v("脚本构建的 v2ray，其启动信息会变成用户编译的时间，以做区分：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("V2Ray "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.30")]),a._v(".0 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20201008")]),a._v("-104530\nA unified platform "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" anti-censorship.\n")])])]),t("p",[a._v("用户还可自定义 "),t("code",[a._v("codename")]),a._v("，定制属于自己的版本：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./user-package.sh windows "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("386")]),a._v(" nodat noconf "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("codename")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("custom-codename\n")])])]),t("h3",{attrs:{id:"bazel-自动构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bazel-自动构建"}},[a._v("#")]),a._v(" Bazel 自动构建")]),a._v(" "),t("p",[a._v("Bazel 构建工具主要是发布团队使用。")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("本小节的命令需要在 V2Ray 项目根目录内运行。")])]),a._v(" "),t("p",[a._v("如果只需构建某个特定平台的发布包，如 64 位 Linux 系统，运行：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("bazel build --action_env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(" --action_env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SPWD"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PWD")]),a._v(" --action_env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("GOPATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOPATH"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" --action_env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("GOCACHE"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOCACHE"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" --spawn_strategy "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" //release:v2ray_linux_amd64_package\n")])])]),t("p",[a._v("构建所有平台、所有架构的发布包，运行：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("bazel build --action_env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(" --action_env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SPWD"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PWD")]),a._v(" --action_env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("GOPATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOPATH"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" --action_env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("GOCACHE"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOCACHE"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" --spawn_strategy "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" //release:all\n")])])]),t("p",[a._v("构建完成的文件位于 V2Ray 项目根目录内 "),t("code",[a._v("bazel-bin/release")]),a._v(" 文件夹里。")])])}),[],!1,null,null,null);s.default=r.exports}}]);