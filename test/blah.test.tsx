import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { QrCode } from '../src';

describe('QrCode', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<QrCode />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the initial Src image when provided', () => {
    const div = document.createElement('div');
    ReactDOM.render(<QrCode Src="https://example.com/qr.png" />, div);
    const img = div.querySelector('#qrCode') as HTMLImageElement;
    expect(img).not.toBeNull();
    expect(img.src).toBe('https://example.com/qr.png');
    ReactDOM.unmountComponentAtNode(div);
  });
});
