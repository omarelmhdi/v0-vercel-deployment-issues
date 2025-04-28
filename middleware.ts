import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // تأكد من أن طلبات الويب هوك من تليجرام فقط
  if (request.nextUrl.pathname === "/api/telegram") {
    // يمكنك إضافة تحقق إضافي هنا إذا لزم الأمر
    return NextResponse.next()
  }

  // السماح بالوصول إلى مسار الكرون جوب
  if (request.nextUrl.pathname === "/api/cron") {
    // تحقق من أن الطلب من Vercel Cron
    const userAgent = request.headers.get("user-agent") || ""
    if (userAgent.includes("Vercel")) {
      return NextResponse.next()
    }
    return NextResponse.json({ error: "غير مصرح" }, { status: 403 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/api/telegram", "/api/cron"],
}
