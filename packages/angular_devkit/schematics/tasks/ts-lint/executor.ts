/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Configruation, Linter } from 'tslint';
import { SchematicContext, TaskExecutor } from '../../src';
import { TsLintTaskOptions } from './options';

export default function(): TaskExecutor<TsLintTaskOptions> {
  return async (options: TsLintTaskOptions, context: SchematicContext) => {
    // context.engine.
  };
}

// export default function(): TaskExecutor<TsLintTaskOptions> {
//   return async (options: TsLintTaskOptions, context: SchematicContext) => {
//     const maybeWorkflow = context.engine.workflow;

//     if (!maybeWorkflow) {
//       throw new Error('Need Workflow to support executing ts lint as post tasks.');
//     }

//     return maybeWorkflow.execute({
//       fix: options.fix,
//       formatter: options.formatter,
//       rulesDirectory: options.rulesDirectory,
//       formattersDirectory: options.formattersDirectory,
//     });
//   };
// }
