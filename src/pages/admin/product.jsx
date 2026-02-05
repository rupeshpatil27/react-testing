import { Loader2, Plug } from "lucide-react";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useGetProducts } from "@/features/product/api/use-get-products";
import { columns } from "@/utils/columns";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@clerk/clerk-react";

const ProductPage = () => {
  const { isLoaded, isSignedIn, userId } = useAuth();
  const productsQuery = useGetProducts();
  console.log(productsQuery)
  const products = productsQuery.data || [];

  const isDisabled = productsQuery.isLoading;

  if (productsQuery.isLoading) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
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
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 flex lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Products Page</CardTitle>
          <Button size="sm" onClick={() => {}}>
            <Plug className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            filterKey="name"
            columns={columns}
            data={products}
            onDelete={(row) => {}}
            disabled={isDisabled}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductPage;
