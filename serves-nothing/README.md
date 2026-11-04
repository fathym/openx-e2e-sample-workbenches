# @fathym/e2e-sample-workbench-serves-nothing

Test fixture for OpenX e2e. Not for use.

A workbench whose one mode, a test-only custom `E2ECustom`, declares `.Ports(false)`: it serves nothing. The OpenX e2e journey `port-block-serves-nothing` reads that the workbench inspector's port block says "serves nothing" for it.

The version is pinned by the journey and never moves.
