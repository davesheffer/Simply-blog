import Search from "./Search";
type Props = {
 
    handleChange: () => void
  }
export default function Navbar(): React.FC<Props>  {
    
        const handleChange = () => {
            console.log("changed");
        }
	return (
		<nav className="bg-gray-500 ">
			<div className="max-w-7xl m-auto">
				<div className="flex justify-between items-center py-4">
					<div className="flex">
						<h1 className="text-3xl font-bold text-white">סימפלי בלוג </h1>
					</div>
					<div className="flex gap-8">
					<Search  handleChange={handleChange}/>
					</div>
				</div>
			</div>
		</nav>
	);
}
