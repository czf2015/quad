import React, { useEffect, useState } from 'react';
import { Modal, Avatar, List, Skeleton } from '@/plugins/ui'
import Button from '@/components/Button'
import { FolderOpenOutlined } from '@ant-design/icons'

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const App = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        })),
      ),
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false); // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized

        window.dispatchEvent(new Event('resize'));
      });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name?.last}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export const Open = ({ disabled, /* open,  */value = { lang: 'zh', timezone: 'China Standard Time', width: 1440, height: 1080, keywords: ['低代码'], template: 0 } }) => {
  const [visible, setVisible] = useState(false)
  const open = () => {
    setVisible(true)
  }
  const handleOk = () => {
    setVisible(false)
  }
  const handleCancel = () => {
    setVisible(false)
  }

  return (
    <>
      <Button title="打开" disabled={disabled} onClick={open} icon={<FolderOpenOutlined />} />
      <Modal title="打开页面" visible={visible} onOk={handleOk} onCancel={handleCancel} width={720} bodyStyle={{ height: 640, overflow: 'auto' }}>
        <App />
      </Modal>
    </>
  )
}