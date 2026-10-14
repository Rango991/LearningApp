import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { subjects } from '../src/content';
import { Diagram, diagrams } from '../src/diagrams';

const lessons = subjects.flatMap((s) => s.units.flatMap((u) => u.lessons));

describe('lesson diagrams', () => {
  it('every diagram a card names exists', () => {
    for (const l of lessons) for (const c of l.learn) {
      if (c.diagram) expect(diagrams[c.diagram], `${l.id}: ${c.diagram}`).toBeDefined();
    }
  });

  it('every lesson has at least one diagram', () => {
    const without = lessons.filter((l) => !l.learn.some((c) => c.diagram)).map((l) => l.id);
    expect(without).toEqual([]);
  });

  it('every diagram renders an accessible svg', () => {
    for (const id of Object.keys(diagrams)) {
      const html = renderToStaticMarkup(<Diagram id={id} />);
      expect(html, id).toMatch(/^<svg[^>]+role="img"[^>]+aria-label="[^"]{10,}"/);
    }
  });
});
