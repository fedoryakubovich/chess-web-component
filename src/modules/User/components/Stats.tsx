import React from "react";
import { STATS_BREADCRUMBS } from "../constants";

import Card from "../../../components/Card";

const Stats: React.FC = () => {
  return (
    <Card breadcrumbs={STATS_BREADCRUMBS}>
      <h1>Hello Stats</h1>
    </Card>
  );
};

export default Stats;
