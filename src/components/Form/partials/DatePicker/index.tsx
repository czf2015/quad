/**
 * @Author 
 * @Description 日期选择
 * @Create who[when]
 * @Revise what --who[when]
 */

// @ts-nocheck
import React from "react";
import { DatePicker, TimePicker } from "antd";
import moment from "moment";

export default ({ onChange, mode = 'range', picker = 'date', ranges, disabledDate, disabledTime }) => {
  if (picker == 'time') {
    return mode == 'range' ? <TimePicker.RangePicker ranges={ranges} onChange={onChange} disabledTime={disabledTime} /> : <TimePicker onChange={onChange} disabledTime={disabledTime} />
  } else {
    return mode == 'range' ? (
      <DatePicker.RangePicker
        picker={picker}
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
    ) : <DatePicker
      picker={picker}
      disabledDate={disabledDate}
      disabledTime={disabledTime}
      showTime={{
        hideDisabledOptions: true,
        defaultValue: moment(),
      }}
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onChange}
    />;
  }
};
