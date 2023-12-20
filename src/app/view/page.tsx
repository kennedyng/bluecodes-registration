"use client";

import Filter from "@/components/Filter";
import useGetAllChildRecords from "@/services/useGetAllChildRecords";
import { Table } from "flowbite-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const { data } = useGetAllChildRecords();

  const handleItemClick = (id: string) => {
    router.push(`/profile/${id}`);
  };

  return (
    <main className="mx-auto container flex flex-col justify-center items-center">
      <div className="overflow-x-auto w-full lg:w-1/2 ">
        <div className="mb-10 w-[150px]">
          <Filter />
        </div>
        <Table>
          <Table.Head>
            <Table.HeadCell>Child Name</Table.HeadCell>
            <Table.HeadCell>Gender</Table.HeadCell>
            <Table.HeadCell>Immunizations</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data?.map(
              ({ id, firstName, lastName, gender, immunizations }: any) => (
                <Table.Row
                  onClick={() => handleItemClick(id)}
                  key={id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800 cursor-pointer hover:bg-cyan-50"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {firstName} {lastName}
                  </Table.Cell>
                  <Table.Cell>{gender}</Table.Cell>
                  <Table.Cell colSpan={4}>
                    <ul className="flex fle-row gap-2">
                      {immunizations?.map(({ id, name }: any) => (
                        <li
                          className="bg-gray-100 p-2 font-bold rounded-lg"
                          key={id}
                        >
                          {name}
                        </li>
                      ))}
                    </ul>
                  </Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table>
      </div>
    </main>
  );
};

export default Page;
