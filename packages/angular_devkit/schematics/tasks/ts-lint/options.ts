/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export const TsLintName = 'ts-lint';

export interface TsLintTaskOptions {
  fix: boolean;
  formatter?: string;
  rulesDirectory?: string;
  formattersDirectory?: string;
}
