import React from "react";
import HeatMap from "@uiw/react-heat-map";
// import Tooltip from "@uiw/react-tooltip";

type Props = {
  commitsData: { date: string; count: number }[];
};

export default function Graph({ commitsData }: Props) {
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
        space={4}
        width={"w-full"}
        rectSize={15}
        legendCellSize={0}
        startDate={new Date("2022/12/31")}
        endDate={new Date("2023/12/31")}
        weekLabels={["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]}
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
