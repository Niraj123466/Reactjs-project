import { Link, useLoaderData } from "react-router-dom";

export function Github() {
  const data = useLoaderData();
  return (
    <div className="bg-slate-800 flex gap-10">
      <div>
        <img
          src={data.avatar_url}
          alt="Github image"
          width={300}
          className="rounded-xl m-4"
        />
      </div>
      <div className="grid place-content-center font-serif text-white ">
        <div>Github followers : {data.followers}</div>
        <div>Github Username : {data.login}</div>
        <div>Name : {data.name}</div>
        <div>Bio : {data.bio}</div>
        <div>Repos : {data.public_repos}</div>
        <div>
          Repos link : <Link to={data.repos_url}>{data.repos_url}</Link>
        </div>
      </div>
    </div>
  );
}
export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/Niraj123466");
  return response.json();
};
