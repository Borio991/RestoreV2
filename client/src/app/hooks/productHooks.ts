import { useQuery } from "@tanstack/react-query";
import agent from "../api/agent";
import { ProductParams } from "../models/productModel";

export const useProducts = (productparams: ProductParams) => {
  const getAxiosParams = () => {
    const params = new URLSearchParams();
    params.append("pageNumber", productparams.pageNumber.toString());
    params.append("pageSize", productparams.pageSize.toString());
    params.append("orderBy", productparams.orderBy);
    if (productparams.searchTerm) params.append("searchTerm", productparams.searchTerm);
    if (productparams.brands) params.append("brands", productparams.brands.toString());
    if (productparams.types) params.append("types", productparams.types.toString());
    return params;
  };
  const params = getAxiosParams();
  return useQuery({
    queryKey: ["products", productparams],
    queryFn: () => agent.Catalog.list(params),
    keepPreviousData: true,
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

export const useFilters = () => {
  return useQuery({
    queryKey: ["filters"],
    queryFn: agent.Catalog.filters,
    staleTime: 1000 * 60 * 2, // 2min
  });
};
