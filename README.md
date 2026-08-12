# 问签官方网站

纯 HTML、CSS、JavaScript 制作的静态官网，无需数据库或后台，可部署到 Vercel、GitHub Pages 等静态托管平台。

## 本地预览

在 PowerShell 中进入本目录并启动静态服务器：

```powershell
cd "C:\Users\PC\Documents\ChatGPT\问签\wenqian-web"
python -m http.server 8000
```

浏览器打开 `http://localhost:8000/`。按 `Ctrl+C` 停止服务。

## 更新 APK

将已签名的正式 APK 覆盖到：

```text
download/wenqian.apk
```

保持文件名不变，页面上的两个下载按钮无需修改。发布新版本时，同时修改 `index.html` 内的版本号、更新时间、文件大小和更新日志。

## 部署到 Vercel

1. 将 `wenqian-web` 文件夹提交到 GitHub 仓库。
2. 在 Vercel 中选择 **Add New → Project**，导入该仓库。
3. Framework Preset 选择 **Other**。
4. 如果仓库根目录就是本站，Root Directory 保持默认；如果本站位于仓库子目录，选择 `wenqian-web`。
5. 不填写 Build Command，Output Directory 填 `.`，点击 Deploy。

也可以安装 Vercel CLI 后，在本目录运行：

```powershell
npx vercel --prod
```

## 绑定域名

进入 Vercel 项目的 **Settings → Domains**，添加自己的域名。按照页面给出的 DNS 记录，在域名服务商处添加或修改解析；验证通过后，Vercel 会自动配置 HTTPS。建议同时添加根域名和 `www`，再将其中一个设置为主域名并把另一个重定向过去。

## GitHub Pages

把本站文件放在仓库根目录，在仓库 **Settings → Pages** 中选择 **Deploy from a branch**，再选择分支和根目录发布。页面中的 APK 链接使用相对路径，因此也能兼容项目子路径形式的 GitHub Pages 地址。
