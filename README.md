# example-weblueth-mirobit

`@weblueth/mirobit`ライブラリを使った`Web Bluetooth`による micro:bit サンプルアプリです。

reactなWebアプリとして、 [GitHub Pages](https://jp-96.github.io/example-weblueth-microbit/)上で、試すことができます。  

**Example**
``` App.tsx
// App.tsx
import React from 'react'
import Logo from './Logo';  // logo.svg ==> Logo.tsx
//import './App.css'; // ==> ../index.html
import { MicrobitContextProvider } from '@weblueth/microbit';
import { MicrobitConn, MicrobitName, MicrobitBtn, MicrobitAcc } from '../components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <p>
          Edit <code>src/app/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MicrobitContextProvider connectionName={"micro:bit"}>
          <p>
            <MicrobitConn />
            <br />
            micro:bit Name: <MicrobitName />
            <br />
            Button A: <MicrobitBtn button='a' /> Button B: <MicrobitBtn button='b' />
          </p>
          Accelerometer
          <MicrobitAcc />
        </MicrobitContextProvider>
      </header>
    </div>
  );
}

export default App;

```

## インストール

- git
- Docker
- [VS Code](https://code.visualstudio.com/download)
- [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Templateからのリポジトリ作成とPagesの設定

1. GitHubにログインします。
1. GitHubのリポジトリを開きます。  
https://github.com/jp-rad/vscode-react-parcel.git
1. `Use this template` をクリックし、リポジトリを作成します。  
[こちら - https://github.com/jp-rad/vscode-react-parcel/generate](https://github.com/jp-rad/vscode-react-parcel/generate)
1. 作成したGitHubのリポジトリが開くので、`Settings`タブを開き、左のメニューから`Pages`を選択し、`GitHub Pages`設定画面を開きます。
1. `Source`で、`GitHub Actions`を選びます。
1. `GitHub Pages`の作成に失敗していますので、`Actions`タブを開き、失敗している`workflow`(`'Initial commit'`)をクリックし、右上の`Re-run Jobs`ボタンから`Re-run failed jobs`コマンドを選んで、再実行します。
1. Workflowが再実行されますので、正常に完了するのを確認します。

## クローンとVS Codeの起動

1. `git clone <your GitHub Code URL>`
1. git clone したフォルダををVS Codeで開く
1. Dockerを起動する
1. VS Codeで`Reopen in Container`を実行し、Dockerコンテナーを起動する  
（初回、`yarn install`コマンドが自動的に実行され、依存パッケージのダウンロードとインストールが行われるので、完了するまで待ちます）

## VS Codeでの開発

1. VS Codeでソースコードを編集します(`src`フォルダ内)
1. ユニットテストを実行するには、ターミナルを開いて、`yarn test`コマンドを実行します(`packege.json`で定義)
1. ウェブアプリを実行するには、ターミナルを開いて、`yarn start`コマンドを実行し(`packege.json`で定義)、ウェブブラウザで、[http://localhost:1234](http://localhost:1234)を開きます  
（`[Ctrl]+[C]`で終了します）
1. ビルドを実行するには、ターミナルを開いて、`yarn build`コマンドを実行します(`packege.json`で定義)  
（`.build`フォルダ内に生成されます）

## パッケージのインストール

**追加するパッケージ**
- @weblueth/microbit

```bash
yarn add --dev @weblueth/microbit
```

## ソースコードの編集

1. `./src/components/` ファイル群を追加します。
2. `./src/app/App.tsx` を編集します。
3. ターミナルで、`yarn start`コマンドを実行し、ウェブブラウザで、[http://localhost:1234](http://localhost:1234)を開きます

## アプリの使い方

1. Bluetoothのボタンサービスと加速度サービスとを有効にしたmicro:bitを起動します（[HEXファイル](https://raw.githubusercontent.com/thegecko/microbit-web-bluetooth/master/hex/ble-open-microbit-universal.hex)）
1. `REQUEST`ボタンをクリックし、micro:bitデバイスを選択します（ペア設定）
1. micro:bitデバイスを選択するとデバイス名(`micro:bit Name`)が表示され、接続を待ちます
1. 接続に成功するとボタンの状態と加速度データが表示されます
1. `SLOW`ボタンと`FAST`ボタンで加速度データの読み込み頻度を切り替えできます
1. `DISCONNECT`ボタンをクリックすると切断します
1. 切断後は、`CONNECT`ボタンで再接続できます


## ウェブアプリのデプロイ

1. ソースコードを`main`ブランチにプッシュ（コミット）します。  
`main` ブランチにソースコードをプッシュ（コミット）すると `GitHub Actions` によって、`GitHub Pages`へデプロイされます。
1. GitHubにログインします。
1. GitHubのリポジトリを開きます。
1. `Actions`タブを開き、最新の`workflow`が成功していることを確認します。
1. `Settings`タブを開き、左のメニューから`Pages`を選択し、`GitHub Pages`設定画面を開きます。
1. `Your site is live at`の後に表示されているのが、ウェブアプリの`URL`です。
1. `URL`リンク、もしくは、`Visit site`ボタンで、ウェブアプリを開きます。
