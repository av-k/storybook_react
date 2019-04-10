import React from 'react';
import { Tooltip, Modal, Icon, List } from 'antd';

const PropsModal = ({ dataProps, propsModal, toggle }) => {
  return (
    <Modal
      visible={propsModal}
      onCancel={toggle}
      footer={false}
      bodyStyle={{
        maxHeight: '80vh',
        overflowY: 'scroll',
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent, black 4%, black 96%, transparent)',
      }}
      centered={true}
    >
      {Object.entries(dataProps).map(([category, [link, props]]) => (
        <React.Fragment key={category}>
          <h4 className="prop-category">
            {category}
            <a href={link} target="_blank" className="prop-link">
              <Icon type="ant-design" />
            </a>
          </h4>
          <List
            size="small"
            bordered
            dataSource={Object.entries(props).map(item => item)}
            renderItem={([propName, propData]) => (
              <List.Item key={propName} className="prop-item">
                <Tooltip title={propData.description} placement="left">
                  <span className="prop-name">{propName}</span>
                </Tooltip>
                <Tooltip
                  title={`Default value: ${propData.defaultValue || '-'}`}
                  placement="right"
                >
                  <span className="prop-type">{propData.type}</span>
                </Tooltip>
              </List.Item>
            )}
          />
          <br />
        </React.Fragment>
      ))}
    </Modal>
  );
};
export default PropsModal;
