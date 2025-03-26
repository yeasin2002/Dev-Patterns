import { allPatterns } from "contentlayer/generated";
import Link from "next/link";
import React from "react";

const Principles = async () => {
  return (
    <div>
      <h1>Patterns</h1>
      <div className="mt-10 space-y-10">
        {allPatterns.map((patterns) => (
          <div key={patterns.slugAsParams}>
            <h2>{patterns.title}</h2>
            <p>{patterns.description}</p>
            <Link
              href={`/patterns/${patterns.slugAsParams}`}
              className="text-blue-400"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principles;
