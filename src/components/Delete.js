import React from 'react';

export class Delete extends React.Component {

    constructor() {
        super();
        this.state = {
            id:null,
            title:null,
            developer:null,
            desc:null
        }
        this.delete = this.delete.bind(this);
    }

    async loadResults(){
        const response = await fetch(`http://145.24.222.167:8000/games`)
            const json = await response.json()
            this.setState(json)
    }

    componentDidMount () {
        this.loadResults();
    }

    async delete() {
        await fetch(`http://145.24.222.167:8000/games`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        }
    )
    this.setState({deleted: true});
}

render() {


    return (
        
        <div className="row">
        <div className="col">
          <div className="btn-group">
            <button className="btn btn-success" onClick= { this.delete }>
              Verwijder
            </button>
                     </div>
        </div>
      </div>
    )

}}
