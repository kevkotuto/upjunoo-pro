"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
  MessageSquare,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@upjunoo.com",
    href: "mailto:contact@upjunoo.com",
  },
  // TODO: Decommenter quand le numero sera disponible
  // {
  //   icon: Phone,
  //   title: "Telephone",
  //   value: "+225 00 00 00 00 00",
  //   href: "tel:+22500000000",
  // },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Abidjan, Cote d'Ivoire",
    href: "#",
  },
  {
    icon: Clock,
    title: "Horaires",
    value: "Lun - Ven : 8h - 18h",
    href: "#",
  },
];

const subjects = [
  "Question generale",
  "Support technique",
  "Partenariat",
  "Franchise",
  "Presse",
  "Autre",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStatus("success");

    // Reset after 3 seconds
    setTimeout(() => {
      setStatus("idle");
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <>
      <PageHero
        badge="Contact"
        title="Contactez"
        highlight="nous"
        description="Une question, une suggestion ou besoin d'aide ? Notre equipe est la pour vous repondre."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold mb-6">Nos coordonnees</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <info.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold mb-4">Suivez-nous</h3>
                <div className="flex gap-3">
                  {["Facebook", "Instagram", "LinkedIn", "YouTube"].map(
                    (social) => (
                      <motion.a
                        key={social}
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <span className="text-sm font-medium">
                          {social.charAt(0)}
                        </span>
                      </motion.a>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="border-border/50">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Envoyez-nous un message</h2>
                      <p className="text-sm text-muted-foreground">
                        Nous vous repondrons sous 24h
                      </p>
                    </div>
                  </div>

                  {status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-xl mb-2">
                        Message envoye !
                      </h3>
                      <p className="text-muted-foreground">
                        Merci de nous avoir contactes. Nous vous repondrons tres
                        rapidement.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Nom
                          </label>
                          <Input
                            value={formState.lastName}
                            onChange={(e) =>
                              setFormState({ ...formState, lastName: e.target.value })
                            }
                            placeholder="Votre nom"
                            required
                            disabled={status === "loading"}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Prenom(s)
                          </label>
                          <Input
                            value={formState.firstName}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                firstName: e.target.value,
                              })
                            }
                            placeholder="Votre prenom"
                            required
                            disabled={status === "loading"}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          placeholder="votre@email.com"
                          required
                          disabled={status === "loading"}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Sujet
                        </label>
                        <select
                          value={formState.subject}
                          onChange={(e) =>
                            setFormState({ ...formState, subject: e.target.value })
                          }
                          className="w-full h-10 px-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                          required
                          disabled={status === "loading"}
                        >
                          <option value="">Selectionnez un sujet</option>
                          {subjects.map((subject) => (
                            <option key={subject} value={subject}>
                              {subject}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <textarea
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({ ...formState, message: e.target.value })
                          }
                          placeholder="Votre message..."
                          rows={5}
                          className="w-full px-3 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                          required
                          disabled={status === "loading"}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gap-2"
                        disabled={status === "loading"}
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Envoyer le message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Vous avez une question frequente ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Consultez notre FAQ pour trouver rapidement une reponse a vos
              questions les plus courantes.
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="/faq">Voir la FAQ</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
