# Reserve Next App

## 初回 Setup

```bash
$ git clone git@github.com:yuzuki-aritomo/ReserveTaskFrontend.git

$ cd ReserveTaskFrontend

$ docker compose build

$ docker compose run --rm app sh -c "cd next-app && npm install"
```

## docker起動

```bash
$ docker compose up -d
```

## ディレクトリ構成
```

├── next-app #プロジェクト
├── Dockerfile
└── docker-compose.yml

```