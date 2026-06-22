import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return NextResponse.json(
        { error: "Missing API key or Place ID" },
        { status: 500 }
      );
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== "OK") {
      return NextResponse.json(
        { error: "Google API error", details: data },
        { status: 400 }
      );
    }

    const reviews = (data.result.reviews || [])
      .filter((rev: any) => rev.rating === 5)
      .sort((a: any, b: any) => b.time - a.time);

    return NextResponse.json({ reviews });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
