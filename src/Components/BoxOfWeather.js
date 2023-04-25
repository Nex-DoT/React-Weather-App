import React, { Component } from 'react'
import styles from "./BoxOfWeather.module.css"
export default class BoxOfWeather extends Component {
  render() {
    return (
      <>
      <div className={styles.box}>
         <h1>Weather in {this.props.name}  <img src={"https://openweathermap.org/img/wn/"+this.props.icon+".png"} alt="" /></h1>
         <h3>Temp : {this.props.temp}°</h3>
         <h3>Description : {this.props.description}</h3>
         <h3>humidity : {this.props.humidity}%</h3>
         <h3>Wind Speed : {this.props.speed}km</h3>
   </div> 
      </>
    )
  }
}
