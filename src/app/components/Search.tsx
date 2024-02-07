"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { useDebounce } from "use-debounce";

export default function Search() {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [query] = useDebounce(search, 10);

    const handleSearch = (e: any) => {
        setSearch(e);
    }

    useEffect(() => {
        if (query === "") {
            router.push("/");
            return;
        }
        router.push(`/?a=${query}`);
    }, [query]);

	return (
		<div>
            <span className="text-white text-md ml-4"> חיפוש מהיר:</span>
			
			<input className="border-1 border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            value={search}
				type="text"
				onChange={e => handleSearch(e.target.value)}
			/>
		</div>
	);
}
