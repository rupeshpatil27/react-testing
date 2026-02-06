import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useNewProduct } from "../hooks/use-new-product";
import { useCreateProduct } from "../api/use-create-product";
import { ProductForm } from "./product-form";


export const NewProductSheet = () => {
  const { isOpen, onClose } = useNewProduct();

  const mutation = useCreateProduct();

  const onSubmit = (values) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Product</SheetTitle>
          <SheetDescription>Create a new product.</SheetDescription>
        </SheetHeader>
        <ProductForm
          onSubmit={onSubmit}
          defaultValues={{ name: "", price: "" }}
          disabled={mutation.isPending}
        />
      </SheetContent>
    </Sheet>
  );
};
