import React, { Component } from 'react';
import { BrowserRouter, Route, hashHistory } from 'react-router-dom';
import Axios from 'axios';

import background from '../assets/images/home_background.jpg';
import style from './App.css';

import Search from './Search/Search';
import List from './List/List';
import Detail from './Detail/Detail';

class App extends Component {
	state = {};

	componentDidMount() {
		this.getInitialData();
	}

	getInitialData = () => {
		Axios.get(
			'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ede9c6b415edfb53a6085831d8c18013'
		)
			.then(({ data }) => {
				this.setState({ data: data });
			})
			.catch(error => {
				console.log(error);
			});
	};

	clickHandler = id => {
		Axios.get(
			'https://api.themoviedb.org/3/movie/' +
				id +
				'?api_key=ede9c6b415edfb53a6085831d8c18013'
		)
			.then(({ data }) => {
				this.setState({ movieData: data });
			})
			.catch(error => {
				console.log(error);
			});
	};

	submitHandler = query => {
		if (query.length) {
			query = query.split(' ').join('+');
			Axios.get(
				'https://api.themoviedb.org/3/search/movie?query=' +
					query +
					'&api_key=ede9c6b415edfb53a6085831d8c18013'
			)
				.then(({ data }) => {
					this.setState({ data: data });
				})
				.catch(error => {
					console.log(error);
				});
		} else {
			this.getInitialData();
		}
	};

	render() {
		return (
			<div className={style.maincontent}>
				<div className={style.background}>
					<img src={background} />
				</div>
				<BrowserRouter history={hashHistory}>
					<Route
						path='/'
						render={routeProps => (
							<Search
								{...routeProps}
								submitHandler={this.submitHandler}
							/>
						)}
					/>
					<Route
						path='/'
						exact
						render={routeProps => (
							<List
								{...routeProps}
								data={this.state.data}
								clickHandler={this.clickHandler}
							/>
						)}
					/>
					<Route
						path='/detail'
						render={routeProps => (
							<Detail
								{...routeProps}
								data={this.state.movieData}
							/>
						)}
					/>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
