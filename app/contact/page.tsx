"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
  MessageSquare,
  Clock,
} from "lucide-react";
import { useTranslations } from "next-intl";

// Icone WhatsApp personnalisee
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import { trackContactFormView, trackContactFormSubmit, trackSocialClick } from "@/lib/analytics";
import { formattedKpis } from "@/data/kpis";
import { socialLinks } from "@/data/social-links";

// Mapping des motifs de support vers les cles de sujet
const motifToSubjectKey: Record<string, string> = {
  course: "course",
  paiement: "payment",
  livraison: "delivery",
  location: "rental",
  incident: "incident",
  facture: "invoice",
};

// Mapping des motifs vers les cles de messages pre-remplis
const motifToMessageKey: Record<string, string> = {
  course: "course",
  paiement: "payment",
  livraison: "delivery",
  location: "rental",
  incident: "incident",
  facture: "invoice",
};

function ContactForm() {
  const searchParams = useSearchParams();
  const motif = searchParams.get("motif");
  const t = useTranslations("contactPage");

  const subjects = [
    { key: "general", label: t("subjects.general") },
    { key: "support", label: t("subjects.support") },
    { key: "course", label: t("subjects.course") },
    { key: "payment", label: t("subjects.payment") },
    { key: "delivery", label: t("subjects.delivery") },
    { key: "rental", label: t("subjects.rental") },
    { key: "incident", label: t("subjects.incident") },
    { key: "invoice", label: t("subjects.invoice") },
    { key: "partnership", label: t("subjects.partnership") },
    { key: "franchise", label: t("subjects.franchise") },
    { key: "press", label: t("subjects.press") },
    { key: "other", label: t("subjects.other") },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: t("email"),
      value: "contact@upjunoopro.com",
      href: "mailto:contact@upjunoopro.com",
    },
    {
      icon: WhatsAppIcon,
      title: t("whatsapp"),
      value: t("whatsappValue"),
      href: "https://wa.me/message/HCFWIVL3KPBRE1",
    },
    {
      icon: MapPin,
      title: t("address"),
      value: t("addressValue"),
      href: null,
    },
    {
      icon: Clock,
      title: t("hours"),
      value: t("hoursValue"),
      href: null,
    },
  ];

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

  // Pre-remplir le formulaire si un motif est passe en parametre
  useEffect(() => {
    if (motif && motifToSubjectKey[motif]) {
      const subjectKey = motifToSubjectKey[motif];
      const subject = subjects.find(s => s.key === subjectKey);
      const messageKey = motifToMessageKey[motif];

      setFormState((prev) => ({
        ...prev,
        subject: subject?.label || "",
        message: messageKey ? t(`motifMessages.${messageKey}`) : "",
      }));
    }
  }, [motif, t]);

  // Track form view
  useEffect(() => {
    trackContactFormView(motif || undefined);
  }, [motif]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Track form submission
    trackContactFormSubmit(formState.subject, motif || undefined);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          ...formState,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

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
    } catch (error) {
      console.error("Erreur:", error);
      setStatus("error");
      // Reset apres 3 secondes en cas d'erreur
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        highlight={t("highlight")}
        description={t("description")}
        backgroundImage="/images/banniere/personne-sourriante-16-9.jpg"
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
              <h2 className="text-2xl font-bold mb-6">{t("coordinates")}</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const content = (
                    <>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </>
                  );

                  return info.href ? (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors group"
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl group"
                    >
                      {content}
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold mb-4">{t("followUs")}</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackSocialClick(social.name.toLowerCase())}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white hover:from-primary/90 hover:to-primary/70 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary to-[#046d7a] text-white"
              >
                <h3 className="font-semibold mb-4">{t("fastResponse")}</h3>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">24h</div>
                    <div className="text-xs text-white/70">{t("averageDelay")}</div>
                  </div>
                  <div className="w-px h-12 bg-white/20" />
                  <div className="text-center">
                    <div className="text-3xl font-bold">{formattedKpis.satisfactionPourcentage}</div>
                    <div className="text-xs text-white/70">{t("satisfaction")}</div>
                  </div>
                </div>
              </motion.div>
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{t("sendMessage")}</h2>
                      <p className="text-sm text-muted-foreground">
                        {t("responseTime")}
                      </p>
                    </div>
                  </div>

                  {status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.1 }}
                        className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"
                      >
                        <CheckCircle className="h-10 w-10 text-green-600" />
                      </motion.div>
                      <h3 className="font-semibold text-xl mb-2">
                        {t("messageSent")}
                      </h3>
                      <p className="text-muted-foreground">
                        {t("thankYou")}
                      </p>
                    </motion.div>
                  ) : status === "error" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.1 }}
                        className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4"
                      >
                        <Mail className="h-10 w-10 text-red-600" />
                      </motion.div>
                      <h3 className="font-semibold text-xl mb-2">
                        {t("sendError")}
                      </h3>
                      <p className="text-muted-foreground">
                        {t("errorMessage")}
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {t("lastName")}
                          </label>
                          <Input
                            value={formState.lastName}
                            onChange={(e) =>
                              setFormState({ ...formState, lastName: e.target.value })
                            }
                            placeholder={t("lastNamePlaceholder")}
                            required
                            disabled={status === "loading"}
                            className="h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {t("firstName")}
                          </label>
                          <Input
                            value={formState.firstName}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                firstName: e.target.value,
                              })
                            }
                            placeholder={t("firstNamePlaceholder")}
                            required
                            disabled={status === "loading"}
                            className="h-12"
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
                          placeholder={t("emailPlaceholder")}
                          required
                          disabled={status === "loading"}
                          className="h-12"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("subject")}
                        </label>
                        <select
                          value={formState.subject}
                          onChange={(e) =>
                            setFormState({ ...formState, subject: e.target.value })
                          }
                          className="w-full h-12 px-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                          required
                          disabled={status === "loading"}
                        >
                          <option value="">{t("selectSubject")}</option>
                          {subjects.map((subject) => (
                            <option key={subject.key} value={subject.label}>
                              {subject.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("message")}
                        </label>
                        <textarea
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({ ...formState, message: e.target.value })
                          }
                          placeholder={t("messagePlaceholder")}
                          rows={5}
                          className="w-full px-3 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                          required
                          disabled={status === "loading"}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gap-2 h-14 bg-gradient-to-r from-primary to-primary/80 text-lg"
                        disabled={status === "loading"}
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            {t("sending")}
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            {t("sendButton")}
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
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-[#046d7a] p-8 lg:p-16 text-center overflow-hidden"
          >
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/2 -right-1/2 w-full h-full border border-white/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-1/2 -left-1/2 w-full h-full border border-white/10 rounded-full"
              />
            </div>

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t("faqCta.title")}
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                {t("faqCta.description")}
              </p>
              <Button
                size="lg"
                asChild
                className="gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg px-8"
              >
                <a href="/faq">{t("faqCta.button")}</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ContactForm />
    </Suspense>
  );
}
