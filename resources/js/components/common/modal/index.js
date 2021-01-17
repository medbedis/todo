import React, { Component, component } from 'react';




class Modal extends Component {

onClose(e){
    $('.modal').removeClass('show')
    $('.modal-backdrop').removeClass('modal-backdrop show')


}

    render() {
        const { title, visibility,onClose} = this.props;

        return (
            <React.Fragment>
                <div className={ (visibility)?'modal fade '+'show' : 'modal fade '+'hide'} id="modal-default" >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">{title}</h4>
        <button type="button" className="close"  data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <p>One fine body…</p>
      </div>
      <div className="modal-footer justify-content-between">
        <button type="button" onClick={this.onClose} className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
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
