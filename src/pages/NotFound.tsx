import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => (
  <div className="min-h-screen bg-navy flex items-center justify-center px-4">
    <div className="text-center">
      <div className="mb-6">
        <span className="text-7xl sm:text-9xl font-extrabold text-primary">404</span>
      </div>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
        Página não encontrada
      </h1>
      <p className="text-white/50 mb-8 max-w-md mx-auto">
        A página que você procura não existe ou foi movida. Volte para a página inicial.
      </p>
      <Link to="/">
        <Button size="lg" className="font-semibold rounded-full px-8 py-6">
          <Home size={18} className="mr-2" />
          Voltar ao início
        </Button>
      </Link>
    </div>
  </div>
);

export default NotFound;
