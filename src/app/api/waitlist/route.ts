import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

// Schema for validation
const signupSchema = z.object({
  email: z.string().email(),
  reason: z.string().optional(),
  category: z.string().optional(),
  honeypot: z.string().optional(), // Hidden field for bot detection
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = signupSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid email address or data format." },
        { status: 400 },
      );
    }

    const { email, reason, category, honeypot } = result.data;

    // Simple Honeypot Check
    if (honeypot) {
      // Silently fail for bots (pretend success)
      return NextResponse.json({ success: true });
    }

    // Basic Rate Limiting (IP based - in-memory or DB check)
    // For this MVP, we'll skip complex rate limiting or use headers if deploying to Vercel/VPS

    // Check for existing email
    const existing = await prisma.waitlistSignup.findUnique({
      where: { email },
    });

    if (existing) {
      // If category or reason is provided, update the existing record
      if (category || reason) {
        await prisma.waitlistSignup.update({
          where: { email },
          data: {
            ...(category && { category }), // Only update if provided
            ...(reason && { reason }),
          },
        });
      }
      return NextResponse.json({
        success: true,
        message: "You're on the list!",
      }); // Generic success to hide "already added" if we just updated it, or keep it friendly.
    }

    // Capture User Agent & IP (from headers)
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    await prisma.waitlistSignup.create({
      data: {
        email,
        reason,
        category,
        ip: Array.isArray(ip) ? ip[0] : ip,
        userAgent,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
