/**
 * Test fixture for OpenX e2e. Not for use.
 *
 * A workbench that declares exactly two modes: the built-in `MCP` and a custom `E2ECustom`. The
 * OpenX e2e journey `add-mode-lists-exactly-mcp-and-custom` reads that the inspector's "Add mode"
 * list is exactly these two, and only `MCP` once `E2ECustom` is on (track 31 row D31.4.31).
 *
 * @module
 */
import {
  type Bench,
  MCPMode,
  ModeBuilder,
  Workbench,
  type WorkbenchBuilder,
} from '@fathym/fai/workbenches';

/** The port `E2ECustom` answers `/health` on. */
const CUSTOM_PORT = 4970;

/** A custom mode that only answers `/health` on its declared port. */
const E2ECustom = new ModeBuilder<void, Bench>(
  'E2ECustom',
  'Test-only custom mode: answers /health.',
)
  .Execute(() => {
    const server = Deno.serve(
      { port: CUSTOM_PORT, onListen: () => {} },
      (req) =>
        new URL(req.url).pathname === '/health'
          ? new Response('OK')
          : new Response('Not Found', { status: 404 }),
    );

    return Promise.resolve({
      Vaults: {},
      Close: async () => {
        await server.shutdown();
      },
    });
  });

const workbench: WorkbenchBuilder = Workbench(
  'e2e-sample-mcp-custom',
  'Test fixture for OpenX e2e. Not for use.',
).Modes({
  MCP: MCPMode().Ports(4967),
  E2ECustom: E2ECustom.Ports(CUSTOM_PORT),
});

export default workbench;
