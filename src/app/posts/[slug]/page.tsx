import Image from "next/image";
import { client, urlFor } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";

async function getData(slug: string) {
	const query = `
    *[_type =='posts' && slug.current == "${slug}"]  {
        postSmallDescription,
        title,
        slug,
        postImage,
        postContent
    }[0]
`;
	const data = await client.fetch(query);
	return data;
}

export default async function post({ params }: { params: { slug: string } }) {
	const SampleImageComponent = {
		types: {
			image: ({value} : any) => {
				return (
					<div className="max-w-2xl m-auto">
						<Image
							src={urlFor(value).url()}
							alt={value}
							width={500}
							height={500}
						/>
					</div>
				);
			},
		},
	};

	const data = await getData(params.slug);
	return (
		<div className="max-w-7xl m-auto mt-10 prose ">
			<div
				key={data.slug}
				className="shadow-sm">
				<Image
					src={urlFor(data.postImage).url()}
					alt={data.title}
					width={500}
					height={500}
				/>
				<h1 className="text-7xl">{data.title}</h1>
				<p>{data.postSmallDescription}</p>
				<PortableText
					value={data.postContent}
					components={SampleImageComponent}
				/>
			</div>
		</div>
	);
}
