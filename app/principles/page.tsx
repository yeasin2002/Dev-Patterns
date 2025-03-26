import { allPrinciples } from "contentlayer/generated";
import Link from "next/link";
import React from "react";

const Principles = async () => {
  return (
    <div>
      <h1>Principles</h1>
      <div className="mt-10 space-y-10">
        {allPrinciples.map((principle) => (
          <div key={principle.slugAsParams}>
            <h2>{principle.title}</h2>
            <p>{principle.description}</p>
            <Link
              href={`/principles/${principle.slugAsParams}`}
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
