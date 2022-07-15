import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    name,
    email,
    subject,
    message,
  }: { name: string; email: string; subject: string; message: string } =
    req.body;
  if (!name || !email || !message) {
    res.status(400).json({
      status: "error",
      message: "Name, Email and Message fields are required",
    });
    return;
  }

  // TODO: write test for mailIt
  const mailIt = async () => {
    let transporter = nodemailer.createTransport({
      host: "gnldm1070.siteground.biz",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    // send mail with defined transport object
    await transporter.sendMail({
      from: `"MARSian Bot" <${process.env.EMAIL_USER}>`, // sender address
      to: "rfn900@gmail.com", // list of receivers
      subject: `From rods.dev: ${
        typeof subject === "undefined" ? "no subject" : subject
      }`, // Subject line
      text: `${message}\n\nFrom: ${name}\nEmail: ${email}`, // plain text body
      html: `<b>Message Body: </b><br>"<em>${message}</em>"<br><br><b>From: </b>${name}<br><b>Email: </b> ${email}`, // plain text body
    });

    return res.status(200).json({
      status: "success",
      message: "Your message was delivered. Thank you for your contact",
    });
  };
  if (req.method === "POST") {
    try {
      await mailIt();
    } catch (e) {
      res
        .status(500)
        .json({ status: "error", message: "Something went wrong" });
    }
  } else {
    res.status(406).json({
      status: "error",
      message: `Method ${req.method} not supported for this endpoint`,
    });
  }
};
