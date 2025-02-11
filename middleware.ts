import { NextRequest, NextResponse, userAgent } from "next/server";

export default function middleware(request: NextRequest) {
  // const url = request.nextUrl;
  // const pathname = url.pathname;

  // const { device, os } = userAgent(request);
  // const viewport = device.type === "mobile" ? "mobile" : "desktop";
  // url.searchParams.set("viewport", viewport);
  // if (pathname === "/company-health-faq.html") {
  //   if (os.name === "iOS") {
  //     const newUrl = new URL("/company-health-faq-2.html", url.origin);
  //     const theme = url.searchParams.get("theme");
  //     newUrl.searchParams.set("theme", theme);
  //     return NextResponse.redirect(newUrl);
  //   }
  // }

  // return NextResponse.rewrite(url);
}
