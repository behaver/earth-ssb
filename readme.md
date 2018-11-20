# EarthSSB

[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](#) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/@behaver/earth-ssb) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

## 简介

EarthSSB 组件库可以用于计算地球相对于太阳系质心（SSB）的位置和速度。

其中包含组件：

* [Velocity](./doc/Velocity.md) 速度组件
* [Position](./doc/Position.md) 位置组件

## 安装

使用 npm 安装组件库，在项目目录下执行：

`npm i --save @behaver/earth-ssb`

安装完成后，调用即可：

`const { EarthSSBVelocity, EarthSSBPosition } = require('@behaver/earth-ssb');`

## 用例

```js
const { EarthSSBVelocity } = require('@behaver/earth-ssb');
const { JDateRepository } = require('@behaver/jdate');

let jdr = new JDateRepository(2334345, 'jde'),
    v = new EarthSSBVelocity(jdr);

console.log(v.x, v.y, v.z);

```

## API

详见组件子文档：

* [Velocity](./doc/Velocity.md)
* [Position](./doc/Position.md)

## 许可证书

The MIT license.