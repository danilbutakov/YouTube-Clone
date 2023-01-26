import React from 'react';
import {
	AiOutlineClose,
	AiOutlineSearch,
	BsBell,
	BsCameraVideo,
	BsYoutube,
	GiHamburgerMenu,
	IoAppsSharp,
	TiMicrophone
} from 'react-icons/all';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/hooks';
import { changeSearchTerm, clearSearchTerm, clearVideos } from '../store';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';

const Navbar = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const searchTerm = useAppSelector(state => state.youtubeApp.searchTerm);

	const handleSearch = () => {
		if (location.pathname !== '/search') {
			navigate('/search');
		} else {
			dispatch(clearVideos());
			dispatch(getSearchPageVideos(false));
		}
	};

	return (
		<div className='flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50'>
			<div className='flex items-center text-2xl gap-8'>
				<div>
					<GiHamburgerMenu />
				</div>
				<Link to='/'>
					<div className='flex items-center justify-center gap-1'>
						<BsYoutube className='text-3xl text-red-600' />
						<span className='text-xl font-medium'>YouTube</span>
					</div>
				</Link>
			</div>
			<div className='flex items-center justify-center gap-5'>
				<form
					onSubmit={e => {
						e.preventDefault();
						handleSearch();
					}}>
					<div className='flex items-center h-10 bg-zinc-900 pr-0 pl-5 rounded-full border-[1px] border-gray-700'>
						<div className='flex items-center gap-4 pr-5'>
							<div>
								<AiOutlineSearch className='text-xl' />
							</div>
							<input
								type='text'
								placeholder='Поиск'
								className='w-96 bg-zinc-900 focus:outline-none border-none'
								value={searchTerm}
								onChange={e =>
									dispatch(changeSearchTerm(e.target.value))
								}
							/>
							<AiOutlineClose
								className={`text-xl cursor-pointer ${
									searchTerm ? 'visible' : 'invisible'
								}`}
								onClick={() => dispatch(clearSearchTerm())}
							/>
						</div>
						<button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-full  border-[1px] border-gray-700'>
							<AiOutlineSearch className='text-xl' />
						</button>
					</div>
				</form>
				<div className='text-xl p-3 bg-zinc-900 rounded-full'>
					<TiMicrophone className='text-xl' />
				</div>
			</div>
			<div className='flex items-center gap-5 text-xl'>
				<BsCameraVideo />
				<IoAppsSharp />
				<div className='relative'>
					<BsBell />
					<span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'></span>
				</div>
				<img
					src='https://yt3.googleusercontent.com/yti/AHXOFjWkrXjwzVTOIuDxbtKfDjBdw28mI8sBsXjR5zLVTA=s88-c-k-c0x00ffffff-no-rj-mo'
					className='w-9 h-9 rounded-full'
					alt='logo'
				/>
			</div>
		</div>
	);
};

export default Navbar;
