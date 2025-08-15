
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/close-up-magic", label: "Close-up Magie" },
    { path: "/parlour-magic", label: "Parlour Magie" },
    { path: "/gallery", label: "Galerij" },
    { path: "/booking", label: "Boeken" },
    { path: "/about", label: "Over Ons" },
  ];

  return (
    <nav className="bg-[#5E112C]/95 backdrop-blur-sm border-b border-[#FEFCF8]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Sparkles className="h-8 w-8 text-[#FEFCF8] group-hover:text-[#F5F1EB] transition-colors" />
            <span className="text-2xl font-bold text-[#FEFCF8] group-hover:text-[#F5F1EB] transition-colors">
              Magic Jaimy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-[#FEFCF8] border-b-2 border-[#F5F1EB]"
                    : "text-[#F5F1EB]/80 hover:text-[#FEFCF8] hover:border-b-2 hover:border-[#3D0B1C]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F5F1EB]/80 hover:text-[#FEFCF8] transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#5E112C]/98 border-t border-[#FEFCF8]/20">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-[#FEFCF8] bg-[#F5F1EB]/10"
                      : "text-[#F5F1EB]/80 hover:text-[#FEFCF8] hover:bg-[#3D0B1C]/20"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
