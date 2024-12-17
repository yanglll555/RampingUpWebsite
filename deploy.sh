#!/bin/bash
 
# 指定要安装的Node.js版本
NODE_VERSION="v14.17.0"
 
# 安装Node.js
if ! command -v node >/dev/null; then
    curl -sL "https://nodejs.org/dist/$NODE_VERSION/node-$NODE_VERSION-linux-x64.tar.xz" | tar -xJC /usr/local/bin 
    node="/usr/local/bin/node-$NODE_VERSION-linux-x64/bin/node"
    ln -s "$node" /usr/local/bin/node
    npm="/usr/local/bin/node-$NODE_VERSION-linux-x64/bin/npm"
    ln -s "$npm" /usr/local/bin/npm
fi
 
# 静态网站构建和部署命令（根据你的需求而定）
npm install
npm run build
npm run start
