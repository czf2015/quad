// @ts-nocheck

const compareValue = (v1, v2) => {
  if (Array.isArray(v1)) {
    return v2.every((item) => v1.includes(item));
  } else {
    return v1 == v2;
  }
};

const judgePrerequiste = (prerequisite, formData = {}) => {
  const { field, options, range } = prerequisite;
  const v1 = formData[field];

  if (options) {
    return (
      (!options.include ||
        options.include.every((v2) => compareValue(v1, v2))) &&
      (!options.exclude ||
        !options.exclude.some((v2) => compareValue(v1, v2))) &&
      (!options.all ||
        options.all.some(
          (v2) =>
            (!Array.isArray(v1) || v1.length == v2.length) &&
            compareValue(v1, v2)
        ))
    );
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
  return formItems.filter((formItem) => {
    let ret = true;
    if (formItem.prerequisites) {
      ret = formItem.prerequisites.every((prerequisite) =>
        judgePrerequiste(prerequisite, formData)
      );
    }
    return ret;
  });
};
