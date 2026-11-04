/**
 * Test fixture for OpenX e2e. Not for use.
 *
 * A workbench whose one mode, a custom `E2ECustom`, declares `.Ports(false)`: it serves nothing.
 * The OpenX e2e journey `port-block-serves-nothing` reads that the inspector's port block says
 * "serves nothing" for it (track 31 row D31.4.38).
 *
 * @module
 */
import { type Bench, ModeBuilder, Workbench, type WorkbenchBuilder } from '@fathym/fai/workbenches';

/** A custom mode that listens on nothing and does nothing. */
const E2ECustom = new ModeBuilder<void, Bench>(
  'E2ECustom',
  'Test-only custom mode: serves nothing.',
).Execute(() => Promise.resolve({ Vaults: {}, Close: () => Promise.resolve() }));

const workbench: WorkbenchBuilder = Workbench(
  'e2e-sample-serves-nothing',
  'Test fixture for OpenX e2e. Not for use.',
).Modes({ E2ECustom: E2ECustom.Ports(false) });

export default workbench;
