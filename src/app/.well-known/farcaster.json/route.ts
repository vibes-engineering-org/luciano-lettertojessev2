import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ",
      payload: "eyJkb21haW4iOiJsdWNpYW5vLWxldHRlcnRvamVzc2V2Mi52ZXJjZWwuYXBwIn0",
      signature: "MHhiYWIzNzY2MTU4YmRiNmEzZmVlZGVlMGYzNzJlNDllZDAzZTNkYjg5YTFkMzVkZmJiM2ZhMmRkM2M0NGFkNTY2NGE0ODkxZGI0MDhlNmFkODQ4MmRhZGMyOTQ0MTYwNzlhNmIyMDlkZWI3YTM4NDg0NWY0NGNlOWZlNDc4YTdjZjFj"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/og.png`,
      buttonTitle: "Open",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
      primaryCategory: "social",
    },
  };

  return Response.json(config);
}
