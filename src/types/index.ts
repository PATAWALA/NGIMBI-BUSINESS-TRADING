import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */

export type ServiceKey = "sourcing" | "achat-controle" | "fret-dedouanement";

export interface ServiceOption {
  id: ServiceKey;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  points: string[];
}

/* ------------------------------------------------------------------ */
/*  Suivi de colis                                                     */
/* ------------------------------------------------------------------ */

export type TrackingStatus = "done" | "current" | "pending";

export interface TrackingStep {
  title: string;
  location: string;
  description: string;
  icon: LucideIcon;
  date: string;
  status: TrackingStatus;
}

export interface TrackingResult {
  code: string;
  reference: string;
  origin: string;
  destination: string;
  mode: "Fret maritime" | "Fret aérien" | "Express aérien";
  weight: string;
  volume: string;
  eta: string;
  progress: number;
  steps: TrackingStep[];
}

/* ------------------------------------------------------------------ */
/*  Catalogue produits                                                 */
/* ------------------------------------------------------------------ */

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  delay: string;
  priceHint: string;
  tags: string[];
  icon: LucideIcon;
}

/* ------------------------------------------------------------------ */
/*  Pourquoi nous                                                      */
/* ------------------------------------------------------------------ */

export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

/* ------------------------------------------------------------------ */
/*  Formulaire de sourcing                                             */
/* ------------------------------------------------------------------ */

export interface SourcingFormState {
  service: ServiceKey | "";
  product: string;
  link: string;
  quantity: string;
  budget: string;
  city: string;
  name: string;
  phone: string;
  notes: string;
}

export interface PrefillDetail {
  service?: ServiceKey;
  product?: string;
  category?: string;
}