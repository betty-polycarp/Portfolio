export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Placeholder photography.
 *
 * Picsum is the agreed fallback while no image generation tool is available.
 * Every id below was picked by eye at its final crop rather than left to a
 * random seed, and the whole set is rendered in grayscale so that borrowed
 * photography still reads as one visual system.
 *
 * TODO: swap these ids for real photography (and a real portrait of Betty in
 * the about section) before the site goes live.
 */
export function photo(id: number, width: number, height: number): string {
  return `https://picsum.photos/id/${id}/${width}/${height}`;
}
