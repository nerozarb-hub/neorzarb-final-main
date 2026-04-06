# NeoRzarb Design System

## Core Philosophy
**Sharp. Precise. No Softness.**

This brand represents precision engineering and systematic execution. Every element must reflect that through hard edges and geometric clarity.

---

## Design Rules

### 1. NO ROUNDED CORNERS
- **Never use**: `rounded`, `rounded-lg`, `rounded-full`, `rounded-xl`, `rounded-md`, `rounded-sm`
- **Always use**: Sharp 90° corners on ALL elements
- Applies to: buttons, cards, badges, inputs, images, containers, modals, dropdowns

### 2. GEOMETRIC SHAPES
- Rectangles and squares only
- No circles (except for status indicators like the pulsing dot)
- No pills, no capsules, no soft shapes

### 3. BORDER STYLE
- Use thin borders: `border border-white/10` or `border border-primary/30`
- Borders should be subtle but present
- Creates the "tech panel" aesthetic

### 4. SPACING SYSTEM
- Use consistent padding: `px-4 py-2` for small, `px-6 py-3` for medium, `px-8 py-4` for large
- Maintain grid alignment
- Generous whitespace between sections

### 5. COLOR PALETTE
- **Background**: `#030303` (near black)
- **Primary**: `#3F6A24` (forest green)
- **Primary Light**: `#5A8A3A`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#9CA3AF` (gray-400)
- **Text Muted**: `#6B7280` (gray-500)
- **Borders**: `rgba(255,255,255,0.1)`

### 6. TYPOGRAPHY
- Headlines: `font-black`, `uppercase`, tight tracking
- Body: `font-normal`, relaxed line-height
- Labels/Badges: `text-xs`, `uppercase`, `tracking-wider`

### 7. BUTTON STYLES
```
Primary Button:
- bg-primary text-white
- Sharp corners (no rounding)
- px-6 py-3
- Hover: bg-primary/90

Secondary/Ghost Button:
- bg-transparent border border-white/10
- Sharp corners
- Hover: border-primary/50
```

### 8. CARD STYLES
```
- bg-[#0a0a0a] or bg-black/50
- border border-white/10
- Sharp corners (NO rounded)
- p-6 or p-8
```

### 9. INPUT STYLES
```
- bg-black/50
- border border-white/10
- Sharp corners (NO rounded)
- Focus: border-primary
```

### 10. HOVER STATES
- Subtle color transitions
- Border color changes
- No scale transforms (keeps precision feel)
- `transition-colors duration-300`

---

## Forbidden Classes
These Tailwind classes should NEVER be used:
- `rounded-full`
- `rounded-xl`
- `rounded-lg`
- `rounded-md`
- `rounded-sm`
- `rounded`
- `rounded-t-*`
- `rounded-b-*`
- `rounded-l-*`
- `rounded-r-*`

---

## Allowed Exceptions
- Status indicator dots (the pulsing availability dot) - these can be `rounded-full` as they represent a system status light
- That's it. No other exceptions.

---

## Visual Reference
Think: Military control panels, trading terminals, aerospace interfaces, brutalist architecture
