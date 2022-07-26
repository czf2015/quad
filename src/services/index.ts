import { PageApi as Api } from "@/apis";

export class PageService {
  static getList(params) {
    return Api.getList(params);
  }

  static getDetails(params) {
    return Api.getDetails(params);
  }

  static create(params) {
    return Api.create(params);
  }

  static update(params) {
    return Api.update(params);
  }

  static delete(params) {
    return Api.delete(params);
  }
}
