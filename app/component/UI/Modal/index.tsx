"use client"
import './index.module.css';
import { useState, useEffect } from 'react';
import { Alert } from '@aws-amplify/ui-react';

type ModalProps = {
  isOpen: boolean;
  position?: 'top' | 'bottom' | 'center';
  animationType?: 'fade' | 'slide';
  maskClosable?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function Modal({
  isOpen,
  position = 'center',
  animationType = 'fade',
  maskClosable = true,
  className = '',
  style
}: ModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const getPositionStyle = () => {
    switch (position) {
      case 'top':
        return { top: '20px', left: '50%', transform: 'translateX(-50%)' };
      case 'bottom':
        return { bottom: '20px', left: '50%', transform: 'translateX(-50%)' };
      default:
        return {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        };
    }
  };

  const handleClose = () => {
    setIsMounted(false);
    // setTimeout(() => setIsOpen(false), 300);
  };

  if (isOpen) {
    <div
      className={`modal-mask ${animationType}-${isMounted ? 'enter' : 'exit'}`}
      onClick={() => maskClosable && handleClose()}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 999
      }}
    >
      <Alert
        variation="info"
        heading="提示信息"
        isDismissible
        onDismiss={handleClose}
        className={`custom-alert ${className}`}
        style={{
          position: 'fixed',
          ...getPositionStyle(),
          transition: 'all 0.3s ease',
          zIndex: 1000,
          ...style
        }}
      >
        这里是弹层内容
        <button
          className="confirm-btn"
          onClick={handleClose}
        >
          确认
        </button>
      </Alert>
    </div>
  }
  return null;
}