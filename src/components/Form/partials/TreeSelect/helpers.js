/* eslint-disable */
export const convertOptionsToTree = (list = [], all = '') => {
  return [
    {
      title: '全部',
      value: all,
      children: list.map(
        item =>
          typeof item == 'object'
            ? {
                title: item.label,
                value: item.value,
              }
            : {
                title: item,
                value: item,
              }
      ),
    },
  ];
};

export const getValueFromEvent = (value, options) => {
  const index = value.indexOf('');
  if (index !== -1) {
    if (index == value.length - 1) {
      return [''];
    }
    value.splice(index, 1);
  } else {
    if (value.length == options.filter(item => item.value).length - 1) {
      return [''];
    }
  }
  return value;
};

export const count = treeData => {
  let total = 0;
  const tranverse = treeData => {
    treeData.map(item => {
      if (item.title !== '全部') {
        total += 1;
      }
      if (item.children && item.children.length !== 0) {
        tranverse(item.children);
      }
    });
  };
  tranverse(treeData);
  return total;
};
