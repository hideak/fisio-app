"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MessageSquare, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#como-funciona", label: "Como Funciona" },
  { href: "/#primeiro-encontro", label: "1º Encontro" },
  { href: "/#planos", label: "Planos" },
  { href: "/contato", label: "Contato" },
];

const whatsappUrl = "https://wa.me/5531986959594?text=Ol%C3%A1%2C%20Dra.%20Shan!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20fisioterapia%20domiciliar.";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="landing-container flex items-center justify-between py-3">
        {/* Brand */}
        <Link href="/" className="group flex flex-col">
          <span className="text-base font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-lg">
            Dra. Shan Kenny Arita
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            CREFITO 409624-F
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="landing-link rounded-md px-3 py-1.5 text-sm hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="/contato"
            className={buttonVariants({ size: "sm", className: "shadow-xs font-medium gap-1.5" })}
          >
            <MessageSquare className="size-4" />
            <span>Agendar Avaliação</span>
          </a>
        </div>

        {/* Mobile Sheet Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon-sm" aria-label="Abrir menu" />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent className="gap-0">
              <SheetHeader className="border-b border-border pb-4">
                <SheetTitle>Menu de navegação</SheetTitle>
              </SheetHeader>
              <SheetClose
                render={<Button variant="ghost" size="icon-sm" aria-label="Fechar menu" />}
                className="absolute right-4 top-4"
              >
                <X className="size-5" />
              </SheetClose>
              <nav className="flex flex-col gap-1 p-1" aria-label="Navegação mobile">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={<a href={link.href} />}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="border-t border-border py-4 px-3">
                <SheetClose
                  nativeButton={false}
                  render={
                    <a
                      href="/contato"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  className={buttonVariants({ className: "w-full justify-center gap-2", size: "lg" })}
                >
                  <MessageSquare className="size-4" />
                  <span>Agendar Avaliação</span>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
