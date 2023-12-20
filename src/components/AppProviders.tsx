"use client";

import React, { FC, ReactNode } from "react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient();

const AppProviders: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default AppProviders;
