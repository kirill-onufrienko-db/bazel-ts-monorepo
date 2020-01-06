import { example1, example2 } from 'test_bazel_build/test-library';

export function second_level_example() {
    const res1 = example1();
    const res2 = example2();
    return `${res1} ${res2}`;
}
