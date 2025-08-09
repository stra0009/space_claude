# Modern Homepage

Next.js、TypeScript、Tailwind CSSを使用したモダンなホームページです。

## 特徴

- ⚡ Next.js 14 + TypeScript
- 🎨 Tailwind CSS によるレスポンシブデザイン
- 🌙 ダークモード対応
- 📱 モバイルファーストデザイン
- 🐳 Docker対応
- 🚀 本番環境最適化

## 開発環境での起動

### 前提条件
- Node.js 18以降
- npm または yarn

### インストールと起動

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

http://localhost:3000 でアクセス可能です。

## Docker での起動

### 基本的な起動

```bash
# イメージのビルド
docker compose build

# コンテナの起動
docker compose up

# バックグラウンドで起動
docker compose up -d
```

### Nginxリバースプロキシ付きで起動

```bash
# Nginxプロファイル付きで起動
docker compose --profile with-nginx up -d
```

この場合、http://localhost でアクセス可能です。

## プロジェクト構成

```
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx          # メインページ
├── public/                # 静的ファイル
├── Dockerfile            # Docker設定
├── docker-compose.yml    # Docker Compose設定
├── nginx.conf           # Nginx設定
├── package.json         # Node.js依存関係
├── tailwind.config.js   # Tailwind CSS設定
└── tsconfig.json        # TypeScript設定
```

## ビルドコマンド

```bash
# 本番ビルド
npm run build

# 本番サーバー起動
npm start

# リント
npm run lint
```

## カスタマイズ

### スタイル
- `app/globals.css` でグローバルスタイルを編集
- `tailwind.config.js` でTailwind CSSの設定をカスタマイズ

### コンテンツ
- `app/page.tsx` でメインページのコンテンツを編集

### Docker設定
- `Dockerfile` でコンテナ設定を変更
- `docker-compose.yml` でサービス構成を変更

## 技術スタック

- **フレームワーク**: Next.js 14
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アイコン**: Lucide React
- **フォント**: Inter (Google Fonts)
- **コンテナ**: Docker + Docker Compose
- **Webサーバー**: Nginx (オプション)

## ライセンス

MIT