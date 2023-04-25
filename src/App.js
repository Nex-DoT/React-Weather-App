import React, { Component } from 'react'

export default class App extends Component {


  constructor(props){
    super(props);
    this.state={
          ApiKey: "6a9a74f50009d7d6479764fc4667e1be",
          city: "yazd",
          name: "",
          temp: "",
          humidity:"",
          temp:"",
          icon: "",
          description:""
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



  render() {
    return (
      <div>App</div>
    )
  }
}
