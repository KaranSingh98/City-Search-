import React, {Component} from 'react';
import axios from 'axios';

class CitySearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: '',
            zipCodes: []
        };
    }

    handleChange = event => {

        // city name converted to upper case to allow for case-insensitiviy when
        // searching later on
        const upperCity = event.target.value.toUpperCase();

        this.setState({
            city: upperCity
        });
    }

    componentDidMount = () => {

        axios.get(`http://ctp-zip-api.herokuapp.com/city/${this.state.city}`)
            .then(response => {
                this.setState({
                    zipCodes: response.data
                });
            })
            .catch(err => console.log(err));
    }

    componentDidUpdate = (prevProps, prevState) => {

        if(prevState.city !== this.state.city)
            this.componentDidMount();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Enter City <br/>
                    <input type="text" name="city" onChange={this.handleChange}/>
                </form>
                <h3> All Zip Codes in {this.state.city} </h3>
                {this.state.zipCodes.map(zipCode =>
                    <div key={zipCode}>
                        <ZipList zip={zipCode} />
                    </div>
                )}
            </div>
        );
    }
};

class ZipList extends Component {

    render() {
        return <p> {this.props.zip} </p>
    }
}

export default CitySearch;
