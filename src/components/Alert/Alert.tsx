import React from 'react';

interface Props extends React.PropsWithChildren {
  show?: boolean;
  close?: boolean;
  onDismiss?: React.MouseEventHandler;
  type: string;
}

const Alert: React.FC<Props> = ({show, close, onDismiss, type, children}) => {

  let alert = (
    <>
      <div className={'alert alert-' + type} role="alert" style={{display: show || close ? 'block' : 'none', width: '50%'}}>
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onDismiss}
          style={{marginLeft: '55%'}}
        >
        </button>
      </div>
    </>
  );

  if (onDismiss === undefined) {
    alert = (
      <>
        <div className={'alert alert-' + type} role="alert" style={{display: show || close ? 'block' : 'none', width: '50%'}}>
          {children}
        </div>
      </>
    )
  }

  return (
    <>
      {alert}
    </>
  );
};

export default Alert;