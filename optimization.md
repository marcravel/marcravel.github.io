# Portfolio Codebase Audit, Cleanup & Optimization

Act as a senior Astro developer and software architect. Your task is to perform a comprehensive audit, cleanup, refactoring, and optimization of this portfolio project.

The goal is to bring the codebase to a clean, maintainable, efficient, production-ready state without compromising the existing functionality, visual identity, or user experience.

## 1. Establish the Source of Truth

Before modifying anything:

1. Read the root `README.md` to understand the project's architecture, purpose, features, and conventions.
2. Read `DESIGN.md` thoroughly. It contains the already-implemented design system and must be treated as the authoritative visual reference.
3. Inspect `package.json`, Astro configuration, TypeScript configuration, project structure, dependencies, and existing scripts.
4. Understand how pages, layouts, components, styles, assets, and project data interact.
5. Inspect the current Git branch and working tree. Preserve existing user changes and do not overwrite unrelated work.

**Important design constraint:**
The current design is intentional and already implemented. This task is NOT a redesign.

Preserve:
- Existing visual identity and design language.
- Typography, colors, spacing, proportions, and layout.
- Responsive behavior across mobile, tablet, and desktop.
- Existing animations, transitions, and interactions.
- Component appearance and page composition.

Use `DESIGN.md` as the primary design reference whenever making UI-related decisions.

## 2. Comprehensive Codebase Audit

Inspect the entire codebase, not just the most visible files.

Identify and investigate:

- Unused, obsolete, unreachable, or redundant code.
- Duplicate components, functions, utilities, and styles.
- Conflicting CSS rules, selectors, and design tokens.
- Repeated logic that should be centralized.
- Dead imports, unused variables, and unnecessary dependencies.
- Unnecessary abstractions and overly complicated implementations.
- Inconsistent naming conventions and file organization.
- Incorrect TypeScript types, unnecessary `any` usage, and unsafe type assertions.
- Astro-specific anti-patterns and unnecessary client-side JavaScript.
- Broken references, missing assets, invalid paths, and incorrect imports.
- Potential memory, rendering, and performance inefficiencies.
- Accessibility issues and semantic HTML problems.
- SEO, metadata, and document-structure inconsistencies.
- Security concerns, exposed secrets, and unsafe handling of external content.

Do not assume that code is redundant simply because it appears unused in one file. Trace its references and understand its role before removing it.

## 3. Resolve Conflicts and Duplication

Investigate overlapping implementations and resolve them systematically.

Examples include:

- Multiple components performing the same responsibility.
- Different CSS implementations targeting the same elements.
- Duplicate utility functions.
- Conflicting global and component-level styles.
- Multiple sources of truth for the same configuration.
- Repeated hardcoded values that should use existing design tokens.
- Inconsistent data structures and interfaces.
- Outdated implementations that coexist with newer ones.

Where duplication exists:

1. Determine which implementation is the most appropriate.
2. Consolidate functionality where doing so improves maintainability.
3. Preserve all required behavior.
4. Remove obsolete implementations only after verifying they are no longer needed.
5. Update every affected reference.

Do not introduce unnecessary abstractions just to reduce line counts.

## 4. Astro-Specific Optimization

Follow Astro best practices.

Pay particular attention to:

- Prefer Astro components and static rendering where interactivity is unnecessary.
- Avoid unnecessary React, Vue, or other framework hydration.
- Use the appropriate Astro rendering and client directive strategies.
- Minimize shipped JavaScript.
- Optimize image delivery, dimensions, formats, and loading behavior.
- Prevent layout shifts.
- Use appropriate font loading strategies.
- Avoid unnecessary dependencies and runtime overhead.
- Keep data-driven content separate from presentation.
- Use reusable components when they provide genuine architectural value.
- Maintain clean separation between layouts, components, pages, data, and utilities.

Do not introduce a framework or library unless there is a clear technical justification.

## 5. Universal Engineering Standards

Apply these standards consistently throughout the project:

**Architecture**
- Single responsibility for components and modules.
- Clear separation of concerns.
- Reusable code without excessive abstraction.
- Consistent naming and predictable file organization.
- A single source of truth for shared configuration and data.

**Code quality**
- Readable, maintainable, self-explanatory code.
- Explicit and accurate TypeScript types.
- No unnecessary complexity.
- No unexplained magic numbers or duplicated constants.
- Remove commented-out legacy code when confirmed obsolete.
- Avoid excessive comments; document non-obvious decisions.

**CSS and design**
- Respect `DESIGN.md`.
- Reuse existing design tokens and variables.
- Avoid conflicting overrides and specificity hacks.
- Remove obsolete styles.
- Maintain responsive layouts.
- Avoid introducing arbitrary values when an existing token is appropriate.

