// @ts-nocheck
// import { areas } from "../../../../mock/components.ts";

export const convertListToTree = (
  treeList: ITreeNode[],
  pid: number /* , adapter?: IAdapter */
) => {
  return treeList /* .sort((a, b) => a.order - b.order) */
    .filter((node) => {
      if (node?.id && node?.pid === pid) {
        // if (typeof adapter == 'object') {
        //   Object.keys(adapter).forEach(key => {
        //     node[key] = node[adapter[key]]
        //   })
        // }
        node.children = convertListToTree(treeList, node.id /* , adapter */);
        return true;
      }
      return false;
    });
};

export class Areas {
  constructor(areas) {
    this.instance = areas;
  }
  // 裁切--水平、垂直
  split(id, isHorizontal = false, offset) {
    const result = [];
    this.instance.forEach((item) => {
      if (item.pid == id) {
        result.push({ ...item, pid: id << 1 });
      } else {
        result.push(item);
      }
    });
    // 子区域
    [0, 1].forEach((idx) => {
      result.push({
        name: "Area",
        id: id << 1 + idx,
        pid: id,
        title: `区域${id << 1 + idx}`,
        quad: isHorizontal
          ? idx > 0
            ? "bottom"
            : "top"
          : idx > 0
          ? "right"
          : "left",
        style: {
          width: isHorizontal
            ? "100%"
            : idx > 0
            ? `calc(100% - ${offset}px)`
            : offset,
          height: isHorizontal
            ? idx > 0
              ? `calc(100% - ${offset}px)`
              : offset
            : "100%",
          backgroundColor: "#fddd9b",
        },
      });
    });
    this.instance = result;
  }
  // 删除
  remove(id) {
    const result = [];
    const selected_area = this.instance.find((item) => item.id == id);
    const neighbour_area = this.instance.find(
      (item) => item.pid == selected_area.pid && item.id !== selected_area.id
    );
    this.instance.forEach((item) => {
      if (item.pid == id || item.id == id || item.id == neighbour_area.id) {
        return;
      }
      if (item.pid == neighbour_area.id) {
        result.push({ ...item, pid: neighbour_area.pid });
      } else {
        result.push(item);
      }
    });
    this.instance = result;
  }
  // 拉伸
  pull(id, offset) {
    const selected_area = this.instance.find((item) => item.id == id);
    const neighbour_area = this.instance.find(
      (item) => item.pid == selected_area.pid && item.id != id
    );
    switch (selected_area.quad) {
      case "top":
        selected_area.style.height += offset;
        neighbour_area.style.height = `calc(100% - ${selected_area.style.height}px)`;
        break;
      case "bottom":
        neighbour_area.style.height -= offset;
        selected_area.style.height = `calc(100% - ${neighbour_area.style.height}px)`;
        break;
      case "left":
        selected_area.style.width += offset;
        neighbour_area.style.width = `calc(100% - ${selected_area.style.width}px)`;
        break;
      case "right":
        neighbour_area.style.width -= offset;
        selected_area.style.width = `calc(100% - ${neighbour_area.style.width}px)`;
        break;
    }
  }
}

// const newAreas = new Areas(areas);

// newAreas.split(0b1110, true, 300);
// newAreas.pull(0b10, 20)
// newAreas.remove(0b1110);

// console.log(newAreas);
