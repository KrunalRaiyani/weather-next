import { NextResponse } from "next/server";

export function middleware(req) {
  const { href, origin, searchParams } = req.nextUrl;
  const redirectKey = href.replace(origin, "");
  console.log("in middleware===>", href, origin, searchParams);
  return NextResponse.next();
}
