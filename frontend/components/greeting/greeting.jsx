import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UploadFormContainer from '../upload/upload_form_container';
//&nbsp = break line without space.

export default class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      modalOpen: false,
    };

    this.modalClick = this.modalClick.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  modalClose() {
    this.setState({modalOpen: false});
  }

  modalClick() {
    return (e) => {
      e.preventDefault();
      this.setState({modalOpen: true});
    };
  }

  render() {
    window.onclick = (event) => {
      const modal = document.getElementById('upload-modal');
      if (event.target === modal) {
        this.modalClose();
      }
    };
    const { currentUser, logout } = this.props;
    const modall = this.state.modalOpen ? (
        <div id="upload-modal" className="modal">
          <div className="modal-content">
            <UploadFormContainer modalClose={this.modalClose}/>
          </div>
        </div>
    ) : null;
    return (
      <hgroup className="header-group">
        <h2 className="header-name">USER: { currentUser.username }</h2>

        <div className="dropdown">
          <span className="img-box">
            <img className="icon-img" src={window.icon.logo}/>
          </span>
          <div className="dropdown-content">
            <ul className="links clearfix">
              <li className="links-container">
                <Link to={`/${this.props.currentUser.username}`} className="header-button">Astro Page</Link>
              </li>
              {/* <li className="links-container">
                <button className="header-button">PLACEHOLDER2</button>
              </li> */}
            </ul>
            {/* <ul className="links clearfix">
              <li className="links-container">
                <button className="header-button">PLACEHOLDER3</button>
              </li>
              <li className="links-container">
                <button className="header-button">PLACEHOLDER4</button>
              </li>
            </ul> */}
            <ul className="links clearfix">
              <li className="links-container">
                <button className="header-button" onClick={logout}>Log Out</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="modal-container">
          <button id="modal-btn" onClick={this.modalClick()}>
            <i className="material-icons">cloud_upload</i> Upload
            </button>
        </div>
        {modall}
      </hgroup>
    );
  }
}
