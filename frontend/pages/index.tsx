import DashboardLayout from "@/components/DashboardLayout";
import TickerAnalysisPanel from "@/components/TickerAnalysisPanel";
import ChartPanel from "@/components/ChartPanel_with_Markers";

export default function Home() {
  // Demo data for the chart panel
  const dummyPrices = [
    { time: 1717324800, value: 148 },
    { time: 1717411200, value: 150 },
    { time: 1717497600, value: 151 },
  ];
  const entry = { time: 1717411200 };
  const exit = { time: 1717497600 };
  const forecast = [
    { time: 1717584000, value: 153 },
    { time: 1717670400, value: 156 },
  ];

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TickerAnalysisPanel />
        <ChartPanel
          prices={dummyPrices}
          entryPoint={entry}
          exitPoint={exit}
          forecastTrend={forecast}
        />
      </div>
    </DashboardLayout>
  );
}
