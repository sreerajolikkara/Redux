import React, { Component } from 'react';
import axios from 'axios';
export default class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = { weather: null };
    }

    componentDidMount() //{
    {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b25902b9a7c980f9bb05ebc8f7c93918`)
            .then(response => {
                // console.log(response);
                const data = JSON.parse(JSON.stringify(response.data));
                // console.log(data);
                this.setState({ weather: data });
                console.log(this.state.weather);
            })
    }


    render() {
            let x=this.state.weather.map(w=>
                (<div key={w.id}>
                    weathercord:{w.coord},
                    weatherid:{w.id}</div>)
                )
        return (
            // // <div>
            //     {/* <ul>
            //         {this.state.weather.map(weather => {weather.id})} }</ul> */}
            //     {/* {this.state.weather.id} */}
            // // </div>
            <div>
            {this.state.weather.cood}</div>
        );
    }
}