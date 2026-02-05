import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router";
import { HeaderLogo } from "./header-logo";
import { Navigation } from "./navigation";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { Loader2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b p-4 flex justify-between items-center bg-white sticky top-0 z-50">
      <div className="w-full flex items-center justify-between">
        <div className="flex lg:gap-x-16 items-center">
          <HeaderLogo />
          <Navigation />
        </div>

        <div className="flex gap-4 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Language</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-accent-400" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <Button>
                <Link to="/sign-in">Login</Link>
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

// const resources = {
//   en: {
//     translation: {
//       "language": "Language",
//       "login": "Login",
//       "welcome": "Welcome to our shop"
//     }
//   },
//   es: {
//     translation: {
//       "language": "Idioma",
//       "login": "Iniciar sesión",
//       "welcome": "Bienvenido a nuestra tienda"
//     }
//   }
// };

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources,
//     fallbackLng: "en",
//     interpolation: { escapeValue: false }
//   });

// export default i18n;

// import { useTranslation } from "react-i18next";
// // ... other imports

// export const Header = () => {
//   const { t, i18n } = useTranslation();

//   const changeLanguage = (lng: string) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <header className="...">
//       {/* ... logo and navigation ... */}

//       <div className="flex gap-4 items-center">
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline">{t("language")}</Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent>
//             <DropdownMenuItem onClick={() => changeLanguage("en")}>
//               English
//             </DropdownMenuItem>
//             <DropdownMenuItem onClick={() => changeLanguage("es")}>
//               Spanish
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>

//         <ClerkLoaded>
//           <SignedOut>
//             <Button>
//               <Link to="/sign-in">{t("login")}</Link>
//             </Button>
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//         </ClerkLoaded>
//       </div>
//     </header>
//   );
// };
