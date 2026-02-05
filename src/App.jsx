import { Outlet } from "react-router";
import { Header } from "./components/header";
export default function App() {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14 bg-slate-50">
        <Outlet />
      </main>


      {/* TODO : clerk setup complete .recheck agian */}
    </>
  );
}
