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

export const copyText = (value = "") => {
  return new Promise((resolve, reject) => {
    let copyTextArea;
    try {
      copyTextArea = document.createElement("textarea");
      copyTextArea.style.width = "0";
      copyTextArea.style.height = "0";
      copyTextArea.style.opacity = "0";
      copyTextArea.value = value;
      document.body.appendChild(copyTextArea);
      copyTextArea.select();
      document.execCommand("Copy");
      resolve(value);
    } finally {
      copyTextArea?.parentNode?.removeChild(copyTextArea);
    }
  });
};

// 链接：https://zhuanlan.zhihu.com/p/405095742
export class Clipboard {
  static write(value) {
    return navigator.clipboard.writeText(value);
  }
  static read() {
    return navigator.clipboard.readText();
  }
}
