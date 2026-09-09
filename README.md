# q-coder

Um componente React simples e sem necessidade de configuração que renderiza
um campo de texto e um botão para gerar um QR code na hora (usando a API
gratuita [goQR.me](https://goqr.me/api/)). Totalmente estilizável via props,
sem precisar de arquivos CSS.

## Instalação

```bash
npm install @devmarcell/q-coder
# ou
yarn add @devmarcell/q-coder
```

`react` (>=16) é uma peer dependency e precisa já estar instalado no seu projeto.

## Uso

```tsx
import React from 'react';
import { QrCode } from '@devmarcell/q-coder';

function App() {
  return <QrCode />;
}
```

O usuário digita qualquer texto ou URL no campo, clica em **Generate** (ou
aperta Enter), e o componente renderiza a imagem do QR code gerado logo abaixo.

`QrCode` está disponível tanto como export nomeado quanto como export padrão:

```tsx
import { QrCode } from '@devmarcell/q-coder';
// ou
import QrCode from '@devmarcell/q-coder';
```

### Estilização customizada

Todas as props são opcionais e possuem valores padrão.

```tsx
<QrCode
  BgColor="#1f2937"
  BorderRadius={16}
  InputBgColor="#374151"
  InputText="Digite uma URL ou texto..."
  ButtonBgColor="#2563eb"
  ButtonText="Criar QR Code"
/>
```

### Pré-carregando um QR code

Passe `Src` para renderizar uma imagem assim que o componente for montado,
antes mesmo do usuário gerar uma:

```tsx
<QrCode Src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=hello" />
```

Uma demonstração completa e funcional está disponível em
[`example/`](./example) — veja como executá-la abaixo.

## Props

| Prop | Tipo | Padrão | Descrição |
| :--- | :--- | :--- | :--- |
| `FlexDirection` | `'row' \| 'column' \| 'row-reverse' \| 'column-reverse'` | `'column'` | Direção do flex do container externo |
| `JustifyContent` | `string` | `'center'` | `justify-content` do container externo |
| `BgColor` | `string` | `'#e6e6e6'` | Cor de fundo do container externo |
| `BorderRadius` | `number` | `20` | Raio da borda (px) do container externo |
| `InputBgColor` | `string` | `'#cecdcd'` | Cor de fundo do campo de texto |
| `InputBorderRadius` | `number` | `10` | Raio da borda (px) do campo de texto |
| `InputHeight` | `number` | `35` | Altura (px) do campo de texto |
| `InputWidth` | `number` | `150` | Largura (px) do campo de texto |
| `InputMargin` | `number` | `3` | Margem (px) do campo de texto |
| `InputText` | `string` | `'Put the qr code here!'` | Texto de placeholder do campo |
| `ButtonBgColor` | `string` | `'#cecdcd'` | Cor de fundo do botão de gerar |
| `ButtonBorderRadius` | `number` | `50` | Raio da borda (px) do botão de gerar |
| `ButtonHeight` | `number` | `50` | Altura (px) do botão de gerar |
| `ButtonWidth` | `number` | `100` | Largura (px) do botão de gerar |
| `ButtonMargin` | `number` | `30` | Margem (px) do botão de gerar |
| `ButtonText` | `string` | `'Generate'` | Texto do botão de gerar |
| `Src` | `string` | _(nenhum)_ | QR code inicial, exibido antes do usuário gerar um |
| `ImgMarginBottom` | `number` | `10` | Margem inferior (px) da imagem gerada |

## Rodando o exemplo localmente

O exemplo em [`example/`](./example) usa [Vite](https://vitejs.dev) e importa
o componente diretamente de `../src`, então não é necessário instalar
`@devmarcell/q-coder` publicado — ele sempre usa o código-fonte local.

```bash
git clone https://github.com/marcelldac/q-coder.git
cd q-coder
npm install
cd example
npm install
npm start
```

Depois abra a URL exibida no terminal (por padrão, http://localhost:5173).

## Desenvolvimento

```bash
yarn start   # tsdx watch — recompila a cada alteração
yarn test    # roda a suíte de testes
yarn build   # gera o bundle em dist/
yarn lint    # analisa o código-fonte
```

## Licença

MIT

## Autor

- [@marcelldac](https://github.com/marcelldac)
