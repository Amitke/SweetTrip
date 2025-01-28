import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, subject, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          family: 4, // Use IPv4
        },
        debug: true,
        logger: true,
      });
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER, // Your email address
        subject: subject,
        text: `Name: ${name} \n Mobile: ${phone}`,
        html: `<p>${message}</p>`,
      });

      res.status(200).json({ success: true, message: "Form has been successfully submitted" });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
