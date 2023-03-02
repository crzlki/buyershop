var BASE = {
  /**
   * @description api请求基础路径
   */
  API_DEV: {
    common: "http://common-api.nbuxinxiren.cn:8890",
    // common: "http://34.85.84.1:8890",
    // buyer: "http://34.85.84.1:8888",
    buyer: "http://buyer-api.nbuxinxiren.cn:8888",
    seller: "http://store-api.nbuxinxiren.cn:8889",
    manager: "http://admin-api.nbuxinxiren.cn:8887"
  },
  API_PROD: {
    common: "https://common-api.pickmall.cn",
    buyer: "https://buyer-api.pickmall.cn",
    seller: "https://store-api.pickmall.cn",
    manager: "https://admin-api.pickmall.cn"
  }
};
