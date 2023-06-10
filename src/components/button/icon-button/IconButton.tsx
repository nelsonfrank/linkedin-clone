import { IconType } from "react-icons";
import { MdArrowDropDown } from "react-icons/md";
export interface IconBtnPropType {
	title?: string;
	Icon: IconType;
}

export default function IconButton({ title, Icon }: IconBtnPropType) {
	if (title?.toLowerCase() === "profile") {
		return (
			<>
				<button className='flex flex-col items-center text-gray-500 px-4 pb-2 '>
					<Icon className='text-3xl' />
					<div className='flex items-center'>
						<span className='capitalize text-sm'>Me</span>
						<MdArrowDropDown />
					</div>
				</button>
			</>
		);
	}

	return (
		<>
			<button className='flex flex-col items-center text-gray-500 px-4 pb-2 border-b-2 border-transparent focus:text-black focus:border-black '>
				<Icon className='text-3xl' />
				<span className='capitalize text-sm'>{title}</span>
			</button>
		</>
	);
}
