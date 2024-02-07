import { client, urlFor } from "./lib/sanity";
import { postCard } from "./lib/intefaces";
import Image from "next/image";
import Link from "next/link";

async function getData(searchParams: { [key: string]: string | string[] | undefined }) {
	const searchQuery = searchParams.a ? searchParams.a : "*";

	const query = `
	*[_type =='posts' &&  title match "*${searchQuery}*" ] | order(_createdAt desc)  {
		postSmallDescription,
		title,
		"slug":slug.current, 
		postImage
	  }
`;
	const data = await client.fetch(query);
	return data;
}

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
	const data: postCard[] = await getData(searchParams);

	return (
		<div className="max-w-7xl m-auto">
			<div className="grid grid-cols-1 lg:grid-cols-4 mt-10 gap-10 ">
				{data.map((post) => (
					<div
						key={post.slug}
						className="shadow-sm">
						<Image
							src={urlFor(post.postImage).url()}
							alt={post.title}
							width={500}
							height={500}
						/>
						<h1 className="text-2xl">{post.title}</h1>
						<p>{post.postSmallDescription}</p>
						<Link href={`/posts/${post.slug}`}>Read more</Link>
					</div>
				))}
			</div>
		</div>
	);
}
