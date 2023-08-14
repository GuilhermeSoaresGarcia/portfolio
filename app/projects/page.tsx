// FONTE: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch
async function getData() {
  const url = process.env.GH_API_URL as string;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Projects() {
  const data = await getData();
  const ghRepositories = data.filter((repo: any) => (repo.description !== null));

  return (
    <>
      {ghRepositories.map((item: any) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <h2>{item.description}</h2>
          <h3>{item.html_url}</h3>
          <h4>{item.language}</h4>
        </div>
      ))}
    </>
  );
}
