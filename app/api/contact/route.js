import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, phone, email, project, details } = await request.json();

  try {
    // Email to Justin (notification)
    await resend.emails.send({
     from: 'LeJeune Glass <onboarding@resend.dev>',
      to: 'lejeuneshowerglass@gmail.com',
      subject: `New Estimate Request from ${name}`,
      html: `
        <h2>New Estimate Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${project}</p>
        <p><strong>Details:</strong> ${details}</p>
      `,
    });

    // Confirmation email to client
    await resend.emails.send({
      from: 'LeJeune Glass <onboarding@resend.dev>',
      to: email,
      subject: 'We received your estimate request!',
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We've received your request and will be in touch within 24 hours.</p>
        <p><strong>LeJeune Glass</strong><br/>
        (678) 549-2993<br/>
        Metro Atlanta & Surrounding Counties</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}