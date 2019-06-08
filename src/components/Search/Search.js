import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import style from './Search.css';
class Search extends Component {
	render() {
		return (
			<form
				className={style.searchForm}
				onSubmit={event => {
					event.preventDefault();
					this.props.submitHandler(this.textInput.value);
				}}>
				<input
					type='text'
					placeholder='Search...'
					className={style.searchField}
					ref={input => (this.textInput = input)}
				/>
				<button type='submit' className={style.searchButton}>
					Search
				</button>
			</form>
		);
	}
}

export default Search;
