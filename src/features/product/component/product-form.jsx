import { Trash } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Product name must be at least 5 characters.")
    .max(32, "Product name must be at most 32 characters."),
  price: z.string().min(1),
});

export const ProductForm = ({
  id,
  defaultValues,
  onSubmit,
  onDelete,
  disabled,
}) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const handleSubmit = (values) => {
    onSubmit(values);
  };

  const handleDelete = () => {
    onDelete?.();
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 p-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  disabled={disabled}
                  placeholder="e.g. Mobile, Food"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          name="price"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  disabled={disabled}
                  placeholder="0000"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button className="w-full" disabled={disabled}>
          {id ? "Save Changes" : "Create product"}
        </Button>
        {!!id && (
          <Button
            type="button"
            onClick={handleDelete}
            variant="ouline"
            className="w-full"
            disabled={disabled}
          >
            <Trash className="size-4 mr-2" />
            Delete product
          </Button>
        )}
      </form>
    </Form>
  );
};
