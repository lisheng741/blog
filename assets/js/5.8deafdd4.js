(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{408:function(t,a,s){t.exports=s.p+"assets/img/image-20220520154238785.b6c79c42.png"},409:function(t,a,s){t.exports=s.p+"assets/img/image-20220520160254594.458b71fe.png"},410:function(t,a,s){t.exports=s.p+"assets/img/image-20220520160624087.0c6bf44d.png"},411:function(t,a,s){t.exports=s.p+"assets/img/image-20220520160816243.42ea624d.png"},454:function(t,a,s){"use strict";s.r(a);var e=s(56),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"基于-baget-搭建-nuget-服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于-baget-搭建-nuget-服务器"}},[t._v("#")]),t._v(" 基于 BaGet 搭建 Nuget 服务器")]),t._v(" "),e("h2",{attrs:{id:"_1-前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1 前言")]),t._v(" "),e("h3",{attrs:{id:"_1-1-baget-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-baget-介绍"}},[t._v("#")]),t._v(" 1.1 BaGet 介绍")]),t._v(" "),e("p",[t._v("BaGet 是一个轻量级的，开源的，跨平台的 Nuget 和 symbol 服务器。")]),t._v(" "),e("h3",{attrs:{id:"_1-2-环境介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-环境介绍"}},[t._v("#")]),t._v(" 1.2 环境介绍")]),t._v(" "),e("p",[t._v("操作系统：CentOS 7")]),t._v(" "),e("p",[t._v("使用 Docker 安装")]),t._v(" "),e("h2",{attrs:{id:"_2-安装步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装步骤"}},[t._v("#")]),t._v(" 2 安装步骤")]),t._v(" "),e("h3",{attrs:{id:"_2-1-配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-配置文件"}},[t._v("#")]),t._v(" 2.1 配置文件")]),t._v(" "),e("p",[t._v("登录 Linux 服务器以后，在 /root 目录下，创建一个 baget.env 文件：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" baget.env\n")])])]),e("p",[t._v("使用 vim 进入编辑：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" baget.env\n")])])]),e("p",[t._v("输入下面内容，将 ApiKey 设置为自己的密码：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The following config is the API Key used to publish packages.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You should change this to a secret value to secure your server.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ApiKey")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("NUGET-SERVER-API-KEY\n\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Storage__Type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("FileSystem\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Storage__Path")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/var/baget/packages\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Database__Type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Sqlite\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Database__ConnectionString")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Data "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Source")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/var/baget/baget.db\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Search__Type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Database\n")])])]),e("p",[t._v("更多的配置，可以查看："),e("a",{attrs:{href:"https://loic-sharma.github.io/BaGet/configuration/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BaGet's configuration"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"_2-2-拉取-docker-镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-拉取-docker-镜像"}},[t._v("#")]),t._v(" 2.2 拉取 Docker 镜像")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull loicsharma/baget\n")])])]),e("h3",{attrs:{id:"_2-3-启动-baget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-启动-baget"}},[t._v("#")]),t._v(" 2.3 启动 Baget")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run --rm --name nuget-server -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5555")]),t._v(":80 --env-file baget.env -v "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('/baget-data:/var/baget"')]),t._v(" loicsharma/baget:latest\n")])])]),e("p",[t._v("-p 5555:80 是把 docker 容器内的 80 端口映射到服务器的 5555 端口。")]),t._v(" "),e("p",[t._v("启动如果没有报错，则访问 http://服务器ip:5555，如 http://192.168.10.20:5555 即可成功访问")]),t._v(" "),e("h2",{attrs:{id:"_3-上传-nuget-包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-上传-nuget-包"}},[t._v("#")]),t._v(" 3 上传 Nuget 包")]),t._v(" "),e("h3",{attrs:{id:"_3-1-新建一个类库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-新建一个类库"}},[t._v("#")]),t._v(" 3.1 新建一个类库")]),t._v(" "),e("p",[t._v("使用 vs2022 新建一个类库，命名 MessageLib")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("MessageLib")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageLib")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" Version "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test message!!!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("右键项目属性，找到【包】一项，勾选 “在构建时生成 NuGet” 包。")]),t._v(" "),e("p",[t._v("并根据需要，指定包的一些属性，如包ID、版本等信息。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(408),alt:"image-20220520154238785"}})]),t._v(" "),e("h3",{attrs:{id:"_3-2-生成解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-生成解决方案"}},[t._v("#")]),t._v(" 3.2 生成解决方案")]),t._v(" "),e("p",[t._v("vs2022 的输出窗口输出如下信息：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("已还原 D:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("_code"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("testnetcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Nuget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessageLib"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessageLib"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessageLib.csproj "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("用时 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" ms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("。\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v("------ 已启动全部重新生成: 项目: MessageLib, 配置: Debug Any CPU ------\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v("MessageLib -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" D:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("_code"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("testnetcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Nuget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessageLib"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessageLib"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("bin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Debug"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("net6.0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessageLib.dll\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v("已成功创建包“D:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("_code"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("testnetcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Nuget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessageLib"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessageLib"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("bin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Debug"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessageLib.1.0.0.nupkg”。\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" 全部重新生成: 成功 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 个，失败 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" 个，跳过 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" 个 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n")])])]),e("h3",{attrs:{id:"_3-3-上传-nuget-包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-上传-nuget-包"}},[t._v("#")]),t._v(" 3.3 上传 Nuget 包")]),t._v(" "),e("p",[e("code",[t._v("Ctrl")]),t._v(" + "),e("code",[t._v("~")]),t._v(" 打开开发者 PowerShell，切换目录到上一步生成的包的路径：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" D:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("_code"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("testnetcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Nuget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessageLib"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessageLib"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("bin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Debug"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n")])])]),e("p",[t._v("然后输入 publish 命令：")]),t._v(" "),e("p",[t._v("注意将命令中的地址改成自己的服务器地址，并且将 NUGET-SERVER-API-KEY 改成 baget.env 配置文件中设置的 ApiKey，包名 MessageLib.1.0.0.nupkg 对应改成自己的包名")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("dotnet nuget push -s http://localhost:5555/v3/index.json -k NUGET-SERVER-API-KEY MessageLib.1.0.0.nupkg\n")])])]),e("p",[t._v("在网页中，可以看到上传的包：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(409),alt:"image-20220520160254594"}})]),t._v(" "),e("h2",{attrs:{id:"_4-使用方式1-修改-vs-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用方式1-修改-vs-配置"}},[t._v("#")]),t._v(" 4 使用方式1：修改 VS 配置")]),t._v(" "),e("p",[t._v("使用自建服务器的 Nuget 包")]),t._v(" "),e("h3",{attrs:{id:"_4-1-修改-vs-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-修改-vs-配置"}},[t._v("#")]),t._v(" 4.1 修改 VS 配置")]),t._v(" "),e("p",[t._v("在：工具 -> 选项")]),t._v(" "),e("p",[t._v("添加一个新的包源，输入名称和源，点更新，确定")]),t._v(" "),e("p",[e("img",{attrs:{src:s(410),alt:"image-20220520160624087"}})]),t._v(" "),e("h3",{attrs:{id:"_4-2-引入-nuget-包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-引入-nuget-包"}},[t._v("#")]),t._v(" 4.2 引入 Nuget 包")]),t._v(" "),e("p",[t._v("在 Nuget 包界面中，选择程序包源为自己刚添加的自建服务器，选择对应的包安装即可。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(411),alt:"image-20220520160816243"}})]),t._v(" "),e("h2",{attrs:{id:"_5-使用方式2-修改项目配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用方式2-修改项目配置"}},[t._v("#")]),t._v(" 5 使用方式2：修改项目配置")]),t._v(" "),e("h3",{attrs:{id:"增加-nuget-config-配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#增加-nuget-config-配置文件"}},[t._v("#")]),t._v(" 增加 nuget.config 配置文件")]),t._v(" "),e("p",[t._v("在解决方案根目录，或者项目目录下，增加 nuget.config 配置文件。")]),t._v(" "),e("p",[t._v("注意：如果在解决方案根目录下增加，则该文件的配置，会覆盖默认的 VS 设置。")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="utf-8"?>')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("configuration")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Define the package sources, nuget.org and contoso.com. --\x3e")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- `clear` ensures no additional sources are inherited from another config file. --\x3e")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("packageSources")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("clear")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- `key` can be any identifier for your source. --\x3e")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nuget.org"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://api.nuget.org/v3/index.json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mynuget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://175.178.244.200:6020/v3/index.json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("packageSources")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Define mappings by adding package patterns beneath the target source. --\x3e")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Contoso.* packages and NuGet.Common will be restored from contoso.com, everything else from nuget.org. --\x3e")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("packageSourceMapping")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- key value for <packageSource> should match key values from <packageSources> element --\x3e")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("packageSource")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nuget.org"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("package")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("pattern")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("packageSource")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("packageSource")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mynuget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("package")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("pattern")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("MessageLib"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("package")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("pattern")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("MessageLib.*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("packageSource")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("packageSourceMapping")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("configuration")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("如上配置文件所示，MessageLib 这个 NuGet 包会通过 mynuget 这个源来还原，其他的使用默认的 nuget.org 还原。")]),t._v(" "),e("h2",{attrs:{id:"参考来源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考来源"}},[t._v("#")]),t._v(" 参考来源")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://loic-sharma.github.io/BaGet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BaGet"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);