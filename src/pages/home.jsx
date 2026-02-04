import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home





// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// const API_URL = "http://localhost:5000/products";

// export default function Products() {
//   const queryClient = useQueryClient();
//   const [isOpen, setIsOpen] = useState(false);

//   // Fetch
//   const { data: products, isLoading } = useQuery({
//     queryKey: ["products"],
//     queryFn: () => fetch(API_URL).then(res => res.json())
//   });

//   // Delete
//   const deleteMutation = useMutation({
//     mutationFn: (id) => fetch(`${API_URL}/${id}`, { method: "DELETE" }),
//     onSuccess: () => queryClient.invalidateQueries(["products"])
//   });

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-3xl font-bold">Products</h1>
        
//         <Dialog open={isOpen} onOpenChange={setIsOpen}>
//           <DialogTrigger asChild>
//             <Button>Add Product</Button>
//           </DialogTrigger>
//           <DialogContent>
//             <DialogHeader><DialogTitle>Add New Product</DialogTitle></DialogHeader>
//             {/* Add your form here */}
//             <Button onClick={() => setIsOpen(false)} variant="secondary">Cancel</Button>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {products?.map(product => (
//           <Card key={product.id}>
//             <CardHeader><CardTitle>{product.name}</CardTitle></CardHeader>
//             <CardContent>
//               <p>${product.price}</p>
//               <div className="flex gap-2 mt-4">
//                 <Button variant="outline" size="sm">Edit</Button>
//                 <Button 
//                   variant="destructive" 
//                   size="sm" 
//                   onClick={() => deleteMutation.mutate(product.id)}
//                 >Delete</Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
