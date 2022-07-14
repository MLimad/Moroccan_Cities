import React, { Component } from 'react'
import "./Home.css"

export default class Home extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         cities:[
             {name:"casablanca",population:"3,36M",superficie:"384 km²",region:"Grand Casablanca"},
             {name:"tanger",population:"947 952K",superficie:"116 km²",region:"Tanger-Tétouan-Al Hoceïma"},
             {name:"marrekech",population:"3928 850K",superficie:"230 km²",region:"Marrakech-Safi"},
             {name:"rabat ✪",population:"577 827K",superficie:"117 km²",region:"Rabat-Salé-Kénitra"},
             {name:"ouarzazte",population:"69 420K",superficie:"305 km²",region:"Drâa-Tafilalet"},

         ],
         valueInput:""
      }
    }

    bindValue = (e) =>{
        this.setState({
            valueInput:e.target.value
        })
    }

  render() {
    return (
     <div>
          <header>
            <p>Moroccan Cities</p>
        </header>
        <div className="row my-5 ">
            <div className="col-md-6 mx-auto">
            <input onChange={this.bindValue} className="form-control" type="text" placeholder="Name of City" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 mx-auto">
            <table className="table table-striped ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">City</th>
                        <th scope="col">Population</th>
                        <th scope="col">Superficie</th>
                        <th scope="col">Region</th>

                    </tr>
                </thead>
                <tbody>
               {
                    this.state.cities.filter((city) => city.name.match(`${this.state.valueInput}`)).map((city,index) => (

                        <tr key={index}>
                            <th>{index+1}</th>
                            <th>{city.name}</th>
                            <td>{city.population}</td>
                            <td>{city.superficie}</td>
                            <td>{city.region}</td>

                        </tr>
                        
                            ))
               }

                   

                </tbody>
                </table>
            </div>
        </div>
     </div>
    
    )
  }
}
