import { biologyDiagrams } from './biology';
import { chemistryDiagrams } from './chemistry';
import { englishDiagrams } from './english';
import { gcseBiologyDiagrams } from './gcse-biology';
import { geographyDiagrams } from './geography';
import { historyDiagrams } from './history';
import { gcseChemistryDiagrams } from './gcse-chemistry';
import { gcseEnglishDiagrams } from './gcse-english';
import { gcseGeographyDiagrams } from './gcse-geography';
import { gcseHistoryDiagrams } from './gcse-history';
import { gcseMathsDiagrams } from './gcse-maths';
import { gcsePhysicsDiagrams } from './gcse-physics';
import { tripleDiagrams } from './gcse-triple';
import { mathsDiagrams } from './maths';
import { physicsDiagrams } from './physics';
import { year7Diagrams } from './year7';

// All lesson diagrams by id. Content refers to them with `diagram: 'id'` on a learn card.
export const diagrams: Record<string, () => JSX.Element> = {
  ...biologyDiagrams,
  ...chemistryDiagrams,
  ...physicsDiagrams,
  ...mathsDiagrams,
  ...gcseBiologyDiagrams,
  ...gcseChemistryDiagrams,
  ...gcsePhysicsDiagrams,
  ...gcseMathsDiagrams,
  ...year7Diagrams,
  ...geographyDiagrams,
  ...historyDiagrams,
  ...englishDiagrams,
  ...gcseEnglishDiagrams,
  ...gcseHistoryDiagrams,
  ...gcseGeographyDiagrams,
  ...tripleDiagrams,
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
