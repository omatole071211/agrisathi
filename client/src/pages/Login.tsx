import { FormEvent, useState } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole, MapPin, Mic2, Phone, ShieldCheck, Sprout } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { authenticate, demoCredentials, demoProfile, saveSession, type FarmerProfile } from "@/lib/auth";

type LoginProps = { locale: Locale; setLocale: (locale: Locale) => void; onLogin: () => void };
type FormMode = "login" | "manual";

const copy = {
  en: { eyebrow: "A trusted companion for every acre", title: "Welcome back to your farm.", body: "Sign in or create your farmer profile to see weather alerts, crop actions, and plans saved for your field.", phone: "Mobile number", password: "Password", signIn: "Sign in to Kisan Saathi", demo: "Use demo login", demoHint: "Demo credentials are prefilled for this prototype.", invalid: "Use the demo mobile number and password to continue.", profile: "Your farmer profile", details: "This profile powers localized advice for your farm.", tenant: "Tenant-friendly access", voice: "Voice guidance in English, Hindi, and Marathi", footer: "Your data stays on this device in this demo.", manual: "Enter details manually", backToLogin: "Back to demo login", manualTitle: "Set up your farmer profile", manualBody: "Enter your farm details once. You can update them later.", name: "Full name", village: "Village", district: "District", state: "State", crop: "Main crop", farmSize: "Farm size", tenure: "Cultivator status", saveProfile: "Save profile and continue", required: "Please fill in your name, village, district, crop, and farm size." },
  hi: { eyebrow: "हर एकड़ के लिए भरोसेमंद साथी", title: "अपने खेत पर वापस आएं।", body: "लॉगिन करें या किसान प्रोफ़ाइल बनाकर मौसम चेतावनी और खेत की योजनाएं देखें।", phone: "मोबाइल नंबर", password: "पासवर्ड", signIn: "किसान साथी में प्रवेश करें", demo: "डेमो लॉगिन उपयोग करें", demoHint: "इस प्रोटोटाइप के लिए डेमो जानकारी पहले से भरी है।", invalid: "जारी रखने के लिए डेमो मोबाइल नंबर और पासवर्ड डालें।", profile: "आपकी किसान प्रोफ़ाइल", details: "यह प्रोफ़ाइल आपके खेत के लिए स्थानीय सलाह बनाती है।", tenant: "किरायेदारों के लिए भी", voice: "हिंदी, मराठी और अंग्रेज़ी में आवाज़ मार्गदर्शन", footer: "इस डेमो में आपका डेटा इसी डिवाइस पर रहता है।", manual: "जानकारी खुद भरें", backToLogin: "डेमो लॉगिन पर लौटें", manualTitle: "अपनी किसान प्रोफ़ाइल बनाएं", manualBody: "अपने खेत की जानकारी एक बार भरें। बाद में बदल सकते हैं।", name: "पूरा नाम", village: "गाँव", district: "जिला", state: "राज्य", crop: "मुख्य फसल", farmSize: "खेत का आकार", tenure: "किसान की स्थिति", saveProfile: "प्रोफ़ाइल सुरक्षित करें", required: "कृपया नाम, गाँव, जिला, फसल और खेत का आकार भरें।" },
  mr: { eyebrow: "प्रत्येक एकरासाठी विश्वासू साथी", title: "तुमच्या शेतावर परत या.", body: "लॉगिन करा किंवा शेतकरी प्रोफाइल तयार करून हवामान इशारे आणि शेताच्या योजना पाहा.", phone: "मोबाइल क्रमांक", password: "पासवर्ड", signIn: "किसान साथीमध्ये प्रवेश करा", demo: "डेमो लॉगिन वापरा", demoHint: "या प्रोटोटाइपसाठी डेमो माहिती आधी भरलेली आहे.", invalid: "पुढे जाण्यासाठी डेमो मोबाइल क्रमांक आणि पासवर्ड वापरा.", profile: "तुमची शेतकरी प्रोफाइल", details: "ही प्रोफाइल तुमच्या शेतासाठी स्थानिक सल्ला देते.", tenant: "भाडेकरूंसाठीही", voice: "मराठी, हिंदी आणि इंग्रजी आवाज मार्गदर्शन", footer: "या डेमोमध्ये तुमची माहिती याच उपकरणावर राहते.", manual: "माहिती स्वतः भरा", backToLogin: "डेमो लॉगिनवर परत", manualTitle: "तुमची शेतकरी प्रोफाइल तयार करा", manualBody: "तुमच्या शेताची माहिती एकदा भरा. नंतर बदलता येईल.", name: "पूर्ण नाव", village: "गाव", district: "जिल्हा", state: "राज्य", crop: "मुख्य पीक", farmSize: "शेताचा आकार", tenure: "शेतकरी स्थिती", saveProfile: "प्रोफाइल जतन करा", required: "कृपया नाव, गाव, जिल्हा, पीक आणि शेताचा आकार भरा." },
} as const;

