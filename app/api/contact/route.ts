import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  let html = `<!DOCTYPE html>
<html lang="fr" style="font-family: Arial, sans-serif; background:#f4f4f4;">
  <body style="margin:0; padding:0; font-family: Arial, sans-serif;">
    <table width="100%" cellspacing="0" cellpadding="0" style="background:#f4f4f4; padding:20px 0;">
      <tr>
        <td align="center">
          <table width="600" cellspacing="0" cellpadding="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.1);">

            <!-- HEADER -->
            <tr>
              <td style="background:#0A2740; padding:25px; text-align:center;">
                <img
                  src="https://www.eyesighttours.com/logo.png"
                  alt="Eyesight Tours"
                  width="170"
                  style="display:block; margin:0 auto;"
                />
                <h2 style="color:white; margin-top:15px; font-weight:600; letter-spacing:1px;">
                  Nouvelle Demande de Réservation
                </h2>
              </td>
            </tr>

            <!-- BODY -->
            <tr>
              <td style="padding:30px; color:#333; font-size:15px;">

                <p style="font-size:16px; color:#0A2740; font-weight:700; margin-top:0;">
                  Bonjour équipe Eyesight Tours,
                </p>

                <p style="margin-bottom:25px;">
                  Vous avez reçu une nouvelle demande de réservation depuis votre site web.
                  Voici les détails :
                </p>

                <!-- SECTION CLIENT INFO -->
                <h3 style="color:#0A2740; border-left:4px solid #D4AF37; padding-left:10px; margin-bottom:10px;">
                  Informations du Client
                </h3>

                <table width="100%" cellspacing="0" cellpadding="8">
                  <tr><td style="font-weight:bold; width:40%;">Prénom :</td><td>{{firstName}}</td></tr>
                  <tr><td style="font-weight:bold;">Nom :</td><td>{{lastName}}</td></tr>
                  <tr><td style="font-weight:bold;">Email :</td><td>{{email}}</td></tr>
                  <tr><td style="font-weight:bold;">Téléphone :</td><td>{{phone}}</td></tr>
                </table>

                <!-- SECTION TRAVEL DETAILS -->
                <h3 style="color:#0A2740; border-left:4px solid #D4AF37; padding-left:10px; margin:25px 0 10px;">
                  Détails du Voyage
                </h3>

                <table width="100%" cellspacing="0" cellpadding="8">
                  <tr><td style="font-weight:bold; width:40%;">Type de voyage :</td><td>{{travelType}}</td></tr>
                  <tr><td style="font-weight:bold;">Forfait choisi :</td><td>{{package}}</td></tr>
                  <tr><td style="font-weight:bold;">Voyageurs :</td><td>{{travelers}}</td></tr>
                  <tr><td style="font-weight:bold;">Date souhaitée :</td><td>{{date}}</td></tr>
                  <tr><td style="font-weight:bold;">Type de chambre :</td><td>{{room}}</td></tr>
                </table>

                <!-- MESSAGE -->
                <h3 style="color:#0A2740; border-left:4px solid #D4AF37; padding-left:10px; margin:25px 0 10px;">
                  Message du Client
                </h3>

                <div style="background:#F8F9FC; border-left:4px solid #D4AF37; padding:15px; border-radius:6px;">
                  {{message}}
                </div>

                <p style="font-size:13px; color:#777; margin-top:30px;">
                  Email automatique envoyé via Eyesight Tours.
                </p>

              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="background:#0A2740; padding:20px; text-align:center;">
                <p style="color:white; margin:0; font-size:14px;">
                  © ${new Date().getFullYear()} Eyesight Tours — Tous droits réservés
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

  html = html
    .replace("{{firstName}}", body.firstName)
    .replace("{{lastName}}", body.lastName)
    .replace("{{email}}", body.email)
    .replace("{{phone}}", body.phone)
    .replace("{{travelType}}", body.travelType)
    .replace("{{package}}", body.package)
    .replace("{{travelers}}", body.travelers)
    .replace("{{date}}", body.date)
    .replace("{{room}}", body.room)
    .replace("{{message}}", body.message || "Aucun message fourni.");

  try {
    await resend.emails.send({
      from: "Eyesight Tours <onboarding@resend.dev>",
      to: "eyesighttours2r@gmail.com",
      replyTo: body.email,
      subject: "Nouvelle Demande de Réservation – Eyesight Tours",
      html,
    });

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ success: false, error: err });
  }
}
