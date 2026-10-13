import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/leetleitner") {
    // Use the native URL type: NextURL serializes paths using Next's own
    // trailingSlash setting, which would remove this app's required slash.
    const destination = new URL(request.url);
    destination.host = request.headers.get("host") ?? destination.host;
    destination.pathname = "/leetleitner/";
    return NextResponse.redirect(destination, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/leetleitner"] };
