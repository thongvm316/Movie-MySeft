import React, { Component } from 'react';
import { 
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE } from '../../config'
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import './Home.css'

class Home extends Component {
    constructor () {
        super()
        this.state = {
            movies: [],
            heroImage: null,
            loading: false,
            currentPage: 0,
            totalPages: 0,
            searchTerm: ''
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        this.fetchItems(endpoint)
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({
                    loading: false,
                    movies: [...this.state.movies, ...result.results],
                    heroImage: this.state.heroImage || result.results[0],
                    currentPage: result.page,
                    totalPages: result.toal_pages
                })
            })
    }

    render() {
        console.log(this.state)
        return (
            <div className="rmdb-home">
                { this.state.heroImage
                    ? <div>
                        <HeroImage
                            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}
                            title={this.state.heroImage.original_title}
                            text={this.state.heroImage.overview}          
                        />
                        <SearchBar/>
                      </div> 
                    : null    
                }
            </div>
        )
    }
}

export default Home