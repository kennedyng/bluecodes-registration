import { Card } from "flowbite-react";
import React from "react";

const getProfile = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/child/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
export default async function Page({ params }: { params: { id: string } }) {
  const data = await getProfile(params.id);

  console.log("data", data);
  return (
    <div className="container mx-auto flex justify-center items-center">
      <Card className="w-full lg:w-1/2">
        <h5 className="text-center bg-gray-100 rounded-lg p-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Child Name:{" "}
          <b className="text-gray-500 uppercase">
            {data?.firstName} {data?.lastName}
          </b>
        </h5>

        <h1 className="mt-4 text-center underline uppercase font-bold text-xl">
          immunizations
        </h1>
        <ul className="flex fle-row gap-2 justify-center">
          {data?.immunizations.map(({ id, name }: any) => (
            <li className="bg-gray-100 p-2 font-bold rounded-lg" key={id}>
              {name}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
