import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Admin Area"' },
    });
  }

  const [scheme, credentials] = authHeader.split(" ");
  if (scheme !== "Basic" || !credentials) {
    return new NextResponse("Invalid authentication", { status: 401 });
  }

  const decoded = atob(credentials);
  const [user, pass] = decoded.split(":");

  const adminUser = process.env.ADMIN_USER;
  const adminPass = process.env.ADMIN_PASS;

  if (!adminUser || !adminPass || user !== adminUser || pass !== adminPass) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const signups = await prisma.waitlistSignup.findMany({
      orderBy: { createdAt: "desc" },
    });

    const csvHeader = "ID,Email,Reason,Category,IP,UserAgent,Created At\n";
    const csvRows = signups.map(
      (s: {
        id: string;
        email: string;
        reason: string | null;
        category: string | null;
        ip: string | null;
        userAgent: string | null;
        createdAt: Date;
      }) => {
        const escape = (str: string | null) =>
          `"${(str || "").replace(/"/g, '""')}"`;
        return [
          s.id,
          escape(s.email),
          escape(s.reason),
          escape(s.category),
          escape(s.ip),
          escape(s.userAgent),
          s.createdAt.toISOString(),
        ].join(",");
      },
    );

    const csvContent = csvHeader + csvRows.join("\n");

    return new NextResponse(csvContent, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition":
          'attachment; filename="framerights-waitlist.csv"',
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Server error", { status: 500 });
  }
}
