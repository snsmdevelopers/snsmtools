/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://snsmtools.in",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: "weekly",
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/api/" },
    ],
  },
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/calculators": 0.9,
      "/calculators/emi-calculator": 0.95,
      "/calculators/sip-calculator": 0.95,
      "/calculators/fd-calculator": 0.9,
      "/calculators/income-tax-calculator": 0.95,
      "/calculators/gst-calculator": 0.9,
      "/calculators/hra-calculator": 0.85,
      "/calculators/ppf-calculator": 0.85,
      "/calculators/age-calculator": 0.9,
      "/blog": 0.8,
      "/blog/how-to-calculate-emi-home-loan": 0.75,
      "/blog/sip-vs-lump-sum-investment": 0.75,
      "/blog/new-vs-old-tax-regime-2024-25": 0.75,
      "/about": 0.6,
      "/contact": 0.5,
      "/privacy": 0.4,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
