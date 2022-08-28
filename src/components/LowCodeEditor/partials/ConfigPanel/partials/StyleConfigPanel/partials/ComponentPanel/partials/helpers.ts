// @ts-nocheck
export const helper = (store,config) => {
 return config.map(({label, store_name, isDisconnect,labelMarginLeft})=> {
    return {
      label,
      type: store(store_name)?.type,
      value: store(store_name)?.value,
      isDisconnect,
      labelMarginLeft,
      handleBlur: (e) => {
        store(store_name, { value: Number(e.target.value) });
      },
      handleNumItemBlur: (e, index) => {
        const padList = store(store_name)?.value;
        padList[index] = Number(e.target.value);
        store(store_name, { value: padList });
      },
      handleUnit: () => {
        if (store(store_name)?.type == 0) {
          store(store_name, { type: 1 });
        } else {
          store(store_name, { type: 0 });
        }
      },
      handleDisconnect: (disconnect, setDisconnect) => {
        if (disconnect) {
          store(store_name, { value: 0 });
          setDisconnect((pre) => !pre);
        } else {
          store(store_name, {
            value: [store(store_name)?.value, store(store_name)?.value, store(store_name)?.value, store(store_name)?.value],
          });
          setDisconnect((pre) => !pre);
        }
      },
    }
  })
}