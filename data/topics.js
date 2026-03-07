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
            { id: "ejk-war", label: "War on Drugs", group: "branch" },
            { id: "ejk-forces", label: "State Forces", group: "branch" },
            { id: "ejk-toll", label: "Civilian Toll", group: "branch" },
            { id: "ejk-overview", label: "Period:\n2016-2022", group: "leaf" },
            { id: "ejk-accountability", label: "Lack of\nAccountability", group: "branch" },
            { id: "ejk-facts", label: "30,000+\nEst. Dead", group: "leaf" },
            { id: "ejk-cases", label: "Documented\nCases", group: "branch" },
            { id: "ejk-case1", label: "Florjohn\nCruz", group: "leaf" },
            { id: "ejk-case2", label: "Kian Delos\nSantos", group: "leaf" },
            { id: "ejk-case3", label: "Kim Lester\nRamos", group: "leaf" },
            { id: "ejk-condemnation", label: "Global\nCondemnation", group: "branch" },
            { id: "ejk-status", label: "Ongoing\nInjustice", group: "leaf" },
            { id: "ejk-impact", label: "International\nImpact", group: "leaf" },
            { id: "ejk-solutions", label: "ICC Action\n& Solutions", group: "leaf" }
        ],
        edges: [
            { from: "ejk-center", to: "ejk-war" },
            { from: "ejk-center", to: "ejk-forces" },
            { from: "ejk-center", to: "ejk-toll" },
            { from: "ejk-war", to: "ejk-overview" },
            { from: "ejk-forces", to: "ejk-accountability" },
            { from: "ejk-forces", to: "ejk-toll" },
            { from: "ejk-toll", to: "ejk-facts" },
            { from: "ejk-toll", to: "ejk-cases" },
            { from: "ejk-cases", to: "ejk-case1" },
            { from: "ejk-cases", to: "ejk-case2" },
            { from: "ejk-cases", to: "ejk-case3" },
            { from: "ejk-accountability", to: "ejk-status" },
            { from: "ejk-accountability", to: "ejk-condemnation" },
            { from: "ejk-case2", to: "ejk-accountability" },
            { from: "ejk-condemnation", to: "ejk-impact" },
            { from: "ejk-condemnation", to: "ejk-solutions" }
        ],
        content: {
            "ejk-war": {
                title: "The War on Drugs",
                body: "<p>The campaign operated under the premise of eradicating the drug trade but resulted in widespread civilian deaths without due process.</p>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "If a state frequently bypasses due process in the name of eradicating crime, what is the most likely long-term outcome?",
                        options: [
                            "Crime is permanently solved and peace is restored.",
                            "The state gains absolute trust from all of its citizens.",
                            "The boundary between law enforcement and criminal behavior dissolves.",
                            "Only guilty individuals are ever affected."
                        ],
                        insight: "While it might seem like a shortcut to peace, discarding due process fundamentally dissolves the boundary between law enforcement and criminal behavior, eroding the very foundation of justice."
                    }
                ]
            },
            "ejk-forces": {
                title: "State Forces",
                body: "<p>In Duterte's war on drugs, the state and the Philippine National Police (PNP) were the primary actors carrying out extrajudicial killings (EJKs).</p>",
                reflections: [
                    {
                        type: "essay",
                        text: "When the designated protectors of a society become its executioners, what avenues remain for average citizens to seek justice?",
                        insight: "When the state holds a monopoly on violence and uses it against its citizens, traditional avenues of justice (like local courts) are often compromised, making international or external pressure critical."
                    }
                ]
            },
            "ejk-toll": {
                title: "Civilian Toll",
                body: "<p>Thousands of civilians, including minors, were killed in police operations or by unidentified gunmen (often linked to state forces).</p>",
                reflections: [
                    {
                        type: "matching",
                        text: "Match the following terms to their consequences in the context of state-sanctioned violence:",
                        pairs: [
                            { term: "Collateral Damage", match: "Dehumanizes innocent victims to justify state actions." },
                            { term: "Unidentified Gunmen", match: "Provides plausible deniability for state forces." },
                            { term: "Vigilantism", match: "Erodes the monopoly on legitimate force." }
                        ],
                        shuffledOptions: [
                            "Erodes the monopoly on legitimate force.",
                            "Dehumanizes innocent victims to justify state actions.",
                            "Provides plausible deniability for state forces."
                        ],
                        insight: "These terms are often used by authorities to abstract and distance themselves from the violence, obscuring direct responsibility and providing plausible deniability."
                    }
                ]
            },
            "ejk-overview": {
                title: "Period: 2016-2022",
                body: "<p>Extrajudicial killing (EJK) occurs when someone in an official position deliberately kills a person without any legal process.</p><p>This occurred systematically during Rodrigo Duterte's presidential term from 2016-2022.</p>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "Why is the specific term 'extrajudicial killing' used instead of simply 'murder'?",
                        options: [
                            "It implies the act was committed legally.",
                            "It specifically denotes killings committed by state actors outside the bounds of the justice system.",
                            "It is a softer term meant to protect victims' families.",
                            "It applies exclusively to wartime casualties."
                        ],
                        insight: "The term highlights the violation of legal rights; it specifically denotes killings committed by state actors who completely bypass the legal justice system."
                    }
                ]
            },
            "ejk-facts": {
                title: "30,000+ Estimated Dead",
                body: "<ul><li><strong>Official death toll:</strong> ~6,000 in government records</li><li><strong>HR estimates:</strong> 12,000–30,000+ including civilians</li><li><strong>Primary victims:</strong> Impoverished communities and suspected petty drug offenders</li></ul>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "What does the massive discrepancy between the official death toll (6,000) and human rights estimates (30,000+) most strongly suggest?",
                        options: [
                            "Human rights organizations are notoriously bad at math.",
                            "A deliberate state effort to obscure the true scale of the violence and avoid accountability.",
                            "The victims simply moved to other countries and were miscounted.",
                            "Local journalists exaggerated the numbers for profit."
                        ],
                        insight: "Such massive discrepancies typically indicate a deliberate suppression of information by the state to avoid domestic outrage and international accountability."
                    }
                ]
            },
            "ejk-cases": {
                title: "Documented Cases",
                body: "<p>Human rights organizations and journalists have documented countless instances of extrajudicial killings. These cases highlight a distinct pattern of police violence against unarmed civilians followed by falsified reports.</p>",
                reflections: [
                    {
                        type: "essay",
                        text: "Why is it vital to document individual, specific narratives (like Kian's or Florjohn's) rather than relying solely on the aggregate statistic of '30,000 dead'?",
                        insight: "Statistics can numb us to atrocities. Individual narratives restore the humanity of the victims and make it impossible to dismiss their deaths as mere numbers."
                    }
                ]
            },
            "ejk-case1": {
                title: "Florjohn Cruz — October 2016",
                body: "<p>While fixing a broken radio on his mother's bed, police officers entered the Cruz home and ordered the mother to leave. She heard her son pleading for his life until he was killed.</p><p>No buy-bust operation took place. The police and family gave conflicting accounts of his death.</p>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "The Cruz case involves police executing a man inside his own home without a warrant. What foundational legal right does this most egregiously violate?",
                        options: [
                            "The right to bear arms.",
                            "The right to freedom of speech.",
                            "The right to privacy and protection against unreasonable search and seizure.",
                            "The right to peaceful assembly."
                        ],
                        insight: "Entering a home without a warrant and executing a resident blatantly violates the constitutional right to privacy and protection against unreasonable search and seizure."
                    }
                ]
            },
            "ejk-case2": {
                title: "Kian Delos Santos — August 2017",
                body: "<p>The 17-year-old was gunned down in an alleyway. Police claimed he was armed and killed in self-defense.</p><p>CCTV footage showed him <strong>unarmed</strong>, dragged to the alleyway before being killed. Only 1 of 4 officers was convicted. The case sparked national outrage.</p>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "Without the CCTV footage, Kian's death would likely have been recorded as 'self-defense.' What does this reveal about checking state power?",
                        options: [
                            "State reports are usually accurate, this was a rare exception.",
                            "Without objective evidence, state narratives are easily manipulated to justify state violence.",
                            "CCTV footage is unreliable and shouldn't be trusted.",
                            "It reveals that all teenagers are inherently suspicious."
                        ],
                        insight: "Without independent, objective evidence like CCTV, state narratives can easily be falsified to justify violence, underlining the paramount danger of unchecked power."
                    }
                ]
            },
            "ejk-case3": {
                title: "Kim Lester Ramos — October 2019",
                body: "<p>While helping an injured friend who had been shot, Ramos was shot point-blank by a policeman.</p><p>Police claimed he tried to snatch the officer's gun. Witnesses stated he was unarmed. Evidence was altered to support the self-defense narrative.</p>",
                reflections: [
                    {
                        type: "essay",
                        text: "When law enforcement alters physical evidence to construct a false 'self-defense' narrative, what happens to the community's relationship with the justice system?",
                        insight: "Fabricating evidence irrevocably shatters the community's trust in law enforcement, pushing society further from genuine safety and into deep-rooted fear."
                    }
                ]
            },
            "ejk-accountability": {
                title: "Lack of Accountability",
                body: "<p>Despite thousands of deaths, there has been almost zero accountability for the perpetrators within the government and law enforcement.</p>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "If a system repeatedly fails to prosecute state actors who commit murder, what is the most accurate conclusion?",
                        options: [
                            "The justice system is merely incompetent and needs more funding.",
                            "The lack of prosecution is an intentional feature of the system designed by those in power.",
                            "The murders didn't actually happen.",
                            "The victims' families simply didn't file the right paperwork."
                        ],
                        insight: "A consistent lack of prosecution strongly suggests that this impunity is an intentional feature of the system, insulated and protected by those in positions of power."
                    }
                ]
            },
            "ejk-condemnation": {
                title: "Global Condemnation",
                body: "<p>The killings were widely condemned by international human rights groups, foreign governments, and the United Nations.</p>",
                reflections: [
                    {
                        type: "essay",
                        text: "Why does it often require international intervention (like the UN or ICC) for a nation's internal human rights abuses to be thoroughly investigated?",
                        insight: "Domestic institutions are often paralyzed by the same leaders who mandate the abuses. External bodies are sometimes the only entities with the independence to investigate objectively."
                    }
                ]
            },
            "ejk-impact": {
                title: "International Impact",
                body: "<ul><li>Created diplomatic divisions between nations regarding support for the Philippines</li><li>Weakened global trust in justice systems through fear and witness intimidation</li><li>Led to the UNHRC resolution demanding an investigation (led by Iceland in 2019)</li><li>Shifted global drug policy discourse toward health-based approaches</li></ul><p><strong>Key organizations:</strong> UN, Global Commission on Drug Policy, OMCT, TRIAL International</p>",
                reflections: [
                    {
                        type: "matching",
                        text: "Match the global action to its intended impact:",
                        pairs: [
                            { term: "UNHRC Resolution (Iceland)", match: "Formally demands an international investigation into the killings." },
                            { term: "Diplomatic Divisions", match: "Isolates the offending regime politically and economically." },
                            { term: "Health-based Policy Shift", match: "Treats drug dependency as a medical issue rather than a criminal one." }
                        ],
                        shuffledOptions: [
                            "Treats drug dependency as a medical issue rather than a criminal one.",
                            "Isolates the offending regime politically and economically.",
                            "Formally demands an international investigation into the killings."
                        ],
                        insight: "International actions range from formal investigations (UNHRC) to paradigm shifts (health-based policies) and diplomatic isolation, all aiming to exert systemic pressure on the regime."
                    }
                ]
            },
            "ejk-solutions": {
                title: "ICC Action & Solutions",
                body: "<p>The <strong>International Criminal Court (ICC)</strong> launched investigations into possible crimes against humanity and remains the primary path for justice.</p><ul><li>Focus is shifting to rehabilitation and reintegration</li><li>Advocacy groups continue to demand independent investigations</li></ul>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "Is international justice (like the ICC) an effective deterrent against state-sanctioned violence?",
                        options: [
                            "Yes, because their rulings are always immediately enforced by a global police force.",
                            "No, because the ICC only prosecutes individuals from non-member states.",
                            "It is a crucial symbolic and legal framework, but its effectiveness depends heavily on the cooperation of domestic powers.",
                            "No, the ICC has no jurisdiction over human rights whatsoever."
                        ],
                        insight: "While the ICC provides a crucial legal framework and symbolic justice, its practical effectiveness often depends heavily on the cooperation of domestic powers."
                    }
                ]
            },
            "ejk-status": {
                title: "Ongoing Injustice (Current Status)",
                body: "<p>Killings have reduced under the Marcos Jr. administration, but <strong>no domestic accountability</strong> exists for the thousands of executions during the Duterte era.</p><p>Justice for victims and their families remains unserved as internal investigations stall.</p>",
                reflections: [
                    {
                        type: "essay",
                        text: "Can true societal healing or 'rehabilitation' ever be achieved if the state refuses to acknowledge and prosecute its past atrocities?",
                        insight: "True rehabilitation requires acknowledging the truth. Refusing to prosecute past crimes leaves a lingering culture of impunity that prevents foundational societal healing."
                    }
                ]
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
            { id: "gaza-center", label: "The Gaza\nCrisis", group: "center" },
            { id: "gaza-attacks", label: "Unprecedented\nAttacks", group: "branch" },
            { id: "gaza-humanitarian", label: "Humanitarian\nCrisis", group: "branch" },
            { id: "gaza-infra", label: "Infrastructure\nDestruction", group: "leaf" },
            { id: "gaza-detention", label: "Arbitrary\nDetention", group: "leaf" },
            { id: "gaza-facts", label: "69,000+\nKilled", group: "leaf" },
            { id: "gaza-blockade", label: "Total Blockade", group: "branch" },
            { id: "gaza-displaced", label: "1.2M+\nDisplaced", group: "leaf" },
            { id: "gaza-starvation", label: "Starvation\n& Famine", group: "leaf" },
            { id: "gaza-impact", label: "Global\nFallout", group: "branch" },
            { id: "gaza-legal", label: "Legal Action\n(ICJ / ICC)", group: "branch" },
            { id: "gaza-solutions", label: "Proposals\n& Solutions", group: "leaf" },
            { id: "gaza-status", label: "Ongoing Crisis", group: "leaf" }
        ],
        edges: [
            { from: "gaza-center", to: "gaza-attacks" },
            { from: "gaza-center", to: "gaza-humanitarian" },
            { from: "gaza-attacks", to: "gaza-infra" },
            { from: "gaza-attacks", to: "gaza-detention" },
            { from: "gaza-attacks", to: "gaza-facts" },
            { from: "gaza-humanitarian", to: "gaza-blockade" },
            { from: "gaza-humanitarian", to: "gaza-displaced" },
            { from: "gaza-blockade", to: "gaza-starvation" },
            { from: "gaza-infra", to: "gaza-starvation" },
            { from: "gaza-humanitarian", to: "gaza-impact" },
            { from: "gaza-attacks", to: "gaza-impact" },
            { from: "gaza-impact", to: "gaza-legal" },
            { from: "gaza-legal", to: "gaza-solutions" },
            { from: "gaza-legal", to: "gaza-status" }
        ],
        content: {
            "gaza-attacks": {
                title: "Unprecedented Attacks",
                body: "<p>In 2025, Israeli forces carried out unprecedented attacks on Gaza, amounting to war crimes, crimes against humanity, genocide, and ethnic cleansing of Palestinians.</p><p>Hamas militants killed Israeli civilians on October 7, 2023, and held ~100 hostages, but Gaza's subsequent civilian death toll and destruction remains vastly disproportional.</p>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "In international law, the principle of 'proportionality' governs military action. When a response results in vastly disproportionate civilian casualties, the action crosses the line into:",
                        options: [
                            "Justified defensive collateral damage.",
                            "Collective punishment and severe human rights violations.",
                            "A proportional pre-emptive strike.",
                            "Standard asymmetric warfare tactics."
                        ],
                        insight: "International humanitarian law emphasizes proportionality. Responses that result in vastly disproportionate civilian casualties are generally viewed outside the bounds of self-defense, crossing into collective punishment."
                    }
                ]
            },
            "gaza-humanitarian": {
                title: "Humanitarian Crisis",
                body: "<p>The military operations precipitated a catastrophic collapse of basic living conditions across the entire Gaza Strip.</p>",
                reflections: [
                    {
                        type: "essay",
                        text: "The complete collapse of basic living, sanitation, and medical conditions strips away the fundamental dignity of an entire population. Reflect on how this environment ensures long-term trauma.",
                        insight: "Depriving a population of basic sanitation and medical care systematically breaks down societal structures and ensures profound psychological and physical trauma long after the bombing stops."
                    }
                ]
            },
            "gaza-facts": {
                title: "69,000+ Killed",
                body: "<p>Over 69,000 Palestinians have been killed, including an estimated 19,000 children.</p><p>Thousands more remain missing beneath the rubble of destroyed buildings.</p>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "What is the most severe generational consequence of nearly 20,000 children being killed in a targeted geographic area?",
                        options: [
                            "It primarily causes temporary economic instability.",
                            "It constitutes the literal devastation of the society's future demographics and cultural continuity.",
                            "It ensures the surviving population will be grateful for the intervention.",
                            "It only affects the immediate families involved."
                        ],
                        insight: "The loss of nearly 20,000 children transcends immediate tragedy; it constitutes the literal devastation of a society's future demographics and cultural continuity."
                    }
                ]
            },
            "gaza-detention": {
                title: "Arbitrary Detention",
                body: "<p>Thousands of Palestinians experienced <strong>arbitrary or administrative detention</strong> and torture, raising serious concerns over violations of international humanitarian law.</p>",
                reflections: [
                    {
                        type: "matching",
                        text: "Match the legal concept to its impact on individual liberty:",
                        pairs: [
                            { term: "Administrative Detention", match: "Holding suspects indefinitely without leveling formal charges or trial." },
                            { term: "Due Process", match: "The legal requirement that the state must respect all legal rights owed to a person." },
                            { term: "Arbitrary Arrest", match: "Arrest based on sweeping assumptions rather than specific evidence." }
                        ],
                        shuffledOptions: [
                            "The legal requirement that the state must respect all legal rights owed to a person.",
                            "Arrest based on sweeping assumptions rather than specific evidence.",
                            "Holding suspects indefinitely without leveling formal charges or trial."
                        ],
                        insight: "Holding individuals indefinitely without trial fundamentally violates the core tenet of due process, stripping away legal protections entirely."
                    }
                ]
            },
            "gaza-infra": {
                title: "Infrastructure Destruction",
                body: "<p>Israeli attacks systematically targeted Gaza's critical infrastructure:</p><ul><li>All 36 hospitals damaged or destroyed</li><li>81% of buildings destroyed</li><li>Water pumps, pipelines, and power lines hit</li><li>Fuel for generators blocked</li></ul>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "According to the Geneva Conventions, the systematic destruction of hospitals and water purification plants is classified as:",
                        options: [
                            "Unfortunate but legally justified collateral damage.",
                            "A tactical necessity in urban combat.",
                            "A war crime, as these are indispensable to the survival of the civilian population.",
                            "A completely legal blockade strategy."
                        ],
                        insight: "Under the Geneva Conventions, hospitals and water systems are legally protected. Systematically destroying them is recognized as a war crime due to their indispensable role in civilian survival."
                    }
                ]
            },
            "gaza-displaced": {
                title: "1.2 Million+ Displaced",
                body: "<p>Over 1.2 million Gazans (~70% of the population) have been forcibly displaced, often multiple times to shrinking \"safe zones\" that were subsequently bombed.</p>",
                reflections: [
                    {
                        type: "essay",
                        text: "What does it mean for the psychological security of a population when the very 'safe zones' they are directed to by military authorities are subsequently bombed?",
                        insight: "Bombing designated 'safe zones' shatters any remaining trust in authority or the possibility of safety, essentially weaponizing confusion and fear against civilians."
                    }
                ]
            },
            "gaza-blockade": {
                title: "Total Blockade",
                body: "<p>For 11 weeks in early 2025, Israel imposed a <strong>total blockade</strong> on Gaza — no food, fuel, medicine, or humanitarian aid was allowed in.</p><p>Even after mid-2025, severe restrictions remained.</p>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "The deliberate weaponization of basic necessities like food and water constitutes what specific international crime when directed at an entire ethnic group?",
                        options: [
                            "Embargo tactics.",
                            "Act of Genocide / Attempted Extermination.",
                            "Standard siege warfare.",
                            "Economic sanctions."
                        ],
                        insight: "The deliberate weaponization of necessities like food and water to harm an entire demographic is widely recognized as an act of extermination or attempted genocide by international human rights bodies."
                    }
                ]
            },
            "gaza-starvation": {
                title: "Starvation & Famine",
                body: "<p>The combination of destroyed infrastructure and blockaded aid resulted in famine across Gaza City.</p><p>463 Palestinians, including 157 children, died directly from starvation and malnutrition. Human Rights Watch states that depriving civilians of essentials constitutes a <strong>war crime and genocidal act</strong>.</p>",
                reflections: [
                    {
                        type: "essay",
                        text: "Famine is often conceptualized by the public as a natural disaster. In this context, how should the global community view starvation that is the explicit result of state policy?",
                        insight: "When starvation is the result of deliberate blockades rather than environmental failure, it shifts from a tragedy to a policy choice, demanding accountability for those enforcing it."
                    }
                ]
            },
            "gaza-impact": {
                title: "Global Fallout",
                body: "<ul><li>Massive humanitarian funding required, straining the global system</li><li>Diplomatic polarization between Global North and Global South</li><li>Regional instability, investor uncertainty, oil price volatility</li><li>Red Sea shipping disruptions (by Houthi rebels in solidarity) raised freight costs globally</li><li>Western governments face pressure over arms exports to Israel</li></ul>",
                reflections: [
                    {
                        type: "matching",
                        text: "Match the global consequence to its catalyst from the Gaza crisis:",
                        pairs: [
                            { term: "Houthi Red Sea Disruptions", match: "Spiked global shipping freight and energy costs." },
                            { term: "Diplomatic Polarization", match: "Deepened the divide between the Global North and Global South." },
                            { term: "Domestic Political Pressure", match: "Sparked massive protests concerning Western arms exports to Israel." }
                        ],
                        shuffledOptions: [
                            "Deepened the divide between the Global North and Global South.",
                            "Spiked global shipping freight and energy costs.",
                            "Sparked massive protests concerning Western arms exports to Israel."
                        ],
                        insight: "The conflict acts as a catalyst for global instability, branching outwards from humanitarian issues to trigger global shipping disruptions and deep diplomatic polarization."
                    }
                ]
            },
            "gaza-legal": {
                title: "Legal Action (ICJ / ICC)",
                body: "<ul><li>The <strong>International Court of Justice (ICJ)</strong> ordered Israel to prevent genocidal acts and allow humanitarian assistance.</li><li>The <strong>International Criminal Court (ICC)</strong> pursued investigations and arrest warrants for war crimes.</li><li>However, compliance and international enforcement remain severely limited.</li></ul>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "If the highest international courts (ICJ) issue orders that a nation ignores without immediate consequence from superpowers, what does this indicate about international law?",
                        options: [
                            "International law is enforced equally across all nations.",
                            "International law is purely hypothetical and never utilized.",
                            "International law is highly subject to the political will and enforcement mechanisms of global superpowers.",
                            "The ICJ actually has no real authority."
                        ],
                        insight: "When powerful nations ignore ICJ rulings, it exposes a critical flaw in international law: its enforcement remains highly subject to the political will and backing of global superpowers."
                    }
                ]
            },
            "gaza-solutions": {
                title: "Proposals & Solutions",
                body: "<h4>Short-term Frameworks</h4><ul><li>Temporary ceasefires and hostage exchanges</li><li>UN General Assembly ceasefire resolutions (non-binding)</li><li>G7 diplomacy advocating de-escalation and humanitarian access</li></ul><h4>Long-term Proposals</h4><ul><li>Regional mediation frameworks</li><li>A two-state solution guaranteeing Palestinian sovereignty</li><li>International security guarantees</li></ul>",
                reflections: [
                    {
                        type: "essay",
                        text: "Despite widespread public and humanitarian demands, an immediate ceasefire is often blocked by political actors. What geopolitical incentives prioritize military action over the preservation of human life?",
                        insight: "Ceasefires are frequently obstructed when political or geopolitical objectives prioritize perceived security, territorial control, or deterrence over the immediate preservation of civilian life."
                    }
                ]
            },
            "gaza-status": {
                title: "Ongoing Crisis (March 2026)",
                body: "<p>The crisis remains <strong>severe and ongoing</strong> with no comprehensive agreement in sight.</p><ul><li>Many hospitals remain nonfunctional</li><li>Basic necessities are unavailable to civilians</li><li>Displacement continues</li><li>Reconstruction is impossible due to insecurity and aid restrictions</li></ul>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "As this crisis continues without resolution and infrastructure remains nonfunctional, what is the most pressing requirement for the civilian population?",
                        options: [
                            "New political elections.",
                            "Unfettered access to immediate humanitarian aid, medical supplies, and food.",
                            "Rebuilding the stock market.",
                            "Military recruitment programs."
                        ],
                        insight: "Without basic infrastructure, the most absolute prerequisite for survival is unfettered access to immediate humanitarian aid, food, and medical supplies."
                    }
                ]
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
            { id: "ice-policy", label: "Enforcement\nPolicy Shift", group: "branch" },
            { id: "ice-budget", label: "Budget & Private\nPrisons", group: "branch" },
            { id: "ice-287g", label: "287(g) Program\nExpansion", group: "leaf" },
            { id: "ice-profiling", label: "Racial\nProfiling", group: "leaf" },
            { id: "ice-mass", label: "Record Mass\nDetentions", group: "branch" },
            { id: "ice-conditions", label: "Inhumane Conditions\n& Deaths", group: "branch" },
            { id: "ice-atd", label: "179,000+ on\nElectronic Monitors", group: "leaf" },
            { id: "ice-impact", label: "Global & Economic\nImpact", group: "branch" },
            { id: "ice-labor", label: "Severe Labor\nShortages", group: "leaf" },
            { id: "ice-diplomacy", label: "Diplomatic Tensions\nover Flights", group: "leaf" },
            { id: "ice-solutions", label: "Reform\nProposals", group: "branch" },
            { id: "ice-status", label: "Judicial Stripping\n(Status)", group: "leaf" }
        ],
        edges: [
            { from: "ice-center", to: "ice-policy" },
            { from: "ice-center", to: "ice-budget" },
            { from: "ice-policy", to: "ice-287g" },
            { from: "ice-policy", to: "ice-profiling" },
            { from: "ice-287g", to: "ice-mass" },
            { from: "ice-profiling", to: "ice-mass" },
            { from: "ice-policy", to: "ice-atd" },
            { from: "ice-budget", to: "ice-conditions" },
            { from: "ice-budget", to: "ice-mass" },
            { from: "ice-mass", to: "ice-conditions" },
            { from: "ice-conditions", to: "ice-impact" },
            { from: "ice-mass", to: "ice-impact" },
            { from: "ice-impact", to: "ice-labor" },
            { from: "ice-impact", to: "ice-diplomacy" },
            { from: "ice-impact", to: "ice-solutions" },
            { from: "ice-solutions", to: "ice-status" }
        ],
        content: {
            "ice-policy": {
                title: "Enforcement Policy Shift",
                body: "<p>ICE enforcement has shifted dramatically toward mass apprehension, increasingly targeting individuals without any criminal record.</p><p>Currently, <strong>73.6% of detainees</strong> have no criminal convictions, held only for minor infractions like traffic violations.</p>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "If nearly 74% of detained individuals have no criminal record, what is the primary motive behind these mass detentions?",
                        options: [
                            "To protect public safety from dangerous felons.",
                            "To enforce strict bureaucratic compliance at the cost of human liberty.",
                            "To increase the population size of the country.",
                            "To provide free vocational training."
                        ],
                        insight: "When nearly three-quarters of detainees have no criminal record, the system often functions more to enforce strict bureaucratic deterrence than actual public safety."
                    }
                ]
            },
            "ice-budget": {
                title: "Budget & Private Prisons",
                body: "<p>Congress catalyzed this expansion by authorizing <strong>$45 billion</strong> for detention through 2029.</p><p>Much of this funding bypasses competitive bidding, flowing directly into long-term, <strong>no-bid contracts</strong> with private, for-profit prison corporations like CoreCivic and the GEO Group.</p>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "When private corporations sign billion-dollar contracts to house detainees, how does this economic incentive logically intersect with immigration enforcement?",
                        options: [
                            "It incentivizes the corporations to push for policies that reduce the number of detainees.",
                            "It incentivizes lobbying for harsher enforcement policies to ensure their prisons remain full and profitable.",
                            "It has absolutely zero impact on how policies are drafted.",
                            "It guarantees that detainees will receive luxury accommodations."
                        ],
                        insight: "The profit margins of private prison corporations create a powerful economic incentive to lobby for harsher enforcement policies to ensure their facilities remain fully booked."
                    }
                ]
            },
            "ice-287g": {
                title: "287(g) Program Expansion",
                body: "<p>The 287(g) program deputizes local municipal law enforcement to act as federal immigration agents. It now covers jurisdictions where <strong>32% of the U.S. population</strong> resides.</p><p>This causes severe psychological trauma within communities, particularly among <strong>children separated from detained parents</strong>.</p>",
                reflections: [
                    {
                        type: "essay",
                        text: "If local police act as immigration enforcers, undocumented victims of crime are less likely to call the police for help. Discuss how this policy ironically makes entire communities structurally less safe.",
                        insight: "If undocumented victims fear deportation upon interacting with police, crimes go unreported, and predators operate with impunity, thereby making the whole community structurally less safe for everyone."
                    }
                ]
            },
            "ice-profiling": {
                title: "Racial Profiling",
                body: "<p>Race and ethnicity are increasingly used as factors for establishing \"reasonable suspicion\" in enforcement actions.</p><p>This dragnet approach predominantly impacts and terrorizes <strong>Latino, Black, and Indigenous immigrant communities</strong>.</p>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "Basing 'reasonable suspicion' on race or ethnicity practically guarantees which of the following outcomes?",
                        options: [
                            "A highly precise, fair, and unbiased legal system.",
                            "The systemic harassment and violation of civil rights of minority citizens and immigrants alike.",
                            "A decrease in overall crime rates across all demographics.",
                            "Complete trust between minority communities and government officials."
                        ],
                        insight: "Relying on racial profiles practically guarantees the systemic harassment and violation of civil rights of minority citizens and immigrants alike, eroding civil liberties."
                    }
                ]
            },
            "ice-mass": {
                title: "Record Mass Detentions",
                body: "<p>As a result of these policies, ICE detention levels reached <strong>record highs</strong> by early 2026, with over <strong>68,289 individuals in physical custody</strong>.</p>",
                reflections: [
                    {
                        type: "matching",
                        text: "Match the driver of mass detention to its definition:",
                        pairs: [
                            { term: "Zero Tolerance Policies", match: "Mandating criminal prosecution for all unlawful entries, regardless of circumstance." },
                            { term: "Quota Systems", match: "Unofficial or official targets requiring agencies to apprehend a certain number of individuals." },
                            { term: "For-profit Incentives", match: "Financial dependencies of private corporations requiring a steady stream of detainees." }
                        ],
                        shuffledOptions: [
                            "Unofficial or official targets requiring agencies to apprehend a certain number of individuals.",
                            "Financial dependencies of private corporations requiring a steady stream of detainees.",
                            "Mandating criminal prosecution for all unlawful entries, regardless of circumstance."
                        ],
                        insight: "Mass detention is fueled not just by safety concerns, but by a powerful mix of zero-tolerance directives, unofficial quotas, and the stark financial incentives of the private prison industry."
                    }
                ]
            },
            "ice-atd": {
                title: "179,000+ on Electronic Monitors",
                body: "<p>Simultaneously, ICE rapidly expanded its \"Alternatives to Detention\" (ATD) program, placing 179,991 individuals under strict electronic monitoring surveilance.</p>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "While framed as an 'alternative' to physical cages, how do human rights advocates view the massive expansion of continuous electronic monitoring?",
                        options: [
                            "As a perfect solution that restores complete freedom.",
                            "As the expansion of a 'digital prison' surveillance state that still strips individuals of autonomy.",
                            "As a reliable way to boost the electronics manufacturing industry.",
                            "As a system that only tracks dangerous felons."
                        ],
                        insight: "While seemingly better than physical cages, many advocates warn that mass electronic monitoring expands a 'digital prison' surveillance state that still severely restricts autonomy and privacy."
                    }
                ]
            },
            "ice-conditions": {
                title: "Inhumane Conditions & Deaths",
                body: "<p>The explosion of the detained population into privately-run facilities led to catastrophic health and safety failures.</p><p><strong>Deaths in custody tripled to 32 fatalities</strong> in 2025 compared to the prior year. Thousands are warehoused in overcrowded tent camps without basic care.</p>",
                reflections: [
                    {
                        type: "essay",
                        text: "When a private entity's profit margin relies on minimizing operational costs, what is the inevitable consequence for the healthcare, hygiene, and nutrition provided to the detainees?",
                        insight: "When private entities prioritize minimizing operational costs for higher profit margins, the quality of healthcare, nutrition, and essential hygienic supplies for detainees inevitably plummets."
                    }
                ]
            },
            "ice-impact": {
                title: "Global & Economic Impact",
                body: "<p>The unprecedented scale of ICE enforcement operations has generated massive ripple effects both domestically and internationally.</p>",
                reflections: [
                    {
                        type: "matching",
                        text: "Match the enforcement action to its broader consequence:",
                        pairs: [
                            { term: "Mass Deportation", match: "Triggers severe labor shortages and fuels inflation in key agricultural sectors." },
                            { term: "Deportation Flights", match: "Strains diplomatic relations and triggers airspace closures by foreign nations." },
                            { term: "Chilling Effect", match: "Reduces billion-dollar remittance flows to Latin American economies." }
                        ],
                        shuffledOptions: [
                            "Strains diplomatic relations and triggers airspace closures by foreign nations.",
                            "Reduces billion-dollar remittance flows to Latin American economies.",
                            "Triggers severe labor shortages and fuels inflation in key agricultural sectors."
                        ],
                        insight: "Aggressive removal strategies cause localized labor shortages, strain diplomatic relations, and economically disrupt entire regions reliant on remittances."
                    }
                ]
            },
            "ice-labor": {
                title: "Severe Labor Shortages",
                body: "<p>The removal of millions of workers has severely strained key U.S. industries.</p><ul><li>Immigrants account for 41% of agricultural workers and 34% of construction workers</li><li>Economic analyses attribute business cost increases, inflation spikes, and slowed economic growth directly to these deportations.</li></ul>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "Which of the following highlights the deep contradiction between nationalist political rhetoric and economic reality regarding immigration?",
                        options: [
                            "Immigrants are unnecessary for a functioning modern economy.",
                            "Deporting immigrants immediately makes the domestic economy stronger and cheaper.",
                            "Political platforms demand mass deportation, while the economic reality is that critical industries would collapse without immigrant labor.",
                            "Automation has entirely replaced the need for human labor."
                        ],
                        insight: "There is a profound, often ignored contradiction between nationalist rhetoric demanding mass deportations and the harsh economic reality that critical domestic industries would collapse without immigrant labor."
                    }
                ]
            },
            "ice-diplomacy": {
                title: "Diplomatic Tensions & Deportation Flights",
                body: "<p>Mass deportation flights strained relations with Latin American nations. In 2025, Colombia briefly closed its airspace to US military deportation flights, prompting tariff threats.</p><p>The mass removal and transit policies affect nations globally, from Mexico to Haiti and Venezuela.</p>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "When the U.S. forces unstable nations to receive mass influxes of deported individuals by threatening tariffs, it is an exercise of:",
                        options: [
                            "Diplomatic cooperation and mutual aid.",
                            "Coercive geopolitical hegemony and economic blackmail.",
                            "Free market trade principles.",
                            "International human rights enforcement."
                        ],
                        insight: "Forcing smaller or unstable nations to accept deportation flights through economic threats like tariffs is an exercise of coercive geopolitical dominance rather than diplomacy."
                    }
                ]
            },
            "ice-solutions": {
                title: "Reform Proposals",
                body: "<h4>Immediate Interventions</h4><ul><li>Urging Congress to block Homeland Security budgets</li><li>Campaigns to terminate private prison contracts</li><li>Pressure to close the 287(g) deputizing program</li></ul><h4>Systemic Reforms</h4><ul><li>Expand work, family, and refugee visas to clear decades-old waitlists</li><li>Establish legal asylum processing centers along migration routes</li></ul>",
                reflections: [
                    {
                        type: "essay",
                        text: "Why is the political debate continuously centered around punitive, expensive enforcement and border walls, rather than expanding the heavily backlogged systems for legal immigration?",
                        insight: "Political debates often lean toward punitive enforcement because 'securing borders' is an easier, more visceral campaign rallying point than the complex restructuring of legal pathways."
                    }
                ]
            },
            "ice-status": {
                title: "Judicial Stripping (Current Status)",
                body: "<p>A February 2026 Fifth Circuit ruling allowed the <strong>indefinite detention</strong> of certain undocumented immigrants without bond hearings.</p><p>This effectively <strong>strips judicial review rights</strong> from detained populations. Family separations and interior enforcement dragnet operations remain ongoing nationwide.</p>",
                reflections: [
                    {
                        type: "multiple-choice",
                        text: "What fundamental democratic principle is compromised when individuals can be detained indefinitely without a bond hearing or judicial review?",
                        options: [
                            "Habeas corpus and the right to due process.",
                            "The right to bear arms.",
                            "The right to a speedy taxation.",
                            "Freedom of the press."
                        ],
                        insight: "Allowing indefinite detention without a bond hearing completely dismantles the right of habeas corpus and due process, cornerstones of democratic liberty."
                    }
                ]
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

const ADVOCACY_TEXT = "Across all these issues, <mark class=\"advocacy__highlight\">war and state-sanctioned violence are the core drivers of human rights violations</mark>. A clear pattern of power inequality emerges — those in positions of authority declare and execute violence, while civilians bear the consequences. Citizens lose their rights to live peacefully and have their basic necessities met. We stand against wars and all acts of human rights violation, including discrimination, inequality, and oppression.";
