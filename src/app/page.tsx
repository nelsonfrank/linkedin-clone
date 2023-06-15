"use client";
import Image from "next/image";
import { MdOndemandVideo } from "react-icons/md";
import { HiPhoto } from "react-icons/hi2";
import { BsCalendar2Date } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { HiGlobeEuropeAfrica } from "react-icons/hi2";

export default function Home() {
	const handleOpenCreatePostModel = () => {
		console.log("focused");
	};
	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6 mt-8'>
				<aside>
					<div className='bg-white rounded-md'>
						<div className='h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-md'></div>
						<div className='flex justify-center -mt-12'>
							<Avatar />
						</div>
						<div className='mt-4 text-center pb-6 px-4'>
							<h6 className='text-xl font-bold'>Joan Joseph</h6>
							<div className='mt-2'>
								<p className='text-sm text-gray-500'>
									Software Engineer | Mentor | Passionate about Typescript and
									Web Development; Currently learning Rust and Go |
								</p>
							</div>
						</div>
					</div>
					<div className='bg-white rounded-md  pt-4 pb-4 mt-4'>
						<div className='px-4'>
							<p>Recent</p>
							<div className='mt-4'>
								<h6 className='text-sm font-bold mb-2'># technology</h6>
								<h6 className='text-sm font-bold mb-2'># automotiveindustry</h6>
								<h6 className='text-sm font-bold mb-2'># leanstartups</h6>
								<h6 className='text-sm font-bold mb-2'># mobilephones</h6>
								<h6 className='text-sm font-bold mb-2'># visualdesign</h6>
							</div>
						</div>

						<div className='mt-8 px-4'>
							<p className='text-primary font-bold'>Groups</p>
							<div className='mt-4'>
								<h6 className='text-sm font-bold mb-2'>
									# The Math Connection
								</h6>
								<h6 className='text-sm font-bold mb-2'>
									# Theoretical physics
								</h6>
								<h6 className='text-sm font-bold mb-2'>
									# Small Business Network
								</h6>
							</div>
						</div>
						{/* Divider component  */}
						<div className='h-px w-full bg-gray-200 mt-8 mb-4'></div>
						<div className='flex justify-center'>
							<button className='font-bold text-gray-500'>Discover more</button>
						</div>
					</div>
				</aside>
				<main className=' col-span-2'>
					<div className='bg-white p-4 rounded-lg'>
						<div className='flex items-center gap-4'>
							<div>
								<Avatar size='small' />
							</div>
							<div className='flex-1'>
								<input
									type='text'
									placeholder='Start a post'
									className='p-3 border border-gray-400 rounded-3xl w-full caret-transparent placeholder:font-bold placeholder:text-gray-400 focus:outline-none focus:bg-secondary-light focus:cursor-pointer'
									onFocus={handleOpenCreatePostModel}
								/>
							</div>
						</div>
						<div className='mx-2 flex justify-between flex-wrap mt-2'>
							<button className='flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 focus:bg-gray-200'>
								<HiPhoto className='text-3xl text-primary' />
								<span className='font-bold text-gray-500'>Photo</span>
							</button>
							<button className='flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 focus:bg-gray-200'>
								<MdOndemandVideo className='text-3xl text-green-500' />
								<span className='font-bold text-gray-500'>Video</span>
							</button>
							<button className='flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 focus:bg-gray-200'>
								<BsCalendar2Date className='text-2xl text-orange-700' />
								<span className='font-bold text-gray-500'>Event</span>
							</button>
							<button className='flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 focus:bg-gray-200'>
								<RiPagesLine className='text-2xl text-rose-700' />
								<span className='font-bold text-gray-500'>Write article</span>
							</button>
						</div>
					</div>

					<div className='mt-8'>
						<div className='bg-white p-2 rounded-md'>
							<div className='flex gap-2'>
								<Avatar size='small' />
								<div>
									<div className='flex'>
										<h4 className=' font-bold'>Zain Kahn</h4>
										<div className='text-gray-400'>
											<span className=' mx-1 text-gray-400'>&#x2022;</span>
											3rd+
										</div>
									</div>
									<div>
										<p className='text-sm text-gray-500'>
											Building a self-managed trading portfolio
										</p>
									</div>
									<div>
										<p className='text-xs text-gray-400 flex items-center'>
											1w <span className='mx-0.5'>&#x2022;</span>{" "}
											<HiGlobeEuropeAfrica />
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
				<aside className='bg-white'>
					<div>
						{/* feed goes here */}
						<p>feed goes here</p>
					</div>
					<div>
						{/* footer goes here */}
						<p>footer goes here</p>
					</div>
				</aside>
			</div>
		</>
	);
}

interface AvatarProps {
	size?: "large" | "small";
	className?: string;
}
const Avatar = ({ size = "large", className }: AvatarProps) => {
	const config =
		size === "large"
			? {
					height: 100,
					width: 100,
					styles: `w-20 h-20`,
			  }
			: {
					height: 70,
					width: 70,
					styles: `w-14 h-14`,
			  };
	return (
		<Image
			src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80'
			alt='profile'
			width={config.height}
			height={config.width}
			className={`${config.styles} rounded-full`}
		/>
	);
};