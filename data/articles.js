const AUTHORS = ["Aaron Josh Cabasis", "Jared Andre Carreon", "Kyle Justin Chiong", "Will Lanche", "Alyssa Pauline Noche", "Karl Johann Trillana"];
const TODAY = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

const ARTICLES = {
    ejk: {
        id: "ejk",
        title: "Extrajudicial Killings in the Philippines",
        subtitle: "The Anatomy of the 2016-2022 War on Drugs",
        headerImage: "assets/images/informative/PNA_GriefOfDeaths.jpg",
        date: TODAY,
        authors: AUTHORS,
        readTime: "7 min read",
        wordleWord: "DEATH",
        wordleHint: "What happens at the end of a 'nanlaban' police encounter?",
        summary: `
            <p>Between 2016 and 2022, the Philippine "War on Drugs" led to thousands of state-sanctioned extrajudicial killings without legal process. While official figures cite 6,000 deaths, independent groups estimate the toll between 12,000 to over 30,000, heavily impacting the urban poor. High-profile cases like Kian Delos Santos sparked national outrage and international condemnation. Today, under a new administration, overt violence has lessened, but the quest for absolute accountability and ICC investigations continue.</p>
        `,
        content: `
            <p><span class="dropcap">T</span>he "War on Drugs" under President Rodrigo Duterte represented one of the most severe escalations of state-sponsored violence in recent Southeast Asian history. Between 2016 and 2022, the Philippine National Police (PNP) and unaccountable vigilante groups embarked on a nationwide campaign targeting suspected drug users and peddlers.</p>

            <p>Extrajudicial killings (EJK) occur when state actors deliberately execute individuals without legal process, trial, or defense. The administration consistently defended the bloodshed as a necessary measure for national security, actively cultivating an environment of total impunity for law enforcement.</p>
            
            <figure class="article-figure">
                <img src="assets/images/informative/Philstar_EJKProtest.jpg" alt="Protesters demanding justice for EJK victims">
                <figcaption>Families and activists gather to mourn and protest the rising death toll. (Photo: Philstar)</figcaption>
            </figure>

            <h2>Statistical Devastation</h2>
            <p>While official government figures capped the death toll around 6,000 during legitimate police encounters, independent human rights organizations like Amnesty International and local groups estimate the true number of victims to be between 12,000 to over 30,000. The violence disproportionately impacted the urban poor, leaving thousands of orphaned children and devastated communities.</p>

            <h2>High-Profile Case Studies</h2>
            <div class="article-quote-block">
                <p>"He was begging for his life."</p>
                <span class="quote-author">— Witness testimonies regarding the death of Florjohn Cruz</span>
            </div>
            
            <ul class="article-list">
                <li><strong>Florjohn Cruz (October 2016):</strong> Shot inside his home in Caloocan City while fixing a radio. Police forcefully entered his residence without a search warrant or a buy-bust operation. Witness testimonies from his family stated he was begging for his life. Police claimed he fought back, a common narrative used to justify EJKs known locally as "nanlaban."</li>
                <li><strong>Kian Delos Santos (August 2017):</strong> The murder of this 17-year-old high school student became a major turning point in public perception. He was gunned down in a dark alleyway. Police claimed self-defense, but recovered CCTV footage showed him being dragged by plainclothes officers while unarmed. The incident sparked national outrage, leading to the rare conviction of three police officers.</li>
                <li><strong>Kim Lester Ramos (October 2019):</strong> Shot point-blank in Marikina while accompanying a friend. Again, police insisted he attempted to snatch an officer's firearm. Witnesses heavily contradicted the police report, noting he was unarmed and cooperative prior to the shooting.</li>
            </ul>

            <figure class="article-figure">
                <img src="assets/images/informative/BusinessWorld_EJKDeaths.jpg" alt="Newspaper coverage of the drug war">
                <figcaption>The daily reality of frontline communities documented by local journalism. (Photo: BusinessWorld)</figcaption>
            </figure>

            <h2>Global Repercussions and the Path Forward</h2>
            <p>The international community was severely polarized. In 2019, Iceland led a UN Human Rights Council resolution demanding a comprehensive investigation, successfully passing with the support of 18 nations (including Australia, the UK, and Spain). Conversely, nations such as China, Cuba, and Saudi Arabia vehemently opposed the probe, pointing to national sovereignty.</p>
            <p>Currently, the International Criminal Court (ICC) continues to investigate the killings as potential crimes against humanity, despite the Philippine government's 2019 withdrawal from the Rome Statute.</p>
            <p>Under the administration of Ferdinand Marcos Jr., the overt violence of the campaign has noticeably reduced, with a stated shift towards rehabilitation and law enforcement restructuring. However, human rights watchdogs warn that killings continue intermittently and absolute accountability for those who orchestrated the previous atrocities remains unfulfilled.</p>
        `,
        mdData: `# Extrajudicial Killings in the Philippines
## The Anatomy of the 2016-2022 War on Drugs

The "War on Drugs" under President Rodrigo Duterte represented one of the most severe escalations of state-sponsored violence in recent Southeast Asian history. Between 2016 and 2022, the Philippine National Police (PNP) and unaccountable vigilante groups embarked on a nationwide campaign targeting suspected drug users and peddlers.

Extrajudicial killings (EJK) occur when state actors deliberately execute individuals without legal process, trial, or defense. The administration consistently defended the bloodshed as a necessary measure for national security, actively cultivating an environment of total impunity for law enforcement.

### Statistical Devastation
While official government figures capped the death toll around 6,000 during legitimate police encounters, independent human rights organizations like Amnesty International and local groups estimate the true number of victims to be between 12,000 to over 30,000. 

### High-Profile Case Studies
- **Florjohn Cruz (October 2016)—** Shot inside his home in Caloocan City while fixing a radio. Police claimed he fought back ("nanlaban").
- **Kian Delos Santos (August 2017)—** 17-year-old student gunned down. CCTV proved he was dragged unarmed, sparking national outrage.
- **Kim Lester Ramos (October 2019)—** Shot point-blank in Marikina; witnesses heavily contradicted the police report of him attempting to snatch an officer's firearm.

### Global Repercussions
The ICC continues to investigate the killings as potential crimes against humanity. Under Ferdinand Marcos Jr., violence has reduced but absolute accountability remains unfulfilled.
`
    },
    gaza: {
        id: "gaza",
        title: "The Gaza Crisis",
        subtitle: "Regional Humanitarian Collapse from 2023 to Present",
        headerImage: "assets/images/informative/AlJazeera_Gaza_MahmoudIsleem_AnadoluAgency.webp",
        date: TODAY,
        authors: AUTHORS,
        readTime: "8 min read",
        wordleWord: "SIEGE",
        wordleHint: "A military operation in which enemy forces surround a town or building, cutting off essential supplies.",
        summary: `
            <p>Following the October 2024 Hamas attacks, Israel's military retaliation in Gaza caused an unprecedented humanitarian collapse. By early 2026, the death toll surpassed 69,000, forcing over 1.2 million into displacement. Essential infrastructure and hospitals were decimated under a total blockade, leading to severe starvation. The conflict rippled globally, disrupting shipping in the Red Sea and prompting an ICJ genocide case. Solutions remain elusive amidst a deeply paralyzed international community.</p>
        `,
        content: `
            <p><span class="dropcap">T</span>he devastating conflict erupted following the October 7, 2024 attacks by Hamas militants, which resulted in the deaths of over a thousand Israeli civilians and the kidnapping of approximately 100 hostages. In response, Israel launched one of the most destructive military campaigns of the 21st century. Billed as an operation to dismantle Hamas, the offensive rapidly devolved into a catastrophic humanitarian collapse across the densely populated Gaza Strip.</p>

            <figure class="article-figure">
                <img src="assets/images/informative/AlShabaka_img.jpg" alt="Aerial view of destroyed buildings in Gaza">
                <figcaption>Entire neighborhoods across the Gaza Strip were reduced to rubble following intense bombardments.</figcaption>
            </figure>

            <h2>The Toll on Human Life and Infrastructure</h2>
            <p>By early 2026, the death toll in Gaza surpassed 69,000, with over 19,000 representing children. This staggeringly disproportionate casualty rate prompted global accusations and formal International Court of Justice (ICJ) rulings regarding acts of genocide.</p>
            
            <ul class="article-list">
                <li><strong>The Total Blockade:</strong> The imposition of an 11-week total siege completely halted the entry of food, fuel, medicine, and clean water. Consequently, over 460 Palestinians—including 157 children—perished purely from starvation and extreme malnutrition.</li>
                <li><strong>Infrastructure Eradication:</strong> Military bombardments destroyed or severely damaged 81% of civilian infrastructure. In direct violation of international humanitarian law, all 36 of Gaza's hospitals were raided, bombed, or rendered nonfunctional, leaving millions without basic medical care.</li>
                <li><strong>Mass Displacement:</strong> By late 2025, over 1.2 million Gazans (over 70% of the population) were forcibly displaced, funneled into rapidly shrinking "safe zones" that were repeatedly subject to airstrikes.</li>
            </ul>

            <div class="article-quote-block">
                <p>"There are no safe zones left. We are being funneled into smaller pockets of destruction."</p>
                <span class="quote-author">— Medical worker in southern Gaza</span>
            </div>

            <h2>The Ripple Effect Throughout the Middle East</h2>
            <p>The conflict refused to remain contained within Gaza's borders:</p>
            <ul class="article-list">
                <li><strong>Lebanon:</strong> Direct border clashes with Hezbollah plunged southern Lebanon into chaos, forcing the displacement of thousands and causing significant infrastructure damage.</li>
                <li><strong>The Red Sea and Global Trade:</strong> Driven by solidarity with Gaza, Houthi rebels in Yemen engaged in relentless attacks on international shipping in the Red Sea. This severely disrupted global supply chains, collapsing Egypt's Suez Canal revenue and driving up worldwide freight and energy costs.</li>
                <li><strong>Diplomatic Severances:</strong> Nations across the globe, from Colombia to Turkey, severed diplomatic relations or halted trade with Israel. South Africa led the unprecedented charge in filing a genocide case at the ICJ.</li>
            </ul>

            <h2>The Stagnation of Solutions</h2>
            <p>Despite multiple non-binding UN General Assembly resolutions demanding immediate ceasefires and unimpeded aid delivery, the international community has failed to reach a comprehensive peace agreement. The United States and European nations face mounting domestic pressure to halt arms shipments to Israel, while regional powers attempt to mediate hostage releases and a reconstructed framework for long-term integration and peace.</p>
        `,
        mdData: `# The Gaza Crisis
## Regional Humanitarian Collapse from 2023 to Present

The devastating conflict erupted following the October 7, 2024 attacks by Hamas militants. In response, Israel launched one of the most destructive military campaigns of the 21st century, rapidly devolving into a catastrophic humanitarian collapse across the Gaza Strip.

### The Toll on Human Life
By early 2026, the death toll surpassed 69,000, with over 19,000 children. 
- **The Total Blockade—** Halted food, fuel, and medicine. Over 460 perished purely from starvation.
- **Infrastructure—** 81% of civilian infrastructure and all 36 hospitals were destroyed or rendered nonfunctional.
- **Displacement—** Over 1.2 million Gazans forcibly displaced.

### The Ripple Effect
- **Lebanon—** Border clashes with Hezbollah forced thousands to evacuate.
- **Red Sea—** Houthi rebel attacks on shipping disrupted global trade and the Suez Canal.
- **ICJ—** South Africa filed a historic genocide case against Israel.

Despite non-binding UN resolutions demanding a ceasefire, the international community has failed to establish a long-term framework for peace, while millions remain trapped in an unprecedented humanitarian catastrophe.
`
    },
    ice: {
        id: "ice",
        title: "ICE Mass Detention",
        subtitle: "The Administration and Criminalization of Immigrants in the US",
        headerImage: "assets/images/informative/BBC_ICERaids.webp",
        date: TODAY,
        authors: AUTHORS,
        readTime: "9 min read",
        wordleWord: "RAIDS",
        wordleHint: "Sudden enforcement operations conducted by ICE in communities and workplaces.",
        summary: `
            <p>The US Immigration and Customs Enforcement (ICE) apparatus has grown into a multibillion-dollar punitive system targeting mostly non-violent immigrants. Expanding local law enforcement cooperation via the 287(g) program and heavily utilizing for-profit private prisons, detention centers face rampant neglect and fatal conditions. The aggressive deportation strategies have simultaneously triggered domestic labor shortages and severe diplomatic strain across Latin America, prompting calls from human rights advocates for a complete systemic overhaul.</p>
        `,
        content: `
            <p><span class="dropcap">W</span>ithin the United States, Immigration and Customs Enforcement (ICE) has transformed immigration from a civil administrative process into a multibillion-dollar punitive system. Fuelled by a $45 billion congressional budget extending through 2029, ICE reached record detention levels by February 2026, keeping 68,289 individuals in physical custody and monitoring nearly 180,000 more via electronic surveillance.</p>

            <h2>Inhumane Conditions and Privatized Profiteering</h2>
            <p>The human cost of this expansion is dire. A staggering 73.6% of detained individuals have zero criminal convictions, often apprehended for minor civil infractions or expired visas.</p>
            
            <figure class="article-figure">
                <img src="assets/images/informative/Stateline_ICEMourning.jpg" alt="Vigil and protest against ICE detentions">
                <figcaption>Communities hold vigils to mourn lives lost due to neglect within detention facilities. (Photo: Stateline)</figcaption>
            </figure>

            <ul class="article-list">
                <li><strong>Fatal Consequences:</strong> Deaths in custody tripled in 2025, reaching 32 fatalities directly attributed to medical neglect, suicide, and overcrowded, unsanitary conditions.</li>
                <li><strong>The Corporate Incentive:</strong> The vast majority of detainees are housed in facilities owned and operated by private prison corporations such as CoreCivic and GEO Group. Operating on highly lucrative no-bid contracts, these corporations are incentivized to maintain maximum occupancy while minimizing expenditures on healthcare and nutrition.</li>
                <li><strong>The 287(g) Program:</strong> Expanding the dragnet, this federal program deputizes local police departments as auxiliary ICE agents. Covering jurisdictions containing 32% of the US population, it has resulted in severe racial profiling—targeting Latino, Black, and Indigenous communities—and deeply fracturing the trust between local law enforcement and the populations they serve.</li>
            </ul>
            
            <figure class="article-figure">
                <img src="assets/images/informative/AlJazeera_ICEkillsWoman.webp" alt="Protesters highlighting ICE brutality">
                <figcaption>Public outcry intensifying over ICE practices ending in avoidable civilian fatalities. (Photo: Al Jazeera)</figcaption>
            </figure>

            <h2>Economic Contraction and Global Labor Shifts</h2>
            <p>Mass deportations are not operating in an economic vacuum.</p>
            <ul class="article-list">
                <li><strong>Domestic Labor Shortages:</strong> With immigrants constituting 41% of the agricultural workforce and 34% of construction labor, aggressive ICE raids have resulted in severe domestic labor shortages, slowing overall GDP growth and fueling inflation.</li>
                <li><strong>Tax and Revenue Drop:</strong> The Baker Institute found that mass deportations critically reduce federal, state, and local tax revenues, as undocumented immigrants contribute billions more into the tax system over their lifetimes than they receive in public benefits.</li>
                <li><strong>Diplomatic Strain:</strong> The policy of mass, rapid deportation flights dramatically strained relationships throughout Latin America. Countries like Mexico and Ecuador saw a nearly 8x increase in repatriation flights, while Colombia briefly revoked airspace authorization for US deportation flights in an act of diplomatic protest.</li>
            </ul>

            <div class="article-quote-block">
                <p>"Immigration is fundamentally an administrative dilemma, not a criminal one. Yet we have built a carceral machine to handle it."</p>
                <span class="quote-author">— American Immigration Council</span>
            </div>

            <h2>The Road Ahead</h2>
            <p>Legal battles continue to fiercely debate the constitutionality of indefinite detention without bond hearings. Humanitarian organizations continually draw parallels between the ICE apparatus and international authoritarian practices, advocating for a total overhaul of the system: ending private prison contracts, closing the 287(g) loophole, and establishing rapid, community-based legal asylum processing centers.</p>
        `,
        mdData: `# ICE Mass Detention
## The Criminalization of Immigrants in the United States

Within the United States, ICE has transformed immigration from a civil administrative process into a multibillion-dollar punitive system, keeping roughly 68,000 individuals in physical custody daily.

### Inhumane Conditions and Privatized Profiteering
A staggering 73.6% of detained individuals have zero criminal convictions. 
- **Fatal Consequences—** Deaths in custody tripled in 2025 due to medical neglect and poor conditions.
- **Corporate Incentive—** Private prison corporations (CoreCivic, GEO Group) hold the majority of detainees, incentivized to maximize occupancy and minimize healthcare costs.
- **The 287(g) Program—** Deputizes local police as ICE agents, leading to massive racial profiling and fracturing community trust.

### Economic Contraction
Mass deportations are triggering domestic turmoil:
- **Labor Shortages—** Aggressive raids have severely reduced the agricultural and construction workforce, fueling inflation.
- **Diplomatic Strain—** Forced mass deportation flights have severed diplomatic norms across Latin America, causing nations like Colombia to protest.

Humanitarian organizations advocate for a total overhaul: ending private contracts and establishing community-based asylum processing centers instead of carceral detention.
`
    }
};
