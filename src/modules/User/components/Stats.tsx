import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  registerables,
} from "chart.js";
import { Radar } from "react-chartjs-2";

import { STATS_BREADCRUMBS } from "../constants";
import Card from "../../../components/Card";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ...registerables
);

const Stats: React.FC = ({ stats }) => {
  return (
    <Card breadcrumbs={STATS_BREADCRUMBS}>
      <Radar
        data={stats}
        options={{ elements: { line: { borderWidth: 3 } } }}
      />
    </Card>
  );
};

export default Stats;
