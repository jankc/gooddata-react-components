import * as React from 'react';
import * as numeral from 'numeral';
import get = require('lodash/get');

import { Execute } from '../execution/Execute';
import { IAfm, IFilter } from '../../interfaces/Afm';
import { isNotEmptyFilter } from '../../helpers/filters';

export type URIString = string;

export interface IKpiProps {
    measure: URIString;
    projectId: string;
    filters?: IFilter[];
    format?: string;
}

export interface IKpiState {
    error: boolean;
    result: any;
    isLoading: boolean;
}

function buildAFM(measureUri: string, filters: IFilter[] = []): IAfm {
    return {
        measures: [
            {
                id: 'm1',
                definition: {
                    baseObject: {
                        id: measureUri
                    }
                }
            }
        ],

        filters: filters.filter(isNotEmptyFilter)
    };
}

function Loading() {
    return <span style={{ background: '#cacaca', color: '#cacaca' }}>⃞⃞⃞</span>;
}

export class Kpi extends React.Component<IKpiProps, IKpiState> {
    public static defaultProps: Partial<IKpiProps> = {
        format: '$0,0.00',
        filters: []
    };

    constructor(props) {
        super(props);

        this.state = {
            error: false,
            result: null,
            isLoading: true
        };

        this.onError = this.onError.bind(this);
        this.onExecute = this.onExecute.bind(this);
        this.onLoading = this.onLoading.bind(this);
    }

    public onExecute(data) {
        const result = get(data, 'rawData.0.0');

        this.setState({ result, error: false });
    }

    public onError(error) {
        console.error(error);

        this.setState({ error: true });
    }

    public onLoading(isLoading: boolean) {
        this.setState({ isLoading });
    }

    public getFormattedResult(): string {
        return numeral(this.state.result).format(this.props.format);
    }

    public render() {
        if (this.state.error) {
            return <h1>Error</h1>;
        }

        const afm = buildAFM(this.props.measure, this.props.filters);

        return (
            <Execute
                className='gdc-kpi'
                afm={afm}
                onError={this.onError}
                onExecute={this.onExecute}
                onLoading={this.onLoading}
                projectId={this.props.projectId}
            >
                {this.state.isLoading ? <Loading /> : this.getFormattedResult()}
            </Execute>
        );
    }
}