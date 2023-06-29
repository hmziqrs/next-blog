import Container from "components/container";
import { releases } from "./data";
import SVGCheck from "components/svg/check";
import { typography } from "data/typography";

export default function RoadMapPage() {
  return (
    <Container>
      <div className="h-16" />
      <div className="space-y-12">
        {releases.map((release) => {
          return (
            <div key={release.version}>
              <h3 className={typography.subheading}>
                {release.label}{" "}
                <span className="font-bold">({release.version})</span>
              </h3>
              <div className="h-2" />
              <ul className="list-disc list-inside">
                {release.features.map((feature) => {
                  return (
                    <li key={feature.label}>
                      {feature.label}
                      {feature.done && (
                        <SVGCheck className="inline-block ml-2" />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="h-16" />
    </Container>
  );
}
