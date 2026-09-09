import React, { useState } from 'react';

export interface QrCodeProps {
  /** Flex direction of the outer wrapper. Default: `column`. */
  FlexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /** `justify-content` of the outer wrapper. Default: `center`. */
  JustifyContent?: string;
  /** Background color of the outer wrapper. Default: `#e6e6e6`. */
  BgColor?: string;
  /** Border radius (px) of the outer wrapper. Default: `20`. */
  BorderRadius?: number;
  /** Background color of the text input. Default: `#cecdcd`. */
  InputBgColor?: string;
  /** Border radius (px) of the text input. Default: `10`. */
  InputBorderRadius?: number;
  /** Height (px) of the text input. Default: `35`. */
  InputHeight?: number;
  /** Width (px) of the text input. Default: `150`. */
  InputWidth?: number;
  /** Margin (px) of the text input. Default: `3`. */
  InputMargin?: number;
  /** Placeholder text of the input. Default: `Put the qr code here!`. */
  InputText?: string;
  /** Background color of the generate button. Default: `#cecdcd`. */
  ButtonBgColor?: string;
  /** Border radius (px) of the generate button. Default: `50`. */
  ButtonBorderRadius?: number;
  /** Height (px) of the generate button. Default: `50`. */
  ButtonHeight?: number;
  /** Width (px) of the generate button. Default: `100`. */
  ButtonWidth?: number;
  /** Margin (px) of the generate button. Default: `30`. */
  ButtonMargin?: number;
  /** Label of the generate button. Default: `Generate`. */
  ButtonText?: string;
  /** Initial QR code image to render before the user generates one. */
  Src?: string;
  /** Bottom margin (px) of the generated image. Default: `10`. */
  ImgMarginBottom?: number;
}

export function QrCode(props: QrCodeProps) {
  const [value, setValue] = useState('');
  const [qrCodeSrc, setQrCodeSrc] = useState(props.Src || '');
  const [visibleImg, setVisibleImg] = useState(Boolean(props.Src));

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function generate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedValue = value.trim();
    if (!trimmedValue) {
      return;
    }

    setQrCodeSrc(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
        trimmedValue
      )}`
    );
    setVisibleImg(true);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: props.FlexDirection || 'column',
        justifyContent: props.JustifyContent || 'center',
        backgroundColor: props.BgColor || '#e6e6e6',
        borderRadius: props.BorderRadius || 20,
      }}
    >
      <form onSubmit={generate}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <input
            value={value}
            onChange={onChange}
            style={{
              backgroundColor: props.InputBgColor || '#cecdcd',
              border: 'none',
              borderRadius: props.InputBorderRadius || 10,
              height: props.InputHeight || 35,
              width: props.InputWidth || 150,
              margin: props.InputMargin || 3,
            }}
            placeholder={props.InputText || 'Put the qr code here!'}
          />
          <button
            type="submit"
            style={{
              backgroundColor: props.ButtonBgColor || '#cecdcd',
              border: 'none',
              borderRadius: props.ButtonBorderRadius || 50,
              height: props.ButtonHeight || 50,
              width: props.ButtonWidth || 100,
              margin: props.ButtonMargin || 30,
            }}
          >
            {props.ButtonText || 'Generate'}
          </button>
        </div>
      </form>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {visibleImg && (
          <img
            id="qrCode"
            src={qrCodeSrc}
            alt="QR Code"
            style={{ marginBottom: props.ImgMarginBottom || 10 }}
          />
        )}
      </div>
    </div>
  );
}

export default QrCode;
