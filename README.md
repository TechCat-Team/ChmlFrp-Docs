# ChmlFrp 官方文档

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg)](https://pnpm.io/)
[![Vitepress](https://img.shields.io/badge/powered%20by-Vitepress-42b883.svg)](https://vitepress.vuejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> ChmlFrp 项目的官方文档仓库，包含产品使用文档、开发教程和 API 参考。

## 📚 目录

- [快速开始](#-快速开始)
- [本地开发](#本地开发)
- [项目结构](#-项目结构)
- [工具集](#-工具集)
  - [PNG to WebP 批量转换器](#png-to-webp-批量转换器)
- [参与贡献](#-参与贡献)
- [许可证](#-许可证)

## 🚀 快速开始

### 环境要求

- [Node.js](https://nodejs.org/) 18.0+
- [pnpm](https://pnpm.io/) 8.0+

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/TechCat-Team/ChmlFrp-Docs.git
cd chmlfrp-docs

# 安装依赖
pnpm install

# 启动开发服务器
pnpm docs:dev

# 构建生产版本
pnpm docs:build

# 预览生产构建
pnpm docs:preview
```

##[object Object]项目结构

```
chmlfrp-docs/
├── docs/                 # 文档源文件
├── tools/               # 开发工具集
│   └── convert_png_to_webp.py  # PNG 转 WebP 工具
├── package.json
└── README.md
```

## 🛠 工具集

为了提升开发效率和文档质量，我们提供了一些实用工具。

### PNG to WebP 批量转换器

专为网站优化设计的图片格式转换工具，将 PNG 图片批量转换为 WebP 格式，有效减少文件大小并提升网页加载速度。

#### ✨ 功能特性

- **📁 自动遍历**: 自动遍历指定目录及其子目录中的所有 PNG 文件
- **⚙️ 质量控制**: 支持自定义 WebP 质量设置 (1-100)
- **📊 进度显示**: 转换时显示转换进度和统计信息
- **💾 空间节省**: 显示文件大小压缩统计
- **🗑️ 可选删除**: 可选择转换后删除原 PNG 文件
- **⚡ 高效处理**: 支持批量处理大量文件
- **🛡️ 错误处理**: 完善的错误处理和异常捕获

#### 📦 安装依赖

```bash
pip install Pillow
```

如果遇到 WebP 支持问题，可能需要安装系统依赖：

<details>
<summary>系统依赖安装指南</summary>

**Ubuntu/Debian:**
```bash
sudo apt-get install libwebp-dev
pip install --upgrade Pillow
```

**macOS:**
```bash
brew install webp
pip install --upgrade Pillow
```

**Windows:**
```bash
pip install --upgrade Pillow
```

</details>

#### 🚀 使用方法

##### 基本用法

```bash
# 转换当前目录下的所有 PNG 文件
python ./tools/convert_png_to_webp.py

# 转换指定目录
python ./tools/convert_png_to_webp.py ./docs
```

##### 高级选项

```bash
# 设置 WebP 质量为 90%
python ./tools/convert_png_to_webp.py ./docs --quality 90

# 转换后删除原 PNG 文件
python ./tools/convert_png_to_webp.py ./docs --delete-original

# 静默模式（只显示最终统计）
python ./tools/convert_png_to_webp.py ./docs --quiet

# 组合使用
python ./tools/convert_png_to_webp.py ./docs --quality 85 --delete-original --quiet
```

##### 参数说明

| 参数 | 短参数 | 说明 | 默认值 |
|------|--------|------|--------|
| `directory` | - | 要处理的目录路径 | 当前目录 |
| `--quality` | `-q` | WebP 质量 (1-100) | 85 |
| `--delete-original` | `-d` | 删除原 PNG 文件 | False |
| `--quiet` | `-s` | 静默模式 | False |

##### 💡 使用建议

```bash
# 推荐设置：高质量转换，保留原文件
python ./tools/convert_png_to_webp.py ./docs --quality 90

# 确认转换效果满意后，可以删除原文件
python ./tools/convert_png_to_webp.py ./docs --quality 90 --delete-original
```

**质量设置建议：**

- **95-100**: 几乎无损，适用于重要图片
- **85-95**: 高质量，适用于大部分网站图片 ⭐ **推荐**
- **75-85**: 中等质量，平衡文件大小和质量
- **60-75**: 较小文件，适用于缩略图或装饰图片

##### 📈 输出示例

```
🔍 正在搜索目录: ./docs
📁 找到 137 个 PNG 文件
⚙️  转换设置: 质量=85%, 删除原文件=否
────────────────────────────────────────────────────────────
[1/137] 正在处理: image1.png
  ✅ 成功: 45.2 KB → 32.1 KB (节省 29.0%)
[2/137] 正在处理: image2.png
  ✅ 成功: 67.8 KB → 48.3 KB (节省 28.8%)
...
──────────────────────────────────────────────────────[object Object] 转换完成统计:
  ✅ 成功转换: 137 个文件
  ❌ 转换失败: 0 个文件
  💾 总计节省: 2.3 MB
  ⏱️  耗时: 12.45 秒
  📈 平均速度: 0.09 秒/文件
```

##### ⚠️ 注意事项

1. **备份重要文件**: 使用 `--delete-original` 参数前，请先备份重要文件
2. **透明度支持**: 脚本会自动处理带透明通道的 PNG 文件
3. **文件命名**: 转换后的 WebP 文件与原 PNG 文件同名，仅扩展名不同
4. **目录结构**: 保持原有的目录结构不变

## 🤝 参与贡献

我们欢迎任何形式的贡献！无论是：

- 📝 改进文档内容
- 🐛 报告问题或 Bug
- 💡 提出新功能建议
- 🔧 提交代码改进
- 🌐 翻译文档

### 贡献流程

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

### 开发规范

- 遵循项目中已有的 Markdown 和代码风格
- 我们使用 Vitepress 框架，请确保您的 Markdown 语法与其兼容
- 确保所有内部链接正确无误
- 在提交前，请在项目根目录运行 pnpm docs:dev 和 pnpm docs:build 以确保本地开发服务器能正常启动，并预览您的更改，同时能正常构建，无报错。
- 提交信息使用清晰的中文描述

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源协议。

---

<div align="center">

**[ChmlFrp](https://www.chmlfrp.cn)** • **[文档](https://docs.chmlfrp.cn)**

Made with ❤️ by ChmlFrp Team

</div>