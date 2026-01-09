import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
        return NextResponse.json(
            { error: 'Missing Resend API Key' },
            { status: 500 }
        );
    }

    const resend = new Resend(resendApiKey);

    try {
        const { email, message } = await req.json();

        if (!email || !message) {
            return NextResponse.json(
                { error: 'Email and message are required' },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'hmyoussef@gmail.com', // Resend free tier requires sending to account email
            subject: `New Contact Request from ${email}`,
            replyTo: email,
            text: message,
            // React email template could go here if we wanted HTML
        });

        if (data.error) {
            return NextResponse.json({ error: data.error }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
