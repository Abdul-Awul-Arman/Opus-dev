import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const SVG_SETS = [
  {
    id: "svg-44",
    title: "svg 44",
    directory: path.join(process.cwd(), "svg 44", "svg 44"),
  },
  {
    id: "svg-11",
    title: "SVG 11",
    directory: path.join(process.cwd(), "SVG 11", "SVG 11"),
  },
  {
    id: "svg-33",
    title: "SVG 33",
    directory: path.join(process.cwd(), "SVG 33", "SVG 33"),
  },
] as const;

async function getSvgFiles(directory: string) {
  const names = await readdir(directory);
  const svgNames = names.filter((name) => name.toLowerCase().endsWith(".svg"));

  return Promise.all(
    svgNames.sort().map(async (name) => {
      const file = await stat(path.join(directory, name));

      return {
        name,
        sizeMb: file.size / 1024 / 1024,
      };
    })
  );
}

export default async function SvgPickerPage() {
  const sets = await Promise.all(
    SVG_SETS.map(async (set) => ({
      ...set,
      files: await getSvgFiles(set.directory),
    }))
  );

  return (
    <main className="min-h-screen bg-[#edf2f6] px-6 py-10 text-brand-navy-dark lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10">
        <header className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
            SVG Picker
          </p>
          <h1 className="font-serif text-[44px] leading-none md:text-[64px]">
            Choose an approach image
          </h1>
          <p className="max-w-[720px] text-base leading-7 text-text-one">
            Review the SVGs from the local folders. Use the folder and filename
            shown under each preview when you want me to set one in the section.
          </p>
        </header>

        {sets.map((set) => (
          <section key={set.id} className="flex flex-col gap-5">
            <div className="flex items-end justify-between gap-4 border-b border-brand-navy-dark/15 pb-3">
              <h2 className="font-serif text-[34px] leading-none">
                {set.title}
              </h2>
              <span className="text-sm text-text-one">
                {set.files.length} SVGs
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {set.files.map((file) => (
                <article
                  key={`${set.id}-${file.name}`}
                  className="overflow-hidden rounded-[8px] border border-brand-navy-dark/10 bg-white"
                >
                  <div className="flex aspect-[4/3] items-center justify-center bg-white p-6">
                    <img
                      src={`/svg-picker/assets/${set.id}/${encodeURIComponent(file.name)}`}
                      alt={`${set.title} ${file.name}`}
                      className="h-full max-h-[220px] w-full object-contain"
                    />
                  </div>
                  <div className="border-t border-brand-navy-dark/10 px-4 py-3">
                    <p className="font-mono text-sm text-brand-navy-dark">
                      {file.name}
                    </p>
                    <p className="mt-1 text-xs text-text-one">
                      {file.sizeMb.toFixed(2)} MB
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
