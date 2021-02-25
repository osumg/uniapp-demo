import sysConfig from '../common/sysConfig';

const service = {
  get(url = sysConfig.url, showLoading = true) {
    return new Promise(resolve => {
      if (showLoading) {
        uni.showLoading({
          title: '加载中',
          mask: true
        });
      }

      uni.request({
        url,
        header: {},
        success(res) {
          console.log('res', res);
          resolve(res);
        },
        fail(res) {
          // 失败处理
          uni.showModal({
            title: '提示',
            content: '请求服务失败',
            showCancel: false
          })
        },
        complete() {
          if (showLoading) {
            uni.hideLoading();
          }
        }
      })
    })

  }
}


export default service;
