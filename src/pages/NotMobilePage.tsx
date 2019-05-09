import * as React from "react";
import { PageProps } from "./PageProps";
import { PageBox } from "./PageBox";
import { styled } from "linaria/react";
import { Section } from "src/components/Section";
import { Icon } from "src/components/Icon";
import { Button } from "src/components/Button";
import { MobileDetector } from "src/components/MobileDetector";

const IconBox = styled.div`
    margin: 150px 0 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    & > svg {
        fill: var(--gray1);
    }
`;

const TitleBox = styled.p`
    margin: 10px 0 0;
    color: var(--gray1);
    font-size: 18px;
    font-weight: 600;
    text-align: center;
`;

const DescriptionBox = styled.p`
    margin: 35px auto 0;
    color: var(--gray1);
    text-align: center;
    font-size: 18px;
    font-weight: 600;
`;

const ButtonBox = styled.div`
    margin: 10px auto 0;
    max-width: 320px;
`;

export const NotMobilePage: React.SFC<PageProps> = ({ history }) => {
    const [isMobile, setIsMobile] = React.useState(true);

    const onReloadClick = () => {
        history.push("/");
    };

    return (
        <PageBox>
            <MobileDetector onIsMobileChanged={setIsMobile} />
            <Section>
                <IconBox>
                    <Icon type="Mobile" />
                </IconBox>
                <TitleBox>Only for mobile!</TitleBox>
                {isMobile ? (
                    <ButtonBox>
                        <Button onClick={onReloadClick}>Reload</Button>
                    </ButtonBox>
                ) : (
                    <DescriptionBox>
                        This application is designed for mobile devices. While desktop-friendly UI is planned for the
                        future, for now please resize your browser window to a smaller size to view the app, or open
                        this page on a mobile device.
                    </DescriptionBox>
                )}
            </Section>
        </PageBox>
    );
};
