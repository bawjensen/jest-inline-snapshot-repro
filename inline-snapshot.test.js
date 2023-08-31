test("a passing inline snapshot has no issue", () => {
  expect("expected string").toMatchInlineSnapshot('"expected string"');
});

test("a failing inline snapshot will append, not overwrite as desired", () => {
  expect("expected string").toMatchInlineSnapshot('"incorrect string"');
});
