const TOPICS = {
    ejk: {
        id: "ejk",
        title: "EJK",
        fullTitle: "Extrajudicial Killings",
        subtitle: "War on Drugs — Philippines",
        period: "2016–2022",
        color: "#e74c3c",
        colorDim: "rgba(231,76,60,0.15)",
        stat: "30,000+",
        statLabel: "estimated victims",
        summary: "State-sanctioned killings during President Duterte's war on drugs claimed thousands of lives without any legal process, devastating communities across the Philippines.",
        nodes: [
            { id: "ejk-center", label: "EJK in the\nPhilippines", group: "center" },
            { id: "ejk-overview", label: "What is EJK?", group: "branch" },
            { id: "ejk-facts", label: "Key Facts", group: "branch" },
            { id: "ejk-cases", label: "Case Studies", group: "branch" },
            { id: "ejk-impact", label: "Global Impact", group: "branch" },
            { id: "ejk-solutions", label: "Solutions", group: "branch" },
            { id: "ejk-status", label: "Current Status", group: "branch" },
            { id: "ejk-case1", label: "Florjohn\nCruz", group: "leaf" },
            { id: "ejk-case2", label: "Kian Delos\nSantos", group: "leaf" },
            { id: "ejk-case3", label: "Kim Lester\nRamos", group: "leaf" }
        ],
        edges: [
            { from: "ejk-center", to: "ejk-overview" },
            { from: "ejk-center", to: "ejk-facts" },
            { from: "ejk-center", to: "ejk-cases" },
            { from: "ejk-center", to: "ejk-impact" },
            { from: "ejk-center", to: "ejk-solutions" },
            { from: "ejk-center", to: "ejk-status" },
            { from: "ejk-cases", to: "ejk-case1" },
            { from: "ejk-cases", to: "ejk-case2" },
            { from: "ejk-cases", to: "ejk-case3" }
        ],
        content: {
            "ejk-overview": {
                title: "What is EJK?",
                body: "<p>Extrajudicial killing (EJK) occurs when someone in an official position deliberately kills a person without any legal process.</p><p>In Duterte's war on drugs, the state and police were the primary actors. The campaign operated under the premise of eradicating the drug trade but resulted in widespread civilian deaths.</p>"
            },
            "ejk-facts": {
                title: "Key Facts",
                body: "<ul><li><strong>Period:</strong> 2016–2022 (Duterte's presidential term)</li><li><strong>Official death toll:</strong> ~6,000 in government records</li><li><strong>HR estimates:</strong> 12,000–30,000+ including civilians</li><li><strong>Primary actors:</strong> Philippine National Police and state forces</li></ul>"
            },
            "ejk-cases": {
                title: "Case Studies",
                body: "<p>Documented instances of extrajudicial killings during the war on drugs. Each case highlights the pattern of police violence against unarmed civilians.</p>"
            },
            "ejk-case1": {
                title: "Florjohn Cruz — October 2016",
                body: "<p>While fixing a broken radio on his mother's bed, police officers entered the Cruz home and ordered the mother to leave. She heard her son pleading for his life until he was killed.</p><p>No buy-bust operation took place. The police and family gave conflicting accounts of his death.</p>"
            },
            "ejk-case2": {
                title: "Kian Delos Santos — August 2017",
                body: "<p>The 17-year-old was gunned down in an alleyway. Police claimed he was armed and killed in self-defense.</p><p>CCTV footage showed him <strong>unarmed</strong>, dragged to the alleyway before being killed. Only 1 of 4 officers was convicted. The case sparked national outrage.</p>"
            },
            "ejk-case3": {
                title: "Kim Lester Ramos — October 2019",
                body: "<p>While helping an injured friend who had been shot, Ramos was shot point-blank by a policeman.</p><p>Police claimed he tried to snatch the officer's gun. Witnesses stated he was unarmed. Evidence was altered to support the self-defense narrative.</p>"
            },
            "ejk-impact": {
                title: "Global Impact",
                body: "<ul><li>Widely criticized by international human rights groups</li><li>The <strong>ICC</strong> launched investigations into possible crimes against humanity</li><li>Created political divisions between nations</li><li>Weakened trust in justice systems through fear and witness intimidation</li><li>Shifted global drug policy discourse toward health-based approaches</li></ul><p><strong>Key organizations:</strong> UN, ICC, Global Commission on Drug Policy, OMCT, TRIAL International</p>"
            },
            "ejk-solutions": {
                title: "Solutions & Accountability",
                body: "<p>No comprehensive solution has been implemented.</p><ul><li>Killings reduced under Marcos Jr. administration</li><li>Focus shifted to rehabilitation and reintegration</li><li>No accountability for government and law enforcement actors</li><li>ICC investigation remains the primary path for justice</li></ul>"
            },
            "ejk-status": {
                title: "Current Status",
                body: "<p>Killings have reduced under the Marcos Jr. administration, but <strong>no accountability</strong> exists for the thousands of executions during the Duterte era.</p><p>Justice for victims and their families remains unserved.</p>"
            }
        }
    },

    gaza: {
        id: "gaza",
        title: "Gaza",
        fullTitle: "The Gaza Crisis",
        subtitle: "Human Rights Violations in the Middle East",
        period: "2023–Present",
        color: "#e67e22",
        colorDim: "rgba(230,126,34,0.15)",
        stat: "69,000+",
        statLabel: "Palestinians killed",
        summary: "Israeli forces carried out unprecedented attacks on Gaza amounting to war crimes, crimes against humanity, and genocide, killing tens of thousands including 19,000 children.",
        nodes: [
            { id: "gaza-center", label: "Gaza\nCrisis", group: "center" },
            { id: "gaza-overview", label: "Overview", group: "branch" },
            { id: "gaza-facts", label: "Key Facts", group: "branch" },
            { id: "gaza-blockade", label: "The Blockade", group: "branch" },
            { id: "gaza-infra", label: "Infrastructure\nDestruction", group: "branch" },
            { id: "gaza-detention", label: "Detention\n& Torture", group: "branch" },
            { id: "gaza-legal", label: "Legal Action", group: "branch" },
            { id: "gaza-impact", label: "Global Impact", group: "branch" },
            { id: "gaza-solutions", label: "Solutions", group: "branch" },
            { id: "gaza-status", label: "Current Status", group: "branch" }
        ],
        edges: [
            { from: "gaza-center", to: "gaza-overview" },
            { from: "gaza-center", to: "gaza-facts" },
            { from: "gaza-center", to: "gaza-blockade" },
            { from: "gaza-center", to: "gaza-infra" },
            { from: "gaza-center", to: "gaza-detention" },
            { from: "gaza-center", to: "gaza-legal" },
            { from: "gaza-center", to: "gaza-impact" },
            { from: "gaza-center", to: "gaza-solutions" },
            { from: "gaza-center", to: "gaza-status" }
        ],
        content: {
            "gaza-overview": {
                title: "Overview",
                body: "<p>In 2025, Israeli forces carried out unprecedented attacks on Gaza, amounting to war crimes, crimes against humanity, genocide, and ethnic cleansing of Palestinians.</p><p>Hamas militants killed Israeli civilians on October 7, 2023, and held ~100 hostages, many subjected to torture or sexual violence. However, Gaza's civilian death toll remains far larger.</p>"
            },
            "gaza-facts": {
                title: "Key Facts",
                body: "<ul><li><strong>Death toll:</strong> Over 69,000 Palestinians killed (including 19,000 children)</li><li><strong>Displacement:</strong> Over 1.2 million Gazans (~70% of population) forcibly displaced</li><li><strong>Buildings destroyed:</strong> 81% of Gaza's structures</li><li><strong>Hospitals:</strong> All 36 hospitals damaged or destroyed</li><li><strong>Starvation deaths:</strong> 463 Palestinians (157 children) died of malnutrition</li></ul>"
            },
            "gaza-blockade": {
                title: "The Blockade",
                body: "<p>For 11 weeks in early 2025, Israel imposed a <strong>total blockade</strong> on Gaza — no food, fuel, medicine, or humanitarian aid was allowed in.</p><p>Even after mid-2025, severe restrictions remained, resulting in famine across Gaza City. 463 Palestinians, including 157 children, died of starvation and malnutrition.</p>"
            },
            "gaza-infra": {
                title: "Infrastructure Destruction",
                body: "<p>Israeli attacks systematically targeted Gaza's critical infrastructure:</p><ul><li>All 36 hospitals damaged or destroyed</li><li>81% of buildings destroyed</li><li>Water pumps, pipelines, and power lines hit</li><li>Fuel for generators blocked</li></ul><p>Human Rights Watch states that depriving civilians of essentials constitutes a <strong>war crime and genocidal act</strong>.</p>"
            },
            "gaza-detention": {
                title: "Detention & Torture",
                body: "<p>Thousands of Palestinians experienced <strong>arbitrary or administrative detention</strong> and torture, raising serious concerns over violations of international humanitarian law.</p>"
            },
            "gaza-legal": {
                title: "Legal Action",
                body: "<ul><li>The <strong>ICJ</strong> ordered Israel to prevent genocidal acts and allow humanitarian assistance</li><li>The <strong>ICC</strong> pursued investigations and arrest warrants for war crimes and crimes against humanity</li><li>Compliance and enforcement remain limited</li></ul>"
            },
            "gaza-impact": {
                title: "Global Impact",
                body: "<ul><li>Massive humanitarian funding required, straining the global system</li><li>Diplomatic polarization between Global North and Global South</li><li>Weakened trust in international law enforcement</li><li>Regional instability, investor uncertainty, oil price volatility</li><li>Egypt and Jordan face pressure over refugee intake</li><li>Red Sea shipping disruptions raised freight and energy costs globally</li><li>Western governments face pressure over arms exports to Israel</li><li>Attention diverted from Ukraine and Sudan crises</li></ul>"
            },
            "gaza-solutions": {
                title: "Solutions",
                body: "<h4>Short-term</h4><ul><li>Temporary ceasefires (no comprehensive agreement yet)</li></ul><h4>International Action</h4><ul><li>UN General Assembly ceasefire resolutions (non-binding)</li><li>UNHRC investigations into starvation as genocide</li><li>G7 advocates: de-escalation, sanctions, arms limits, humanitarian access</li></ul><h4>Long-term Proposals</h4><ul><li>Regional mediation and renewed ceasefires</li><li>Two-state solution</li><li>International security guarantees</li></ul>"
            },
            "gaza-status": {
                title: "Current Status (March 2026)",
                body: "<p>The crisis remains <strong>severe and ongoing</strong>.</p><ul><li>Many hospitals remain nonfunctional</li><li>Basic necessities unavailable to civilians</li><li>Displacement continues</li><li>Cross-border strikes, proxy conflicts, missile attacks ongoing</li><li>Reconstruction slow due to insecurity and aid restrictions</li></ul>"
            }
        }
    },

    ice: {
        id: "ice",
        title: "ICE",
        fullTitle: "ICE Mass Detention",
        subtitle: "War on Immigrants — United States",
        period: "2025–Present",
        color: "#3498db",
        colorDim: "rgba(52,152,219,0.15)",
        stat: "68,000+",
        statLabel: "individuals detained",
        summary: "U.S. Immigration and Customs Enforcement detention levels reached record highs, with mass detentions, racial profiling, and family separations affecting hundreds of thousands.",
        nodes: [
            { id: "ice-center", label: "ICE Mass\nDetention", group: "center" },
            { id: "ice-overview", label: "Overview", group: "branch" },
            { id: "ice-facts", label: "Key Facts", group: "branch" },
            { id: "ice-profiling", label: "Racial\nProfiling", group: "branch" },
            { id: "ice-budget", label: "Budget &\nPrivate Prisons", group: "branch" },
            { id: "ice-287g", label: "287(g)\nProgram", group: "branch" },
            { id: "ice-impact", label: "Global Impact", group: "branch" },
            { id: "ice-solutions", label: "Solutions", group: "branch" },
            { id: "ice-status", label: "Current Status", group: "branch" }
        ],
        edges: [
            { from: "ice-center", to: "ice-overview" },
            { from: "ice-center", to: "ice-facts" },
            { from: "ice-center", to: "ice-profiling" },
            { from: "ice-center", to: "ice-budget" },
            { from: "ice-center", to: "ice-287g" },
            { from: "ice-center", to: "ice-impact" },
            { from: "ice-center", to: "ice-solutions" },
            { from: "ice-center", to: "ice-status" }
        ],
        content: {
            "ice-overview": {
                title: "Overview",
                body: "<p>In early 2026, ICE detention levels reached <strong>record highs</strong> with 68,289 individuals in physical custody.</p><p>A notable enforcement shift now targets individuals without criminal records — 73.6% of detainees have no criminal convictions.</p>"
            },
            "ice-facts": {
                title: "Key Facts",
                body: "<ul><li><strong>Physical custody:</strong> 68,289 individuals (Feb 2026)</li><li><strong>No criminal record:</strong> 73.6% of detainees</li><li><strong>Deaths in custody (2025):</strong> 32 fatalities — tripled from prior year</li><li><strong>Electronic monitoring:</strong> 179,991 via ATD programs</li><li><strong>Budget:</strong> $45 billion authorized through 2029</li></ul>"
            },
            "ice-profiling": {
                title: "Racial Profiling",
                body: "<p>Race and ethnicity are used as factors for establishing reasonable suspicion in enforcement actions.</p><p>This has led to increased racial profiling, predominantly impacting <strong>Latino, Black, and Indigenous immigrant communities</strong>.</p>"
            },
            "ice-budget": {
                title: "Budget & Private Prisons",
                body: "<p>Congress authorized <strong>$45 billion</strong> for detention through 2029.</p><p>Much of this funding bypasses competitive bidding and flows into long-term, <strong>no-bid contracts</strong> with private prison corporations like CoreCivic and the GEO Group.</p>"
            },
            "ice-287g": {
                title: "287(g) Program",
                body: "<p>The 287(g) program deputizes local law enforcement to act as federal immigration agents. It now covers jurisdictions where <strong>32% of the U.S. population</strong> resides.</p><p>The expansion heightens community fear and causes severe psychological trauma, particularly among <strong>children separated from detained parents</strong>.</p>"
            },
            "ice-impact": {
                title: "Global Impact",
                body: "<p>The unprecedented scale of ICE enforcement operations has implications beyond U.S. borders:</p><ul><li>Diplomatic tensions with Latin American nations over deportation flights</li><li>International criticism from human rights organizations</li><li>Chilling effect on immigration worldwide</li><li>Economic disruption to industries dependent on immigrant labor</li></ul>"
            },
            "ice-solutions": {
                title: "Solutions",
                body: "<h4>Current Efforts</h4><ul><li>Community groups urging Congress to block the 2026 Homeland Security budget</li><li>Campaigns to end private prison contracts</li><li>Push to close the 287(g) program</li></ul><h4>Long-term Proposals</h4><ul><li>Expand work, family, and refugee visas to clear old waitlists</li><li>Establish legal asylum processing centers before border crossings</li><li>Shift from punitive enforcement to systemic immigration reform</li></ul>"
            },
            "ice-status": {
                title: "Current Status (March 2026)",
                body: "<p>The situation remains <strong>highly active and inhumane</strong>.</p><ul><li>68,000+ in physical custody; 179,991 electronically monitored</li><li>February 2026 Fifth Circuit ruling allows indefinite detention without bond hearings</li><li>Detained individuals effectively stripped of judicial review rights</li><li>Family separations, mass detentions, and interior enforcement ongoing nationwide</li></ul>"
            }
        }
    }
};

