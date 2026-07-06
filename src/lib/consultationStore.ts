import { ContactForm } from "../types";

const STORAGE_KEY = "ebenezer-consultations";

export interface StoredConsultation extends ContactForm {
  id: string;
  submittedAt: string;
}

function safeStorage(): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function getStoredConsultations(): StoredConsultation[] {
  const storage = safeStorage();
  if (!storage) return [];

  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveConsultation(form: ContactForm): StoredConsultation {
  const storage = safeStorage();
  const record: StoredConsultation = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: form.name.trim(),
    phone: form.phone.trim(),
    email: form.email.trim(),
    serviceRequired: form.serviceRequired.trim(),
    message: form.message.trim(),
    submittedAt: new Date().toISOString(),
  };

  if (!storage) {
    return record;
  }

  try {
    const existing = getStoredConsultations();
    const next = [record, ...existing].slice(0, 100);
    storage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Ignore storage write failures in unsupported environments.
  }

  return record;
}
