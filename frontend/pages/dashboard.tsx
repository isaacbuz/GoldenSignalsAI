import DashboardLayout from "@/components/DashboardLayout";
import TickerAnalysisPanel from "@/components/TickerAnalysisPanel";
import ChartPanel from "@/components/ChartPanel_with_Markers";

export default function DashboardPage() {
  // Dummy data for demonstration; replace with real data as needed
  const dummyPrices = [
    { time: 1717324800, value: 148 },
    { time: 1717411200, value: 150 },
    { time: 1717497600, value: 151 },
  ];

  const entry = { time: 1717411200 };  // mid
  const exit = { time: 1717497600 };   // latest
  const forecast = [
    { time: 1717584000, value: 153 },
    { time: 1717670400, value: 156 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
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
