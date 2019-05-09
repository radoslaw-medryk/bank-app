import * as React from "react";

const maxMobileWidth = 600;

const isMobileWidth = (width: number) => {
    return width <= maxMobileWidth;
};

export type MobileDetectorInnerProps = {
    onWidthChanged?: (width: number) => void;
};

const MobileDetectorInner: React.SFC<MobileDetectorInnerProps> = ({ onWidthChanged }) => {
    React.useEffect(() => {
        onWidthChanged && onWidthChanged(window.innerWidth);
    }, []);

    React.useEffect(() => {
        const onResize = () => {
            onWidthChanged && onWidthChanged(window.innerWidth);
        };

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, [onWidthChanged]);

    return null;
};

export type MobileDetectorProps = {
    onIsMobileChanged?: (isMobile: boolean) => void;
};

export const MobileDetector: React.SFC<MobileDetectorProps> = ({ onIsMobileChanged }) => {
    const [isMobile, setIsMobile] = React.useState(isMobileWidth(window.innerWidth));

    React.useEffect(() => {
        onIsMobileChanged && onIsMobileChanged(isMobile);
    }, []);

    const onWidthChanged = (width: number) => {
        const newIsMobile = isMobileWidth(width);
        if (newIsMobile !== isMobile) {
            setIsMobile(newIsMobile);
            onIsMobileChanged && onIsMobileChanged(newIsMobile);
        }
    };

    return <MobileDetectorInner onWidthChanged={onWidthChanged} />;
};
