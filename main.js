import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
 
// These functions will inject the Vercel analytics and speed insights scripts
// into the <head> of your document.
// Call them once, ideally right after your page loads.
inject();
injectSpeedInsights();

console.log("Vercel Analytics and Speed Insights have been injected.");