import React from 'react';
import { Tooltip, Modal } from 'antd';

const PropsModal = ({ availableProps, propsModal, toggle }) => {
  return (
    <Modal
      visible={propsModal}
      onCancel={toggle}
      footer={false}
      bodyStyle={{
        maxHeight: '80vh',
        overflowY: 'scroll',
        '-webkit-mask-image':
          'linear-gradient(to bottom, transparent, black 4%, black 96%, transparent)',
      }}
      centered={true}
    >
      {Object.entries(availableProps).map(([category, props]) => (
        <>
          <h4 className="prop-category">{category}</h4>
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
        </>
      ))}
    </Modal>
  );
};
export default PropsModal;
