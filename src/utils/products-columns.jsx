import { Plus, Minus, ShoppingCart, ArrowUpDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/store/slices/cart/cartSlice";
import { Button } from "@/components/ui/button";

export const ProductsColumns = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    header: "Add to Cart",
    cell: ({ row }) => {
      const product = row.original;
      const dispatch = useDispatch();

      const cartItem = useSelector((state) =>
        state?.cart?.items.find((item) => item.id === product.id),
      );
      const quantity = cartItem?.quantity || 0;

      return (
        <div className="flex items-center gap-x-2">
          {quantity > 0 ? (
            <>
              <Button
                size="icon"
                variant="outline"
                onClick={() => dispatch(removeFromCart(product.id))}
              >
                <Minus className="size-4" />
              </Button>
              <span className="font-medium min-w-5 text-center">
                {quantity}
              </span>
              <Button
                size="icon"
                variant="outline"
                onClick={() => dispatch(addToCart(product))}
              >
                <Plus className="size-4" />
              </Button>
            </>
          ) : (
            <Button size="sm" onClick={() => dispatch(addToCart(product))}>
              <ShoppingCart className="size-4 mr-2" />
              Add
            </Button>
          )}
        </div>
      );
    },
  },
];
