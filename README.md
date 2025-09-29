# 探秘国之重器 - 上外松外科技节活动网站

## 项目简介
这是上海外国语大学松江外国语学校第十五届创智科技节"致敬我的国——探秘国之重器"创意帽子秀活动的官方网站。

## 技术栈
- React 18+
- TypeScript
- Tailwind CSS
- Vite

## 详细部署步骤

### 1. 安装依赖
首先确保您的电脑上已安装Node.js（推荐版本16.0或更高），然后执行以下命令安装项目依赖：

```bash
# 使用pnpm（推荐）
pnpm install

# 或使用npm
npm install
```

### 2. 本地开发
如果需要在本地查看和修改网站，可以运行以下命令启动开发服务器：

```bash
# 使用pnpm
pnpm dev

# 或使用npm
npm run dev
```

启动后，打开浏览器访问 http://localhost:3000 即可查看网站。

### 3. 构建项目
在部署到GitHub Pages之前，需要先构建项目生成静态文件：

```bash
# 使用pnpm
pnpm build

# 或使用npm
npm run build
```

构建完成后，会在`dist`目录下生成可直接部署的静态文件。

### 4. 部署到GitHub Pages

#### 方法一：手动部署
1. 确保您已在GitHub上创建了项目仓库
2. 将`dist`目录中的所有文件上传到GitHub仓库的`gh-pages`分支或主分支
3. 在GitHub仓库的"Settings" -> "Pages"中，设置：
   - Source: 选择"Deploy from a branch"
   - Branch: 选择您上传文件的分支（如`gh-pages`或`main`）和根目录("/")
   - 点击"Save"保存设置

#### 方法二：使用GitHub Actions自动部署
1. 在项目根目录创建`.github/workflows/deploy.yml`文件
2. 复制以下内容到文件中：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]  # 或您的主分支名称

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
          
      - name: Install dependencies
        run: npm install
          
      - name: Build
        run: npm run build
          
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. 提交并推送到GitHub仓库
4. 在GitHub仓库的"Settings" -> "Pages"中，检查部署状态和网站URL

### 5. 验证部署
部署完成后，等待几分钟，然后访问GitHub Pages提供的URL，验证网站是否正常显示。

## 注意事项
- 如果网站包含路由，需要确保GitHub Pages正确处理路由问题
- 更新内容后，需要重新构建并部署
- 确保`package.json`中的构建脚本正确配置