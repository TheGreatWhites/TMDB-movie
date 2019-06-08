import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './List.css';

const List = props => {
	return (
		<div className={style.listWrapper + ' row'}>
			{props.data
				? props.data.results.map(result => {
						return (
							<Link to='/detail' key={result.id}>
								<div
									className={
										style.listElementWrapper +
										' col-md-3 col-sm-4'
									}
									onClick={() =>
										props.clickHandler(result.id)
									}>
									<div className={style.listElement}>
										<div className={style.elementImage}>
											<img
												alt='Image Cannot be found for this movie'
												src={
													result.poster_path
														? 'https://image.tmdb.org/t/p/w500' +
														  result.poster_path
														: ''
												}
											/>
										</div>
										<div className={style.elementTitle}>
											<span>{result.title ? result.title : result.name}</span>
										</div>
									</div>
								</div>
							</Link>
						);
				  })
				: ''}
		</div>
	);
};

export default List;
