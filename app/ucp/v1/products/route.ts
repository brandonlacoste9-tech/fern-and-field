import { NextResponse } from "next/server";
import { searchProducts, formatMoney } from "@/lib/catalog";
import { CORS } from "@/lib/ucp";

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: CORS });
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = url.searchParams.get("q") || url.searchParams.get("query") || "";
  const origin = url.origin;
  const products = searchProducts(q).map((p) => ({
    ...p,
    display_price: formatMoney(p.price, p.currency),
    url: origin + "/?sku=" + p.id,
    checkout: origin + "/api/checkout?sku=" + encodeURIComponent(p.sku),
  }));
  return NextResponse.json({ products }, { headers: CORS });
}
