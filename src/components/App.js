import React, { Component } from 'react';
import { BrowserRouter, Route, hashHistory, Redirect} from 'react-router-dom';
import Axios from 'axios';

import background from '../assets/images/home_background.jpg';
import style from './App.css';

import Header from './Header/Header';
import List from './List/List';
import Detail from './Detail/Detail';
import Login from './Login/LoginForm';
import SignUp from './SignUp/SignUp';

class App extends Component {
	state = {};

	componentDidMount() {
		this.getInitialData();
	}

	getInitialData = () => {
		if (window.location.toString().indexOf('/movie') !== -1) {
			Axios.get(
				'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ede9c6b415edfb53a6085831d8c18013'
			)
			.then(({ data }) => {
				this.setState({ data: data });
			})
			.catch(error => {
				console.log(error);
			});	
		}

		if (window.location.toString().indexOf('/tv') !== -1) {
			Axios.get(
				'https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=ede9c6b415edfb53a6085831d8c18013'
			)
			.then(({ data }) => {
				this.setState({ data: data });
			})
			.catch(error => {
				console.log(error);
			});	
		}
	};

	clickHandler = id => {
		if (window.location.toString().indexOf('/movie') !== -1) {
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
		}
		
		if (window.location.toString().indexOf('/tv') !== -1) {
			Axios.get(
				'https://api.themoviedb.org/3/tv/' +
					id +
					'?api_key=ede9c6b415edfb53a6085831d8c18013'
			)
			.then(({ data }) => {
				this.setState({ movieData: data });
			})
			.catch(error => {
				console.log(error);
			});
		}
	};

	submitHandler = query => {
		if (query.length) {
			query = query.split(' ').join('+');
			if (window.location.toString().indexOf('/movie') !== -1) {
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
			}
			if (window.location.toString().indexOf('/tv') !== -1) {
				Axios.get(
					'https://api.themoviedb.org/3/search/tv?query=' +
						query +
						'&api_key=ede9c6b415edfb53a6085831d8c18013'
				)
				.then(({ data }) => {
					this.setState({ data: data });
				})
				.catch(error => {
					console.log(error);
				});
			}
			
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
							<Header
								{...routeProps}
								submitHandler={this.submitHandler}
								getData = {this.getInitialData}
							/>
						)} />
					<Route
						path='/movie'
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
						path='/tv'
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
						path='/login'
						exact
						render={Login}
					/>
					<Route
						path='/signup'
						exact
						render={SignUp}
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
