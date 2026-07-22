import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import IconTile from "@/components/IconTile";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ROUTES } from "@/lib/theme";
import {
  aiStats,
  whatWeDo,
  legacySteps,
  aiAgents,
  selectedWork,
  stackGroups,
  whyUs,
} from "@/data/pages";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "AI Engineering — Tachyon Consultants",
  description:
    "AI systems that actually work: agentic AI, computer vision, model training, and self-hosted inference.",
};

export default function AiEngineeringPage() {
  return (
    <>
      <PageHero
        tint
        large
        badge="A practice area of Tachyon"
        title="AI systems that actually work."
        intro="Agents, models, and pipelines that do real work inside real businesses. We take AI from first idea to live system and own every layer in between."
        cta="Book a call →"
      />

      {/* ===== Stats strip ===== */}
      <section className={styles.statsStrip}>
        <Reveal className={styles.stats} stagger>
          {aiStats.map((s, i) => (
            <div key={s.n} className={styles.stat}>
              <IconTile name={s.icon} index={i} size={56} radius={15} iconSize={28} />
              <div className={styles.statNum}>{s.n}</div>
              <div className={styles.statDesc}>{s.d}</div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ===== What we do ===== */}
      <section className={`${styles.aiSection} ${styles["aiSection--white"]}`}>
        <div className={styles.aiInner}>
          <Reveal stagger>
            <p className={styles.aiEyebrow}>What we do</p>
            <SectionHeading className={styles.aiH2} lines={["Four disciplines, done properly"]} />
          </Reveal>

          <Reveal className={styles.cardGrid} stagger>
            {whatWeDo.map((x, i) => (
              <article key={x.t} className={styles.grayCard}>
                <div className={styles.grayCardHead}>
                  <IconTile name={x.icon} index={i} size={52} radius={14} iconSize={26} />
                  <span className={styles.grayNum}>{x.n}</span>
                </div>
                <h3 className={styles.grayTitle}>{x.t}</h3>
                <p className={styles.grayDesc}>{x.d}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== Legacy modernization ===== */}
      <section className={`${styles.aiSection} ${styles.aiSectionTint}`}>
        <div className={styles.aiInner}>
          <Reveal stagger>
            <p className={styles.aiEyebrow}>Legacy modernization</p>
            <SectionHeading className={styles.aiH2} lines={["Old systems, brought up to date"]} />
          </Reveal>

          <Reveal className={styles.cardGrid} stagger>
            {legacySteps.map((s) => (
              <div key={s.n} className={styles.legacyCard}>
                <div className={styles.legacyNum}>{s.n}</div>
                <h3 className={styles.legacyTitle}>{s.t}</h3>
                <p className={styles.legacyDesc}>{s.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== AI agents ===== */}
      <section className={`${styles.aiSection} ${styles["aiSection--white"]}`}>
        <div className={styles.aiInner}>
          <Reveal stagger>
            <p className={styles.aiEyebrow}>AI agents</p>
            <SectionHeading className={styles.aiH2} lines={["Agents for the jobs that eat your time"]} />
          </Reveal>

          <Reveal className={styles.agentGrid} stagger>
            {aiAgents.map((a, i) => (
              <div key={a.t} className={styles.agentCard}>
                <IconTile name={a.icon} index={i} size={46} radius={12} iconSize={24} />
                <h3 className={styles.agentTitle}>{a.t}</h3>
                <p className={styles.agentDesc}>{a.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== Selected work ===== */}
      <section className={`${styles.aiSection} ${styles.aiSectionTint}`}>
        <div className={styles.aiInner}>
          <Reveal stagger>
            <p className={styles.aiEyebrow}>Selected work</p>
            <SectionHeading className={styles.aiH2} lines={["Real problems. Systems that run"]} />
          </Reveal>

          <Reveal className={styles.workGrid} stagger>
            {selectedWork.map((w) => (
              <article key={w.name} className={styles.workCard}>
                <div className={styles.workHead}>
                  <Image
                    src={w.logo}
                    alt={w.name}
                    width={150}
                    height={30}
                    className={styles.workLogo}
                  />
                  <span className={styles.workSector}>{w.sector}</span>
                </div>

                <h3 className={styles.workName}>{w.name}</h3>
                <p className={styles.workProblem}>{w.problem}</p>

                <p className={styles.workLabel}>WHAT WE BUILT</p>
                <p className={styles.workBuilt}>{w.built}</p>

                <div className={styles.workTags}>
                  {w.tags.map((t) => (
                    <span key={t} className={styles.workTag}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== Our stack ===== */}
      <section className={`${styles.aiSection} ${styles["aiSection--white"]}`}>
        <div className={styles.aiInner}>
          <Reveal stagger>
            <p className={styles.aiEyebrow}>Our stack</p>
            <SectionHeading className={styles.aiH2} lines={["The tools behind the work"]} />
          </Reveal>

          <Reveal className={styles.stackGrid} stagger>
            {stackGroups.map((g, i) => (
              <div key={g.t} className={styles.stackCard}>
                <div className={styles.stackHead}>
                  <IconTile name={g.icon} index={i} size={42} radius={11} iconSize={22} />
                  <h3 className={styles.stackTitle}>{g.t}</h3>
                </div>
                <div className={styles.stackItems}>
                  {g.items.map((it) => (
                    <span key={it} className={styles.stackChip}>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== Why us (dark) ===== */}
      <section className={`${styles.aiSection} ${styles.aiSectionDark}`}>
        <div className={styles.aiInner}>
          <Reveal stagger>
            <p className={styles.whyEyebrow}>Why us</p>
          </Reveal>

          <Reveal className={styles.whyGrid} stagger>
            {whyUs.map((w, i) => (
              <div key={w.k} className={styles.whyCard}>
                <IconTile name={w.icon} index={i} size={46} radius={12} iconSize={24} dark />
                <div className={styles.whyKey}>{w.k}</div>
                <p className={styles.whyDesc}>{w.d}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className={styles.whyFoot} stagger>
            <p className={styles.whyFootHeading}>
              No handoffs. No finger-pointing. One team, model to cloud.
            </p>
            <Link href={ROUTES.contact} className={styles.arrowBtn}>
              Book a call →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
