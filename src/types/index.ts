// Tipos globales para la aplicación

// SEO Types
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  canonical: string;
  robots: string;
  schema: Record<string, unknown>;
}

export interface SEOProps {
  path?: string;
}

// Component Types
export interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ContentViewProps {
  section: string;
}

// Contact Form Types
export interface ContactFormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export interface ContactFormErrors {
  nombre?: string;
  email?: string;
  mensaje?: string;
}

export interface ContactFormResponse {
  success: boolean;
  message?: string;
  error?: string;
  detalles?: string[];
}

// Navigation Types
export interface NavItem {
  path: string;
  label: string;
  icon?: string;
}

// Animation Types
export interface ParallaxLayer {
  id: string;
  src: string;
  speed: number;
  zIndex: number;
}

// API Types
export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
  success: boolean;
}

// Theme Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

// Accessibility Types
export interface A11yProps {
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-hidden'?: boolean;
  role?: string;
  tabIndex?: number;
}