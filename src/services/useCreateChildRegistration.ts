import { ChildRecordType } from "@/app/types";
import React from "react";
import { useMutation } from "react-query";
import { json } from "stream/consumers";

const registerChild = async (data: ChildRecordType) => {
  const res = await fetch("/api/child/", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return await res.json();
};
const useCreateChildRegistration = () => {
  return useMutation<any, Error, any>({
    mutationFn: registerChild,
    mutationKey: ["register-child"],
  });
};

export default useCreateChildRegistration;
