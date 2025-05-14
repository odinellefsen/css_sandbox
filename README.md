# Enterprise TailwindCSS Best Practices

This project demonstrates best practices for using TailwindCSS in an enterprise-level application.

## Key Principles

### 1. Design System Implementation

- **Consistent Color System**: Use semantic color naming with a full range of shades
- **Spacing Scale**: Maintain a consistent spacing scale throughout the application
- **Typography System**: Define a clear typographic hierarchy
- **Component Patterns**: Build reusable component patterns with consistent styling

### 2. Organization

- **CSS Variables**: Use CSS custom properties for theming and maintaining consistency
- **Component-Driven**: Organize styles by component, not by page
- **Utility-First**: Embrace Tailwind's utility-first approach while creating abstractions when needed

### 3. Maintainability

- **Consistent Class Order**: Follow a consistent order for class names (layout → typography → visual)
- **Extract Components**: Create reusable components for common patterns
- **Avoid !important**: Never use `!important` or overrides; customize through Tailwind config
- **Dark Mode Support**: Use `dark:` variants consistently

### 4. Performance

- **Purge Unused CSS**: Ensure proper content configuration for production builds
- **Minimize Custom CSS**: Leverage existing utilities before writing custom CSS
- **JIT Mode**: Use Tailwind's JIT compiler for optimal production builds

## Component Architecture

Our component architecture follows these patterns:

1. **Base Components**: Low-level UI elements (Button, Input, Card)
2. **Composite Components**: Combinations of base components (Forms, DataTables)
3. **Page Sections**: Larger page areas composed of multiple components
4. **Layouts**: Page-level layout components and containers

## Class Name Organization

For better maintainability, we organize Tailwind classes in this order:

1. Layout (position, display, width, height)
2. Spacing (margin, padding)
3. Typography (font, text)
4. Visual (colors, backgrounds, borders)
5. Interactive (hover, focus)
6. Responsive variants

Example:
```jsx
<div 
  className="
    flex items-center justify-between w-full  /* Layout */
    p-4 mt-6                                 /* Spacing */
    text-sm font-medium                      /* Typography */
    bg-white border rounded-lg shadow-sm     /* Visual */
    hover:bg-gray-50                         /* Interactive */
    sm:text-base md:p-6                      /* Responsive */
  "
>
  ...
</div>
```

## Utility Abstractions

When patterns repeat consistently, we extract them to:

1. **Component Variants**: Using tools like `class-variance-authority`
2. **Custom Components**: For specialized UI elements
3. **@apply in CSS Layers**: For global patterns that appear across components

## Getting Started

```bash
npm install
npm run dev
```

## Learn More

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
