import { Outlet } from "react-router";
import { Toaster } from "sonner";
import { Header } from "./components/header";
import { NewProductSheet } from "./features/product/component/NewProductSheet";
export default function App() {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14 bg-slate-50 pt-2">
        <Outlet />
      </main>
      <NewProductSheet />
      <Toaster />
    </>
  );
}
