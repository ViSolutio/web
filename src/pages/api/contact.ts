import type { APIRoute } from "astro";
import sg from "@sendgrid/mail"

sg.setApiKey(import.meta.env.SENDGRID_API_KEY as string)

export const prerender = false

export const POST: APIRoute = async ({ params, request }) => {
  try {
    const formData = await request.formData()

    const message = formData.get('message') as string
    const email = formData.get('email') as string

    if (!message || !email) throw new Error('Missing message or email')

    console.log('message =', message, 'email = ', email)

    const msg = {
      to: 'ayub.kh@outlook.com',
      from: 'ayub.kh@outlook.com',
      subject: 'Mensaje desde la web de Visolutio',
      text: `Mensaje: ${message} \nEmail: ${email}`,
      html: `
       <p><strong>Mensaje:</strong> ${message}</p>
        <p><strong>Email:</strong> ${email}</p>
      `
    }

    sg
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode)
        console.log(response[0].headers)
      })
      .catch((error) => {
        console.error(error)
      })

    return new Response(JSON.stringify({ status: "ok" }))
  } catch (error) {
    console.error(error)
  }
};
