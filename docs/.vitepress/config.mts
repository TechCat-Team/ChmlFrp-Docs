import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ChmlFrp | 使用文档 - Docs",
  description: "这里是ChmlFrp的官方使用文档，包含多平台映射创建、启动教程。除此之外，这里还有更多额外配置教程，例如通过ChmlFrp进行MC开服、TS语音、Web搭建、远程服务教程。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    siteTitle: 'ChmlFrpDocs',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '使用文档', link: '/docs/' },
      {
        text: 'API文档',
        items: [
          { text: 'v1 版本', link: '/API/v1/' },
          { text: 'v2 版本', link: '/API/v2/' }
        ]
      },
      { text: '条款与政策', link: '/terms/' }
    ],

    // 添加侧边栏配置
    sidebar: {
      '/API/v1/': [
        {
          text: 'API v1 文档',
          items: [
            { text: 'v1 介绍', link: '/API/v1/' },
            {
              text: '用户认证',
              items: [
                { text: '登录', link: '/API/v1/User_Actions/login' },
                { text: '重置令牌', link: '/API/v1/User_Actions/resusertoken' },
                { text: '签到信息', link: '/API/v1/User_Actions/qdxx' },
                { text: '用户信息', link: '/API/v1/User_Actions/userinfo' },
                { text: '用户流量消耗', link: '/API/v1/User_Actions/flow_zong' },
                { text: '用户节点数据', link: '/API/v1/User_Actions/confignode' },
                { text: '兑换码兑换', link: '/API/v1/User_Actions/giftcode' },
              ]
            },
            {
              text: '域名操作',
              items: [
                { text: '域名解析查询', link: '/API/v1/Domain_name_query/Domain_name_query' },
              ]
            },
            {
              text: '面板信息',
              items: [
                { text: '面板设置', link: '/API/v1/usersetup/usersetup' },
                { text: '面板信息', link: '/API/v1/usersetup/sinfo' }
              ]
            },
            {
              text: '节点信息',
              items: [
                { text: '节点信息', link: '/API/v1/unode/unode' },
              ]
            },
            {
              text: '隧道操作',
              items: [
                { text: '用户隧道信息', link: '/API/v1/Tunnel_operations/usertunnel' },
                { text: '隧道信息', link: '/API/v1/Tunnel_operations/tunnelinfo' },
                { text: '新建隧道', link: '/API/v1/Tunnel_operations/tunnel' },
                { text: '修改隧道', link: '/API/v1/Tunnel_operations/cztunnel' },
                { text: '删除隧道', link: '/API/v1/Tunnel_operations/deletetl' },
                { text: 'frp配置文件生成', link: '/API/v1/Tunnel_operations/frpconfig' },
              ]
            },
          ]
        }
      ],
      '/API/v2/': [
        {
          text: 'API v2 文档',
          items: [
            { text: 'v2 介绍', link: '/API/v2/' },
            {
              text: '用户认证',
              items: [
                { text: '登录', link: '/API/v2/User_Actions/login' },
                { text: '用户信息', link: '/API/v2/User_Actions/userinfo' },
                { text: '重置令牌', link: '/API/v2/User_Actions/retoken' },
                { text: '重置密码', link: '/API/v2/User_Actions/reset_password' },
                { text: '修改用户名', link: '/API/v2/User_Actions/update_username' },
                { text: '修改QQ', link: '/API/v2/User_Actions/update_qq' },
                { text: '重置头像', link: '/API/v2/User_Actions/update_userimg' },
                { text: '获取消息', link: '/API/v2/User_Actions/messages' },
              ]
            },
            {
              text: '隧道操作',
              items: [
                { text: '隧道列表', link: '/API/v2/Tunnel_operations/tunnel' },
                { text: '创建隧道', link: '/API/v2/Tunnel_operations/create_tunnel' },
                { text: '修改隧道', link: '/API/v2/Tunnel_operations/update_tunnel' },
                { text: '删除隧道', link: '/API/v2/Tunnel_operations/delete_tunnel' },
                { text: '生成配置文件', link: '/API/v2/Tunnel_operations/tunnel_config' },
              ]
            },
            {
              text: '面板信息',
              items: [
                { text: '面板信息', link: '/API/v2/Panel_information/panelinfo' },
                { text: 'API状态', link: '/API/v2/Panel_information/server-status' }
              ]
            },
            {
              text: '域名操作',
              items: [
                { text: '获取可用域名列表', link: '/API/v2/Domain_name_operations/list_available_domains' },
                { text: '创建免费二级域名', link: '/API/v2/Domain_name_operations/create_free_subdomain' },
                { text: '修改免费二级域名', link: '/API/v2/Domain_name_operations/update_free_subdomain' },
                { text: '删除免费二级域名', link: '/API/v2/Domain_name_operations/delete_free_subdomain' },
                { text: '获取用户免费二级域名', link: '/API/v2/Domain_name_operations/get_user_free_subdomains' },
              ]
            },
            {
              text: '节点操作',
              items: [
                { text: '节点列表', link: '/API/v2/Node_operations/node' },
                { text: '节点详情', link: '/API/v2/Node_operations/nodeinfo' },
                { text: '节点状态', link: '/API/v2/Node_operations/node_stats' },
                { text: '节点在线率', link: '/API/v2/Node_operations/node_uptime' },
                { text: '节点状态详情', link: '/API/v2/Node_operations/node_status_info' },
              ]
            },
          ]
        }
      ],
      '/docs/': [
        {
          text: 'ChmlFrp 文档',
          items: [
            { text: '首页', link: '/docs/' },
            { text: '软件下载的选择', link: '/docs/guide/download' },
            { text: '如何正确提问', link: '/docs/guide/question' },
            { text: '友链申请须知', link: '/docs/guide/friends' },
            {
              text: '使用文档',
              items: [
                { text: '映射使用教程', link: '/docs/use/mapping' },
                { text: '映射开机自启', link: '/docs/use/autostart' },
              ],
            },
            {
              text: 'NAS启动',
              items: [
                { text: '飞牛NAS', link: '/docs/nas/fnOS' },
              ],
            },
            {
              text: '其他教程',
              items: [
                { text: 'MC 外置登录', link: '/docs/other/mc-login' },
                { text: 'MC 联机教程', link: '/docs/other/mc-connect' },
                { text: '远程连接', link: '/docs/other/remote-connect' },
                { text: 'CS2 联机教程', link: '/docs/other/cs2-connect' },
                { text: 'MCSM 搭建', link: '/docs/other/mcsm-setup' },
                { text: '像素工厂联机', link: '/docs/other/pixel-factory' },
                { text: '幻兽帕鲁开服', link: '/docs/other/fabulu-open' },
                { text: '铁锈战争联机', link: '/docs/other/rust-wars' },
              ],
            },
            {
              text: '域名解析',
              items: [
                { text: 'CNAME 解析', link: '/docs/dns/cname' },
                { text: 'SRV 解析', link: '/docs/dns/srv' },
                { text: 'A 记录解析', link: '/docs/dns/a-record' },
              ],
            },
            {
              text: '常见问题',
              items: [
                { text: 'Frpc 软件问题', link: '/docs/faq/frpc' },
                { text: '网站相关问题', link: '/docs/faq/website' },
              ],
            },
          ],
        },
      ],
      '/terms/': [
        {
          text: '条款与政策',
          items: [
            { text: '条款首页', link: '/terms/' },
            { text: '服务条款', link: '/terms/terms-of-service' },
            { text: '隐私政策', link: '/terms/privacy-policy' },
            { text: '免责声明', link: '/terms/disclaimer' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TechCat-Team/ChmlFrp-Docs' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-2025'
    }
  },
  sitemap: {
    hostname: 'https://docs.chmlfrp.cn'
  }
})