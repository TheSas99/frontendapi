import React from 'react';
import {Button} from "reactstrap";


export class Create extends React.Component {
   
        constructor() {
          super();
          this.state = {
            
          };

          this.handleChange = this.handleChange.bind(this);
          this.postData = this.postData.bind(this);
        }

        handleChange(e) {
          this.setState({ [e.target.name]: e.target.value });
        }

        async postData() {
          const response = await fetch(`http://145.24.222.150:8000/games`, {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(this.state)
          });

          let myresult = await response.json();
          console.log(myresult)
        }


        
        render() {
          return (
              <div className="create">
                  <form>
                    <div className="row">
                        <div className="col">
                            <h3>Voeg Game Toe</h3>
                            <p> Titel: </p>
                                <input onChange={this.handleChange} name="title" type="text" id="title">
                                </input>
                            <p> Developer: </p>
                                <input onChange={this.handleChange} name="developer" type="text" id="developer">
                                </input>
                            <p> Beschrijving:</p>
                                <input onChange={this.handleChange} name="desc" type="text" id="desc">
                                </input>
                            <p>
                                <Button color="btn btn-primary" onClick={this.postData}>Voeg toe aan GameDex </Button>
                            </p>
                        </div>
                    </div>
                  </form>
              </div>
          );
        }
      }
