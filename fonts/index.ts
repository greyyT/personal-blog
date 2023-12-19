import localFont from 'next/font/local';

export const fontSanFrancisco = localFont({
  src: [
    {
      path: './SFProDisplay-Bold.otf',
      style: 'normal',
      weight: '700',
    },
    {
      path: './SFProDisplay-Semibold.otf',
      style: 'normal',
      weight: '600',
    },
    {
      path: './SFProDisplay-Medium.otf',
      style: 'normal',
      weight: '500',
    },
    {
      path: './SFProText-Regular.otf',
      style: 'normal',
      weight: '400',
    },
    {
      path: './SFProText-Light.otf',
      style: 'normal',
      weight: '300',
    },
  ],
  variable: '--font-san-francisco',
});
