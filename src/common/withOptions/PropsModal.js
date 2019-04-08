import React from 'react';
import { Tooltip, Modal, Icon } from 'antd';

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

          <ul>
            {Object.entries(props).map(([propName, propData]) => (
              <li key={propName}>
                <Tooltip title={propData.description} placement="left">
                  <span className="prop-name">{propName}</span> :{' '}
                </Tooltip>
                <span className="prop-type">{propData.type}</span>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </Modal>
  );
};
export default PropsModal;
