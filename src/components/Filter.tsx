"use client";

import React, { useCallback } from "react";
import SelectInput from "./SelectInput";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

const opotions = [
  {
    label: "Default",
    value: "default",
  },
  {
    label: "First Name",
    value: "firstName",
  },
  {
    label: "Last Name",
    value: "lastName",
  },
];
const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <SelectInput
      options={opotions}
      placeholder="Sort By"
      onChange={(selected: any) =>
        router.push(pathname + "?" + createQueryString("sort", selected.value))
      }
    />
  );
};

export default Filter;
