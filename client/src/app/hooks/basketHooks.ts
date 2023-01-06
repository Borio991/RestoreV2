import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import agent from "../api/agent";
import { BasketModel } from "../models/BasketModel";

export const useBasket = () => {
  return useQuery({
    queryKey: ["basket"],
    queryFn: agent.Basket.get,
  });
};

interface item {
  id: string;
  quantity?: number;
}

export const useAddBasketItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (itemDto: item) => {
      return agent.Basket.addItem(itemDto.id, itemDto.quantity);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
  });
};

export const useRemoveBasketItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (itemDto: item) => {
      return agent.Basket.removeItem(itemDto.id, itemDto.quantity);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
  });
};

const transformToBasketItems = (data: BasketModel) => data.items.reduce((cum, item) => cum + item.quantity, 0);

export const useBasketQuantity = () =>
  useQuery({
    queryKey: ["basket", "basketNum"],
    queryFn: agent.Basket.get,
    select: React.useCallback(transformToBasketItems, []),
  });

const transformToBasketSubtotal = (data: BasketModel): number => data.items.reduce((cum, item) => cum + item.quantity * item.price, 0);

export const useBasketSubtotal = () =>
  useQuery({
    queryKey: ["basket", "basketNum"],
    queryFn: agent.Basket.get,
    select: React.useCallback(transformToBasketSubtotal, []),
  });
