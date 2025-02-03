interface Segmenter {
  segment(input: string): Iterable<{ segment: string }>;
}

declare namespace Intl {
  const Segmenter: {
    prototype: Segmenter;
    new(locale: string, options?: { granularity: "grapheme" }): Segmenter;
  };
} 