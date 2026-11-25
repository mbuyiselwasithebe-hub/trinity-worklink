import "./globals.css";

const jobs = [
  { title: "General building assistant", category: "Construction", place: "Harrismith Central", pay: "R180/day", type: "Temporary" },
  { title: "Weekend cleaner needed", category: "Cleaning", place: "Intabazwe", pay: "R350/day", type: "Part-time" },
  { title: "Garden and fence maintenance", category: "Outdoor", place: "Harrismith", pay: "R250/day", type: "Contract" },
  { title: "Delivery driver", category: "Transport", place: "Harrismith", pay: "R150/day", type: "Temporary" },
];

const categories = [
  ["Construction", "12 jobs"], ["Cleaning", "8 jobs"], ["Gardening", "6 jobs"],
  ["Transport", "5 jobs"], ["Childcare", "4 jobs"], ["Repairs", "9 jobs"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <a className="brand" href="#"><span className="brandMark">TW</span><span>Trinity<br/><strong>Worklink</strong></span></a>
        <div className="navLinks"><a href="#jobs">Find work</a><a href="#categories">Categories</a><a href="#workers">For workers</a></div>
        <a className="navCta" href="#post-job">Post a job <span>↗</span></a>
      </nav>

      <section className="hero">
        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="eyebrow"><span /> BUILT FOR HARRISMITH</div>
            <h1>Local work.<br/><em>Real opportunities.</em></h1>
            <p>Connect with nearby employers and find trusted people for your next project in Harrismith.</p>
            <div className="searchBox">
              <div className="searchField"><span>⌕</span><input aria-label="Job or skill" placeholder="Job title or skill" /></div>
              <button>Search jobs <span>→</span></button>
            </div>
            <div className="popular">Popular: <a>Cleaning</a><a>Construction</a><a>Gardening</a><a>Driver</a></div>
          </div>
          <div className="heroVisual" aria-label="Harrismith community illustration">
            <div className="sun" /><div className="hill hillOne" /><div className="hill hillTwo" /><div className="road" />
            <div className="townCard">
              <span className="townIcon">⌂</span>
              <div><strong>Harrismith</strong><small>Free State · South Africa</small></div>
              <b>24°</b>
            </div>
            <div className="workerCard"><span className="avatar">TJ</span><div><strong>3 new matches</strong><small>near you today</small></div></div>
          </div>
        </div>
      </section>

      <section className="stats container">
        <div><strong>150+</strong><span>Local listings</span></div><div><strong>40+</strong><span>Active employers</span></div>
        <div><strong>320+</strong><span>Community members</span></div><div><strong>One</strong><span>Local community</span></div>
      </section>

      <section className="section container" id="categories">
        <div className="sectionHead"><div><span className="kicker">EXPLORE</span><h2>Find work by category</h2></div><a href="#jobs">View all categories →</a></div>
        <div className="categoryGrid">
          {categories.map(([name, count], i) => <a className="category" href="#jobs" key={name}><span className="categoryIcon">{["◫","⌂","♧","→","♡","⌁"][i]}</span><div><strong>{name}</strong><small>{count}</small></div><b>›</b></a>)}
        </div>
      </section>

      <section className="section jobsSection" id="jobs">
        <div className="container">
          <div className="sectionHead"><div><span className="kicker">NEAR YOU</span><h2>Fresh local opportunities</h2></div><a href="#">Browse all jobs →</a></div>
          <div className="jobGrid">
            {jobs.map((job) => <article className="jobCard" key={job.title}><div className="jobTop"><span>{job.category}</span><b>{job.type}</b></div><h3>{job.title}</h3><p>⌖ {job.place}</p><div className="jobBottom"><strong>{job.pay}</strong><button>View job →</button></div></article>)}
          </div>
        </div>
      </section>

      <section className="cta container" id="post-job">
        <div><span className="kicker">FOR EMPLOYERS</span><h2>Need someone for a job?</h2><p>Post your opportunity and reach skilled people in your community.</p></div>
        <a href="mailto:hello@trinityworklink.co.za">Post a job <span>↗</span></a>
      </section>

      <footer><div className="container footerInner"><div className="brand"><span className="brandMark">TW</span><span>Trinity<br/><strong>Worklink</strong></span></div><p>Connecting Harrismith, one opportunity at a time.</p><small>© 2026 Trinity Worklink</small></div></footer>
    </main>
  );
}
