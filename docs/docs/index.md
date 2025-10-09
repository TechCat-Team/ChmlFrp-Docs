# ChmlFrp Docs

如果您是初次启动隧道，请直接查看隧道启动教程。此教程内包含多数系统的启动教程。

<div class="group-container">
  <a class="group-card" href="/docs/guide/download">软件下载的选择</a>
  <a class="group-card" href="/docs/guide/friends">友链申请须知</a>
  <a class="group-card" href="/docs/guide/question">如何正确提问</a>
</div>

## 🧭 使用文档

<div class="group-container">
  <a class="group-card" href="/docs/use/mapping">映射使用教程</a>
  <a class="group-card" href="/docs/use/autostart">映射开机自启</a>
  <a class="group-card" href="/docs/use/account">注册与注销账户</a>
  <a class="group-card" href="/docs/use/tunnel-create">创建隧道</a>
  <a class="group-card" href="/docs/use/tunnel-start">启动隧道</a>
</div>

## 🛠️ 其他教程

<div class="group-container">
  <a class="group-card" href="/docs/other/mc-login">MC外置登录教程</a>
  <a class="group-card" href="/docs/other/mc-connect">MC联机教程</a>
  <a class="group-card" href="/docs/other/remote-connect">远程连接教程</a>
  <a class="group-card" href="/docs/other/cs2-connect">CS2联机教程</a>
  <a class="group-card" href="/docs/other/ip-lookup">获取数字IP教程</a>
  <a class="group-card" href="/docs/other/pc-power">电脑开机与关机教程</a>
  <a class="group-card" href="/docs/other/mcsm-setup">MCSM搭建教程</a>
  <a class="group-card" href="/docs/other/pixel-factory">像素工厂联机教程</a>
  <a class="group-card" href="/docs/other/fabulu-open">幻兽帕鲁开服教程</a>
  <a class="group-card" href="/docs/other/rust-wars">铁锈战争联机教程</a>
</div>

## 🌐 域名解析

<div class="group-container">
  <a class="group-card" href="/docs/dns/cname">CNAME解析</a>
  <a class="group-card" href="/docs/dns/srv">SRV解析</a>
  <a class="group-card" href="/docs/dns/a-record">A解析</a>
</div>

## ❓︎ 常见问题

<div class="group-container">
  <a class="group-card" href="/docs/faq/frpc">Frpc软件问题</a>
  <a class="group-card" href="/docs/faq/website">网站问题</a>
</div>


<style>
/* 容器布局 */
.group-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.8rem;
  margin-top: 1rem;
}

/* 卡片样式 */
.group-card {
  display: block;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  text-align: center;
  font-weight: 500;
  transition: all 0.25s ease;
  
  /* 清除默认链接样式 */
  color: var(--vp-c-text-1);
  text-decoration: none;
}

/* 禁止所有默认a状态样式 */
.group-card:link,
.group-card:visited,
.group-card:hover,
.group-card:active,
.group-card:focus {
  text-decoration: none !important;
  color: inherit;
}

/* 悬停效果 */
.group-card:hover {
  background: var(--vp-c-bg);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

/* 小屏优化 */
@media (max-width: 600px) {
  .group-card {
    font-size: 0.95rem;
    padding: 0.9rem;
  }
}
</style>
