import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"

export function App() {
  return (
    <>
        <SpeedInsights />
        <Analytics />
    </>
  );
}

export default App;