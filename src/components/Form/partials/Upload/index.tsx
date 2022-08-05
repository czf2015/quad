import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

export default ({
  action = "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  fileList: _fileList = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ],
  limit = { total: 1 },
}) => {
  const [fileList, setFileList] = useState(_fileList);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <ImgCrop rotate>
      <Upload
        action={action}
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < limit.total ? '+ Upload' : ''}
      </Upload>
    </ImgCrop>
  );
};
