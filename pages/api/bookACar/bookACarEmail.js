import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { rootHeading, pickupLocation, dropLocation, date, mobile } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.SENDER_EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          family: 4, // Use IPv4
        },
        debug: true,
        logger: true,
      });
      await transporter.sendMail({
        from: process.env.SENDER_EMAIL_USER, // 2FA email address (Sender mail id)
        to: process.env.RECEIVER_EMAIL_USER, // Your email address (receiver mail id)
        subject: "Car Booking Customer Information",
        text: '',
        html: `<p>Root: ${rootHeading} <br/> Pickup Location: ${pickupLocation} <br/> Drop Location: ${dropLocation} <br/> Date: ${date} <br/> Mobile: ${mobile}</p>`,
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
