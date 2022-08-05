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
        if (options?.equal?.some(item => !contain(v1, item))) {
          return false
        }
      } else if (v1 != options?.equal) {
        console.log({ field, v1, options })
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
      debugger
      ret = formItem.prerequisites.every((prerequisite) =>
        judgePrerequiste(prerequisite, formData)
      );
    }
    return ret;
  });
};
