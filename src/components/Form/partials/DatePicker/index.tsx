/**
 * @Author 
 * @Description 日期选择
 * @Create who[when]
 * @Revise what --who[when]
 */

// @ts-nocheck
import React from "react";
import { DatePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

export default ({ onChange, ranges, disabledDate, disabledTime }) => {
  return (
    <RangePicker
      ranges={ranges}
      disabledDate={disabledDate}
      disabledTime={disabledTime}
      showTime={{
        hideDisabledOptions: true,
        defaultValue: [
          moment("00:00:00", "HH:mm:ss"),
          moment("11:59:59", "HH:mm:ss"),
        ],
      }}
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onChange}
    />
  );
};
