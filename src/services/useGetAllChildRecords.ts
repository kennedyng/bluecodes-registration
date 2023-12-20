"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";

const getAllChildRecords = async (sortBy: string) => {
  const res = await fetch(`/api/child/?sort=${sortBy}`);
  if (!res.ok) {
    throw new Error("Error");
  }

  return await res.json();
};
const useGetAllChildRecords = () => {
  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sort");

  return useQuery({
    queryFn: () => getAllChildRecords(String(sortBy)),
    queryKey: [{ name: "childRecord", sortBy }],
  });
};

export default useGetAllChildRecords;
