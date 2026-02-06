import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/api/product/product";

export const useGetProducts = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetchProducts();

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      return data;
    },
  });

  return query;
};
