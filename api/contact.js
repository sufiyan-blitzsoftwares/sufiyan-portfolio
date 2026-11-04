const RECIPIENT = "itzsufiyan.mohammed@gmail.com";
const MAX_MESSAGE_LENGTH = 2000;

module.exports = async function contact(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed." });
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) {
    console.error(
      "Contact email is not configured: set RESEND_API_KEY and CONTACT_FROM_EMAIL.",
    );
    return res.status(503).json({
      success: false,
      message:
        "The contact form is not configured yet. Please email me directly.",
    });
  }

  const { name, email, subject, message, _honey: honeypot } = req.body || {};
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string" ||
    name.trim().length < 1 ||
    name.trim().length > 100 ||
    email.trim().length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    subject.trim().length < 3 ||
    subject.trim().length > 150 ||
    message.trim().length < 10 ||
    message.trim().length > MAX_MESSAGE_LENGTH
  ) {
    return res.status(400).json({
      success: false,
      message: "Please check your details and try again.",
    });
  }

  if (typeof honeypot === "string" && honeypot.trim()) {
    return res.status(200).json({ success: true });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [RECIPIENT],
        reply_to: email.trim(),
        subject: `Portfolio contact: ${subject.trim()}`,
        text: [
          `Name: ${name.trim()}`,
          `Email: ${email.trim()}`,
          `Subject: ${subject.trim()}`,
          "",
          message.trim(),
        ].join("\n"),
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.error(`Resend rejected contact email with status ${response.status}.`);
      return res.status(502).json({
        success: false,
        message:
          "Email delivery failed. Please try again or email me directly.",
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact email delivery request failed:", error.message);
    return res.status(502).json({
      success: false,
      message:
        "Email delivery is temporarily unavailable. Please try again or email me directly.",
    });
  } finally {
    clearTimeout(timeout);
  }
};
