import { rejects } from "assert";
import { NextRequest, NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { resolve } from "path";

export async function POST(request: NextRequest, response: NextResponse) {
  const req = await request.json();
  //transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
  });

  const toHostMailData = {
    from: req.mail,
    to: process.env.GMAILUSER,
    subject: `[${req.subject}] From${req.name}`,
    html: `
            <p>【NAME】</p>
            <p>${req.name}</p>
            <p>【MESSAGE】</p>
            <p>${req.message}</p>
            <p>【MAIL ADDRESS】</p>
            <p>${req.mail}</p>
        `,
  };

  try {
    //メール送信
    await sendMail(transporter, toHostMailData);
  } catch (error) {
    NextResponse.json({ message: "error" }, { status: 400 });
  }

  return NextResponse.json({ message: "sucess" });
}

//メール送信処理
const sendMail = async (
  transporter: Transporter<SMTPTransport.SentMessageInfo>,
  toHostMailData: any,
) => {
  return new Promise((resolve) => {
    //メール送信
    transporter.sendMail(toHostMailData, (err: any, info: any) => {
      if (err) {
        console.info("メール送信に失敗しました");
        console.error(err);
        rejects(err);
      } else {
        console.info("メール送信に成功しました");
        console.info(info);
        resolve(info);
      }
    });
  });
};
