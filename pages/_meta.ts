export default {
  index: {
    type: 'page',
    title: 'Home',
    display: 'hidden',
    theme: {
      layout: 'raw'
    }
  },
  pricing: {
    type: 'page',
    title: 'Pricing',
    href: '/#pricing',
  },
  "privacy-policy": {
    type: 'page',
    title: 'Privacy',
  },
  "terms-of-service": {
    type: 'page',
    title: 'Terms',
  },
  "refund-policy": {
    type: 'page',
    title: 'Refund',
  },
  docs: {
    type: 'page',
    display: 'hidden',
    title: 'Documentation'
  },
  // tags: {
  //   display: "children",
  //   theme: {
  //     layout: "raw",
  //   },
  // },
  tags: {
    display: "children",
    theme: {
      layout: "raw",
    },
  },
  blog: {
    type: "page",
    title: "Blog",
    display: "hidden",
    theme: {
      layout: "raw",
      typesetting: "article",
      timestamp: false,
    }
  },
  contact: {
    type: 'page',
    title: 'Contact',
    theme: {
      layout: 'raw'
    }
  },
  404: {
    type: 'page',
    theme: {
      timestamp: false,
      typesetting: 'article'
    }
  }
}
