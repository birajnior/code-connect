import "@/app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Aside from "@/components/Aside";

export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="app-container">
          <Aside /> {children}
        </div>
      </body>
    </html>
  );
}
