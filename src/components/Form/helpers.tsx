// @ts-nocheck

const contain = (v1, v2) => {
  if (Array.isArray(v1)) {
    return v1.findIndex(item => item == v2) !== -1
  }
  return v1 == v2;
};

const judgePrerequiste = (prerequisite, formData = {}) => {
  const { field, options, range } = prerequisite;
  const v1 = formData[field];

  if (options) {
    if (options?.include?.some((v2) => !contain(v1, v2))) {
      return false
    }
    if (options?.exclude?.some((v2) => contain(v1, v2))) {
      return false
    }
    if (options?.equal) {
      if (Array.isArray(v1)) {
        if (options.equal.every(item => item?.length != v1.length || item.some(item2 => !contain(v1, item2)))) {
          return fasle
        }
      } else if (options.equal.every(item => item !== v1)) {
        return false
      }
    }
  }

  if (range) {
    //
  }

  return true;
};

export const filter = (
  formItems,
  formData,
) => {
  return formItems?.filter((formItem) => {
    let ret = true;
    if (formItem.prerequisites) {
      ret = formItem.prerequisites.every((prerequisite) =>
        judgePrerequiste(prerequisite, formData)
      );
    }
    return ret;
  });
};
