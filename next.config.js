module.exports = {
  images: {
    domains: [
      "lh1.googleusercontent.com",
      "lh2.googleusercontent.com",
      "lh3.googleusercontent.com",
      "lh4.googleusercontent.com",
      "lh5.googleusercontent.com",
      "lh6.googleusercontent.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "drive.citizencorner.brussels",
          },
        ],
        permanent: false,
        destination:
          "https://drive.google.com/drive/folders/10F8oO59nZo_Yja8Fz8utGDinCuB8VQe8?usp=sharing",
      },
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "calendar.citizencorner.brussels",
          },
        ],
        permanent: false,
        destination:
          "https://calendar.google.com/calendar/embed?src=apc0sg19i1ic703d5g1d53tpss%40group.calendar.google.com&ctz=Europe%2FBrussels",
      },
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "facebook.citizencorner.brussels",
          },
        ],
        permanent: false,
        destination: "https://facebook.com/citizencornerbxl",
      },
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "group.citizencorner.brussels",
          },
        ],
        permanent: false,
        destination: "https://facebook.com/groups/citizencorner",
      },
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "map.citizencorner.brussels",
          },
        ],
        permanent: false,
        destination: "https://goo.gl/maps/jXiHm57z77CLxURh8",
      },
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "donate.citizencorner.brussels",
          },
        ],
        permanent: false,
        destination: "https://opencollective.com/citizencorner/donate",
      },
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "budget.citizencorner.brussels",
          },
        ],
        permanent: false,
        destination: "https://opencollective.com/citizencorner",
      },
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "discord.citizencorner.brussels",
          },
        ],
        permanent: false,
        destination: "https://discord.gg/xyxQhRft8x",
      },
    ];
  },
};
