import * as React from 'react';

export interface ILayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<ILayoutProps, {}> {
    public render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
