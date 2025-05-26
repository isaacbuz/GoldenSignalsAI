import { useState } from "react";

export default function TickerAnalysisPanel() {
  const [ticker, setTicker] = useState("AAPL");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<any>(null);

  const fetchAnalysis = async () => {
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("http://localhost:8000/api/analyze?ticker=" + ticker);
      if (!res.ok) throw new Error("API error: " + res.statusText);
      const data = await res.json();
      setResult(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-[#181c23] border-none shadow-lg">
      <CardHeader>
        <CardTitle className="text-green-400 text-xl font-semibold">Ticker Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Input
            value={ticker}
            onChange={e => setTicker(e.target.value.toUpperCase())}
            className="bg-[#232733] text-white border-gray-700"
            placeholder="Enter Ticker (e.g. AAPL)"
            maxLength={8}
          />
          <Button onClick={fetchAnalysis} disabled={loading} className="bg-green-500 hover:bg-green-600 text-white">
            {loading ? "Loading..." : "Analyze"}
          </Button>
        </div>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        {result && (
          <div className="space-y-2">
            <div className="text-lg font-bold text-white">{result.ticker}</div>
            <div className="text-gray-400">Strategy: <span className="text-white">{result.strategy}</span></div>
            <div className="text-gray-400">Confidence: <span className="text-white">{result.confidence}</span></div>
            <div className="text-gray-400">Entry: <span className="text-white">{result.entry}</span></div>
            <div className="text-gray-400">Exit: <span className="text-white">{result.exit}</span></div>
            <div className="text-gray-400">Explanation: <span className="text-white">{result.explanation}</span></div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
