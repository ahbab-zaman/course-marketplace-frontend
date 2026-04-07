import { NextResponse } from "next/server";

// POST /api/payments/checkout — Create checkout session
export async function POST() {
  // TODO: Integrate Stripe checkout
  return NextResponse.json(
    {
      message: "Payments endpoint — configure Stripe to activate",
      success: false,
    },
    { status: 501 }
  );
}
