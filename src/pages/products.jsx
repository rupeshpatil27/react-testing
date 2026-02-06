import { Loader2, Plug } from "lucide-react";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { useGetProducts } from "@/features/product/api/use-get-products";
import { ProductsColumns } from "@/utils/products-columns";

const ProductsPage = () => {
  const productsQuery = useGetProducts();
  const products = productsQuery.data || [];

  const isDisabled = productsQuery.isLoading;

  if (productsQuery.isLoading) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full pb-10">
        <Card className="border-none drop-shadow-sm">
          <CardHeader>
            <Skeleton className="h-8 w-48" />
          </CardHeader>
          <CardContent>
            <div className="h-125 w-full flex items-center justify-center">
              <Loader2 className="size-6 text-slate-300 animate-spin" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Products Page</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            filterKey="name"
            columns={ProductsColumns}
            data={products}
            onDelete={(row) => {}}
            disabled={isDisabled}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsPage;
