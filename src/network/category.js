import {request} from "./request";

export function getCategory() {
  return request({
    url:'/category',
  })
}

export class getTabInfo {
  constructor(data){
    const list = data.list;
  }
}
