import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/theme";
import { Icon } from "@/lib/icons";
import IconTile from "@/components/IconTile";
import RotatingWord from "@/components/RotatingWord";
import Carousel from "@/components/Carousel";
import TechMarquee from "@/components/TechMarquee";
import {
  services,
  reasons,
  badges,
  roles,
  roleShapes,
  quotes,
  steps,
} from "@/data/home";
import SectionHeading from "@/components/SectionHeading";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/uploads/live-hero.webp"
            alt="Tachyon engineers at work"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 55vw"
            className={styles.heroImg}
          />
          <div className={styles.heroFade} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <h1 className="h1">
              Build Exceptional Digital Products With Our Top 1%
            </h1>
            <RotatingWord />
            <Link href={ROUTES.contact} className="btn btn--accent">
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Trust ===== */}
      <section className={styles.trustSection}>
        <div className={`container container--content ${styles.trust}`}>
          <SectionHeading
            className={styles.trustHeading}
            tone="muted"
            highlight="world class talent"
            lines={["100+ companies rely on our world class talent to scale their teams"]}
          />
          <Image
            src="/uploads/client-logo-grid.webp"
            alt="Client logos"
            width={900}
            height={300}
            className={styles.trustLogos}
          />
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className={styles.servicesSection}>
        <div className="container container--content">
          <div className={styles.servicesHead}>
            <SectionHeading
              className={styles.servicesHeading}
              lines={[
                "Bring design, engineering, and AI together",
                "Everything needed to build modern products",
              ]}
            />
            <Link href={ROUTES.services} className={styles.servicesLink}>
              Everything we do <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <article key={s.title} className={styles.serviceCard}>
                <div className={styles.tileSpacer}>
                  <IconTile name={s.icon} bg={s.tile} size={64} radius={14} iconSize={30} />
                </div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <div className={styles.tags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Professional services carousel ===== */}
      <section className={styles.carouselSection}>
        <div className="container container--content">
          <Carousel />
        </div>
      </section>

      {/* ===== Tech marquee ===== */}
      <TechMarquee />

      {/* ===== Testimonials ===== */}
      <section className={styles.testi}>
        <div className={styles.testiTop}>
          <div className={styles.testiPhotoWrap}>
            <Image
              src="/uploads/live-testi.webp"
              alt="Tachyon client collaboration"
              fill
              sizes="(max-width: 900px) 100vw, 47vw"
              className={styles.testiPhoto}
            />
          </div>

          <div className={styles.testiCopy}>
            <SectionHeading
              className={styles.testiHeading}
              lines={["Most clients come for one project. They stay for years"]}
            />
            <p className={styles.testiLead}>
              120+ companies, 650+ projects, and 300+ developers placed inside
              client teams. Partnerships that average 2.5 years and up.
            </p>
            <Link href={ROUTES.ai} className={styles.testiLink}>
              Our greatest hits →
            </Link>
          </div>
        </div>

        <div className={styles.quotes}>
          {quotes.map((q) => (
            <article key={q.name} className={styles.quoteCard}>
              <div className={styles.quoteHead}>
                <Image
                  src={q.logo}
                  alt={q.role}
                  width={140}
                  height={34}
                  className={styles.quoteLogo}
                />
                <span className={styles.quoteArrow} aria-hidden="true">
                  →
                </span>
              </div>
              <p className={styles.quoteText}>
                <span className={styles.quoteMark} aria-hidden="true">
                  &ldquo;
                </span>
                {q.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Awards (dark) ===== */}
      <section className={styles.awards}>
        <div className="container container--content">
          <div className={styles.awardsTop}>
            <div>
              <div className={styles.proofLabel}>THE PROOF</div>
              <h2 className={styles.awardsHeading}>
                <span className={styles.accent}>Excellence.</span>
                <br />
                Where we begin, not where we stop
                <span className={styles.accent}>.</span>
              </h2>
              <p className={styles.awardsLead}>
                Our apps have helped clients raise $50M+, earned a Top 100 spot
                on Clutch, and developed for Fortune 500 names.
              </p>
              <Link href={ROUTES.about} className={styles.awardsLink}>
                Our trophy cabinet →
              </Link>
            </div>

            <div className={styles.rings}>
              <TextRing
                id="ringProj"
                num="650+"
                label={["projects", "delivered"]}
                text="projects executed successfully • projects executed successfully • "
              />
              <TextRing
                id="ringSect"
                num="65+"
                label={["industry", "sectors"]}
                text="industry sectors • industry sectors • industry sectors • "
              />
            </div>
          </div>

          <div className={styles.badges}>
            {badges.map((b) => (
              <div key={b.title} className={styles.badge}>
                <Image
                  src={b.img}
                  alt={b.title}
                  width={124}
                  height={124}
                  className={styles.badgeImg}
                />
                <p className={styles.badgeTitle}>{b.title}</p>
                <p className={styles.badgeDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Reasons ===== */}
      <section className={styles.reasonsSection}>
        <div className={styles.reasonsInner}>
          <SectionHeading
            className={styles.reasonsHeading}
            lines={["Nothing to figure out.", "We make the hard part easy"]}
          />
          <div className={styles.reasonsGrid}>
            {reasons.map((r) => (
              <div key={r.title} className={styles.reason}>
                <span className={styles.checkbox} aria-hidden="true">
                  <Icon name="check" size={15} />
                </span>
                <div>
                  <h3 className={styles.reasonTitle}>{r.title}</h3>
                  <p className={styles.reasonDesc}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Assemble team ===== */}
      <section className={styles.assembleSection}>
        <div className={styles.assembleInner}>
          <div className={styles.roles}>
            {roles.map((r, i) => (
              <div key={r.label} className={styles.role}>
                <div className={styles.roleFigure}>
                  <div className={styles.roleShape} style={roleShapes[i]} />
                  <Image
                    src={r.img}
                    alt={r.label}
                    width={200}
                    height={236}
                    className={styles.roleImg}
                  />
                </div>
                <p className={styles.roleLabel}>{r.label}</p>
              </div>
            ))}
          </div>

          <div className={styles.assembleFoot}>
            <h2 className={styles.assembleHeading}>Let&apos;s assemble your team.</h2>
            <Link href={ROUTES.contact} className={`btn ${styles.assembleBtn}`}>
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Process ===== */}
      <section className={styles.processSection}>
        <div className={styles.processGrid}>
          <div>
            <SectionHeading
              className={styles.processHeading}
              lines={["How we work. Fast, clear, no runaround"]}
            />
            <div className={styles.processPhotoWrap}>
              <Image
                src="/uploads/live-process.webp"
                alt="A Tachyon consultant at work"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className={styles.processPhoto}
              />
            </div>
          </div>

          <div className={styles.steps}>
            {steps.map((s) => (
              <div key={s.step} className={styles.step}>
                <span className={styles.stepIcon}>
                  <Icon name={s.icon} size={22} />
                </span>
                <div>
                  <p className={styles.stepLabel}>{s.step}</p>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
            <Link
              href={ROUTES.contact}
              className={`btn btn--accent ${styles.processBtn}`}
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Closing CTA (dark) ===== */}
      <section className={styles.closing}>
        <div className={styles.closingGrid}>
          <div>
            <h2 className={styles.closingHeading}>
              Need a team that owns the whole build?
              <br />
              <span className={styles.accent}>We are that team.</span>
            </h2>
            <Link href={ROUTES.contact} className={`btn ${styles.closingBtn}`}>
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Rotating stat ring — a big number over a slowly spinning circle of text that
 * follows the circle via SVG <textPath>. `id` must be unique per ring.
 */
function TextRing({
  id,
  num,
  label,
  text,
}: {
  id: string;
  num: string;
  label: [string, string];
  text: string;
}) {
  return (
    <div className={styles.ring}>
      <svg viewBox="0 0 220 220" className={styles.ringSvg} aria-hidden="true">
        <defs>
          <path
            id={id}
            d="M110,110 m-90,0 a90,90 0 1,1 180,0 a90,90 0 1,1 -180,0"
          />
        </defs>
        <text>
          <textPath href={`#${id}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      <div className={styles.ringInner}>
        <div className={styles.ringNum}>{num}</div>
        <div className={styles.ringLabel}>
          {label[0]}
          <br />
          {label[1]}
        </div>
      </div>
    </div>
  );
}
