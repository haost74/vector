import className from 'classnames';
import React from 'react';
import styles from './App.css';
import $ from "jquery";
import Axios from 'axios';


class Button  extends React.Component {


  getParameter(){
    var formDate = document.getElementById("fromDate");
    var data = {from:fromDate.value};
    $.ajax({
       type: 'POST',
       url: 'http://localhost:3000/endpoint',
       data: data,
       contentType: "application/json; charset=utf-8",
       dataType: "json",

      success: function(data){
        console.log(data);
      },
      error: function(err){
        console.log(err);
      }
    });
  }

  getParam(){
      var data = {from:fromDate.value};
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
