import { biologyDiagrams } from './biology';
import { chemistryDiagrams } from './chemistry';
import { mathsDiagrams } from './maths';
import { physicsDiagrams } from './physics';

// All lesson diagrams by id. Content refers to them with `diagram: 'id'` on a learn card.
export const diagrams: Record<string, () => JSX.Element> = {
  ...biologyDiagrams,
  ...chemistryDiagrams,
  ...physicsDiagrams,
  ...mathsDiagrams,
};

export function Diagram({ id }: { id: string }) {
  const D = diagrams[id];
  return D ? <D /> : null;
}

/** A page showing every diagram, for checking them: open the app with ?diagrams */
export function DiagramGallery() {
  return (
    <div className="diagram-gallery">
      {Object.keys(diagrams).map((id) => (
        <figure key={id} className="diagram-frame" data-id={id}>
          <Diagram id={id} />
          <figcaption>{id}</figcaption>
        </figure>
      ))}
    </div>
  );
}
