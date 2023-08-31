# A repro for jest inline snapshot bug

Jest inline snapshots write template literals, and therefore expect to read back only template literals. However, if the code in question is controlled by other tooling such as eslint with its `quotes` rule, that written template literal could've been rewritten as a string literal. Thus following runs will append a new template literal instead of replacing/overwriting the existing string literal as desired.
