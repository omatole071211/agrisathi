import { FormEvent, useState } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole, MapPin, Mic2, Phone, ShieldCheck, Sprout } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { authenticate, demoCredentials, demoProfile, saveSession } from "@/lib/auth";

type LoginProps = { locale: Locale; setLocale: (locale: Locale) => void; onLogin: () => void };

const copy = {
  en: { eyebrow: "A trusted companion for every acre", title: "Welcome back to your farm.", body: "Sign in to see weather alerts, crop actions, and plans saved for your field.", phone: "Mobile number", password: "Password", signIn: "Sign in to Kisan Saathi", demo: "Use demo login", demoHint: "Demo credentials are prefilled for this prototype.", invalid: "Use the demo mobile number and password to continue.", profile: "Your farmer profile", details: "This profile powers localized advice for your farm.", tenant: "Tenant-friendly access", voice: "Voice guidance in English, Hindi, and Marathi", footer: "Your data stays on this device in this demo." },
  hi: { eyebrow: "हर एकड़ के लिए भरोसेमंद साथी", title: "अपने खेत पर वापस आएं।", body: "मौसम चेतावनी, फसल के काम और अपने खेत के लिए सुरक्षित योजनाएं देखें।", phone: "मोबाइल नंबर", password: "पासवर्ड", signIn: "किसान साथी में प्रवेश करें", demo: "डेमो लॉगिन उपयोग करें", demoHint: "इस प्रोटोटाइप के लिए डेमो जानकारी पहले से भरी है।", invalid: "जारी रखने के लिए डेमो मोबाइल नंबर और पासवर्ड डालें।", profile: "आपकी किसान प्रोफ़ाइल", details: "यह प्रोफ़ाइल आपके खेत के लिए स्थानीय सलाह बनाती है।", tenant: "किरायेदारों के लिए भी", voice: "हिंदी, मराठी और अंग्रेज़ी में आवाज़ मार्गदर्शन", footer: "इस डेमो में आपका डेटा इसी डिवाइस पर रहता है।" },
  mr: { eyebrow: "प्रत्येक एकरासाठी विश्वासू साथी", title: "तुमच्या शेतावर परत या.", body: "हवामान इशारे, पिकांची कामे आणि तुमच्या शेतासाठी जतन केलेल्या योजना पाहा.", phone: "मोबाइल क्रमांक", password: "पासवर्ड", signIn: "किसान साथीमध्ये प्रवेश करा", demo: "डेमो लॉगिन वापरा", demoHint: "या प्रोटोटाइपसाठी डेमो माहिती आधी भरलेली आहे.", invalid: "पुढे जाण्यासाठी डेमो मोबाइल क्रमांक आणि पासवर्ड वापरा.", profile: "तुमची शेतकरी प्रोफाइल", details: "ही प्रोफाइल तुमच्या शेतासाठी स्थानिक सल्ला देते.", tenant: "भाडेकरूंसाठीही", voice: "मराठी, हिंदी आणि इंग्रजी आवाज मार्गदर्शन", footer: "या डेमोमध्ये तुमची माहिती याच उपकरणावर राहते." },
} as const;

export default function Login({ locale, setLocale, onLogin }: LoginProps) {
  const t = copy[locale];
  const [phone, setPhone] = useState(demoCredentials.phone);
  const [password, setPassword] = useState(demoCredentials.password);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const profile = authenticate(phone, password);
    if (!profile) { setError(t.invalid); return; }
    saveSession(profile);
    onLogin();
  };

  return <div className="login-shell">
    <section className="login-story"><div className="story-mark"><Sprout size={22} /></div><div className="story-brand">Kisan Saathi <span>किसान साथी</span></div><div className="story-content"><div className="eyebrow light">{t.eyebrow}</div><h1>{t.title}</h1><p>{t.body}</p><div className="story-profile"><div className="story-avatar">R</div><div><strong>{demoProfile.name}</strong><span><MapPin size={13} />{demoProfile.village}, {demoProfile.district}</span></div><ShieldCheck size={19} /></div></div><div className="story-footnote"><span>01</span><span>Accessible by design</span><span>·</span><span>{t.voice}</span></div></section>
    <section className="login-panel"><div className="login-top"><div className="language-switcher">{(["en", "hi", "mr"] as Locale[]).map((id) => <button key={id} className={locale === id ? "language-option is-active" : "language-option"} onClick={() => setLocale(id)}>{id === "en" ? "EN" : id === "hi" ? "हि" : "म"}</button>)}</div><div className="login-help"><Mic2 size={15} />{t.voice}</div></div><div className="login-form-wrap"><div className="eyebrow">{t.profile}</div><h2>{t.profile}</h2><p className="login-subtitle">{t.details}</p><form onSubmit={submit}><label>{t.phone}<div className="input-wrap"><Phone size={17} /><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" /></div></label><label>{t.password}<div className="input-wrap"><LockKeyhole size={17} /><input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" /><button type="button" className="input-action" onClick={() => setShowPassword(!showPassword)} aria-label="Show password">{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div></label>{error && <div className="login-error">{error}</div>}<button className="login-button" type="submit">{t.signIn}<ArrowRight size={17} /></button></form><button className="demo-button" onClick={() => { setPhone(demoCredentials.phone); setPassword(demoCredentials.password); setError(""); }}><span>{t.demo}</span><small>{t.demoHint}</small></button><div className="profile-preview"><div className="preview-header"><span>{t.tenant}</span><span className="verified-chip"><ShieldCheck size={13} /> Verified</span></div><div className="preview-grid"><div><span>Name</span><strong>{demoProfile.name}</strong></div><div><span>Farm</span><strong>{demoProfile.farmSize}</strong></div><div><span>Crop</span><strong>{demoProfile.crop}</strong></div><div><span>Member ID</span><strong>{demoProfile.memberId}</strong></div></div></div></div><div className="login-footer">{t.footer}</div></section>
  </div>;
}
