# @fathym/e2e-sample-workbench-mcp-custom

Test fixture for OpenX e2e. Not for use.

A workbench that declares exactly two modes: the built-in `MCP` on port 4967 and a test-only custom `E2ECustom` on port 4970, which answers `/health`. The OpenX e2e journey `add-mode-lists-exactly-mcp-and-custom` reads that the workbench inspector's "Add mode" list offers exactly these two.

The version is pinned by the journey and never moves.
