import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Hammer,
  Handshake,
  Home as HomeIcon,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const phoneNumber = "6581568359";
const displayPhone = "+65 8156 8359";

const videos = {
  kitchenHero: "/media/kitchen-hero.mp4",
  kitchenIsland: "/media/kitchen-island.mp4",
  livingRoom: "/media/living-room.mp4",
  commonRoom: "/media/common-room.mp4",
  bedroom: "/media/bedroom.mp4",
};

const whatsappLink = (message = "Hi Ban Li Cheng, I would like to discuss my home renovation.") =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

function VideoCard({
  src,
  label,
  title,
  detail,
  className = "",
}: {
  src: string;
  label: string;
  title: string;
  detail: string;
  className?: string;
}) {
  return (
    <article className={`project-card ${className}`}>
      <div className="project-media">
        <video src={src} controls muted playsInline preload="metadata" onVolumeChange={(event) => { event.currentTarget.muted = true; }} aria-label={`${title} renovation video`} />
        <span className="project-label">{label}</span>
      </div>
      <div className="project-copy">
        <h3>{title}</h3>
        <p>{detail}</p>
      </div>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showConsultation, setShowConsultation] = useState(false);
  const [language, setLanguage] = useState<"en" | "zh">(() => {
    if (typeof window !== "undefined" && window.localStorage.getItem("blc-language") === "zh") return "zh";
    return "en";
  });

  const isChinese = language === "zh";

  useEffect(() => {
    document.documentElement.lang = isChinese ? "zh-CN" : "en";
    localStorage.setItem("blc-language", language);
  }, [isChinese, language]);

  useEffect(() => {
    if (sessionStorage.getItem("blc-consultation-popup-seen")) return;

    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (pageHeight > 0 && window.scrollY / pageHeight >= 0.4) {
        sessionStorage.setItem("blc-consultation-popup-seen", "true");
        setShowConsultation(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const property = String(form.get("property") || "");
    const details = String(form.get("details") || "");
    const message = `Hi Ban Li Cheng, my name is ${name}. I am renovating a ${property}. My contact number is ${phone}. ${details}`;
    setSubmitted(true);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark wordmark-logo" href="#top" onClick={closeMenu} aria-label="Ban Li Cheng home">
          <img src="/brand/ban-li-cheng-logo.png" alt="Ban Li Cheng Trading & Renovation" width={885} height={235} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <a href="#why" onClick={closeMenu}>{isChinese ? "为什么选择我们" : "Why us"}</a>
          <a href="#work" onClick={closeMenu}>{isChinese ? "工程案例" : "Our work"}</a>
          <a href="#process" onClick={closeMenu}>{isChinese ? "流程" : "Process"}</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>{isChinese ? "预约上门咨询" : "Book a site visit"} <ArrowUpRight size={15} /></a>
          <button className="language-toggle" type="button" onClick={() => setLanguage(isChinese ? "en" : "zh")} aria-label={isChinese ? "Switch to English" : "切换到中文"}>
            <span className={!isChinese ? "active" : ""}>EN</span><span className="toggle-divider">/</span><span className={isChinese ? "active" : ""}>中文</span>
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-dark">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-inner page-width">
            <div className="hero-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> {isChinese ? "新加坡住宅装修，自1984年" : "Singapore homes, since 1984"}</div>
              <h1>{isChinese ? <>装修清晰明白。<br /><em>住得更好。</em></> : <>Renovation made clear.<br /><em>Homes made better.</em></>}</h1>
              <p className="hero-lede">{isChinese ? "自1984年以来，为新加坡家庭提供诚实建议、清晰报价和细致施工，从首次上门勘察到最终交付，全程安心。" : "Honest advice, clear quotations and careful workmanship—from your first site visit to the day you come home."}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">{isChinese ? "预约上门咨询" : "Book a site visit"} <ArrowUpRight size={17} /></a>
                <a className="button button-ghost" href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> {isChinese ? "WhatsApp 联系我们" : "WhatsApp us"}</a>
              </div>
              <div className="hero-trust">
                <div><strong>40+</strong><span>{isChinese ? "年装修经验" : "years of experience"}</span></div>
                <div><strong>HDB · Condo · Landed</strong><span>{isChinese ? "新加坡住宅类型" : "homes across Singapore"}</span></div>
              </div>
            </div>
            <div className="hero-video-wrap">
              <div className="video-frame">
                <video className="hero-video" src={videos.kitchenHero} autoPlay muted loop playsInline preload="auto" />
                <div className="video-shade" />
                <div className="video-topline"><span className="live-dot" /> {isChinese ? "真实项目蜕变" : "real project transformation"}</div>
                <div className="video-caption">
                  <span>{isChinese ? "厨房 / 定制木工" : "Kitchen / custom carpentry"}</span>
                  <strong>{isChinese ? "看看空间如何成形" : "Watch the space come together"} <ArrowDown size={15} /></strong>
                </div>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#why" aria-label={isChinese ? "向下了解更多" : "Scroll to learn more"}><span>{isChinese ? "向下探索" : "Scroll to explore"}</span><ArrowDown size={16} /></a>
        </section>

        <section className="pain-section section-cream" id="why">
          <div className="page-width pain-layout">
            <div className="section-intro">
              <div className="eyebrow"><span className="eyebrow-line" /> {isChinese ? "装修烦恼是真实的" : "The renovation worry is real"}</div>
              <h2>{isChinese ? "装修应该像新家，而不是新烦恼。" : "It should feel like a new home—not a new headache."}</h2>
              <p>{isChinese ? "屋主需要的不是更多承诺，而是一支能把下一步讲清楚的装修团队。" : "Most homeowners do not need more promises. They need a contractor who can make the next step feel simple."}</p>
            </div>
            <div className="pain-list">
              <details className="pain-item" open>
                <summary><span className="pain-number">01</span><span className="pain-question">{isChinese ? "“报价到底包括什么？”" : "“What is actually included?”"}</span><ChevronDown size={18} /></summary>
                <p>{isChinese ? "报价不清晰和额外费用，会让预算规划变得困难。" : "Unclear quotations and surprise costs make it hard to plan with confidence."}</p>
              </details>
              <details className="pain-item">
                <summary><span className="pain-number">02</span><span className="pain-question">{isChinese ? "“谁来协调全部工程？”" : "“Who is coordinating all this?”"}</span><ChevronDown size={18} /></summary>
                <p>{isChinese ? "多个承包方、沟通遗漏和延误，会让装修变成屋主的全职工作。" : "Too many parties, missed messages and delays turn a home project into a full-time job."}</p>
              </details>
              <details className="pain-item">
                <summary><span className="pain-number">03</span><span className="pain-question">{isChinese ? "“最后的工艺能做好吗？”" : "“Will the finish be done right?”"}</span><ChevronDown size={18} /></summary>
                <p>{isChinese ? "好的设计，只有在每个细节都认真完成时，才真正有价值。" : "Beautiful ideas only matter when the workmanship holds up in the details."}</p>
              </details>
            </div>
          </div>
        </section>

        <section className="solution-section section-ink" id="solution">
          <div className="page-width solution-layout">
            <div className="solution-statement">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> {isChinese ? "Ban Li Cheng 的方式" : "The Ban Li Cheng way"}</div>
              <h2>{isChinese ? "先把问题讲清楚，再打造解决方案。" : "We clear the problem before we build the solution."}</h2>
              <p>{isChinese ? "Ban Li Cheng 前身为 Sin Bee Loong，自1984年以来帮助新加坡屋主做出更好的装修决定。" : "Formerly Sin Bee Loong, Ban Li Cheng has been helping Singapore homeowners make better renovation decisions since 1984."}</p>
              <a className="text-link text-link-light" href="#contact">{isChinese ? "聊聊您的装修计划" : "Talk through your renovation"} <ArrowUpRight size={17} /></a>
            </div>
            <div className="solution-points">
              <div className="solution-point"><span className="icon-chip"><Handshake size={19} /></span><div><h3>{isChinese ? "诚实建议" : "Honest advice"}</h3><p>{isChinese ? "根据您的家居、生活方式和预算，提供实际建议。" : "Practical recommendations for your home, lifestyle and budget."}</p></div></div>
              <div className="solution-point"><span className="icon-chip"><ShieldCheck size={19} /></span><div><h3>{isChinese ? "清晰报价" : "Clear quotations"}</h3><p>{isChinese ? "开工前清楚了解工程内容，不再靠猜。" : "Know what is planned before work begins, without the guesswork."}</p></div></div>
              <div className="solution-point"><span className="icon-chip"><Hammer size={19} /></span><div><h3>{isChinese ? "细致施工" : "Careful workmanship"}</h3><p>{isChinese ? "从拆除到交付，每个细节都认真管理。" : "From hacking to handover, details are managed with pride."}</p></div></div>
            </div>
          </div>
        </section>

        <section className="work-section section-cream" id="work">
          <div className="page-width">
            <div className="section-heading-row">
              <div>
                <div className="eyebrow"><span className="eyebrow-line" /> {isChinese ? "真实空间蜕变" : "Real transformations"}</div>
                <h2>{isChinese ? <>看看<br /><em>细致施工的不同。</em></> : <>See the difference<br /><em>careful work makes.</em></>}</h2>
              </div>
              <p className="heading-note">{isChinese ? "每个项目都从空白空间和清晰计划开始。看看 Ban Li Cheng 如何让家真正成形。" : "Every project starts with a blank space and a clearer plan. Explore a few of the transformations Ban Li Cheng brings to life."}</p>
            </div>
            <div className="project-grid">
              <VideoCard className="project-feature" src={videos.kitchenIsland} label={isChinese ? "厨房 / 木工" : "Kitchen / carpentry"} title={isChinese ? "为日常生活打造的厨房" : "A kitchen built for everyday life"} detail={isChinese ? "橱柜、中岛、电器和灯光，完整结合成一个实用空间。" : "Cabinetry, island, appliances and lighting brought together as one considered space."} />
              <VideoCard src={videos.livingRoom} label={isChinese ? "客厅 / 特色墙" : "Living room / feature wall"} title={isChinese ? "让人留下好印象的客厅" : "A warmer first impression"} detail={isChinese ? "定制格栅板与灯光，为客厅带来全新氛围。" : "Custom fluted panels and integrated lighting give the living room a new mood."} />
              <VideoCard src={videos.commonRoom} label={isChinese ? "普通房 / 收纳" : "Common room / storage"} title={isChinese ? "让每个角落更实用" : "More function from every corner"} detail={isChinese ? "内置书桌和层架，把空房变成每天都好用的空间。" : "A built-in desk and shelving turn an empty room into a useful daily space."} />
              <VideoCard src={videos.bedroom} label={isChinese ? "卧室 / 节省空间" : "Bedroom / space-saving"} title={isChinese ? "一个房间，更多可能" : "One room, more possibilities"} detail={isChinese ? "定制木工让卧室与书房在有限空间中一起运作。" : "Custom carpentry makes a bedroom and study work together in a compact footprint."} />
              <VideoCard className="project-wide" src={videos.kitchenHero} label={isChinese ? "厨房 / 完整蜕变" : "Kitchen / complete transformation"} title={isChinese ? "从空房到共享生活的地方" : "From bare room to a place to gather"} detail={isChinese ? "完整厨房改造，让空间潜力一目了然。" : "A full kitchen transformation that makes the potential of the space easy to see."} />
            </div>
          </div>
        </section>

        <section className="coverage-section section-paper">
          <div className="page-width coverage-layout">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> {isChinese ? "一支有经验的团队" : "One experienced team"}</div>
              <h2>{isChinese ? "从第一次拆除，到最后一个细节。" : "From the first knock-out to the final touch."}</h2>
            </div>
            <div className="coverage-content">
              <p>{isChinese ? "无论是翻新一个房间，还是装修整套住宅，我们都协调每项工程，让空间完整落地。" : "Whether you are refreshing one room or renovating the whole home, we coordinate the work that makes the space feel complete."}</p>
              <div className="tag-list">
                <span><HomeIcon size={15} /> {isChinese ? "HDB 组屋" : "HDB homes"}</span><span><HomeIcon size={15} /> {isChinese ? "公寓" : "Condominiums"}</span><span><HomeIcon size={15} /> {isChinese ? "有地住宅" : "Landed homes"}</span>
                <span><Hammer size={15} /> {isChinese ? "拆除与铺砖" : "Hacking & tiling"}</span><span><Sparkles size={15} /> {isChinese ? "油漆与饰面" : "Painting & finishes"}</span><span><Ruler size={15} /> {isChinese ? "定制木工" : "Custom carpentry"}</span><span><MapPin size={15} /> {isChinese ? "特色墙" : "Feature walls"}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="process-section section-dark" id="process">
          <div className="page-width">
            <div className="section-heading-row process-heading">
              <div>
                <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> {isChinese ? "更清晰的下一步" : "A clearer way forward"}</div>
                <h2>{isChinese ? <>好的装修，<br /><em>从好好沟通开始。</em></> : <>Good renovations start<br /><em>with a good conversation.</em></>}</h2>
              </div>
              <p className="heading-note heading-note-light">{isChinese ? "没有强硬推销，只有实际的第一步，以及清楚知道接下来该做什么的团队。" : "No hard sell. Just a practical first step and a team that understands what comes next."}</p>
            </div>
            <div className="process-grid">
              <div className="process-card"><span>01</span><Clock3 size={20} /><h3>{isChinese ? "告诉我们您的家" : "Tell us about your home"}</h3><p>{isChinese ? "分享住宅类型、想法，以及目前哪里不够理想。" : "Share your property type, ideas and what is not working today."}</p></div>
              <div className="process-card"><span>02</span><MapPin size={20} /><h3>{isChinese ? "上门了解现场" : "Meet at the site"}</h3><p>{isChinese ? "先正确了解空间，再为您建议合适工程。" : "We understand the space properly before recommending the work."}</p></div>
              <div className="process-card"><span>03</span><Ruler size={20} /><h3>{isChinese ? "查看清晰报价" : "Review a clear quote"}</h3><p>{isChinese ? "了解建议工程，更有信心地做决定。" : "See the proposed works and make decisions with more confidence."}</p></div>
              <div className="process-card"><span>04</span><Check size={20} /><h3>{isChinese ? "细心完成装修" : "Renovate with care"}</h3><p>{isChinese ? "由我们的团队协调工程，认真完成交付。" : "Our team coordinates the work towards a considered handover."}</p></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-rust" id="contact">
          <div className="page-width contact-layout">
            <div className="contact-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> {isChinese ? "您的下一步" : "Your next step"}</div>
              <h2>{isChinese ? "告诉我们，您的家想要变得更好什么。" : "Tell us what you want your home to do better."}</h2>
              <p>{isChinese ? "从一次沟通开始。我们会聆听、了解现场，并帮助您看清下一步。" : "Start with a conversation. We will listen, understand the site and help you see a clearer path forward."}</p>
              <div className="contact-direct">
                <a href={`tel:+${phoneNumber}`}><Phone size={18} /><span><small>{isChinese ? "致电我们" : "Call us"}</small>{displayPhone}</span></a>
                <a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>WhatsApp</small>{isChinese ? "开始沟通" : "Start a conversation"}</span></a>
              </div>
            </div>
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-heading"><span>01 / {isChinese ? "快速咨询" : "quick enquiry"}</span><h3>{isChinese ? "一起制定计划。" : "Let’s make a plan."}</h3></div>
              <label>{isChinese ? "姓名" : "Name"}<input name="name" type="text" placeholder={isChinese ? "您的姓名" : "Your name"} required /></label>
              <div className="form-row"><label>{isChinese ? "手机号码" : "Mobile number"}<input name="phone" type="tel" placeholder="e.g. 8123 4567" required /></label><label>{isChinese ? "住宅类型" : "Home type"}<select name="property" defaultValue="" required><option value="" disabled>{isChinese ? "请选择" : "Select one"}</option><option>HDB</option><option>Condo</option><option>Landed</option><option>{isChinese ? "还不确定" : "Not sure yet"}</option></select></label></div>
              <label>{isChinese ? "您想改善什么？" : "What would you like to improve?"}<textarea name="details" rows={3} placeholder={isChinese ? "厨房、木工、全屋装修……" : "Kitchen, carpentry, whole-home renovation…"} /></label>
              <button className="button button-light button-full" type="submit">{isChinese ? "通过 WhatsApp 发送咨询" : "Send enquiry on WhatsApp"} <ArrowUpRight size={17} /></button>
              {submitted && <p className="form-success" role="status">{isChinese ? "您的信息已准备好发送到 WhatsApp，期待了解您的家。" : "Your message is ready in WhatsApp. We look forward to hearing about your home."}</p>}
              <p className="form-note">{isChinese ? "您的资料只会用于跟进装修咨询。" : "We will use your details only to follow up on your renovation enquiry."}</p>
            </form>
          </div>
        </section>
      </main>

      {showConsultation && (
        <div className="consultation-overlay" role="presentation" onClick={() => setShowConsultation(false)}>
          <section className="consultation-modal" role="dialog" aria-modal="true" aria-labelledby="consultation-title" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setShowConsultation(false)} aria-label="Close consultation message"><X size={18} /></button>
            <span className="modal-kicker">{isChinese ? "好的第一步" : "A good first step"}</span>
            <h2 id="consultation-title">{isChinese ? "让装修变得更清晰。" : "Let’s make your renovation clearer."}</h2>
            <p>{isChinese ? "预约 Ban Li Cheng 免费咨询和上门勘察。告诉我们您的家，我们会帮助您了解下一步。" : "Book a free consultation and site visit with Ban Li Cheng. Tell us about your home, and we’ll help you understand what comes next."}</p>
            <div className="modal-actions"><a className="button button-primary" href={whatsappLink(isChinese ? "你好 Ban Li Cheng，我想预约免费装修咨询和上门勘察。" : "Hi Ban Li Cheng, I would like to book a free consultation and site visit.")} target="_blank" rel="noreferrer"><MessageCircle size={17} /> {isChinese ? "WhatsApp 联系我们" : "WhatsApp us"}</a><a className="modal-phone" href={`tel:+${phoneNumber}`}><Phone size={16} /> {displayPhone}</a></div>
          </section>
        </div>
      )}

      <footer className="site-footer section-ink">
        <div className="page-width footer-layout">
          <div><a className="wordmark wordmark-logo wordmark-footer" href="#top" aria-label="Ban Li Cheng home"><img src="/brand/ban-li-cheng-logo.png" alt="Ban Li Cheng Trading & Renovation" width={885} height={235} /></a><p>{isChinese ? <>新加坡装修承包商，自1984年成立。<br />前身为 Sin Bee Loong。</> : <>Established Singapore renovation contractor since 1984.<br />Formerly Sin Bee Loong.</>}</p></div>
          <div className="footer-right"><span>HDB · Condo · Landed</span><a href={`tel:+${phoneNumber}`}>{displayPhone}</a><span>© {new Date().getFullYear()} Ban Li Cheng Trading &amp; Renovation</span></div>
        </div>
      </footer>

      <div className="mobile-contact-bar"><a href={`tel:+${phoneNumber}`}><Phone size={17} /> {isChinese ? "致电" : "Call"}</a><a className="mobile-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a><a href="#contact"><ArrowUpRight size={17} /> {isChinese ? "咨询" : "Enquire"}</a></div>
    </div>
  );
}
