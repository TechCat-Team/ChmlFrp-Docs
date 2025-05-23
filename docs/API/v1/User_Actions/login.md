# 登录
- 接口
    > /login.php 
- 请求参数

    Query/表单:

    |    属性    |   类型   |    说明     |
    |:--------:|:------:|:---------:|
    | username | string | 用户名/用户QQ号 |
    | password | string |    密码     |

- 返回

    通常为两种情况 请注意分辨

    - 查询成功返回

        |       属性       |   类型   |      说明       |
        |:--------------:|:------:|:-------------:|
        |      code      | number |      状态码      |
        |     token      | string |     用户令牌      |
        |     userid     | number |     用户id      |
        |   usergroup    | string |     用户权限组     |
        |      term      | string |   用户权限组过期时间   |
        |       qq       | string |    用户绑定QQ号    |
        |     email      | string |    用户绑定邮箱     |
        |     tunnel     | number |   用户可开通的隧道数   |
        |  tunnelstate   | number |   用户已开通的隧道数   |
        |    message     | string |     返回信息      |
        |    userimg     | string |    用户头像url    |
        |    username    | string |     用户名称      |
        |   bandwidth    | number | *用户带宽限制(Mdps) |
        |    realname    | string |    用户实名状态     |
        | background_img | string |   用户背景图片url   |

        ```
        用户带宽限制:
        国内带宽限制: bandwidth*1
        国外宽带限制: bandwidth*4
        ```
    - 查询失败返回

        |  属性   |   类型   |  说明  |
        |:-----:|:------:|:----:|
        | error | string | 错误信息 |