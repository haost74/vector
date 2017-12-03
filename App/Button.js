import className from 'classnames';
import React from 'react';
import styles from './App.css';
import $ from "jquery";
import Axios from 'axios';


class Button  extends React.Component {

  getParam(){
    var formDate = document.getElementById("fromDate");
    var toDate = document.getElementById("toDate");
      var data = {from:fromDate.value, to:toDate.value};
    Axios.post('/endpoint', data)
      .then(function(response){
        console.log(response.data)
  });

  };


  render() {
    return (
        <button className={styles.buttonStyle} onClick={this.getParam}>{this.props.name}</button>
    );
  }

}

export default Button
