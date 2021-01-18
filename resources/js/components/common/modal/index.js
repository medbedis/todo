import React, { Component, component } from 'react';




class Modal extends Component {

    render() {
        const { title, visibility,onClose,children} = this.props;

        return (
            <React.Fragment>
                <div className={ (visibility)?'modal fade '+'show' : 'modal fade '+'hide'} id="modal-default" >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">{title}</h4>
        <button type="button" className="close" onClick={() => onClose()}  aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
            {children}
      </div>
      <div className="modal-footer justify-content-between">
        <button type="button" onClick={() => onClose()} className="btn btn-default" >Close</button>
      </div>
    </div>
    {/* /.modal-content */}
  </div>
  {/* /.modal-dialog */}
</div>
<div className={ (visibility)?'modal-backdrop '+'show' : 'modal-backdrop '+'hide'}></div>
            </React.Fragment>
        )
    }
}

export default Modal;
