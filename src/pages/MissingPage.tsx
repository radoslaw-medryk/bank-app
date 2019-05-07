import * as React from "react";
import { PageProps } from "./PageProps";
import { PageBox } from "./PageBox";
import { styled } from "linaria/react";
import { Section } from "src/components/Section";
import { Icon } from "src/components/Icon";
import { MobileMenuContainer } from "src/containers/MobileMenuContainer";

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
    margin: 35px 0 0;
    color: var(--gray1);
    font-size: 18px;
    font-weight: 600;
    text-align: center;
`;

export const MissingPage: React.SFC<PageProps> = ({}) => {
    return (
        <PageBox>
            <Section>
                <IconBox>
                    <Icon type="Wip" />
                </IconBox>
                <TitleBox>Work in progress!</TitleBox>
                <DescriptionBox>This page is still under development.</DescriptionBox>
            </Section>
            <MobileMenuContainer />
        </PageBox>
    );
};
