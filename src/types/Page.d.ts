interface IPageQuery {
  uuid: number;
  base: string;
  suppage: string;
  url: string;
}

interface IPageLocation {
  url: string; //
  query?: IPageQuery; // 参数
}

// `${url}&query=${JSON.stringify(query)}
/* {
  id: '${qs.id}' // 通过模板语法取值
} */
