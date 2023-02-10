import React, { PureComponent } from 'react';
interface StickyProps {
    children: React.ReactNode | ((isSticky: boolean) => React.ReactNode);
    offsetTop: number;
    containerSelectorFocus: string;
    zIndex: number;
    stickyEnableRange: number[];
    onChange: (isSticky: boolean) => void;
}
interface StickyState {
    isEnableSticky: boolean;
    targetHeight: number;
    innerPosition: string;
    containerMeasure: Partial<DOMRect>;
    isLong: boolean;
    innerTop: number;
}
declare type StickyDefaultProps = Pick<StickyProps, 'offsetTop' | 'containerSelectorFocus' | 'zIndex' | 'stickyEnableRange' | 'onChange'>;
declare class Sticky extends PureComponent<StickyProps, StickyState> {
    private $container;
    private $inner;
    private prevScrollY;
    private isPrevSticky?;
    static defaultProps: StickyDefaultProps;
    state: StickyState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private getContainerSelectorFocus;
    private handleWindowResize;
    private handleWindowScroll;
    private checkWrapBottom;
    private handleLong;
    private getInnerTop;
    private getInnerOffsetTop;
    private getContainerOffsetTop;
    private getContainerSelectorFocusOffsetTop;
    private getContainerSelectorFocusOffsetBottom;
    private getInnerPositionTop;
    private handleLongScrollUp;
    private setInnerPositionFixedTop;
    private handleLongScrollDown;
    private getShortPosition;
    private handleShort;
    private getInnerStyle;
    private getContainerStyle;
    private checkSticky;
    private setContainerRef;
    private setInnerRef;
    private renderHackGetHeightWhenInnerContentMargin;
    private renderChildren;
    render(): JSX.Element;
}
export default Sticky;
