"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className="py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Newsletter
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Restez informé
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Inscrivez-vous a notre newsletter pour recevoir nos actualites,
            offres speciales et nouveautes.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="flex-1 relative">
              <Input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status !== "idle"}
                className="h-12 px-4 bg-background"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={status !== "idle" || !email}
              className="h-12 px-6 gap-2"
            >
              {status === "loading" && (
                <Loader2 className="h-4 w-4 animate-spin" />
              )}
              {status === "success" && <CheckCircle className="h-4 w-4" />}
              {status === "idle" && <Send className="h-4 w-4" />}
              {status === "success" ? "Inscrit!" : "S'inscrire"}
            </Button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-sm text-muted-foreground"
          >
            En vous inscrivant, vous acceptez notre{" "}
            <a href="/confidentialite" className="text-primary hover:underline">
              politique de confidentialite
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
