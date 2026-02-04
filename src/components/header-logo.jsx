import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";

export const HeaderLogo = () => {
  return (
    <Link
      to="/"
      className="hidden lg:flex items-center gap-2 font-bold text-xl tracking-tight"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl text-white bg-blue-700 shadow-lg shadow-white/20">
        <ShoppingBag size={25} />
      </div>
      <h2 className="text-2xl font-bold">BrandStore</h2>
    </Link>
  );
};
