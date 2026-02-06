import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createProduct } from "@/api/product/product";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (json) => {
      await createProduct(json);
    },
    onSuccess: () => {
      toast.success("Product created");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => {
      toast.error("Failed to create product.");
    },
  });

  return mutation;
};
