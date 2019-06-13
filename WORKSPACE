####################################
# ESModule imports (and TypeScript imports) can be absolute starting with the workspace name.
# The name of the workspace should match the npm package where we publish, so that these
# imports also make sense when referencing the published package.
workspace(
    name = "bazel_monorepo_react",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# Fetch rules_nodejs so we can install our npm dependencies
http_archive(
    name = "build_bazel_rules_nodejs",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.31.1/rules_nodejs-0.31.1.tar.gz"],
    sha256 = "e04a82a72146bfbca2d0575947daa60fda1878c8d3a3afe868a8ec39a6b968bb",
)

# Fetch sass rules for compiling sass files
http_archive(
    name = "io_bazel_rules_sass",
    strip_prefix = "rules_sass-9a00e557c32ac0f26e5d3c66d1d17316874027b3",
    url = "https://github.com/bazelbuild/rules_sass/archive/9a00e557c32ac0f26e5d3c66d1d17316874027b3.zip",
)

# Download npm dependencies
load("@build_bazel_rules_nodejs//:defs.bzl", "npm_install")

# Setup the Node.js toolchain & install our npm dependencies into @npm
npm_install(
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.lock",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")
install_bazel_dependencies()

# Setup the typescript toolchain
load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")

ts_setup_workspace()

# Setup the rules_sass toolchain
load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")

sass_repositories()