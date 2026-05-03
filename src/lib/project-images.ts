import fs from "node:fs";
import path from "node:path";

import type { StaticImageData } from "next/image";

export async function resolveProjectImageSrc(
  fileName: string,
): Promise<string | StaticImageData | null> {
  try {
    const imageModule = await import(`@/assets/images/${fileName}`);

    return imageModule.default;
  } catch {
    // Fall back to public assets for any images that have not been moved yet.
  }

  const diskPath = path.join(
    process.cwd(),
    "public",
    "images",
    "projects",
    fileName,
  );

  return fs.existsSync(diskPath) ? `/images/projects/${fileName}` : null;
}
