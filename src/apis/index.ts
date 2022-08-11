import request from "@/plugins/request";

const url = "/api/v2/page";

export class PageApi {
  static getList(params) {
    return request({ method: "get", url: `${url}/list`, params });
  }

  static getDetails(params) {
    return request({ method: "get", url, params });
  }

  static create(data) {
    return request({ method: "post", url, data });
  }

  static update(data) {
    return request({ method: "put", url, data });
  }

  static delete(params) {
    return request({ method: "delete", url, params });
  }
}
