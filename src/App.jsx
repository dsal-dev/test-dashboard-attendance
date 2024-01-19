import Card, { CardSummary } from "./components/atoms/card";
import { Title, TitleColumnChart } from "./components/atoms/title";
import ColumnChart from "./components/charts/columnchart";
import PieChart from "./components/charts/piechart";
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";
import {
  useAttendance,
  useAttendanceDaily,
  useAttendancePerShift,
  useSummaryCard,
  useTodayOnDuty,
} from "./hooks/data-source";

function App() {
  const { title: title1, series: pieChart1 } = useTodayOnDuty();
  const { title: title2, series: pieChart2 } = useAttendance();

  const { feedActivity, patroli, nonSchedule, nonGeoFence } = useSummaryCard();

  const { categories: categories1, series: series1 } = useAttendanceDaily();
  const { categories: categories2, series: series2 } = useAttendancePerShift();

  const pieOptions1 = {
    datas: {
      data: pieChart1,
    },
    total: title1,
    height: 250,
  };
  const pieOptions2 = {
    datas: {
      data: pieChart2,
    },
    total: title2,
    height: 250,
  };

  const attendanceDailyOptions = {
    xAxis: [
      {
        title: "",
        categories: categories1,
        crosshair: true,
      },
    ],
    stacking: true,
    series: series1,
  };

  const attendancePerShiftOptions = {
    xAxis: [
      {
        title: "",
        categories: categories2,
        crosshair: true,
      },
    ],
    stacking: true,
    series: series2,
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <main className="bg-[#f0f1f2] min-h-dvh p-6">
            <div className="grid grid-cols-7 gap-x-4">
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <Card>
                  <Title title="On Duty" />
                  <PieChart data={pieOptions1} />
                </Card>
                <Card>
                  <Title title="Attendance" />
                  <PieChart data={pieOptions2} />
                </Card>

                <Card>
                  <Title title="Feed / Activity" />
                  <CardSummary
                    value={feedActivity["Total feed"]}
                    unit={`Of ${feedActivity["Total person"]} Person`}
                  />
                </Card>

                <Card>
                  <Title title="Patroli" />
                  <CardSummary value={patroli["Total Patrol"]} unit="Person" />
                </Card>

                <Card>
                  <Title title="Non Schedule" />
                  <CardSummary
                    value={nonSchedule["Total person"]}
                    unit="Person"
                  />
                </Card>

                <Card>
                  <Title title="Non Geofence" />
                  <CardSummary
                    value={nonGeoFence["Total person"]}
                    unit="Person"
                  />
                </Card>
              </div>
              <div className="col-span-5 flex flex-col gap-y-4">
                <Card>
                  <TitleColumnChart title="Attendance Daily" />
                  <div className="mt-4">
                    <ColumnChart data={attendanceDailyOptions} />
                  </div>
                </Card>
                <Card>
                  <TitleColumnChart title="Attendance - Per Shift" />
                  <div className="mt-4">
                    <ColumnChart data={attendancePerShiftOptions} />
                  </div>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
