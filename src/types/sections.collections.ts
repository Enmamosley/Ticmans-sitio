import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Trusted Brands Section collection schema
export const trustedBrandsSectionCollection = defineCollection({
  loader: glob({
    pattern: "trusted-brands.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    list: z.array(
      z.object({
        brand: z.string(),
        logo: z.string(),
      })
    ),
  }),
});

// Our Services Section collection schema
export const ourServicesSectionCollection = defineCollection({
  loader: glob({
    pattern: "our-services.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }).optional(),
    list: z.object({
      firstServiceRow: z.object({
        landscapeColumn: z.object({
          title: z.string(),
          subtitle: z.string(),
          image: z.string(),
        }),
        squareColumn: z.object({
          title: z.string(),
          subtitle: z.string(),
          image: z.string(),
        }),
      }),
      secondServiceRow: z.object({
        landscapeColumn: z.object({
          title: z.string(),
          subtitle: z.string(),
          image: z.string(),
        }),
        squareColumn: z.object({
          title: z.string(),
          subtitle: z.string(),
          image: z.string(),
        }),
      }),
    }),
  }),
});

// Solving Problems Section collection schema
export const solvingProblemsSectionCollection = defineCollection({
  loader: glob({
    pattern: "solving-problems.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    list: z.array(
      z.object({
        enable: z.boolean(),
        title: z.string(),
        subtitle: z.string(),
        svgIcon: z.string(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      })
    ),
  }),
});

// Feature Carousel Section collection schema
export const benefitsSectionCollection = defineCollection({
  loader: glob({
    pattern: "benefits-carousel.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    list: z.array(
      z.object({
        enable: z.boolean(),
        title: z.string(),
        subtitle: z.string(),
        image: z.string(),
      })
    ),
  }),
});

// Testimonials Section collection schema
export const testimonialSectionCollection = defineCollection({
  loader: glob({
    pattern: "testimonial.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    list: z.array(
      z.object({
        name: z.string(),
        avatar: z.string(),
        designation: z.string(),
        rating: z.object({
          stars: z.number().int().min(1).max(5),
          company: z.string(),
        }),
        content: z.string(),
      })
    ),
  }),
});

// Team Members Section collection schema
export const teamMemberSectionCollection = defineCollection({
  loader: glob({
    pattern: "team-members.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    list: z.array(
      z.object({
        enable: z.boolean(),
        name: z.string(),
        position: z.string(),
        image: z.string(),
      })
    ),
  }),
});

// Available Countries collection schema
export const availableCountriesSectionCollection = defineCollection({
  loader: glob({
    pattern: "available-countries.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    image: z.string().optional(),
  }),
});

// Integration Section collection schema
export const integrationsSectionCollection = defineCollection({
  loader: glob({
    pattern: "integrations.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    list: z.array(
      z.object({
        enable: z.boolean(),
        isLargeCard: z.boolean(),
        title: z.string(),
        subtitle: z.string(),
        image: z.string(),
      })
    ),
    link: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

// Pricing Section collection schema
export const pricingSectionCollection = defineCollection({
  loader: glob({
    pattern: "pricing.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    plans_labels: z.array(z.string()),
    plans: z.array(
      z.object({
        enable: z.boolean(),
        title: z.string(),
        description: z.string(),
        color: z.string(),
        price_prefix: z.string(),
        features: z.array(
          z.object({
            enable: z.boolean(),
            included: z.boolean(),
            feature: z.string(),
          })
        ),
        price: z.object({
          yearly: z.object({
            amount: z.union([z.number(), z.string()]),
            period: z.string(),
          }),
          monthly: z.object({
            amount: z.union([z.number(), z.string()]),
            period: z.string(),
          }),
        }),
        cta: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      })
    ),
  }),
});

// Compare Plans Section collection schema
export const comparePlansSectionCollection = defineCollection({
  loader: glob({
    pattern: "compare-plans.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    enable: z.boolean(),
    compare_plans: z.object({
      compare: z.string(),
      basic: z.string(),
      premium: z.string(),
      enterprice: z.string(),
      item: z.array(
        z.object({
          title: z.string(),
          list: z.array(
            z.object({
              item: z.string(),
              basic: z.union([z.boolean(), z.string()]),
              premium: z.union([z.boolean(), z.string()]),
              enterprice: z.union([z.boolean(), z.string()]),
            })
          ),
        })
      ),
    }),
  }),
});

// Key Features Section collection schema
export const keyFeaturesSectionCollection = defineCollection({
  loader: glob({
    pattern: "key-features.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    list: z.array(
      z.object({
        enable: z.boolean(),
        title: z.string(),
        description: z.string(),
        highlights: z.array(
          z.object({
            enable: z.boolean(),
            title: z.string(),
          })
        ),
        feature_image: z.object({
          src: z.string(),
          alt: z.string(),
        }),
        floating_images: z.object({
          enable: z.boolean(),
          floating_image_1: z.string().optional(),
          floating_image_2: z.string().optional(),
        }),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          url: z.string(),
        }),
      })
    ),
  }),
});

// Statistics Section collection schema
export const statisticsSectionCollection = defineCollection({
  loader: glob({
    pattern: "statistics.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    list: z.array(
      z.object({
        enable: z.boolean(),
        title: z.string(),
        description: z.string(),
      })
    ),
  }),
});

// FAQ Section collection schema
export const faqSectionCollection = defineCollection({
  loader: glob({
    pattern: "faq.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    list: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
  }),
});

// Call to Action collection schema
export const ctaSectionCollection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    freeTrial: z.object({
      enable: z.boolean(),
      title: z.string(),
      placeholder: z.string(),
    }),
  }),
});
