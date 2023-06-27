import Container from "components/container";
import { releases } from "./data";
import SVGCheck from "components/svg/check";

export default function RoadMapPage() {
  return (
    <Container>
      {/* <h2 className="text-2xl">Road map</h2> */}
      <div className="h-2" />
      <div className=" space-y-4">
        {releases.map((release) => {
          return (
            <div key={release.version}>
              <h3 className="text-2xl">
                {release.label}{" "}
                <span className="font-bold">({release.version})</span>
              </h3>
              <div className="h-2" />
              <ul className="list-disc list-inside">
                {release.features.map((feature) => {
                  return (
                    <div
                      key={feature.label}
                      className="flex flex-row space-x-3"
                    >
                      <li>{feature.label}</li>
                      {feature.done && <SVGCheck />}
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
