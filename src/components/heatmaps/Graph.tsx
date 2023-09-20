import React from "react";
import HeatMap from "@uiw/react-heat-map";
// import Tooltip from "@uiw/react-tooltip";

type Props = {
  commitsData: { date: string; count: number }[];
  userSetStartDate?: string;
  useSetEndDate?: string;
};

import {
  HEATMAP_WEEK_LABELS,
  HEATMAP_LEGENDSIZE,
  HEATMAP_RECTSIZE,
  HEATMAP_SPACE,
  HEATMAP_WIDTH,
} from "@/constants/heatmapText";

import { getStartDate } from "@/lib/heatmap/getStartDate";
import { getEndDate } from "@/lib/heatmap/getEndDate";

export default function Graph({
  commitsData,
  userSetStartDate,
  useSetEndDate,
}: Props) {
  const startDate = getStartDate(commitsData);
  // const endDate = getEndDate(commitsData);
  // const [size, setSize] = useState(0);
  // const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col items-center mx-auto px-4 my-4">
      {/* <label style={{ userSelect: "none" }}>
        <input
          type="checkbox"
          checked={size === 0}
          onChange={(e) => setSize(e.target.checked ? 0 : 12)}
        />
        {size === 0 ? " Hide" : " Show"} Legend
      </label> */}
      <HeatMap
        value={commitsData}
        space={HEATMAP_SPACE}
        width={HEATMAP_WIDTH}
        rectSize={HEATMAP_RECTSIZE}
        legendCellSize={HEATMAP_LEGENDSIZE}
        startDate={
          new Date(
            userSetStartDate || startDate || `${new Date().getFullYear()}-01-01`
          )
        }
        endDate={new Date(useSetEndDate || `${new Date().getFullYear()}-12-31`)}
        weekLabels={HEATMAP_WEEK_LABELS}
        // panelColors={{
        //   0: "#f4decd",
        //   2: "#e4b293",
        //   4: "#d48462",
        //   10: "#c2533a",
        //   20: "#ad001d",
        //   30: "#000",
        // }}
        // style={{ color: "#ad001d", "--rhm-rect-active": "red" }}
        // rectRender={(props, data) => {
        //   if (!data.count) return <rect {...props} />;
        //   return (
        //     <Tooltip placement="top" content={`count: ${data.count || 0}`}>
        //       <rect {...props} />
        //     </Tooltip>
        //   );
        // }}
        // rectRender={(props, data) => {
        //   if (selected !== "") {
        //     props.opacity = data.date === selected ? 1 : 0.45;
        //   }
        //   return (
        //     <rect
        //       {...props}
        //       onClick={() => {
        //         setSelected(data.date === selected ? "" : data.date);
        //       }}
        //     />
        //   );
        // }}
      />
    </div>
  );
}
