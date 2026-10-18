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
import { physicsY89Diagrams } from './physics-y89';
import { biologyY89Diagrams } from './biology-y89';
import { chemistryY89Diagrams } from './chemistry-y89';
import { mathsY89Diagrams } from './maths-y89';
import { englishKs3Diagrams } from './english-ks3';
import { historyY89Diagrams } from './history-y89';
import { geographyKs3Diagrams } from './geography-ks3';
import { moreUnitsDiagrams } from './more-units';
import { computingDiagrams } from './computing';
import { year7Diagrams } from './year7';

// All lesson diagrams by id. Content refers to them with `diagram: 'id'` on a learn card.
export const diagrams: Record<string, () => JSX.Element> = {
  ...biologyDiagrams,
  ...chemistryDiagrams,
  ...physicsDiagrams,
  ...physicsY89Diagrams,
  ...biologyY89Diagrams,
  ...chemistryY89Diagrams,
  ...mathsY89Diagrams,
  ...englishKs3Diagrams,
  ...historyY89Diagrams,
  ...geographyKs3Diagrams,
  ...moreUnitsDiagrams,
  ...computingDiagrams,
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
