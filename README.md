# A repro for jest inline snapshot bug

Jest inline snapshots write template literals, and therefore expect to read back only template literals. However, if the code in question is controlled by other tooling such as eslint with its `quotes` rule, that written template literal could've been rewritten as a string literal. Thus following runs will append a new template literal instead of replacing/overwriting the existing string literal as desired.

## To repro

Run `pnpm jest inline-snapshot.test.js --updateSnapshot` (you may need to supply `--prettierPath ''` to avoid errors) and observe that `inline-snapshot.js` has been updated incorrectly:

```diff
 test("a failing inline snapshot will append, not overwrite as desired", () => {
-  expect("expected string").toMatchInlineSnapshot('"incorrect string"');
+  expect("expected string").toMatchInlineSnapshot('"incorrect string"', `"expected string"`);
 });
```
