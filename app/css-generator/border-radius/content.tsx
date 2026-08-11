"use client";
import React, { useState } from "react";
import Range from "../../components/range";
import Checkbox from "../../components/checkbox";
import Code from "../../components/code";
import Output from "../../components/output";
import CssPreview from "../../components/css-preview";
import Breadcrumbs from "../../components/breadcrumbs";
import Title from "../../components/title";
import Description from "../../components/description";
import Section from "../../components/section";
import { buildCssFormats, tailwindArbitrary } from "../../lib/css-formats";
export default function Content() {
  const [uniform, setUniform] = useState(true);
  const [radius, setRadius] = useState(16);
  const [corners, setCorners] = useState({
    topLeft: 16,
    topRight: 16,
    bottomRight: 16,
    bottomLeft: 16,
  });
  const value = uniform
    ? `${radius}px`
    : `${corners.topLeft}px ${corners.topRight}px ${corners.bottomRight}px ${corners.bottomLeft}px`;
  const tailwind = uniform
    ? `rounded-[${radius}px]`
    : `rounded-[${tailwindArbitrary(value)}]`;
  return (
    <>
      <div className="md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            { name: "CSS", link: "/css-generator" },
            { name: "Border Radius", link: "/css-generator/border-radius" },
          ]}
        />
        <Title title="Border Radius Generator" />
        <Description description="Build border-radius values with uniform or per-corner control and a live preview." />
        <div className="mt-9 flex flex-col gap-y-10">
          <Section title="Radius">
            <Checkbox
              name="uniform"
              title="Use the same radius on every corner"
              checked={uniform}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setUniform(event.target.checked)
              }
            />
            {uniform ? (
              <Range
                name="radius"
                title="Radius"
                min={0}
                max={100}
                value={radius}
                onChange={setRadius}
              />
            ) : (
              <>
                <Range
                  name="topLeft"
                  title="Top Left"
                  min={0}
                  max={100}
                  value={corners.topLeft}
                  onChange={(topLeft) =>
                    setCorners({ ...corners, topLeft })
                  }
                />
                <Range
                  name="topRight"
                  title="Top Right"
                  min={0}
                  max={100}
                  value={corners.topRight}
                  onChange={(topRight) =>
                    setCorners({ ...corners, topRight })
                  }
                />
                <Range
                  name="bottomRight"
                  title="Bottom Right"
                  min={0}
                  max={100}
                  value={corners.bottomRight}
                  onChange={(bottomRight) =>
                    setCorners({ ...corners, bottomRight })
                  }
                />
                <Range
                  name="bottomLeft"
                  title="Bottom Left"
                  min={0}
                  max={100}
                  value={corners.bottomLeft}
                  onChange={(bottomLeft) =>
                    setCorners({ ...corners, bottomLeft })
                  }
                />
              </>
            )}
          </Section>
        </div>
      </div>
      <Output>
        <CssPreview>
          <div
            className="h-32 w-32 bg-primary dark:bg-white"
            style={{ borderRadius: value }}
          />
        </CssPreview>
        <Code
          title="Code"
          formats={buildCssFormats("border-radius", value, tailwind)}
        />
      </Output>
    </>
  );
}
