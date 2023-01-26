import React from 'react';
import {
	FaRegCompass,
	GiFilmStrip,
	MdHistory,
	MdHomeFilled,
	MdOutlinedFlag,
	MdOutlineFeedback,
	MdOutlineHelpOutline,
	MdOutlineSlowMotionVideo,
	MdOutlineSmartDisplay,
	MdOutlineSportsVolleyball,
	MdOutlineVideoLibrary,
	MdOutlineWatchLater,
	MdSettings,
	MdSubscriptions,
	MdThumbUpOffAlt,
	TbDeviceGamepad2,
	TbMusic
} from 'react-icons/all';

const Sidebar = () => {
	const mainLinks = [
		{
			icon: <MdHomeFilled className='text-xl' />,
			name: 'Home'
		},
		{
			icon: <FaRegCompass className='text-xl' />,
			name: 'Explore'
		},
		{
			icon: <MdOutlineSlowMotionVideo className='text-xl' />,
			name: 'Shorts'
		},
		{
			icon: <MdSubscriptions className='text-xl' />,
			name: 'Subscriptions'
		}
	];

	const secondaryLinks = [
		{
			icon: <MdOutlineVideoLibrary className='text-xl' />,
			name: 'Library'
		},
		{
			icon: <MdHistory className='text-xl' />,
			name: 'History'
		},
		{
			icon: <MdOutlineSmartDisplay className='text-xl' />,
			name: 'Your Videos'
		},
		{
			icon: <MdOutlineWatchLater className='text-xl' />,
			name: 'Watch Later'
		},
		{
			icon: <MdThumbUpOffAlt className='text-xl' />,
			name: 'Liked Videos'
		}
	];

	const subscriptionLinks = [
		{
			icon: <TbMusic className='text-xl' />,
			name: 'Music'
		},
		{
			icon: <MdOutlineSportsVolleyball className='text-xl' />,
			name: 'Sport'
		},
		{
			icon: <TbDeviceGamepad2 className='text-xl' />,
			name: 'Gaming'
		},
		{
			icon: <GiFilmStrip className='text-xl' />,
			name: 'Films'
		}
	];

	const helpLinks = [
		{
			icon: <MdSettings className='text-xl' />,
			name: 'Settings'
		},
		{
			icon: <MdOutlinedFlag className='text-xl' />,
			name: 'Report history'
		},
		{
			icon: <MdOutlineHelpOutline className='text-xl' />,
			name: 'Help'
		},
		{
			icon: <MdOutlineFeedback className='text-xl' />,
			name: 'Send feedback'
		}
	];

	const textLinks = [
		[
			'About',
			'Press',
			'Copyright',
			'Contact us',
			'Creator',
			'Advertise',
			'Developers'
		],
		[
			'Terms',
			'Privacy',
			'Policy & Safety',
			'How YouTube works',
			'Test new features'
		]
	];

	return (
		<div className='w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 sidebar'>
			<ul className='flex flex-col border-b-2 border-gray-600'>
				{mainLinks.map(({ icon, name }) => (
					<li
						key={name}
						className={`pl-6 py-3 hover:bg-zinc-600 ${
							name === 'Home' ? 'hover:bg-zinc-600' : ''
						}`}>
						<a href='#' className='flex items-center'>
							{icon}
							<span className='text-sm tracking-wider'>
								{name}
							</span>
						</a>
					</li>
				))}
			</ul>
			<ul className='flex flex-col border-b-2 border-gray-600'>
				{secondaryLinks.map(({ icon, name }) => (
					<li key={name} className={`pl-6 py-3 hover:bg-zinc-600`}>
						<a href='#' className='flex items-center'>
							{icon}
							<span className='text-sm tracking-wider'>
								{name}
							</span>
						</a>
					</li>
				))}
			</ul>
			<ul className='flex flex-col border-b-2 border-gray-600'>
				{subscriptionLinks.map(({ icon, name }) => (
					<li key={name} className={`pl-6 py-3 hover:bg-zinc-600`}>
						<a href='#' className='flex items-center'>
							{icon}
							<span className='text-sm tracking-wider'>
								{name}
							</span>
						</a>
					</li>
				))}
			</ul>
			<ul className='flex flex-col border-b-2 border-gray-600'>
				{helpLinks.map(({ icon, name }) => (
					<li key={name} className={`pl-6 py-3 hover:bg-zinc-600`}>
						<a href='#' className='flex items-center'>
							{icon}
							<span className='text-sm tracking-wider'>
								{name}
							</span>
						</a>
					</li>
				))}
			</ul>
			<ul className='flex gap-3 flex-wrap text-sm p-4 text-zinc-400'>
				{textLinks[0].map(name => (
					<li key={name}>{name}</li>
				))}
			</ul>
			<ul className='flex gap-3 flex-wrap text-sm p-4 text-zinc-400'>
				{textLinks[1].map(name => (
					<li key={name}>{name}</li>
				))}
			</ul>
			<span className='px-4 text-sm text-zinc-400'>
				&copy; 2023 Google
			</span>
			<br />
			<p className='px-4 pt-3 text-zinc-400 text-sm'>
				Это клон YouTube для изучения
			</p>
		</div>
	);
};

export default Sidebar;
