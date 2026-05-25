import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";

const SVG_SETS = {
  "svg-44": path.join(process.cwd(), "svg 44", "svg 44"),
  "svg-11": path.join(process.cwd(), "SVG 11", "SVG 11"),
  "svg-33": path.join(process.cwd(), "SVG 33", "SVG 33"),
} as const;

type SvgSet = keyof typeof SVG_SETS;

function isSvgSet(value: string): value is SvgSet {
  return value in SVG_SETS;
}

export async function generateStaticParams() {
  const params = await Promise.all(
    Object.entries(SVG_SETS).map(async ([set, directory]) => {
      const names = await readdir(directory);

      return names
        .filter((name) => name.toLowerCase().endsWith(".svg"))
        .map((name) => ({ set, name }));
    })
  );

  return params.flat();
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ set: string; name: string }> }
) {
  try {
    const { set, name } = await params;

    if (!isSvgSet(set) || !/^[A-Za-z0-9-]+\.svg$/.test(name)) {
      return new Response("Not found", { status: 404 });
    }

    const filePath = path.join(SVG_SETS[set], name);
    const file = await readFile(filePath).catch(() => null);

    if (!file) {
      return new Response("Not found", { status: 404 });
    }

    return new Response(new Uint8Array(file), {
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "image/svg+xml",
      },
    });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
