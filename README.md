# node-fcm-example

Firebase Admin SDK を使って、実行するサンプル。

# 実行手順

0. ホストに [Docker](https://docs.docker.com/get-docker/) をインストールしておく。
1. Firebase コンソールから、秘密鍵ファイルを取得する。
2. `service-account-file.json` にリネームして、プロジェクトルートに配置する。
3. クライアントアプリを開発して、InstanceID トークンを取得し、`send_message.sh` の `DEVICE_TOKEN`に設定する。
4. 以下を実行すると、クライアントアプリに通知が配信される。

```
# 依存パッケージのインストール(初回のみ)
docker run --rm -it -v "$PWD":/usr/src/app -w /usr/src/app node:14 npm install

# プッシュの送信
docker run --rm -it -v "$PWD":/usr/src/app -w /usr/src/app node:14 npm start
```
