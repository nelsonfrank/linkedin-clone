import { IconButton } from "../button";
import { BsLinkedin } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { ImHome3 } from "react-icons/im";
import { IoMdPeople } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
export default function Header() {
	return (
		<>
			<div className='w-full flex justify-between bg-white my-6 px-8 max-w-6xl mx-auto'>
				<div className='w-25 flex gap-4 items-center'>
					<BsLinkedin className='bg-white text-primary w-9 h-9' />
					<div className='flex gap-2 items-center text-gray-400 bg-gray-100 px-4 rounded-md focus-within:border-2 focus-within:border-black'>
						<BiSearchAlt2 className='text-xl' />
						<input
							placeholder='Search'
							className='bg-gray-100 py-2 px-2 outline-none cursor-pointer peer'
						/>
					</div>
				</div>
				<div className='w-75'>
					<div className='flex gap-4'>
						<IconButton title='home' Icon={ImHome3} />
						<IconButton title='My Network' Icon={IoMdPeople} />
						<IconButton title='Jobs' Icon={FaBriefcase} />
						<IconButton title='Messaging' Icon={BsChatDotsFill} />
						<IconButton title='Notification' Icon={MdNotifications} />
					</div>
				</div>
			</div>
		</>
	);
}