export default function Login({ locale, setLocale, onLogin }: LoginProps) {
  const t = copy[locale];
  const [mode, setMode] = useState<FormMode>("login");
  const [phone, setPhone] = useState(demoCredentials.phone);
  const [password, setPassword] = useState(demoCredentials.password);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [manual, setManual] = useState<FarmerProfile>({ ...demoProfile });

  const submitLogin = (event: FormEvent) => {
    event.preventDefault();
    const profile = authenticate(phone, password);
    if (!profile) { setError(t.invalid); return; }
    saveSession(profile);
    onLogin();
  };

  const submitManual = (event: FormEvent) => {
    event.preventDefault();
    if (!manual.name.trim() || !manual.village.trim() || !manual.district.trim() || !manual.crop.trim() || !manual.farmSize.trim()) { setError(t.required); return; }
    saveSession({ ...manual, name: manual.name.trim(), memberId: manual.memberId || `LOCAL-${Date.now().toString().slice(-6)}` });
    onLogin();
  };

  const updateManual = (key: keyof FarmerProfile, value: string) => setManual((current) => ({ ...current, [key]: value }));
  const field = (label: string, key: keyof FarmerProfile, placeholder = "") => <label>{label}<div className="input-wrap"><input value={manual[key]} placeholder={placeholder} onChange={(event) => updateManual(key, event.target.value)} /></div></label>;

  return <div className="login-shell">
    <section className="login-story"><div className="story-mark"><Sprout size={22} /></div><div className="story-brand">Kisan Saathi <span>किसान साथी</span></div><div className="story-content"><div className="eyebrow light">{t.eyebrow}</div><h1>{t.title}</h1><p>{t.body}</p><div className="story-profile"><div className="story-avatar">{manual.name[0] || "F"}</div><div><strong>{manual.name}</strong><span><MapPin size={13} />{manual.village}, {manual.district}</span></div><ShieldCheck size={19} /></div></div><div className="story-footnote"><span>01</span><span>Accessible by design</span><span>·</span><span>{t.voice}</span></div></section>
    <section className="login-panel"><div className="login-top"><div className="language-switcher">{(["en", "hi", "mr"] as Locale[]).map((id) => <button key={id} className={locale === id ? "language-option is-active" : "language-option"} onClick={() => setLocale(id)}>{id === "en" ? "EN" : id === "hi" ? "हि" : "म"}</button>)}</div><div className="login-help"><Mic2 size={15} />{t.voice}</div></div><div className="login-form-wrap">{mode === "login" ? <><div className="eyebrow">{t.profile}</div><h2>{t.profile}</h2><p className="login-subtitle">{t.details}</p><form onSubmit={submitLogin}><label>{t.phone}<div className="input-wrap"><Phone size={17} /><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" /></div></label><label>{t.password}<div className="input-wrap"><LockKeyhole size={17} /><input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" /><button type="button" className="input-action" onClick={() => setShowPassword(!showPassword)} aria-label="Show password">{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div></label>{error && <div className="login-error">{error}</div>}<button className="login-button" type="submit">{t.signIn}<ArrowRight size={17} /></button></form><button className="demo-button" onClick={() => { setPhone(demoCredentials.phone); setPassword(demoCredentials.password); setError(""); }}><span>{t.demo}</span><small>{t.demoHint}</small></button><button className="manual-link" onClick={() => { setMode("manual"); setError(""); }}>{t.manual}<ArrowRight size={15} /></button><div className="profile-preview"><div className="preview-header"><span>{t.tenant}</span><span className="verified-chip"><ShieldCheck size={13} /> Verified</span></div><div className="preview-grid"><div><span>{t.name}</span><strong>{manual.name}</strong></div><div><span>{t.farmSize}</span><strong>{manual.farmSize}</strong></div><div><span>{t.crop}</span><strong>{manual.crop}</strong></div><div><span>Member ID</span><strong>{manual.memberId}</strong></div></div></div></> : <><button className="manual-back" onClick={() => { setMode("login"); setError(""); }}>← {t.backToLogin}</button><div className="eyebrow">{t.profile}</div><h2>{t.manualTitle}</h2><p className="login-subtitle">{t.manualBody}</p><form onSubmit={submitManual} className="manual-form">{field(t.name, "name")}{field(t.phone, "phone")}{field(t.village, "village")}{field(t.district, "district")}{field(t.state, "state")}{field(t.crop, "crop")}{field(t.farmSize, "farmSize", "e.g. 2 acres")}{field(t.tenure, "tenure")}{error && <div className="login-error">{error}</div>}<button className="login-button" type="submit">{t.saveProfile}<ArrowRight size={17} /></button></form></>}</div><div className="login-footer">{t.footer}</div></section>
  </div>;
}
