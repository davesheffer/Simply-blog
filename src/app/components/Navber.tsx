

import Search from "./Search";
export default function Navbar(){

	return (
		<nav className="bg-gray-500 max-w-full p-4 ">
			<div className="max-w-7xl m-auto">
				<div className="flex justify-between items-center py-4">
					<div className="flex">
						<h1 className="text-xl lg:text-6xl font-bold text-white ">סימפלי בלוג </h1>
					</div>
					<div className="flex gap-8">
					<Search  />
					</div>
				</div>
			</div>
		</nav>
	);
}
