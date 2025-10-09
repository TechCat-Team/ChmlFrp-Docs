# [下载页面](https://panel.chmlfrp.cn/tunnel/download)软件下载的选择
在ChmlFrp下载中心页面通常会有
amd64 386 arm arm64 mips mipsle mips64 mips64le riscv64这几个指令集架构的选择
除此了这些之外还有个图形客户端的选择

此页文档描述了各个指令集架构，和您应该怎么选择与您对应的指令集。

## 指令集架构说明

对于大部分用户的电脑，直接选择对应系统的amd64指令集架构即可。

### amd64
适用于大多数现代桌面电脑、笔记本、服务器，基于64位x86架构。常见于Intel和AMD的64位处理器。

简单来说，如果您的CPU(中央处理器)为
 - Intel Core（酷睿） i9 14900k
 - Intel Xeon（志强） E5-2666v3
 - AMD Ryzen（锐龙） 9 7950X
 - AMD EPYC（霄龙）9654

这类的64位CPU，则选择amd64。

### 386
适用于较老的桌面电脑、笔记本、服务器，基于32位x86架构。常见于早期的Intel和AMD处理器。

简单来说，如果您的CPU(中央处理器)为
 - AMD K6-III
 - Intel Pentium
 - AMD Athlon MP

这类较老的32位CPU，则选择386。**值得注意的是，64位处理器向下兼容32位软件**，也就是说，如果您的CPU为i9 14900这类的amd64架构处理器，您也可以运行386架构的软件。

### arm
适用于许多移动设备和嵌入式系统，基于32位ARM架构。常见于老款手机、树莓派等设备。

如果您的SoC(系统级芯片)为
 - Qualcomm（高通） Snapdragon（晓龙）MSM8960
 - ARM Cortex-A15
 - Texas Instruments（德州仪器）OMAP4460
 - Samsung（三星）Exynos 4412
 - NVIDIA Tegra 3
 - MediaTek（联发科） MT6589
 - Broadcom（博通） BCM28155
 - Allwinner（全志） A20

这类的较老的SoC，则选择arm。

### arm64
适用于现代移动设备和嵌入式系统，基于64位ARM架构。常见于大多数新款手机、平板电脑和一些服务器。

如果您的SoC(系统级芯片)为
 - Qualcomm（高通） Snapdragon（晓龙） 8 Gen 3
 - Huawei（华为） Kirin（麒麟）9000
 - Apple A16 Bionic
 - Apple M4
 - Samsung（三星） Exynos 2200
 - MediaTek（联发科） Dimensity 9000
 - Microsoft SQ 2
 - NVIDIA Tegra X2
 - Broadcom（博通） BCM2711
 - Allwinner（全志） H6
 - Rockchip RK3328
 - Amlogic S922X
 - HiSilicon（海思） Hi3559

这类的SoC，则选择arm64。

### mips
适用于一些嵌入式设备，基于32位MIPS架构。

常见于[后面括号的内容为举例的产品型号]
 - 路由器(TP-Link TL-WR740N)
 - 网络存储(Synology DS119j)
 - 智能家居(Nest Thermostat E)
 - 电视盒子(Western Digital WD TV Live)
 - 开发板(Creator Ci20)
 - 家用游戏机(Sony PlayStation 2)
 - 家庭网关/调制解调器(Zyxel AMG1302)
 - 手持设备(Sony PSP（PlayStation Portable）)

### mipsle
适用于一些嵌入式设备，基于32位小端序MIPS架构。常见于特定的路由器和网络设备。

常见于[后面括号的内容为举例的产品型号]:
 - 路由器（MikroTik RouterBOARD RB951G-2HnD）
 - 网络存储（QNAP TS-112）
 - 家庭网关/调制解调器（Netgear DGND3700v2）
 - 电视盒子（Dune HD Solo 4K）
 - 开发板（MIPS Creator CI20）
 - 智能家居设备（Belkin WeMo Switch）

### mips64
适用于高性能嵌入式设备，基于64位MIPS架构。常见于高端路由器和网络设备。

常见于[后面括号的内容为举例的产品型号]:
 - 路由器（EdgeRouter Infinity）
 - 网络存储（高端Synology NAS设备）
 - 服务器（部分嵌入式服务器设备）

### mips64le
适用于高性能嵌入式设备，基于64位小端序MIPS架构。常见于特定的高端路由器和网络设备。

常见于[后面括号的内容为举例的产品型号]:
 - 路由器（Ubiquiti EdgeRouter 4）
 - 网络存储（QNAP TS-831X）
 - 服务器（嵌入式网络服务器）

### riscv64
适用于新兴的嵌入式和计算设备，基于64位RISC-V架构。常见于一些新型的开源硬件项目。