"use client";
import Image from "next/image";
import { MdOndemandVideo } from "react-icons/md";
import { HiPhoto } from "react-icons/hi2";
import { BsCalendar2Date } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { HiGlobeEuropeAfrica } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";
import { AiTwotoneLike, AiOutlineLike } from "react-icons/ai";
import { TbBulbFilled } from "react-icons/tb";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";

export default function Home() {
	const handleOpenCreatePostModel = () => {
		console.log("focused");
	};
	return (
		<>
			<div className='mt-8 grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6'>
				<aside>
					<div className='rounded-md bg-white'>
						<div className='h-20 rounded-t-md bg-gradient-to-r from-cyan-500 to-blue-500'></div>
						<div className='-mt-12 flex justify-center'>
							<Avatar />
						</div>
						<div className='mt-4 px-4 pb-6 text-center'>
							<h6 className='text-xl font-bold'>Joan Joseph</h6>
							<div className='mt-2'>
								<p className='text-sm text-gray-500'>
									Software Engineer | Mentor | Passionate about Typescript and
									Web Development; Currently learning Rust and Go |
								</p>
							</div>
						</div>
					</div>
					<div className='mt-4 rounded-md  bg-white pb-4 pt-4'>
						<div className='px-4'>
							<p>Recent</p>
							<div className='mt-4'>
								<h6 className='mb-2 text-sm font-bold'># technology</h6>
								<h6 className='mb-2 text-sm font-bold'># automotiveindustry</h6>
								<h6 className='mb-2 text-sm font-bold'># leanstartups</h6>
								<h6 className='mb-2 text-sm font-bold'># mobilephones</h6>
								<h6 className='mb-2 text-sm font-bold'># visualdesign</h6>
							</div>
						</div>

						<div className='mt-8 px-4'>
							<p className='font-bold text-primary'>Groups</p>
							<div className='mt-4'>
								<h6 className='mb-2 text-sm font-bold'>
									# The Math Connection
								</h6>
								<h6 className='mb-2 text-sm font-bold'>
									# Theoretical physics
								</h6>
								<h6 className='mb-2 text-sm font-bold'>
									# Small Business Network
								</h6>
							</div>
						</div>
						{/* Divider component  */}
						<div className='mb-4 mt-8 h-px w-full bg-gray-200'></div>
						<div className='flex justify-center'>
							<button className='font-bold text-gray-500'>Discover more</button>
						</div>
					</div>
				</aside>
				<main className=' col-span-2'>
					<div className='rounded-lg bg-white p-4'>
						<div className='flex items-center gap-4'>
							<div>
								<Avatar size='small' />
							</div>
							<div className='flex-1'>
								<input
									type='text'
									placeholder='Start a post'
									className='w-full rounded-3xl border border-gray-400 p-3 caret-transparent placeholder:font-bold placeholder:text-gray-400 focus:cursor-pointer focus:bg-secondary-light focus:outline-none'
									onFocus={handleOpenCreatePostModel}
								/>
							</div>
						</div>
						<div className='mx-2 mt-2 flex flex-wrap justify-between'>
							<button className='flex items-center gap-2 rounded-md p-2 hover:bg-gray-200 focus:bg-gray-200'>
								<HiPhoto className='text-3xl text-primary' />
								<span className='font-bold text-gray-500'>Photo</span>
							</button>
							<button className='flex items-center gap-2 rounded-md p-2 hover:bg-gray-200 focus:bg-gray-200'>
								<MdOndemandVideo className='text-3xl text-green-500' />
								<span className='font-bold text-gray-500'>Video</span>
							</button>
							<button className='flex items-center gap-2 rounded-md p-2 hover:bg-gray-200 focus:bg-gray-200'>
								<BsCalendar2Date className='text-2xl text-orange-700' />
								<span className='font-bold text-gray-500'>Event</span>
							</button>
							<button className='flex items-center gap-2 rounded-md p-2 hover:bg-gray-200 focus:bg-gray-200'>
								<RiPagesLine className='text-2xl text-rose-700' />
								<span className='font-bold text-gray-500'>Write article</span>
							</button>
						</div>
					</div>

					<div className='mt-8'>
						<div className='rounded-md bg-white'>
							<div className='p-4'>
								<div className='mb-2 flex items-center justify-between '>
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
												<p className='flex items-center text-xs text-gray-400'>
													1w <span className='mx-0.5'>&#x2022;</span>{" "}
													<HiGlobeEuropeAfrica />
												</p>
											</div>
										</div>
									</div>
									<div className='mr-4'>
										<button className='flex items-center gap-2 font-bold text-primary'>
											<HiPlus />
											<span>Follow</span>
										</button>
									</div>
								</div>
								<div className='mb-3'>
									<p className='text-sm'>
										Economic Freedom has become part and parcel of African
										independence. We need true leaders who will truly stand for
										the Economic of Africa...
									</p>
								</div>
							</div>
							<div className='w-full'>
								<Image
									src='https://images.unsplash.com/photo-1686847781901-34c03a0af2e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
									alt='post'
									width={200}
									height={100}
									className='max-h-96 w-full'
								/>
							</div>
							<div className='flex justify-between p-2'>
								<div className='flex gap-2'>
									<div className='flex'>
										<span className='rounded-full bg-primary p-0.5'>
											<AiTwotoneLike className='text-sm text-blue-200' />
										</span>
										<span className='-ml-1 rounded-full bg-orange-400 p-0.5'>
											<TbBulbFilled className='text-sm text-orange-200' />
										</span>
									</div>
									<p className='text-xs text-gray-400'>
										Yekonia L. Mlowe and 41 others
									</p>
								</div>
								<div>
									<p className='text-xs text-gray-400'>
										344 comments <span className='mx-0.5'>&#x2022;</span> 744
										reposts
									</p>
								</div>
							</div>
							<div className='px-4 pb-2'>
								<div className='my-2 h-px w-full bg-gray-200'></div>
								<div className='grid grid-cols-4'>
									<button className='flex items-center justify-center gap-1 rounded-md px-2 py-3 text-gray-500 hover:bg-gray-200 '>
										<AiOutlineLike className='text-xl' />
										<span className='text-sm font-semibold'>Like</span>
									</button>
									<button className='flex items-center justify-center gap-1 rounded-md px-2 py-3 text-gray-500 hover:bg-gray-200 '>
										<FaRegCommentDots className='text-xl' />
										<span className='text-sm font-semibold'>Comment</span>
									</button>
									<button className='flex items-center justify-center gap-1 rounded-md px-2 py-3 text-gray-500 hover:bg-gray-200 '>
										<BiRepost className='text-2xl' />
										<span className='text-sm font-semibold'>Repost</span>
									</button>
									<button className='flex items-center justify-center gap-1 rounded-md px-2 py-3 text-gray-500 hover:bg-gray-200 '>
										<RiSendPlaneFill className='text-xl' />
										<span className='text-sm font-semibold'>Send</span>
									</button>
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