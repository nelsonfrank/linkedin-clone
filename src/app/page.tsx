import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6 mt-8'>
				<aside>
					<div className='bg-white rounded-md'>
						<div className='h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-md'></div>
						<div className='flex justify-center -mt-12'>
							<Image
								src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80'
								alt='profile'
								width={100}
								height={100}
								className='w-20 h-20 rounded-full'
							/>
						</div>
						<div className='mt-4 text-center pb-6 px-4'>
							<h6 className='text-xl font-bold'>Joan Joseph</h6>
							<div className='mt-2'>
								<p className='text-sm'>
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
				<main className='bg-white col-span-2'>
					<div>
						{/* post input goes here */}
						<p>Post input here</p>
					</div>

					<div>
						{/* post goes here */}
						<p>Posts goes here</p>
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
