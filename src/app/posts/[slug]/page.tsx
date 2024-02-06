export default function post({params}: {params: {slug: string}}) {
    return <div>{params.slug}</div>;
}