import { MdapSdk, CustomPlugin } from '@mdap/javascript-sdk';
import APIPlugin from '@mdap/sdk-plugin-api';
import ResourcePlugin from '@mdap/sdk-plugin-resource';
import PagePerfPlugin from '@mdap/sdk-plugin-performance';
import ExceptionPlugin from '@mdap/sdk-plugin-exception';
console.log('version', process.env.VERSION);
console.log('COMMITHASH', process.env.COMMITHASH);
const mdapSdk = new MdapSdk({
  // mdap 应用id application id
  app_name: 'pc-web',
  secret_key: 'daab032acfb3522e391957c076f9bacb14a00dd4c7474ed5aad7cdc8dc51a610',
  // app_name: 'spc-pc-web-test',
  // secret_key: 'ece1dfeb5faa5f07c37fd7129b2cb780b01c6c0362dc134bfb3acf8cccf0521b',
  // reporting env: test | staging | uat | live
  // if environment is ‘live’ ，data will be reported to Live env for user: https://mdap.shopee.io; else, data will be reported to Test env for user:  https://mdap.exp.shopee.io
  // 上报环境: test | staging | uat | live
  // environment值为 ‘live’ 时，数据会上报到正服环境 https://mdap.shopee.io， 为其他值时数据会上报到测服  https://mdap.exp.shopee.io
  environment: 'live',
  // 上报地区/Reporting Region | sg | tw | ph | th | id | my | br | mx | ...
  region: 'br',
  // 是否开启调试日志/Toggle of debug logger | default - false
  logger: false,
  // 业务应用版本 business application version
  app_version: process.env.VERSION,
  // sampling rate 采样率 - default 0.1 | 采样结果会在下一次启动时(刷新或新开tab)生效 Sampling result will be effective at next startup (refresh page OR open a new tab)
  sample: 1,
  user_id: '12345',
  // interval: 1000
});

// api 请求监控插件
export const apiPlugin = new APIPlugin({
  useLogicStatus: false
});

const resourcePlugin = new ResourcePlugin({
  path: 'localhost:3001'
});
const pagePerfPlugin = new PagePerfPlugin({});
export const customReporter = new CustomPlugin({});
export const exceptionPlugin = new ExceptionPlugin({});

mdapSdk.use(apiPlugin);
mdapSdk.use(resourcePlugin);
mdapSdk.use(pagePerfPlugin);
mdapSdk.use(customReporter);
mdapSdk.use(exceptionPlugin);



// 性能点 上报
export class MdapPerformancePoint {
  id = '';
  time = 0;

  constructor(id) {
    if (id) {
      this.id = id;
    }
  }

  start() {
    this.time = Date.now();
  }

  setId(id) {
    this.id = id;
  }

  end(params) {
    const { data, id, duration } = params;
    const endTime = Date.now();
    if (id) {
      this.setId(id);
    }
    if (this.time !== 0 && this.id) {
      customReporter.sendData({
        point_id: this.id,
        duration: duration || endTime - this.time,
        data
      });
    }
    // 只能 end 一次，再次 end 需要重新 start，避免多次 end 上报的 duration 过大
    this.reset();
  }

  reset() {
    this.time = 0;
  }
}

export const AccumulationPointId = {
  BlankScreen: '82155ce27e884afdd0fe2235192bcfd0'
}

export const PerformancePointId = {
  PageView: '47eb73842bd9e7559a3cebb2e184bdbb'
}


