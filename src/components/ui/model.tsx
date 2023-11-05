'use client'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { createStyles, useTheme } from 'antd-style';

const useStyle = createStyles(({ token }) => ({
  'modal-body': {
    background: token['blue-1'],
    padding: token.paddingSM,
  },
  'modal-mask': {
    boxShadow: `inset 0 0 15px #fff`,
  },
  'modal-header': {
    borderBottom: `1px dotted ${token.colorPrimary}`,
  },
  'modal-footer': {
    color: token.colorPrimary,
  },
  'modal-content': {
    border: '1px solid #333',
  },
}));

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState( false);
  const { styles } = useStyle();
  const token = useTheme();
  
  const classNames = {
    body: styles['modal-body'],
    mask: styles['modal-mask'],
    header: styles['modal-header'],
    footer: styles['modal-footer'],
    content: styles['modal-content'],
  };

  const modalStyles = {
    header: {
      borderLeft: `5px solid ${token.colorPrimary}`,
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      boxShadow: 'inset 0 0 5px #999',
      borderRadius: 5,
    },
    mask: {
      backdropFilter: 'blur(10px)',
    },
    footer: {
      borderTop: '1px solid #333',
    },
    content: {
      boxShadow: '0 0 30px #999',
    },
  };
  
  React.useEffect(() => {
    const okClicked = localStorage.getItem('okClicked');
    if (okClicked === 'true') {
      setModalOpen(false);
    } else {
      setModalOpen(true);
    }
  }, []);
  return (
    <>
      <Modal
        title=""
        open={isModalOpen}
        closable={false}
        maskClosable={false}
        onOk={() => setModalOpen(false)}
        footer={[
          <Button key="ok" type="primary" onClick={() => setModalOpen(false)}>
            Okay, I understand
          </Button>,
        ]}
        //@ts-ignore
        classNames={classNames}
        styles={modalStyles}
      >
        <li className="list-disk"></li>
      </Modal>
    </>
  );
};

export default App;