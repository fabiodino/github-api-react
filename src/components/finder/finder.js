import React from 'react';
import './finder.css';

import {searchUsers} from '../../github-api-service';

export default class Finder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    search = () => {
        console.log('funcao search');
        searchUsers(this.state.value)
            .then((response) => {
                console.log('sucess:', response.data);
            })
            .catch((error) => {
                console.log('error:', error);
            });
    }

    handleInputSearchChange = (e) => {
        const value = e.target.value;
        console.log('valor:', value);
        this.setState({
            value: value
        }, () => {
            console.log(this.state);
        });
    }

    render () {
        return (
            <div className="finder">
                <input
                    type='text'
                    placeholder='insira o nome'
                    className='search-input'
                    onChange={this.handleInputSearchChange}>
                </input>
                <button
                    className='search-button'
                    onClick={this.search}>
                    Busca nome
                </button>
            </div>
        );
    }
}