import nodemailer from "nodemailer";

import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const { UKR_NET_EMAIL_FROM, UKR_NET_EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465, // 25, 465, 2525, 587
  secure: true,
  auth: {
    user: UKR_NET_EMAIL_FROM,
    pass: UKR_NET_EMAIL_PASSWORD,
  }
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = data => {
  const email = { ...data, from: UKR_NET_EMAIL_FROM };
  return transport.sendMail(email)
}

export default sendEmail;