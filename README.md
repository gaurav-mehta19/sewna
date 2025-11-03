# SEWNA - Connecting Fashion Visionaries

🔗 **Live Demo**: [https://sewna-eight.vercel.app/](https://sewna-eight.vercel.app/)

SEWNA is a platform that bridges the gap between independent fashion designers and clients seeking custom, handcrafted outfits. This project reimagines the user experience with a focus on clarity, warmth, and creative expression.

---

## 📋 Project Overview

This submission addresses the SEWNA platform enhancement assignment with:

### Task 1: Reimagined Welcome Page ✨
I chose to **completely reimagine** SEWNA's welcome page from scratch with a focus on:
- **Modern, breath-taking hero section** with floating animations and compelling tagline
- **Clear value proposition** through a "How It Works" section with visual progress indicators
- **Trust-building elements** including designer showcase and community statistics
- **Multiple conversion points** strategically placed throughout the journey
- **Scroll-based animations** that create a dynamic, engaging experience
- **Warm, confident aesthetic** using the brand's lime green accent thoughtfully

### Task 2: Designer Studio - Portfolio Builder 🎨
I built a **comprehensive Designer Onboarding & Portfolio Creation** feature because:

**Why I chose this feature:**
- It addresses the core value proposition: empowering independent designers
- Creates immediate value for both sides of the marketplace (designers get visibility, clients discover talent)
- Demonstrates product thinking around user needs, onboarding friction, and portfolio presentation

**What I wanted users to feel:**
- **Designers**: Excited, empowered, and confident that SEWNA values their craft and makes showcasing easy
- **Trust & Professionalism**: A polished, step-by-step flow that feels supportive, not overwhelming
- **Accomplishment**: Celebratory confetti moment when publishing reinforces their achievement

---

## 🎨 Design Philosophy

Following SEWNA's brand guidelines:

| Element | Implementation |
|---------|----------------|
| **Primary Color** | White - Clean backgrounds, open space |
| **Secondary Color** | Black - Typography, grounding elements |
| **Accent Color** | Lime Green (#00b67f) - CTAs, highlights, energy |
| **Design Approach** | Soft, confident, warm - not flashy |
| **Typography** | Poppins (body), Pacifico (logo accent) |
| **Interactions** | Smooth animations, hover effects, scroll reveals |

---

## 🏗️ Directory Structure

```
sewna/
├── app/
│   ├── globals.css                 # Global styles, animations, utilities
│   ├── layout.tsx                  # Root layout with font configuration
│   ├── page.tsx                    # Home page (Landing Page)
│   └── designer-onboarding/
│       └── page.tsx                # Designer Studio entry point
│
├── components/
│   ├── LandingPage.tsx             # Main landing orchestrator
│   ├── Logo.tsx                    # Reusable logo component (seWNa.)
│   ├── Navbar.tsx                  # Fixed navigation with dual CTAs
│   ├── HeroSection.tsx             # Hero with tagline, floating patterns, stats
│   ├── HowItWorks.tsx              # 3-step process with progress line
│   ├── AboutSection.tsx            # Mission statement & values
│   ├── DesignerShowcase.tsx        # Featured designers carousel
│   ├── FinalCTA.tsx                # Conversion section with gradient
│   ├── Footer.tsx                  # Site footer
│   │
│   └── designer-studio/            # Designer Onboarding Feature
│       ├── DesignerStudio.tsx      # Main controller (5-step state)
│       ├── ProgressBar.tsx         # Visual progress indicator
│       ├── WelcomeStep.tsx         # Step 1: Welcome hero
│       ├── DesignerProfileStep.tsx # Step 2: Profile with live preview
│       ├── DesignsUploadStep.tsx   # Step 3: Portfolio upload (drag-drop)
│       ├── ServicesStep.tsx        # Step 4: Service details & pricing
│       └── ReviewStep.tsx          # Step 5: Review & publish with confetti
│
├── hooks/
│   └── useScrollAnimation.ts       # Intersection Observer for scroll effects
│
├── public/                         # Static assets
│
├── next.config.ts                  # Next.js config with image domains
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies
```

---

## ✨ Key Features

### Landing Page
- **Dynamic Hero Section**: Floating background elements, compelling tagline, dual CTAs, real-time stats
- **How It Works**: Animated 3-step guide with visual progress line
- **About SEWNA**: Mission-driven content with core values (Passion, Community, Quality)
- **Designer Showcase**: Hover-interactive designer cards with style previews
- **Final CTA**: Gradient section with conversion-optimized messaging
- **Scroll Animations**: Intersection Observer-based fade-ins for progressive disclosure

### Designer Studio (5-Step Onboarding)
1. **Welcome**: Inspiring hero with designer workspace imagery
2. **Profile Creation**: 
   - Profile picture upload with live preview
   - Specialty tags (Traditional, Contemporary, Sustainable, etc.)
   - Bio with character counter
   - Real-time profile card preview
3. **Design Upload**: 
   - Drag-and-drop file upload
   - Pinterest-style grid layout (max 10 designs)
   - Per-design metadata (name, caption, tags)
   - Image preview with edit controls
4. **Services & Pricing**:
   - Multi-select outfit types (Sarees, Suits, Gowns, etc.)
   - Price range configuration
   - Delivery timeline
   - Availability options (Local, International, Virtual)
   - Live summary preview
5. **Review & Publish**:
   - Complete profile preview
   - Portfolio gallery
   - Publish button with loading state
   - **Celebratory confetti animation** on success
   - Post-publish CTAs

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type safety and better DX |
| **Tailwind CSS** | Utility-first styling |
| **Lucide React** | Icon library |
| **next/image** | Optimized image loading |
| **Intersection Observer API** | Scroll animations |
| **FileReader API** | Client-side image uploads |
| **Vercel** | Deployment platform |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd sewna

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🎯 Product Thinking & UX Decisions

### User Journey Optimization
1. **Multiple Entry Points**: Every section has CTAs leading to designer onboarding
2. **Progressive Disclosure**: Information revealed as users scroll, reducing overwhelm
3. **Social Proof**: Designer showcase and statistics build trust
4. **Clear Value Props**: Each section answers "What's in it for me?"

### Designer Onboarding Flow
1. **Reduced Friction**: Simple, linear 5-step process vs. overwhelming single form
2. **Live Previews**: Real-time profile card shows designers exactly how they'll appear
3. **Visual Progress**: Fixed progress bar provides orientation and motivation
4. **Flexibility**: Can go back to edit previous steps
5. **Celebration**: Confetti animation creates emotional connection and accomplishment
6. **Smart Validation**: Form validates inputs before allowing progression

### Accessibility Considerations
- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support
- `prefers-reduced-motion` media query support
- High contrast ratios (WCAG compliant)

---

## 🎨 Design Highlights

### Color Psychology
- **Lime Green (#00b67f)**: Energy, creativity, growth - used sparingly for CTAs and accents
- **White**: Purity, simplicity, space to breathe
- **Black**: Sophistication, professionalism, clarity

### Animation Strategy
- **Subtle floating effects**: Create life without distraction
- **Scroll-based reveals**: Reward exploration, maintain engagement
- **Hover interactions**: Provide feedback, encourage interaction
- **Confetti celebration**: Emotional peak moment reinforces designer success

### Typography
- **Pacifico**: Handwritten warmth for logo accent "se"
- **Poppins**: Modern, readable, professional for all content
- Clear hierarchy with size and weight variations

---

## 📱 Responsive Design

Fully responsive across all device sizes:
- **Desktop**: Wide layouts with side-by-side content
- **Tablet**: Adapted grid layouts
- **Mobile**: Stacked layouts, touch-optimized interactions

---


## 📝 Development Notes

### Performance Optimizations
- Next.js Image component for automatic optimization
- Lazy loading with Intersection Observer
- CSS animations over JavaScript for better performance
- Static generation where possible

### Code Quality
- TypeScript for type safety
- Modular component architecture
- Custom hooks for reusable logic
- Consistent naming conventions
- Clean separation of concerns





