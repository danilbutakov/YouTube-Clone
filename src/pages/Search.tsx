import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../Types';
import { clearVideos } from '../store';
import { useNavigate } from 'react-router-dom';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import SearchCard from '../components/SearchCard';

const Search = () => {
	const dispatch = useAppDispatch();
	const videos = useAppSelector(state => state.youtubeApp.videos);
	const searchTerm = useAppSelector(state => state.youtubeApp.searchTerm);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(clearVideos());
		if (searchTerm === '') {
			navigate('/');
		} else {
			dispatch(getSearchPageVideos(false));
		}
	}, [dispatch, navigate, searchTerm]);

	return (
		<div className='max-h-screen overflow-hidden'>
			<div style={{ height: '7.5vh' }}>
				<Navbar />
			</div>
			<div className='flex' style={{ height: '92.5vh' }}>
				<Sidebar />
				{videos.length ? (
					<div className='py-8 pl-8 flex flex-col gap-5 items-center w-full'>
						<InfiniteScroll
							next={() => dispatch(getSearchPageVideos(true))}
							hasMore={videos.length < 500}
							loader={<Spinner />}
							height={1000}
							dataLength={videos.length}>
							{videos.map((item: HomePageVideos) => (
								<div className='my-5' key={item.videoId}>
									<SearchCard data={item} />
								</div>
							))}
						</InfiniteScroll>
					</div>
				) : (
					<Spinner />
				)}
			</div>
		</div>
	);
};

export default Search;
