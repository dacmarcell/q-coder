import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { QrCode } from '../src';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 40,
        padding: 40,
        fontFamily: 'sans-serif',
      }}
    >
      <h1>q-coder examples</h1>

      <section>
        <h2>Default</h2>
        <QrCode />
      </section>

      <section>
        <h2>Custom colors and text</h2>
        <QrCode
          BgColor="#1f2937"
          BorderRadius={16}
          InputBgColor="#374151"
          InputText="Type a URL or text..."
          ButtonBgColor="#2563eb"
          ButtonText="Create QR Code"
        />
      </section>

      <section>
        <h2>Row layout with a pre-loaded QR code</h2>
        <QrCode
          FlexDirection="row"
          JustifyContent="space-between"
          Src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=q-coder"
        />
      </section>
    </div>
  );
};

const container = document.getElementById('root') as HTMLElement;
createRoot(container).render(<App />);
