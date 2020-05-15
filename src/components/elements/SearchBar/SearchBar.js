import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }

    timeout = null

    doSearch = (e) => {
        e.persist() //  sau khi chay Ham setState, event co gia tri null de tang hieu suat, nen ham setTimeout ko chay dc, su dung e.persist() de giu lai gia tri
        this.setState({
            value: e.target.value
        })
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
            this.props.callback(e.target.value)
        }, 500)
    }

    render() {
        // console.log(this.props);
        return (
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                    <FontAwesome className="rmdb-fa-search" name="search" size="2x"/>
                    <input 
                        type="text" 
                        className="rmdb-searchbar-input"
                        placeholder="Search" 
                        onChange={this.doSearch}
                        value={this.state.value}
                    />
                </div> 
            </div>
        );
    }
}

export default SearchBar;