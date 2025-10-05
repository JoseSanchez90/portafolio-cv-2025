"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error sending message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
      <section id="contacto" className="py-8 2xl:pt-20 2xl:pb-40 max-w-md mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Contactame</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nombre
            </label>
            <Input id="name" value={formData.name} onChange={handleChange} placeholder="Nombre completo" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Correo Electronico
            </label>
            <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@correo.com" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Mensaje
            </label>
            <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Escribe tu mensaje" rows={5} className="resize-none" required />
          </div>
          <Button type="submit" className="w-full" disabled={status === "loading"}>
            {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
          </Button>
          {status === "success" && <p className="text-green-500">Mensaje enviado exitosamente!</p>}
          {status === "error" && <p className="text-red-500">Error al enviar mensaje.</p>}
        </form>
      </section>
  );
}
