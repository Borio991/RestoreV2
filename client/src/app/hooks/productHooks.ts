import { useQuery } from "@tanstack/react-query";
import agent from "../api/agent";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: agent.Catalog.list,
    staleTime: 1000 * 60 * 2, // 2min
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => agent.Catalog.details(id),
    staleTime: 1000 * 60 * 2,
  });
};
