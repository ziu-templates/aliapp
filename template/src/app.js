/**
 * 全局
 */
console.log(process.env.ENV_DATA);
App({
  onLaunch() {
  },
  onShow() {
  },
  onError(msg) {
    console.log(msg, ' -----> onError');
  },
  globalData: {
    initData: null,
  },
});