const PUZZLE_STEPS = [
    { id: 1, label: "Acknowledge", icon: "👁", description: "Recognize that violations are occurring and identify the victims", hint: "This is the very first step — before anything else, we must open our eyes." },
    { id: 2, label: "Investigate", icon: "🔍", description: "Document evidence, gather testimonies, and expose the truth", hint: "After acknowledging, we need to dig deeper — gather evidence and uncover the truth." },
    { id: 3, label: "Hold Accountable", icon: "⚖️", description: "Pursue legal action through international courts and tribunals", hint: "With evidence in hand, it's time for justice — bring violators before the courts." },
    { id: 4, label: "Reform Policy", icon: "📜", description: "Change the laws and systems that enable abuse of power", hint: "Accountability exposes broken systems — now change the laws that enabled the abuse." },
    { id: 5, label: "Provide Aid", icon: "🤝", description: "Deliver humanitarian assistance to affected communities", hint: "While systems reform, those affected still need immediate help and support." },
    { id: 6, label: "Protect Rights", icon: "🛡️", description: "Ensure lasting freedoms through education, advocacy, and vigilance", hint: "The final safeguard — ensure these rights are permanently protected going forward." }
];

const ADVOCACY_TEXT = "Across all these issues, war and state-sanctioned violence are the core drivers of human rights violations. A clear pattern of power inequality emerges — those in positions of authority declare and execute violence, while civilians bear the consequences. Citizens lose their rights to live peacefully and have their basic necessities met. We stand against wars and all acts of human rights violation, including discrimination, inequality, and oppression.";
