import { defineCollection, z } from "astro:content";

// Homepage Page collection schema
export const homepageCollection = defineCollection({
  schema: z.object({
    banner: z.object({
      title: z.string(),
      subtitle: z.string(),
      images: z.object({
        bannerImage: z.string(),
        bannerImageAlt: z.string(),
        floatingImages: z.array(
          z.object({
            image: z.string(),
            top: z.string().optional(),
            left: z.string().optional(),
            bottom: z.string().optional(),
          })
        ).optional(),
      }),
      freeTrial: z.object({
        enable: z.boolean(),
        title: z.string(),
        placeholder: z.string(),
      }),
      footnotes: z.object({
        enable: z.boolean(),
        title: z.string(),
      }),
    }),
  }),
});

// Blog Collection Schema
export const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).optional(),
    author: z.string().optional(),
    reading_speed: z.number().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

// Company Collection Schema
export const companyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    draft: z.boolean(),

    hero: z.object({
      title: z.string(),
      gallery: z.array(
        z.object({
          enable: z.boolean(),
          src: z.string(),
          alt: z.string(),
          col_span: z.string(),
          row_span: z.string(),
          width: z.number(),
          height: z.number(),
        })
      ),
      footer: z.object({
        enable: z.boolean(),
        title: z.string(),
        description: z.string(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      }),
    }),

    values: z.object({
      enable: z.boolean(),
      title: z.string(),
      list: z.array(
        z.object({
          enable: z.boolean(),
          title: z.string(),
          description: z.string(),
          logo: z.string(),
          button: z.object({
            enable: z.boolean(),
            label: z.string(),
            link: z.string(),
          }),
        })
      ),
    }),

    vision_mission: z.object({
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
  }),
});

// Feature collection schema
export const featureCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Career Page Collection Schema
export const careerCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    draft: z.boolean().optional(),
    location: z.string().optional(),
    department: z.string().optional(),
    duration: z.string().optional(),
    salary: z.string().optional(),
    apply_button: z
      .object({
        enable: z.boolean(),
        label: z.string(),
      })
      .optional(),

    hero: z
      .object({
        title: z.string(),
        open_position_button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
        gallery: z.array(
          z.object({
            enable: z.boolean(),
            src: z.string(),
            alt: z.string(),
          })
        ),
      })
      .optional(),

    benefits_and_parks: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        list: z.array(
          z.object({
            enable: z.boolean(),
            title: z.string(),
            description: z.string(),
            logo: z.string(),
          })
        ),
      })
      .optional(),

    quick_glance_gallery: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        list: z.array(
          z.object({
            enable: z.boolean(),
            src: z.string(),
            alt: z.string(),
            col_span: z.string(),
            row_span: z.string(),
            width: z.number(),
            height: z.number(),
          })
        ),
      })
      .optional(),

    open_positions: z
      .object({
        enable: z.boolean(),
        title: z.string(),
      })
      .optional(),
  }),
});

// Changelogs Page collection schema
export const changelogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    changelog: z
      .array(
        z.object({
          version: z.string(),
          date: z.date(), // Converts string to Date if exists
          changed: z.array(z.string()).optional(),
          improvement: z.array(z.string()).optional(),
          removed: z.array(z.string()).optional(),
        })
      )
      .optional(),
  }),
});

// Pricing Page collection schema
export const pricingCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean(),
    hero: z.object({
      title: z.string().optional(),
    }),
  }),
});

// Pages collection schema
export const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Contact Page collection schema
export const contactCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    services: z.array(
      z.object({
        option: z.string(),
        value: z.string(),
      })
    ),
  }),
});

export const faqCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    page_header: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
    }),
  }),
});

export const testimonialCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    testimonials: z.object({
      title: z.string(),
    }),
  }),
});
