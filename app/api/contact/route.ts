import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail", // O el servicio de tu proveedor de correo
      auth: {
        user: process.env.EMAIL_USER, // Tu email
        pass: process.env.EMAIL_PASS, // Contraseña o App Password
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`, // Aquí se usa el email del remitente
      to: process.env.EMAIL_USER, // Tu correo donde recibirás los mensajes
      subject: `Mensaje desde tu Portafolio, remitente: ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
      replyTo: email, // Si respondes, le llegará al remitente original
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}