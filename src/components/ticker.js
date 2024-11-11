
import React, { useEffect, useRef } from 'react';

function TickerTape({data}) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure the script is added only once
    if (containerRef.current && containerRef.current.childElementCount === 0) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        // symbols: [
        //   { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        //   { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
        //   { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        //   { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        //   { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
        // ],
        symbol:data,
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: "adaptive",
        colorTheme: "light",
        locale: "en",
      });

      containerRef.current.appendChild(script);
    }
  }, []);
  return (
   
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget" ref={containerRef}></div>
      </div>

  );
}

export default TickerTape;
