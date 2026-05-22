# 唐诗缺字挑战

一款有趣的唐诗学习小游戏，通过填空方式帮助用户记忆唐诗。

## 🎮 功能特点

- **缺字挑战**: 阅读诗句，选择正确的字填空
- **学习模式**: 浏览唐诗，支持语音朗读
- **进度记录**: 记录学习进度和得分
- **古风界面**: 古典风格的UI设计

## 🚀 快速开始

### 前置条件

- Node.js >= 20.x
- Android Studio (用于构建 APK)

### 本地运行

```bash
# 安装依赖
npm install

# 开发模式运行
npm run dev

# 构建生产版本
npm run build
```

### 构建 Android APK

```bash
# 同步资源到 Android
npm run cap:sync

# 构建调试版本
cd android && ./gradlew assembleDebug

# 构建发布版本
cd android && ./gradlew assembleRelease
```

## 📁 项目结构

```
├── src/                    # 源代码
│   ├── components/         # React 组件
│   ├── data/              # 数据文件
│   ├── App.tsx            # 主应用组件
│   └── main.tsx           # 入口文件
├── android/               # Android 项目
├── dist/                 # 构建产物
├── index.html            # HTML 入口
└── package.json          # 项目配置
```

## 🛠️ 技术栈

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Capacitor 8 (Android)
- Framer Motion (动画)

## 📱 移动端

本应用支持 Android 平台，通过 Capacitor 构建原生 APK。

## 📄 许可证

MIT License