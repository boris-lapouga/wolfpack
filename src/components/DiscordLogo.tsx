import Image, { ImageProps } from 'next/image';

type SvgImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  width: number;
  height: number;
};

export const DiscordLogo = ({ width, height, ...props }: SvgImageProps) => {
  return (
    <Image
      src="/images/discord-logo.svg"
      alt=""
      width={width}
      height={height}
      {...props}
    />
  );
};
