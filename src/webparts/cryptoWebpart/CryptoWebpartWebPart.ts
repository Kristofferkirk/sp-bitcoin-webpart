import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'CryptoWebpartWebPartStrings';
import CryptoWebpart from './components/CryptoWebpart';
import { ICryptoWebpartProps } from './components/ICryptoWebpartProps';

export interface ICryptoWebpartWebPartProps {
  description: string;
}

export default class CryptoWebpartWebPart extends BaseClientSideWebPart<ICryptoWebpartWebPartProps> {
  public render(): void {
    const element: React.ReactElement<ICryptoWebpartProps> = React.createElement(
      CryptoWebpart,
      {
        description: this.properties.description,
      }
    );

    ReactDom.render(element, this.domElement);
  }
  public componentDidMount(): void {
  }
  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');   
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
