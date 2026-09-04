import { ImageResponse } from "next/og";

export const alt = "Danang — Cloud DevOps Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/*
  Loads a text-subsetted font from the Google Fonts CSS API. The `text`
  parameter keeps the payload tiny — only the glyphs actually rendered are
  fetched. The API serves TTF to non-browser clients, which is exactly what
  the ImageResponse renderer needs.
*/
async function loadGoogleFont(
  family: string,
  weight: number,
  text: string
): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\(([^)]+)\) format\('(opentype|truetype)'\)/
  );
  const fontUrl = resource?.[1];
  if (!fontUrl) throw new Error(`Could not load ${family} from Google Fonts`);
  const fontData = await fetch(fontUrl);
  if (!fontData.ok) throw new Error(`Could not fetch ${family} font data`);
  return fontData.arrayBuffer();
}

export default async function OpengraphImage() {
  const [plexSansSemiBold, interRegular, jetbrainsMonoMedium] =
    await Promise.all([
      loadGoogleFont("IBM Plex Sans", 600, "Danang"),
      loadGoogleFont("Inter", 400, "Cloud DevOps Engineer"),
      loadGoogleFont(
        "JetBrains Mono",
        500,
        "AWS · GCP · Alibaba Cloud · Kubernetes danang-dev.my.id"
      ),
    ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#FAFAF8",
          padding: 96,
          fontFamily: "Inter",
        }}
      >
        {/* Hairline frame — the card hairline, used as an architectural border */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: "1px solid #E8E6E1",
          }}
        />

        {/* Name — the headline face */}
        <p
          style={{
            fontFamily: "IBM Plex Sans",
            fontSize: 112,
            fontWeight: 600,
            color: "#1A1A1A",
            letterSpacing: "-0.02em",
          }}
        >
          Danang
        </p>

        {/* Role — the one accent use */}
        <p
          style={{
            fontFamily: "Inter",
            fontSize: 40,
            color: "#4A6070",
            marginTop: 12,
          }}
        >
          Cloud DevOps Engineer
        </p>

        {/* Divider rule */}
        <div
          style={{
            display: "flex",
            width: 64,
            height: 2,
            backgroundColor: "#4A6070",
            marginTop: 44,
            marginBottom: 44,
          }}
        />

        {/* Cloud providers — technical metadata in the mono face */}
        <p
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 24,
            color: "#737373",
          }}
        >
          AWS · GCP · Alibaba Cloud · Kubernetes
        </p>

        {/* Domain — anchored to the bottom edge, aligned with the content */}
        <p
          style={{
            position: "absolute",
            bottom: 56,
            left: 96,
            fontFamily: "JetBrains Mono",
            fontSize: 20,
            color: "#737373",
          }}
        >
          danang-dev.my.id
        </p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "IBM Plex Sans",
          data: plexSansSemiBold,
          weight: 600,
          style: "normal",
        },
        {
          name: "Inter",
          data: interRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "JetBrains Mono",
          data: jetbrainsMonoMedium,
          weight: 500,
          style: "normal",
        },
      ],
    }
  );
}
