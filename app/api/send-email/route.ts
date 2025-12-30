import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configuration du transporteur SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // SSL
  auth: {
    user: "noreply@upjunoopro.com",
    pass: "#UpJunoo@2025",
  },
});

// Types pour les différents formulaires
type ContactFormData = {
  type: "contact";
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

type NewsletterFormData = {
  type: "newsletter";
  email: string;
};

type FormData = ContactFormData | NewsletterFormData;

export async function POST(request: NextRequest) {
  try {
    const data: FormData = await request.json();

    let mailOptions: nodemailer.SendMailOptions;

    if (data.type === "contact") {
      // Email pour le formulaire de contact
      mailOptions = {
        from: '"UPJUNOO PRO - Site Web" <noreply@upjunoopro.com>',
        to: "contact@upjunoopro.com",
        replyTo: data.email,
        subject: `[Contact] ${data.subject} - ${data.firstName} ${data.lastName}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #058d9e 0%, #046d7a 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">Nouveau message de contact</h1>
              </div>
              <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #eee;">
                  <h2 style="color: #058d9e; margin: 0 0 15px 0; font-size: 18px;">Informations de l'expéditeur</h2>
                  <p style="margin: 5px 0; color: #333;"><strong>Nom :</strong> ${data.lastName}</p>
                  <p style="margin: 5px 0; color: #333;"><strong>Prénom :</strong> ${data.firstName}</p>
                  <p style="margin: 5px 0; color: #333;"><strong>Email :</strong> <a href="mailto:${data.email}" style="color: #058d9e;">${data.email}</a></p>
                </div>
                <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #eee;">
                  <h2 style="color: #058d9e; margin: 0 0 15px 0; font-size: 18px;">Sujet</h2>
                  <p style="margin: 0; color: #333; background: #f0f9fa; padding: 10px 15px; border-radius: 8px; border-left: 4px solid #058d9e;">${data.subject}</p>
                </div>
                <div>
                  <h2 style="color: #058d9e; margin: 0 0 15px 0; font-size: 18px;">Message</h2>
                  <div style="color: #333; background: #f9f9f9; padding: 20px; border-radius: 8px; white-space: pre-wrap; line-height: 1.6;">${data.message}</div>
                </div>
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
                  <p style="margin: 0; color: #888; font-size: 12px;">Ce message a été envoyé depuis le formulaire de contact du site upjunoopro.com</p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `
Nouveau message de contact - UPJUNOO PRO

INFORMATIONS DE L'EXPÉDITEUR
----------------------------
Nom : ${data.lastName}
Prénom : ${data.firstName}
Email : ${data.email}

SUJET
-----
${data.subject}

MESSAGE
-------
${data.message}

---
Ce message a été envoyé depuis le formulaire de contact du site upjunoopro.com
        `,
      };
    } else if (data.type === "newsletter") {
      // Email pour l'inscription à la newsletter
      mailOptions = {
        from: '"UPJUNOO PRO - Site Web" <noreply@upjunoopro.com>',
        to: "contact@upjunoopro.com",
        subject: `[Newsletter] Nouvelle inscription - ${data.email}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #058d9e 0%, #046d7a 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">Nouvelle inscription newsletter</h1>
              </div>
              <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <div style="text-align: center; padding: 20px;">
                  <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #058d9e 0%, #046d7a 100%); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                    <span style="font-size: 36px;">📧</span>
                  </div>
                  <h2 style="color: #333; margin: 0 0 10px 0;">Nouvel abonné !</h2>
                  <p style="color: #666; margin: 0 0 20px 0;">Une nouvelle personne s'est inscrite à la newsletter.</p>
                  <div style="background: #f0f9fa; padding: 15px 25px; border-radius: 8px; display: inline-block;">
                    <p style="margin: 0; color: #058d9e; font-size: 18px; font-weight: bold;">
                      <a href="mailto:${data.email}" style="color: #058d9e; text-decoration: none;">${data.email}</a>
                    </p>
                  </div>
                </div>
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
                  <p style="margin: 0; color: #888; font-size: 12px;">Cette inscription a été effectuée depuis le site upjunoopro.com</p>
                  <p style="margin: 5px 0 0 0; color: #888; font-size: 12px;">Date : ${new Date().toLocaleString("fr-FR", { timeZone: "Africa/Abidjan" })}</p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `
Nouvelle inscription newsletter - UPJUNOO PRO

Email : ${data.email}
Date : ${new Date().toLocaleString("fr-FR", { timeZone: "Africa/Abidjan" })}

---
Cette inscription a été effectuée depuis le site upjunoopro.com
        `,
      };
    } else {
      return NextResponse.json(
        { success: false, error: "Type de formulaire non reconnu" },
        { status: 400 }
      );
    }

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { success: false, error: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
}
