import sg from '@sendgrid/mail';
export { renderers } from '../../renderers.mjs';

sg.setApiKey("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");
const prerender = false;
const POST = async ({ params, request }) => {
  try {
    const formData = await request.formData();
    const message = formData.get("message");
    const email = formData.get("email");
    if (!message || !email) throw new Error("Missing message or email");
    console.log("message =", message, "email = ", email);
    const msg = {
      to: "ayub.kh@outlook.com",
      from: "ayub.kh@outlook.com",
      subject: "Mensaje desde la web de Visolutio",
      text: `Mensaje: ${message} 
Email: ${email}`,
      html: `
       <p><strong>Mensaje:</strong> ${message}</p>
        <p><strong>Email:</strong> ${email}</p>
      `
    };
    sg.send(msg).then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    }).catch((error) => {
      console.error(error);
    });
    return new Response(JSON.stringify({ status: "ok" }));
  } catch (error) {
    console.error(error);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
