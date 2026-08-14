export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Resolves an image reference to a URL.
 *
 * Pass a string to use your own photography: any path under `public/`, for
 * example `/images/hero.jpg`. The width and height arguments are ignored in
 * that case. Every image on this page is rendered with next/image's `fill`, so
 * it takes its dimensions from the container rather than from the source.
 *
 * Pass a number to fall back to a Picsum placeholder by id. Each id still in
 * `content.ts` was picked by eye at its final crop rather than left to a random
 * seed. Images render in their original colour, so placeholders from unrelated
 * sources will not sit together as one set. That resolves as real photography
 * replaces them.
 *
 * Both forms work side by side, so images can be replaced one slot at a time.
 * See `public/images/README.md` for the slot list.
 */
export function photo(
  source: number | string,
  width: number,
  height: number,
): string {
  if (typeof source === "string") return source;

  return `https://picsum.photos/id/${source}/${width}/${height}`;
}
