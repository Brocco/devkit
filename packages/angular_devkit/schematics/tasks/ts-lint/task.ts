/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TaskConfiguration, TaskConfigurationGenerator } from '../../src';
import { TsLintName, TsLintTaskOptions } from './options';


export class TsLintTask implements TaskConfigurationGenerator<TsLintTaskOptions> {
  constructor(
    protected _collection: string,
    protected _schematic: string,
    protected _options: object,
  ) {}

  toConfiguration(): TaskConfiguration<TsLintTaskOptions> {
    return {
      name: TsLintName,
      options: {
        collection: this._collection,
        name: this._schematic,
        options: this._options,
      },
    };
  }
}
