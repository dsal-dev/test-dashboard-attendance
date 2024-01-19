import summary from "/src/data/summary.json";
import transaction from "/src/data/transaction.json";

function getTypeChart(whitelist, column) {
  if (whitelist.includes(column)) {
    return "spline";
  }

  return "column";
}

export const useAttendanceDaily = () => {
  const attendanceDaily = transaction["Attendance Daily"];
  const data = Object.keys(attendanceDaily);
  let categories = [];
  let series = [];
  const typeLine = [
    "Accumulation Attend",
    "Accumulation Un-attend",
    "Accumulation Non Schedule",
  ];

  data.forEach((d, i) => {
    if (i == 0) categories = Object.keys(attendanceDaily[d]);
    const type = getTypeChart(typeLine, d);
    series.push({
      yAxis: type == "column" ? 1 : 0,
      type: type,
      name: d,
      data: Object.values(attendanceDaily[d]),
    });
  });

  return {
    categories,
    series,
  };
};

export const useAttendancePerShift = () => {
  const attendancePerShift = transaction["Attendance Per Shift"];
  const data = Object.keys(attendancePerShift);
  let categories = [];
  let series = [];
  const typeLine = [
    "Total Attend",
    "Total Un-attend",
    "Total Late Check-in",
    "Total Non Schedule",
  ];

  data.forEach((d, i) => {
    if (i == 0) categories = Object.keys(attendancePerShift[d]);
    const type = getTypeChart(typeLine, d);
    series.push({
      yAxis: type == "column" ? 1 : 0,
      type: type,
      name: d,
      data: Object.values(attendancePerShift[d]),
    });
  });

  return {
    categories,
    series,
  };
};

export const useTodayOnDuty = () => {
  const data = summary["Card On Duty"];
  const series = [
    {
      name: "",
      y: data["On Duty"],
    },
    {
      name: "",
      y: data["Total"],
    },
  ];

  return {
    title: `${data["On Duty"]} / ${data["Total"]}`,
    series: series,
  };
};

export const useAttendance = () => {
  const data = summary["Card Attendance"];
  const series = [
    {
      name: "",
      y: data["Attend"],
    },
    {
      name: "",
      y: data["Total"],
    },
  ];

  const percentage = (data["Attend"] / data["Total"]) * 100;

  return {
    title: `${percentage.toFixed(2)}% <br/> ${data["Attend"]} / ${
      data["Total"]
    }`,
    series: series,
  };
};

export const useSummaryCard = () => {
  const feedActivity = summary["Card Feed Activity"];
  const patroli = summary["Card Patrol"];
  const nonSchedule = summary["Card Non Schedule"];
  const nonGeoFence = summary["Card Non Geofence"];

  return {
    feedActivity,
    patroli,
    nonSchedule,
    nonGeoFence,
  };
};
