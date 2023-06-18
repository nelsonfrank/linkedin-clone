import Header from "@/components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Linkedin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-secondary-light`}>
				<Header />
				<section className='mx-auto max-w-7xl px-8 '>{children}</section>
			</body>
		</html>
	);
}
