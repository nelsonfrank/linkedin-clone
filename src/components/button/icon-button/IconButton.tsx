import { IconType } from "react-icons";

export interface IconBtnPropType {
	title?: string;
	Icon: IconType;
}

export default function IconButton({ title, Icon }: IconBtnPropType) {
	return (
		<>
			<button className='flex flex-col items-center text-gray-500 px-4 focus:text-black focus:border-b-2 focus:border-black focus:pb-2'>
				<Icon className='text-3xl' />
				<span className='capitalize text-sm'>{title}</span>
			</button>
		</>
	);
}
