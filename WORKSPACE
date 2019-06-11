workspace(name = "bazel_monorepo_react")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.31.1/rules_nodejs-0.31.1.tar.gz"],
    sha256 = "71867bb432496d6d54ccece234403fd1784b95f409492511236607c5190d3d4e",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "npm_install")

npm_install(
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.lock",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")
install_bazel_dependencies()

load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")

ts_setup_workspace()