# OpenX e2e sample workbenches

Test fixture for OpenX e2e. Not for use.

Three tiny workbench packages, each showing one thing the OpenX workbench inspector must handle. Each is published to JSR once, at an exact version the e2e journeys pin.

| Package                                       | What it declares                                             | The journey that reads it               |
| --------------------------------------------- | ------------------------------------------------------------ | --------------------------------------- |
| `@fathym/e2e-sample-workbench-mcp-custom`     | `MCP` `.Ports(4967)` and a custom `E2ECustom` `.Ports(4970)` | `add-mode-lists-exactly-mcp-and-custom` |
| `@fathym/e2e-sample-workbench-serves-nothing` | a custom `E2ECustom` `.Ports(false)`                         | `port-block-serves-nothing`             |
| `@fathym/e2e-sample-workbench-no-port`        | `Web` with no `.Ports(...)`                                  | `no-port-save-error-names-the-mode`     |

`deno task build` formats, lints and type-checks all three. `deno publish` from this folder publishes all three (a Deno workspace); a version already on JSR is skipped.

## Branches and publishing

Work lands on `integration` by pull request, and `integration` is merged to `main` by pull request. Every branch push and pull request runs `deno task build` and `deno publish --dry-run`. Only a push to `main` runs `deno publish`, so the three packages go out at the exact `0.0.1` the e2e journeys pin. This repo does not use `fathym/build-n-publish`: that action computes a version from the commit history and would break the pin.
