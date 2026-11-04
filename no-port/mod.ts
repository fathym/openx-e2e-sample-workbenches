/**
 * Test fixture for OpenX e2e. Not for use.
 *
 * A workbench whose one mode, the built-in `Web`, declares no `.Ports(...)` at all, on purpose.
 * OpenX refuses to save it, naming `Web` and where to fix it; the OpenX e2e journey
 * `no-port-save-error-names-the-mode` reads that refusal (track 31 row D31.4.38).
 *
 * @module
 */
import { WebMode, Workbench, type WorkbenchBuilder } from '@fathym/fai/workbenches';

const workbench: WorkbenchBuilder = Workbench(
  'e2e-sample-no-port',
  'Test fixture for OpenX e2e. Not for use.',
).Modes({ Web: WebMode({ handler: () => new Response('Test fixture for OpenX e2e.') }) });

export default workbench;
