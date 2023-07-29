type UseStickyOptions = {
  offsetTop?: number;
  offsetBottom?: number;
  bottom?: boolean;
};

type StickyProps = UseStickyOptions & {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
};

declare const useStickyBox: <T = any>(options?: UseStickyOptions) => React.RefCallback<T>;
declare const Sticky: React.FunctionComponent<StickyProps>;

export { Sticky as default, useStickyBox, StickyProps, UseStickyOptions };
