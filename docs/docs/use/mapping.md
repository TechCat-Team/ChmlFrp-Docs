# ChmlFrp使用教程

此篇介绍了Windows Linux等客户端的使用教程，包含了‘创建隧道/启动隧道’等基础教程。并不包含MC开服这类教程。


Q/A

 - 如何启动多个隧道：(如果是不同的节点，启动多个frpc软件即可。如果是相同的节点，重新获取配置文件，配置文件默认启动此节点的所有隧道，然后剪切进frpc.ini再重启即可。)

## 视频教程

[【ChmlFrp V3版食用教程】 —— UP:MilkyMay5201314](https://www.bilibili.com/video/BV13wewz8EBN)

## 图文教程

### 创建隧道

请先访问[Chmlfrp官网(https://chmlfrp.cn)](https://chmlfrp.cn)

进入以后 请点击下方的"管理面板"

![首页截图](./img/mapping//1.webp)

如果您没有账户，则需要注册

![注册截图](./img/mapping//2.webp)

![注册详情截图](./img/mapping//20.webp)

已有账户可直接登录

![登录截图](./img/mapping//3.webp)

如果您没有实名认证，主页会标注"您尚未实名"，点击实名提示框即可跳转至实名认证页面。

![实名认证提示截图](./img/mapping//21.webp)

如果您已实名，进入控制面板后请依次点击 "隧道管理" "隧道列表"

![主页面截图](./img/mapping//4.webp)

点击右上角"添加隧道"

![添加隧道截图](./img/mapping//5.webp)

选择一个节点

![节点选择截图](./img/mapping//6.webp)

这里会显示该节点的所有需要信息

![节点选择信息截图](./img/mapping//22.webp)

点击继续

输入您的隧道信息

![创建隧道截图](./img/mapping//7.webp)

 - 隧道名称也就是隧道ID 非必要不建议动(此ID为该节点公用，并非单您账户使用)
 - 本地IP就是你要映射的本地IP 一般为127.0.0.1,也就是本机(如给局域网其他机器使用，请填写该机器的内网IP地址)
 - 节点选择就是你刚刚选择的节点
 - 端口类型可以选一下你要什么协议 例：TCP UDP HTTP HTTPS(HTTPS需您自备SSL证书并配置好)
 - 内网端口就是你要映射的本地端口号(非0)
 - 外网端口是映射后的外网端口号(为该节点公用，重复请输入其他端口号)
 - 高级设置 非必要不建议动

![录入节点截图](./img/mapping//8.webp)

当出现这个提示时
这样 你的内网穿透隧道就创建好了
你的映射后外网地址就是链接地址

## Windows 启动隧道(FRPC)

### Windows frpc下载

首先进入到你的服务器中 用网页打开[chmlfrp官网中的软件下载](https://panel.chmlfrp.cn/tunnel/download)界面

![软件下载截图](./img/mapping//windowsfrpc1.webp)

如果你是64位操作系统 请选择 amd64 版本
如果你是32位操作系统 请选择 386 版本

右键此电脑->属性 在系统类型里会写xx位操作系统 基于xxx的处理器

当你下载完成后 请解压压缩包成文件夹

![解压截图](./img/mapping//windowsfrpc2.webp)

双击**"ChmlFrp-x.x.x_windows_amd64"**文件夹，进入到相应目录

![文件夹截图](./img/mapping//windowsfrpc3.webp)

双击打开frpc.ini文件备用

![frpcini截图](./img/mapping//windowsfrpc4.webp)

回到浏览器 打开[Chmlfrp配置文件](https://panel.chmlfrp.cn/tunnel/config)页面

![浏览器配置文件页面截图](./img/mapping//windowsfrpc5.webp)

依次进行

- 选择你要映射的隧道的节点
- 点击生成配置文件
- 复制配置文件

回到frpc.ini页面

将刚刚复制的配置文件粘贴进frpc.ini
保存frpc.ini文件

![frpc.ini文件截图](./img/mapping//windowsfrpc6.webp)

在地址栏输入cmd 用当前地址打开命令提示符

输入frpc.exe 打开frpc

![CMD启动截图](./img/mapping//windowsfrpc7.webp)

等待他出现上图的"映射启动成功, 感谢您使用ChmlFrp!"就启动成功了

## Linux 启动隧道(FRPC)

首先进入到您的Linux服务器，这里以Centos 7.9为例

![SSH截图](./img/mapping/12.webp)

然后wget下载最新版本的映射软件。请下载对应的指令集，如果您是amd64架构，则下载amd64。这里以amd64为例。

**示例代码**
```shell
wget https://chmlfrp.cn/dw/ChmlFrp-0.51.2_linux_amd64.tar.gz
```

![wget代码截图](./img/mapping//13.webp)

如果提示-bash: wget: command not found（如上图），则输入以下指令。如果没有则跳过这一步。

**Centos**
```shell
yum install wget
```
**Ubuntu**
```shell
sudo apt-get install wget
```

等待安装完wget，如果中途出现"Is this ok [y/d/N]:"直接输入y然后回车即可。

![wget安装时截图](./img/mapping//14.webp)

直到出现"Complete!"则代表安装完成。部分ssh终端为自动翻译为"完毕!"。安装好wget后继续执行(已经执行过一次的不用继续执行)

```shell
wget https://chmlfrp.cn/dw/ChmlFrp-0.51.2_linux_amd64.tar.gz
```

![linux下载chmlfrp客户端截图](./img/mapping//15.webp)

如上图，这样即为下载成功。如果下载失败，可手动下载后上传至服务器。

接着输入以下指令解压tar.gz包(**注,如果您下载的版本不一样,-zxf后面的名字也不一样,替换为你下载的文件名即可。**)：

```shell
tar -zxf ChmlFrp-0.51.2_linux_amd64.tar.gz
```

解压后输入ls，即可看见此目录下的文件，可以看见解压后的文件为**frp_ChmlFrp-0.51.2_linux_amd64**，则输入cd指令进入到解压后的文件夹内

```shell
cd frp_ChmlFrp-0.51.2_linux_amd64
```

![进入到解压后的文件夹截图](./img/mapping//16.webp)

随后进入到ChmlFrp_Panel控制面板，俗称chmlfrp网站，依次点击"隧道管理"  "配置文件"，选择节点(注意!这里**只有创建过隧道才会让你选择，否则为空白**)获取配置文件

![获取配置文件截图](./img/mapping//17.webp)

然后回到到Linux，输入以下指令修改frpc.ini文件。

```shell
vi frpc.ini
```

进入到linux的文档编辑工具后，按**i**启动编辑(不按则无法编辑文件)，删除原来的内容，把从网站获取的配置文件粘贴进去

ssh终端的粘贴方法可能为：
- 右键粘贴
- Ctrl+V粘贴
- Ctrl+Shift+V粘贴
您需要选择适合您ssh终端的方法

![粘贴配置文件后的截图](./img/mapping//18.webp)

粘贴进去后按键盘上的**ESC**，进入指令模式。然后输入**:wq**(注意！需要全小写的:wq，必须要带':')后回车，即可保存文件并返回到主目录。

然后使用./frpc -c frpc.ini指令检查是否能正常启动隧道

![启动隧道截图](./img/mapping//19.webp)

如果出现"映射启动成功"，则代表frp已正常启动。**在这个时候就已经启动好了，但是关掉ssh终端后映射会自动结束**。

如果需要在后台运行FRPC(映射)，则需要使用后台执行指令。

首先按Ctrl+C结束运行frpc(映射)，然后输入以下指令：

```shell
nohup ./frpc -c frpc.ini >/dev/null 2>&1 &
```

如果出现类似："[1] 16047"，则代表后台启动成功。16047为进程ID，这串数字每人都不一样，如果需要结束frpc(映射)进程，输入**kill 16047**即可。

## Mac OS 启动隧道(FRPC)

首先登录到你的MAC电脑中，用浏览器打开chmlfrp官网中的软件下载界面。系统选择Darwin，选择对应架构的软件下载(例如m4芯片为arm64，英特尔芯片为amd64)。

![ChmlFrp下载页面](./img/mapping//mac1.webp)

下载完成后解压缩，并进入到解压后的文件夹内

![解压缩后的文件夹](./img/mapping//mac2.webp)

回到ChmlFrp网页中，前往配置文件页面，生成你要启动的配置文件。复制配置文件后回到文件夹页面，右键frpc.ini，随后通过文本编辑器打开frpc.ini

![MAC打开frpc.ini文件夹](./img/mapping//mac3.webp)

打开后，把从ChmlFrp获取的配置文件粘贴进frpc.ini文件内

![frpc.ini文件内](./img/mapping//mac4.webp)

随后保存文件，打开mac终端，输入
```shell
cd 解压后的ChmlFrp文件夹路径
```
然后回车，进入到ChmlFrp文件夹，再使用
```shell
./frpc
```
指令启动ChmlFrp

![frpc.ini](./img/mapping//mac5.webp)

**至此，ChmlFrp启动完成**