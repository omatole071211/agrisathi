export type FarmerProfile = {
  name: string;
  village: string;
  district: string;
  state: string;
  phone: string;
  crop: string;
  farmSize: string;
  tenure: string;
  memberId: string;
};

export const demoCredentials = {
  phone: "9876543210",
  password: "kisan123",
};

export const demoProfile: FarmerProfile = {
  name: "Om Atole",
  village: "Niphad",
  district: "Nashik",
  state: "Maharashtra",
  phone: demoCredentials.phone,
  crop: "Onion",
  farmSize: "2.4 acres",
  tenure: "Tenant cultivator · verified by FPO",
  memberId: "KS- MH- 2048",
};

const SESSION_KEY = "kisan-saathi-session";

export function loadSession(): FarmerProfile | null {
  try {
    const saved = window.localStorage.getItem(SESSION_KEY);
    return saved ? (JSON.parse(saved) as FarmerProfile) : null;
  } catch {
    return null;
  }
}

export function saveSession(profile: FarmerProfile) {
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(profile));
}

export function clearSession() {
  window.localStorage.removeItem(SESSION_KEY);
}

export function authenticate(phone: string, password: string): FarmerProfile | null {
  return phone.trim() === demoCredentials.phone && password === demoCredentials.password ? demoProfile : null;
}
