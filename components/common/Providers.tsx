"use client";

// 각 라이브러리에서 요구하는 Provider를 합쳐 한꺼번에 제공하기 위한 컴포넌트
// react-query
// react-cookie
// next-themes

import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 60 * 1000,
      },
    },
  });
};

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();

  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </CookiesProvider>
  );
};

export default Providers;
