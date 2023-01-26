import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import Card from '../components/Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../Types';
import { clearVideos } from '../store';

const Home = () => {
	const dispatch = useAppDispatch();
	const videos = useAppSelector(state => state.youtubeApp.videos);

	useEffect(() => {
		return () => {
			dispatch(clearVideos());
		};
	}, [dispatch]);

	useEffect(() => {
		dispatch(getHomePageVideos(false));
	}, [dispatch]);

	return (
		<div className='max-h-screen overflow-hidden'>
			<div style={{ height: '7.5vh' }}>
				<Navbar />
			</div>
			<div className='flex' style={{ height: '92.5vh' }}>
				<Sidebar />
				{videos.length ? (
					<InfiniteScroll
						next={() => dispatch(getHomePageVideos(true))}
						hasMore={videos.length < 500}
						loader={<Spinner />}
						height={1000}
						dataLength={videos.length}>
						<div className='grid gap-y-16 gap-x-10 grid-cols-4 p-8'>
							{videos.map((item: HomePageVideos) => (
								<Card key={item.videoId} data={item} />
							))}
						</div>
					</InfiniteScroll>
				) : (
					<Spinner />
				)}
			</div>
		</div>
	);
};

export default Home;
