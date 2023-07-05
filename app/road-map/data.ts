interface Release {
  version: string;
  label: string;
  date: string;
  features: Feature[];
}

interface Feature {
  label: string;
  description?: string;
  done?: boolean;
}

export const releases: Release[] = [
  {
    version: "0.0.1",
    label: "First release",
    date: "2023-08-01",
    features: [
      {
        label: "Revamp the overall design",
        done: true,
      },
      {
        label: "A unique infinite animated background",
        done: true,
      },
      {
        label: "Statically generated pages with sorts and filters for the blog",
        done: true,
      },
      {
        label: "S3 bucket integration for the assets",
        done: true,
      },
      {
        label: "Creating a consistent typography system",
        done: true,
      },
      {
        label: "Responsive design for mobile and web",
        done: true,
      },
      {
        label: "SEO integration for blogs",
        done: true,
      },
      {
        label: "Post sharing integration",
      },
      {
        label: "Sitemap generation script for the blog",
      },
      {
        label: "Sort and filter integration in API",
      },
      {
        label: "A basic E2E test integration",
      },
      {
        label: "Integrate a hosting service",
      },
      {
        label: "Firebase analytics integration",
      },
      {
        label: "Connect the domain name",
      },
      {
        label: "[Experiment] Cloudflare caching for the assets on black blaze",
      },
      {
        label: "SEO with webmaster and other tools",
      },
      {
        label: "Integrate a CI/CD pipeline",
      },
    ],
  },
  {
    version: "unreleased",
    label: "Second release",
    date: "2024-01-01",
    features: [
      {
        label: "Integrate a Database for the blog",
      },
    ],
  },
];
