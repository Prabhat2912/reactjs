import React from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Prabhat2912")
  //       .then((res) => res.json())
  //       .then((d) => {
  //         console.log(d);
  //         setData(d);
  //       }, []);
  //   });
  const data = useLoaderData();
  return (
    <div className=" flex gap-4 flex-col flex-wrap text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <div>Github Followers: {data.followers}</div>
      <div className="w-80">
        <img src={data.avatar_url} width={300} alt="" />
      </div>
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Prabhat2912");
  return response.json();
};
