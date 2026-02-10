import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, phone, message } = await request.json();

        // Create transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'utsavraj2004u@gmail.com',
                pass: 'cmej xwym rplj atbr', // App password
            },
        });

        // Email to admin (Reka Team)
        const adminMailOptions = {
            from: '"Reka Website Bot" <utsavraj2004u@gmail.com>',
            to: 'rekacreativelabs@gmail.com',
            subject: `🚀 New Lead: ${name} - Contact Form`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                    <!-- Header -->
                    <div style="background-color: #0A1912; padding: 20px; text-align: center; border-bottom: 4px solid #8CF665;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 1px;">NEW LEAD RECEIVED</h1>
                    </div>

                    <!-- Content -->
                    <div style="padding: 30px;">
                        <div style="background-color: #f5f7f2; padding: 15px; border-left: 4px solid #036A3A; margin-bottom: 25px;">
                            <p style="margin: 0; color: #555; font-size: 14px;">A new inquiry has been submitted through the website contact form.</p>
                        </div>

                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; width: 100px;"><strong>Name</strong></td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333; font-weight: 500;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Email</strong></td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #036A3A; font-weight: 500;"><a href="mailto:${email}" style="color: #036A3A; text-decoration: none;">${email}</a></td>
                            </tr>
                            ${phone ? `
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Phone</strong></td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${phone}</td>
                            </tr>
                            ` : ''}
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Date</strong></td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
                            </tr>
                        </table>

                        <div style="margin-top: 25px;">
                            <h3 style="color: #0A1912; font-size: 16px; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Message Content</h3>
                            <div style="background-color: #fafafa; padding: 15px; border-radius: 6px; border: 1px solid #eee; color: #444; line-height: 1.6;">
                                ${message}
                            </div>
                        </div>

                        <!-- CTA -->
                        <div style="margin-top: 30px; text-align: center;">
                            <a href="mailto:${email}" style="background-color: #036A3A; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: 600; font-size: 14px; display: inline-block;">Reply to Client</a>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div style="background-color: #f9f9f9; padding: 15px; text-align: center; border-top: 1px solid #eee; font-size: 12px; color: #999;">
                        &copy; ${new Date().getFullYear()} Reka Creative Labs • Automated System
                    </div>
                </div>
            `,
        };

        // Confirmation email to user (Client)
        const userMailOptions = {
            from: '"Reka Creative Labs" <utsavraj2004u@gmail.com>',
            to: email,
            subject: 'We received your message! 🚀',
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden;">
                    <!-- Hero Image / Header -->
                    <div style="background-color: #0A1912; background: linear-gradient(135deg, #0A1912 0%, #036A3A 100%); padding: 40px 20px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">Hello, ${name.split(' ')[0]}!</h1>
                        <p style="color: #ffffff; margin: 15px 0 0 0; font-size: 18px; font-weight: 500; opacity: 0.9;">Thanks for reaching out to us.</p>
                    </div>

                    <!-- Content -->
                    <div style="padding: 30px;">
                        <p style="color: #333; font-size: 16px; line-height: 1.6; margin-top: 0;">
                            We have received your detailed message regarding your project. Our team is already reviewing it and we're excited about the possibility of working together!
                        </p>

                        <div style="background-color: #f0fdf4; border-left: 4px solid #8CF665; padding: 15px; margin: 25px 0; border-radius: 0 4px 4px 0;">
                            <p style="margin: 0; color: #166534; font-size: 14px;"><strong>What happens next?</strong><br>We usually respond within 24 hours to schedule a quick discovery call.</p>
                        </div>

                        <p style="color: #555; text-align: center; margin: 30px 0 10px 0; font-size: 14px; font-weight: 600;">While you wait, verify your submission details:</p>
                        
                        <div style="background-color: #fafafa; padding: 20px; border-radius: 8px; font-size: 14px; color: #555; border: 1px solid #eee;">
                            <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
                            <p style="margin: 0; font-style: italic;">"${message.length > 100 ? message.substring(0, 100) + '...' : message}"</p>
                        </div>

                        <div style="text-align: center; margin-top: 35px;">
                            <a href="https://rekacreativelabs.com" style="background: #8CF665; color: #0A1912; padding: 14px 30px; text-decoration: none; border-radius: 50px; font-weight: 700; box-shadow: 0 4px 15px rgba(140, 246, 101, 0.4); display: inline-block; transition: transform 0.2s;">Visit Our Website</a>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div style="background-color: #0A1912; padding: 20px; text-align: center; color: #ffffff;">
                        <p style="margin: 0 0 10px 0; font-weight: 600;">Reka Creative Labs</p>
                        <p style="margin: 0; font-size: 12px; color: #888;">Digital Agency for Growth & Innovation</p>
                        <div style="margin-top: 15px; font-size: 12px;">
                            <a href="mailto:rekacreativelabs@gmail.com" style="color: #8CF665; text-decoration: none; margin: 0 10px;">Email Us</a>
                            <span style="color: #444;">|</span>
                            <a href="tel:+918368508556" style="color: #8CF665; text-decoration: none; margin: 0 10px;">Call Us</a>
                        </div>
                    </div>
                </div>
            `,
        };

        // Send both emails in parallel for faster performance
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions)
        ]);

        return NextResponse.json(
            { message: 'Email sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}
