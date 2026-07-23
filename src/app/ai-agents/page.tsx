import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/lib/icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CapabilityTabs from "@/components/CapabilityTabs";
import StatsBar from "@/components/StatsBar";
import { ROUTES } from "@/lib/theme";
import {
  convoHero,
  convoProblems,
  convoSteps,
  convoUseCases,
  convoMeta,
} from "@/data/products";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "AI Agents — ConvoSense | Tachyon Consultants",
  description:
    "ConvoSense analyzes 100% of your call recordings to produce accurate transcripts, sentiment analysis, compliance alerts, and risk indicators, automatically.",
};

export default function AiAgentsPage() {
  return (
    <>
      {/* ===== Hero (dark) ===== */}
      <section className={styles.hero}>
        <Reveal className={styles.heroInner} stagger>
          <div className={styles.badgeRow}>
            <span className={styles.badge}>{convoHero.badge}</span>
          </div>
          <h1 className={styles.heroTitle}>
            {convoHero.titleLead}{" "}
            <span className={styles.accent}>{convoHero.titleAccent}</span>{" "}
            {convoHero.titleTrail}
          </h1>
          <p className={styles.heroIntro}>{convoHero.intro}</p>
          <div className={styles.heroCtas}>
            <Link href={ROUTES.contact} className="btn btn--accent">
              Start Free Trial
            </Link>
            <Link href={ROUTES.contact} className={styles.ghostBtn}>
              Schedule a Demo
            </Link>
          </div>
          <div className={styles.trust}>
            {convoHero.trust.map((t) => (
              <span key={t} className={styles.trustItem}>
                {t}
              </span>
            ))}
          </div>
        </Reveal>
        <div className={`${styles.heroInner} ${styles.heroShotWrap}`}>
          <div className={styles.heroShot}>
            <Image
              src={convoHero.img}
              alt="ConvoSense platform dashboard"
              fill
              sizes="(max-width: 1080px) 100vw, 1080px"
              className={styles.shotImg}
              priority
            />
          </div>
        </div>
      </section>

      {/* ===== Conversation intelligence stats ===== */}
      <section className={`${styles.section} ${styles.intelSection}`}>
        <div className={styles.inner}>
          <Reveal className={styles.intelHead} stagger>
            <span className={`${styles.badge} ${styles.badgeOnDark}`}>
              {convoMeta.intelBadge}
            </span>
            <SectionHeading
              className={styles.intelTitle}
              lines={convoMeta.intelHeading}
            />
          </Reveal>
          <StatsBar />
        </div>
      </section>

      {/* ===== The hidden risk ===== */}
      <section className={`${styles.section} ${styles.tint}`}>
        <div className={styles.inner}>
          <Reveal className={styles.centerHead} stagger>
            <span className={styles.badge}>The Hidden Risk</span>
            <SectionHeading
              className={styles.h2}
              lines={["The Challenge with Traditional Call Management"]}
            />
            <p className={styles.lead}>
              Without automated intelligence, critical insights and risks slip
              through the cracks.
            </p>
          </Reveal>
          <div className={styles.probStack}>
            {convoProblems.map((p) => (
              <article key={p.n} className={styles.probCard}>
                <div className={styles.probShot}>
                  <Image
                    src={p.img}
                    alt={p.t}
                    fill
                    sizes="(max-width: 860px) 100vw, 520px"
                    className={styles.shotImg}
                  />
                </div>
                <div className={styles.probBody}>
                  <div className={styles.probNum}>{p.n}</div>
                  <h3 className={styles.probTitle}>{p.t}</h3>
                  <p className={styles.probDesc}>{p.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Split: one platform (dark) ===== */}
      <section className={`${styles.section} ${styles.platformDark}`}>
        <div className={styles.platformInner}>
          <Reveal className={styles.platformGrid} stagger>
            <div className={styles.platformText}>
              <h2 className={styles.platformTitle}>
                Complete Conversation
                <br />
                Intelligence in One Platform
                <span className={styles.accent}>.</span>
              </h2>
              <p className={styles.platformLead}>{convoMeta.splitBody1}</p>
              <div className={styles.highlightCard}>
                <p className={styles.highlightEyebrow}>
                  What makes ConvoSense different
                </p>
                <p className={styles.highlightText}>{convoMeta.splitBody2}</p>
              </div>
            </div>
            <div className={styles.platformShot}>
              <div className={styles.platformImgWrap}>
                <Image
                  src={convoMeta.splitImg}
                  alt="Complete conversation intelligence dashboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className={styles.platformImg}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== How it works (light) ===== */}
      <section className={styles.stepsSection}>
        <div className={styles.stepsInner}>
          <Reveal className={styles.stepsHead} stagger>
            <span className={styles.badge}>How It Works</span>
            <h2 className={styles.stepsTitle}>
              From Call Recording to Intelligence
              <br />
              in Seconds
              <span className={styles.accent}>.</span>
            </h2>
            <p className={styles.stepsSub}>
              Three simple steps to transform every conversation into
              actionable insights.
            </p>
          </Reveal>
          <Reveal className={styles.stepGrid} stagger>
            {convoSteps.map((s) => (
              <div key={s.n} className={styles.stepCard}>
                <div className={styles.medallion}>
                  <span className={styles.medallionRing} aria-hidden="true" />
                  <span className={styles.medallionDisc}>{s.n}</span>
                </div>
                <h3 className={styles.stepTitle}>{s.t}</h3>
                <p className={styles.stepDesc}>{s.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== Core capabilities (sticky scroll-spy) ===== */}
      <section className={`${styles.section} ${styles.tint}`}>
        <div className={styles.capsInner}>
          <Reveal className={styles.capsHead} stagger>
            <span className={styles.badge}>Core Capabilities</span>
            <h2 className={styles.capsTitle}>
              Everything You Need to Understand
              <br />
              Every Conversation
              <span className={styles.accent}>.</span>
            </h2>
            <p className={styles.capsSub}>
              Comprehensive AI-powered analysis across every dimension of your
              calls.
            </p>
          </Reveal>
          <CapabilityTabs />
        </div>
      </section>

      {/* ===== Use cases ===== */}
      <section className={`${styles.white} ${styles.useSection}`}>
        <div className={styles.useInner}>
          <Reveal className={styles.useHead} stagger>
            <span className={styles.badge}>Use Cases</span>
            <h2 className={styles.useHeading}>
              Built for Every Department That Uses Calls
              <span className={styles.accent}>.</span>
            </h2>
            <p className={styles.useSub}>
              From sales to compliance, ConvoSense delivers value across your
              entire organization.
            </p>
          </Reveal>
          <Reveal className={styles.useGrid} stagger>
            {convoUseCases.map((u) => (
              <article key={u.t} className={styles.useCard}>
                <div className={styles.useIcon}>
                  <Icon name={u.icon} size={24} />
                </div>
                <h3 className={styles.useTitle}>{u.t}</h3>
                <p className={styles.useTag}>{u.tag}</p>
                <ul className={styles.useList}>
                  {u.points.map((pt) => (
                    <li key={pt} className={styles.useItem}>
                      <span className={styles.useArrow} aria-hidden="true">
                        →
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== CTA (inset dark panel on light band) ===== */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <Reveal className={styles.ctaPanel} stagger>
            <p className={styles.ctaEyebrow}>Get Started Today</p>
            <h2 className={styles.ctaTitle}>
              Ready to Transform Every Call
              <br />
              Into Intelligence?
            </h2>
            <p className={styles.ctaSub}>{convoMeta.ctaBody}</p>
            <div className={styles.ctaBtns}>
              <Link href={ROUTES.contact} className={styles.ctaPrimary}>
                Start Your Free Trial
              </Link>
              <Link href={ROUTES.contact} className={styles.ctaSecondary}>
                Schedule a Demo
              </Link>
            </div>
            <p className={styles.ctaFine}>
              {convoMeta.ctaFine.replace(/·/g, "•")}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
