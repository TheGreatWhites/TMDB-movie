import React, { Component } from 'react';
import style from './Detail.css';

const Detail = props => {
	return props.data ? (
		<div className={style.detailWrapper}>
			<div className={style.title}>
				<a
					href={props.data.homepage ? props.data.homepage : '#'}
					target='blank'>
					{props.data.title}
				</a>
			</div>

			<input hidden value={props.data.id} id='tmdbID' readOnly />
			<input hidden value={props.data.imdb_id} id='imdbID' readOnly />
			<div className={style.description + ' row'}>
				<div className={style.image + ' col-sm-3'}>
					<a
						href={props.data.homepage ? props.data.homepage : '#'}
						target='blank'>
						<img
							alt='Image Cannot be found for this movie'
							src={
								props.data.poster_path
									? 'https://image.tmdb.org/t/p/w500' +
									  props.data.poster_path
									: ''
							}
						/>
					</a>
				</div>
				<div className={style.data + ' col-sm-9'}>
					<div className={style.runtime_rating_wrapper}>
						<div className={style.rating}>
							<span className={style.label}>Rating :</span>
							{props.data.vote_average}
						</div>
						<div className={style.ratingCount}>
							<span className={style.label}> Votes </span>
							{props.data.vote_count}
						</div>
						<div className={style.runtime}>
							<span className={style.label}>Runtime </span>
							{props.data.runtime} mins
						</div>
					</div>
					<div className={style.genre}>
						<span className={style.label}>Genres : </span>
						{Array.from(props.data.genres, x => x.name).join(', ')}
					</div>
					<div className={style.overview}>
						<span className={style.label}>Overview : </span>
						{props.data.overview}
					</div>
					<div className={style.releaseDate}>
						<span className={style.label}>Release Date : </span>
						{props.data.release_date}
					</div>
				</div>
			</div>
		</div>
	) : (
		''
	);
};

export default Detail;
