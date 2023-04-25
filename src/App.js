import React, { Component } from 'react'
import BoxOfWeather from './Components/BoxOfWeather';
import Icon from 'react-icons-kit';
import {search} from 'react-icons-kit/metrize/search'
import styles from "./App.module.css"
export default class App extends Component {


  constructor(props){
    super(props);
    this.state={
          ApiKey: "6a9a74f50009d7d6479764fc4667e1be",
          city: "Tehran",
          name: "",
          temp: "",
          humidity:"",
          temp:"",
          icon: "",
          description:"",
          speed:"",
    }
  }
  componentDidMount(){
    const {ApiKey , city} = this.state
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+ApiKey)
    .then((response) => response.json())
    .then((apiList) => this.setingStates(apiList))
  }


  setingStates = (data)=>{
    console.log(data);
    const {name}= data;
    const {icon , description}= data.weather[0];
    const {humidity,temp}= data.main;
    const {speed}= data.wind;
      this.setState({
        name: name,
        temp:temp,
        humidity:humidity,
        icon:icon,
        description:description,
        speed:speed
      })
  }

CityChange = event=>{
this.setState({
  city : event.target.value
})
}
Click = ()=>{
  this.componentDidMount()
}
  render() {
    return (
      <div>
        <div className={styles.inputBox}>
          <input className={styles.input} type="text" value={this.state.city} onChange={this.CityChange} />
          <Icon size={22} className={styles.icon} icon={search} onClick={this.Click}/>
        </div>
       <BoxOfWeather description={this.state.description} speed={this.state.speed} icon={this.state.icon}  name={this.state.name} temp={this.state.temp} humidity={this.state.humidity}  />
      </div>
    )
  }
}