**Accessibility**
- Semantic HTML.
- Keyboard accessibility.
- Appropriate ARIA attributes when necessary.
- Visible focus states.
- Sufficient color contrast.
- Descriptive alternative text for meaningful images.

**Performance**
- Minimize unnecessary JavaScript and CSS.
- Optimize assets.
- Avoid unnecessary network requests.
- Prevent avoidable layout shifts and rendering bottlenecks.
- Preserve fast initial loading and navigation.

## 6. Dependencies and Configuration

Audit `package.json` and the configuration files.

- Identify unused dependencies.
- Identify duplicated or unnecessary packages.
- Check for outdated or incompatible packages.
- Remove dependencies only after verifying they are genuinely unnecessary.
- Avoid upgrading everything indiscriminately.
- Preserve compatible dependency versions unless an upgrade solves a concrete problem.
- Review build scripts and configuration for unnecessary complexity.
- Check for accidental environment-specific assumptions.

Never remove a dependency simply because its usage is not immediately obvious. Verify its role first.

## 7. Data Integrity and Portfolio Content

Inspect all data-driven sections, especially project definitions and shared content.

- Identify duplicate project entries.
- Validate required fields and data structures.
- Check image paths and external links.
- Ensure consistent metadata.
- Identify unused fields and outdated content.
- Preserve the distinction between project visibility and project development status.
- Ensure active development indicators and other project metadata continue working correctly.

Do not invent, rewrite, or remove factual portfolio achievements, technical specifications, project descriptions, or experience details.

Preserve existing content unless there is a demonstrable technical error or duplication.

## 8. Testing and Verification

After each logical group of changes, verify the project.

Run the available checks, including:

1. TypeScript checks.
2. Astro diagnostics or equivalent checks.
3. Production build.
4. Linting, if configured.
5. Tests, if available.
6. Broken import and asset reference checks.

Additionally:

- Check every page and major component.
- Verify responsive behavior.
- Verify navigation and interactive elements.
- Check browser console errors.
- Confirm that all project cards and data-driven sections render correctly.
- Check for unintended visual regressions against the existing design.

Do not declare the project clean merely because the build succeeds.

If browser testing is available, inspect the actual rendered website at desktop and mobile breakpoints.

## 9. Execution Strategy

Work systematically rather than making indiscriminate changes.

**Phase 1 — Audit**
Inspect the entire project and identify problems. Establish the existing architecture and dependencies.

**Phase 2 — Prioritize**
Classify findings by severity:

- Critical: broken functionality, security issues, build failures.
- High: architectural conflicts, duplicated implementations, significant performance problems.
- Medium: maintainability, typing, accessibility, and consistency issues.
- Low: minor cleanup and cosmetic code improvements.

**Phase 3 — Refactor**
Resolve confirmed issues, consolidate duplication, remove dead code, and improve architecture.

**Phase 4 — Optimize**
Improve Astro implementation, asset handling, rendering, dependencies, and performance.

**Phase 5 — Verify**
Run checks and validate that existing functionality and visual design remain intact.

**Phase 6 — Report**
Provide a clear summary of the work performed.

## 10. Strict Constraints

- Do not redesign the website.
- Do not replace the existing design system.
- Do not arbitrarily change the visual appearance.
- Do not delete files without checking their dependencies and references.
- Do not remove functional features to simplify the codebase.
- Do not introduce unnecessary dependencies.
- Do not rewrite working code merely to impose personal coding preferences.
- Do not modify unrelated project files.
- Do not overwrite existing user changes.
- Do not create speculative features.
- Do not hide errors by disabling checks or weakening TypeScript configuration.
- Do not claim that something was tested unless it was actually tested.

When an issue cannot be resolved confidently without changing intended behavior, document it instead of making an assumption.

You are authorized to make safe, technically justified cleanup and refactoring changes. For destructive, ambiguous, or potentially behavior-changing decisions, stop and report the issue before proceeding.

## 11. Final Deliverable

At completion, provide a structured report containing:

1. **Audit findings:** Problems discovered and their severity.
2. **Files modified:** Important files changed and why.
3. **Files deleted:** Removed files and evidence that they were unnecessary.
4. **Duplicates and conflicts:** What was consolidated or resolved.
5. **Architecture improvements:** Changes to maintainability and code organization.
6. **Performance improvements:** Concrete optimizations made.
7. **Dependency changes:** Packages added, removed, or updated, with justification.
8. **Verification results:** Actual build, type-check, lint, and test results.
9. **Remaining issues:** Anything unresolved and why.
10. **Overall assessment:** Whether the project is now clean, maintainable, and production-ready.

For every significant improvement, explain the technical reason rather than simply listing the change.

**Final objective:** Deliver a clean, optimized, maintainable Astro portfolio codebase that follows sound engineering practices while preserving the already-implemented `DESIGN.md` visual system and every intended portfolio feature.