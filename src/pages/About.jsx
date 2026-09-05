// =============================================
// About Section — Studio Heritage & Practice
// =============================================

import React from "react";
import { teamMembers, awards, siteConfig } from "../data/siteData";
import PlaceholderImage from "../components/PlaceholderImage";
import SectionHeader from "../components/SectionHeader";
import { useScrollAnimation } from "../hooks/useHooks";
import "./About.css";

// ---- Team Card ----
const TeamCard = ({ member, index }) => {
  const ref = useScrollAnimation(0.1);

  return (
    <article
      ref={ref}
      className="team-card reveal"
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="team-card__image-frame">
        <PlaceholderImage
          src={member.image}
          alt={member.name}
          objectFit="cover"
          aspectRatio="4/5"
        />
        <div className="team-card__image-badge">
          <span className="label-text">0{index + 1}</span>
        </div>
      </div>
      <div className="team-card__info">
        <div className="team-card__meta">
          <h3 className="team-card__name heading-text">{member.name}</h3>
          <span className="label-text team-card__role">{member.role}</span>
        </div>
        <p className="team-card__bio body-text">{member.bio}</p>
      </div>
    </article>
  );
};

// ---- Award Row ----
const AwardRow = ({ award, index }) => {
  const ref = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className="award-row reveal"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <span className="award-row__year">{award.year}</span>
      <div className="award-row__line" />
      <div className="award-row__content">
        <span className="award-row__name">{award.award}</span>
        <span className="award-row__project">{award.project}</span>
      </div>
    </div>
  );
};

// ---- Main About Section ----
const About = () => {
  const storyRef = useScrollAnimation(0.1);
  const valuesRef = useScrollAnimation(0.1);

  const values = [
    {
      num: "01",
      label: "Vision",
      title: "A built world worth inhabiting.",
      body: "We envision an architecture that resists spectacle in favour of substance — buildings and spaces that endure because they are genuinely attentive to human experience, local climate, and cultural continuity.",
    },
    {
      num: "02",
      label: "Mission",
      title: "Rigour, empathy, craft.",
      body: "Our mission is to bring exceptional rigour to every decision, genuine empathy to every client relationship, and an uncompromising commitment to craft — from the first sketch to the final detail.",
    },
    {
      num: "03",
      label: "Approach",
      title: "Context as the brief.",
      body: "We treat every site, every programme, every budget as a creative constraint rather than a limitation. The specificity of context is the origin of every meaningful design solution.",
    },
  ];

  return (
    <section className="about section" id="about" aria-label="About AreaNine Studio">
      <div className="container">

        {/* ---- Firm Story ---- */}
        <div className="about__story" ref={storyRef}>
          <div className="about__story-text reveal">
            <SectionHeader
              number="02"
              label="Our Heritage"
              title={"Architecture\nas a Language"}
            />
            <div className="about__story-body">
              <p className="body-text about__lead">
                AreaNine was established in {siteConfig.founded} with a singular conviction: 
                that architecture is not a service but a language — one capable of articulating how a community understands itself, how a family inhabits its daily life, and how a city presents itself to the world.
              </p>
              <p className="body-text">
                Over the past decade, our studio has expanded with projects spanning New York, London, and international contexts. What has not changed is our refusal to treat architecture as a commodity. Every brief is approached as an opportunity for genuine spatial inquiry and cultural longevity.
              </p>
            </div>
          </div>

          <div className="about__story-image-wrap reveal">
            <PlaceholderImage
              src="/assets/images/about-studio.jpg"
              alt="AreaNine Studio Environment"
              objectFit="cover"
              aspectRatio="4/5"
            />
            <div className="about__story-caption">
              <span className="label-text">AreaNine Studio — {siteConfig.location}</span>
            </div>
          </div>
        </div>

        {/* ---- Values / Manifesto ---- */}
        <div className="about__values-wrap" ref={valuesRef}>
          <div className="about__values-header">
            <span className="label-text">Core Tenets</span>
            <h3 className="about__values-heading display-text">Principles That Guide Every Line</h3>
          </div>

          <div className="about__values-grid">
            {values.map((val, i) => (
              <div
                key={val.label}
                className="about__value-card reveal"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="about__value-top">
                  <span className="about__value-num">{val.num}</span>
                  <span className="label-text">{val.label}</span>
                </div>
                <h4 className="about__value-title heading-text">{val.title}</h4>
                <p className="body-text about__value-body">{val.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Team (3 Principals) ---- */}
        <div className="about__team">
          <SectionHeader
            label="Leadership"
            title="The People Behind the Work"
            subtitle="A focused team of architects and researchers committed to precision, proportion, and enduring design."
          />
          <div className="team__grid">
            {teamMembers.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>

        {/* ---- Awards & Recognition ---- */}
        <div className="about__awards">
          <SectionHeader
            label="Recognition"
            title="Awards & Honours"
            subtitle="Distinctions awarded for architectural innovation and spatial craftsmanship."
          />
          <div className="awards__list" role="list">
            {awards.map((award, i) => (
              <AwardRow key={i} award={award} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

