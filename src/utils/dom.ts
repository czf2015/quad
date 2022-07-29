export const observe = (
  element,
  properties = {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ["style"],
  },
  callback
) => {
  const MutationObserver =
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver;
  const observer = new MutationObserver(callback);
  observer.observe(element, properties);
};
