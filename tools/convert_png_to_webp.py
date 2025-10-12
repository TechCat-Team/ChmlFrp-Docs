#!/usr/bin/env python3
"""
PNG to WebP Batch Converter
自动批量转换PNG图片为WebP格式的Python脚本

功能特性：
- 递归遍历指定目录下的所有PNG文件
- 支持自定义WebP质量设置
- 保持原文件结构
- 可选择是否删除原PNG文件
- 显示转换进度和统计信息
- 错误处理和日志记录

使用方法：
python convert_png_to_webp.py [目录路径] [选项]

示例：
python convert_png_to_webp.py ./docs --quality 85 --delete-original
"""

import os
import sys
import argparse
from pathlib import Path
from PIL import Image
import time

class PngToWebpConverter:
    def __init__(self, quality=85, delete_original=False, verbose=True):
        """
        初始化转换器
        
        Args:
            quality (int): WebP质量 (0-100)
            delete_original (bool): 是否删除原PNG文件
            verbose (bool): 是否显示详细信息
        """
        self.quality = quality
        self.delete_original = delete_original
        self.verbose = verbose
        self.converted_count = 0
        self.failed_count = 0
        self.total_size_saved = 0
        
    def find_png_files(self, directory):
        """
        递归查找目录下的所有PNG文件
        
        Args:
            directory (str): 搜索目录路径
            
        Returns:
            list: PNG文件路径列表
        """
        png_files = []
        directory_path = Path(directory)
        
        if not directory_path.exists():
            print(f"错误: 目录 '{directory}' 不存在")
            return png_files
            
        # 递归查找所有PNG文件
        for png_file in directory_path.rglob("*.png"):
            if png_file.is_file():
                png_files.append(png_file)
                
        # 同时查找大写扩展名
        for png_file in directory_path.rglob("*.PNG"):
            if png_file.is_file():
                png_files.append(png_file)
                
        return sorted(png_files)
    
    def convert_image(self, png_path):
        """
        将单个PNG文件转换为WebP格式
        
        Args:
            png_path (Path): PNG文件路径
            
        Returns:
            tuple: (成功标志, 原文件大小, 新文件大小, 错误信息)
        """
        try:
            # 生成WebP文件路径
            webp_path = png_path.with_suffix('.webp')
            
            # 获取原文件大小
            original_size = png_path.stat().st_size
            
            # 打开并转换图片
            with Image.open(png_path) as img:
                # 如果图片有透明通道，保持RGBA模式
                if img.mode in ('RGBA', 'LA'):
                    img = img.convert('RGBA')
                else:
                    img = img.convert('RGB')
                
                # 保存为WebP格式
                img.save(
                    webp_path, 
                    'WebP', 
                    quality=self.quality,
                    optimize=True,
                    lossless=False
                )
            
            # 获取新文件大小
            new_size = webp_path.stat().st_size
            
            # 如果选择删除原文件
            if self.delete_original:
                png_path.unlink()
                
            return True, original_size, new_size, None
            
        except Exception as e:
            return False, 0, 0, str(e)
    
    def format_size(self, size_bytes):
        """
        格式化文件大小显示
        
        Args:
            size_bytes (int): 字节大小
            
        Returns:
            str: 格式化的大小字符串
        """
        for unit in ['B', 'KB', 'MB', 'GB']:
            if size_bytes < 1024.0:
                return f"{size_bytes:.1f} {unit}"
            size_bytes /= 1024.0
        return f"{size_bytes:.1f} TB"
    
    def convert_directory(self, directory):
        """
        转换目录下的所有PNG文件
        
        Args:
            directory (str): 目录路径
        """
        print(f"🔍 正在搜索目录: {directory}")
        png_files = self.find_png_files(directory)
        
        if not png_files:
            print("❌ 未找到PNG文件")
            return
            
        print(f"📁 找到 {len(png_files)} 个PNG文件")
        print(f"⚙️  转换设置: 质量={self.quality}%, 删除原文件={'是' if self.delete_original else '否'}")
        print("-" * 60)
        
        start_time = time.time()
        
        for i, png_path in enumerate(png_files, 1):
            if self.verbose:
                print(f"[{i}/{len(png_files)}] 正在处理: {png_path.name}")
            
            success, original_size, new_size, error = self.convert_image(png_path)
            
            if success:
                self.converted_count += 1
                size_saved = original_size - new_size
                self.total_size_saved += size_saved
                
                if self.verbose:
                    compression_ratio = (size_saved / original_size) * 100 if original_size > 0 else 0
                    print(f"  ✅ 成功: {self.format_size(original_size)} → {self.format_size(new_size)} "
                          f"(节省 {compression_ratio:.1f}%)")
            else:
                self.failed_count += 1
                if self.verbose:
                    print(f"  ❌ 失败: {error}")
        
        # 显示统计信息
        end_time = time.time()
        elapsed_time = end_time - start_time
        
        print("-" * 60)
        print("📊 转换完成统计:")
        print(f"  ✅ 成功转换: {self.converted_count} 个文件")
        print(f"  ❌ 转换失败: {self.failed_count} 个文件")
        print(f"  💾 总计节省: {self.format_size(self.total_size_saved)}")
        print(f"  ⏱️  耗时: {elapsed_time:.2f} 秒")
        
        if self.converted_count > 0:
            avg_time = elapsed_time / self.converted_count
            print(f"  📈 平均速度: {avg_time:.2f} 秒/文件")

def main():
    parser = argparse.ArgumentParser(
        description="批量转换PNG图片为WebP格式",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
使用示例:
  python convert_png_to_webp.py ./docs
  python convert_png_to_webp.py ./images --quality 90
  python convert_png_to_webp.py ./photos --quality 75 --delete-original
  python convert_png_to_webp.py ./assets --quality 85 --quiet
        """
    )
    
    parser.add_argument(
        'directory',
        nargs='?',
        default='.',
        help='要处理的目录路径 (默认: 当前目录)'
    )
    
    parser.add_argument(
        '--quality', '-q',
        type=int,
        default=85,
        choices=range(1, 101),
        metavar='[1-100]',
        help='WebP质量设置 (1-100, 默认: 85)'
    )
    
    parser.add_argument(
        '--delete-original', '-d',
        action='store_true',
        help='转换成功后删除原PNG文件'
    )
    
    parser.add_argument(
        '--quiet', '-s',
        action='store_true',
        help='静默模式，只显示最终统计'
    )
    
    args = parser.parse_args()
    
    # 检查PIL是否支持WebP
    try:
        from PIL import Image
        # 测试WebP支持
        test_img = Image.new('RGB', (1, 1))
        test_img.save('/tmp/test.webp', 'WebP')
        os.remove('/tmp/test.webp')
    except Exception as e:
        print("❌ 错误: PIL不支持WebP格式")
        print("请安装支持WebP的PIL版本:")
        print("  pip install Pillow")
        print("或者在某些系统上需要:")
        print("  sudo apt-get install libwebp-dev  # Ubuntu/Debian")
        print("  brew install webp  # macOS")
        sys.exit(1)
    
    # 创建转换器实例
    converter = PngToWebpConverter(
        quality=args.quality,
        delete_original=args.delete_original,
        verbose=not args.quiet
    )
    
    # 开始转换
    try:
        converter.convert_directory(args.directory)
    except KeyboardInterrupt:
        print("\n⚠️  转换被用户中断")
        sys.exit(1)
    except Exception as e:
        print(f"❌ 发生错误: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
