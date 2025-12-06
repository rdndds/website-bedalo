import { defineCollection, z } from 'astro:content';

const wisataCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      thumbnail: image(),
      kategori: z.enum(['pantai', 'bukit']),
      lokasi: z.string(),
      mapsUrl: z.string().url(),
      tiket: z.string(),
      jamBuka: z.string(),
      fasilitas: z.array(z.string()),
      kontakPengelola: z.string().optional(),
      status: z.enum(['aktif', 'tutup-sementara']).default('aktif'),
      galeri: z.array(z.string()).optional(),
      order: z.number().default(0),
    }),
});

const umkmCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      nama: z.string(),
      pemilik: z.string(),
      kategori: z.enum(['makanan', 'kerajinan', 'jasa']),
      thumbnail: image(),
      deskripsi: z.string(),
      produk: z.array(z.string()),
      alamat: z.string(),
      mapsUrl: z.string().url(),
      whatsapp: z.string(),
      jamOperasional: z.string(),
      galeri: z.array(z.string()).optional(),
    }),
});

const beritaCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      thumbnail: image(),
      kategori: z.enum([
        'kesehatan',
        'pendidikan',
        'budaya',
        'karang-taruna',
        'umum',
      ]),
      excerpt: z.string(),
      author: z.string().optional(),
    }),
});

const galeriCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      type: z.enum(['foto', 'video']).default('foto'),
      image: image().optional(),
      videoUrl: z.string().optional(),
      kategori: z.enum(['wisata', 'kegiatan', 'umkm', 'budaya']),
      tags: z.array(z.string()).optional(),
      date: z.date(),
      featured: z.boolean().default(false),
    }),
});

// Profil dusun data collection
const profilCollection = defineCollection({
  type: 'data',
  schema: z.object({
    // For penduduk.json
    penduduk: z
      .array(
        z.object({
          rt: z.string(),
          kk: z.number(),
          jiwa: z.number(),
          color: z.string(),
        })
      )
      .optional(),
    // For pemerintahan.json
    pemerintahan: z
      .array(
        z.object({
          jabatan: z.string(),
          nama: z.string(),
          foto: z.string().nullable(),
        })
      )
      .optional(),
    // For mata-pencaharian.json
    mataPencaharian: z
      .array(
        z.object({
          icon: z.string(),
          title: z.string(),
          desc: z.string(),
          color: z.string(),
        })
      )
      .optional(),
    // For potensi-ekonomi.json
    potensiEkonomi: z
      .array(
        z.object({
          icon: z.string(),
          title: z.string(),
          desc: z.string(),
          items: z.array(z.string()),
          color: z.string(),
        })
      )
      .optional(),
    // For budaya-tradisi.json
    budayaTradisi: z
      .array(
        z.object({
          icon: z.string(),
          title: z.string(),
          desc: z.string(),
          color: z.string(),
        })
      )
      .optional(),
    // For lokasi.json
    lokasi: z
      .object({
        administratif: z.array(
          z.object({ label: z.string(), value: z.string() })
        ),
        batasWilayah: z.array(
          z.object({ arah: z.string(), value: z.string() })
        ),
        jarakFasilitas: z.array(
          z.object({
            jarak: z.string(),
            satuan: z.string(),
            nama: z.string(),
            icon: z.string(),
          })
        ),
      })
      .optional(),
    // For visi-misi.json
    visi: z.string().optional(),
    misi: z.array(z.string()).optional(),
  }),
});

// Layanan collection
const layananCollection = defineCollection({
  type: 'data',
  schema: z.object({
    layanan: z
      .array(
        z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
          lokasi: z.string(),
          jadwal: z.string(),
          color: z.string(),
          iconBg: z.string(),
        })
      )
      .optional(),
    sumberAir: z
      .array(z.object({ icon: z.string(), text: z.string() }))
      .optional(),
  }),
});

// Agenda collection
const agendaCollection = defineCollection({
  type: 'data',
  schema: z.object({
    agenda: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        jadwal: z.string(),
        waktu: z.string(),
        waktuIcon: z.string(),
        color: z.string(),
      })
    ),
  }),
});

// Site content collection for page-specific content
const siteContentCollection = defineCollection({
  type: 'data',
  schema: z.object({
    // For hero.json
    hero: z
      .object({
        title: z.string(),
        highlight: z.string(),
        description: z.string(),
        primaryButton: z.object({ label: z.string(), href: z.string() }),
        secondaryButton: z.object({ label: z.string(), href: z.string() }),
      })
      .optional(),
    // For highlights.json
    highlights: z
      .array(
        z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
          href: z.string(),
        })
      )
      .optional(),
    // For cta.json
    cta: z
      .object({
        title: z.string(),
        description: z.string(),
        primaryButton: z.object({ label: z.string(), href: z.string() }),
        secondaryButton: z.object({ label: z.string(), href: z.string() }),
      })
      .optional(),
    // For tentang-proyek.json
    digitalisasi: z
      .object({
        title: z.string(),
        paragraphs: z.array(z.string()),
        features: z.array(z.object({ icon: z.string(), title: z.string() })),
      })
      .optional(),
    programKKN: z
      .array(
        z.object({
          icon: z.string(),
          title: z.string(),
          items: z.array(z.string()),
          color: z.string(),
          iconBg: z.string(),
        })
      )
      .optional(),
    techStack: z
      .array(
        z.object({
          icon: z.string(),
          name: z.string(),
          desc: z.string(),
          color: z.string(),
          iconBg: z.string(),
        })
      )
      .optional(),
    // For kontak.json
    kontakResmi: z
      .array(
        z.object({
          title: z.string(),
          deskripsi: z.string(),
          icon: z.string(),
          color: z.string(),
          iconBg: z.string(),
        })
      )
      .optional(),
    nomorPenting: z
      .array(
        z.object({ nama: z.string(), nomor: z.string(), icon: z.string() })
      )
      .optional(),
    // For site-config.json
    siteConfig: z
      .object({
        name: z.string(),
        tagline: z.string(),
        description: z.string(),
        address: z.object({
          dusun: z.string(),
          kalurahan: z.string(),
          kapanewon: z.string(),
          kabupaten: z.string(),
          provinsi: z.string(),
          kodePos: z.string(),
        }),
        mapsEmbedUrl: z.string(),
        mapsUrl: z.string(),
        stats: z.object({
          jiwa: z.number(),
          kk: z.number(),
          rt: z.number(),
          pantai: z.number(),
        }),
      })
      .optional(),
    // For navigation.json
    navigation: z
      .object({
        mainNavItems: z.array(
          z.object({ label: z.string(), href: z.string() })
        ),
        footerNavLinks: z.array(
          z.object({ label: z.string(), href: z.string() })
        ),
        footerInfoLinks: z.array(
          z.object({ label: z.string(), href: z.string() })
        ),
      })
      .optional(),
    // For about-intro.json
    aboutIntro: z
      .object({
        quote: z.string(),
        quoteHighlight: z.string(),
        quoteFooter: z.string(),
        paragraphs: z.array(z.string()),
        buttonLabel: z.string(),
        buttonHref: z.string(),
      })
      .optional(),
    // For ui-config.json
    uiConfig: z
      .object({
        kategoriBeritaColors: z.record(
          z.object({ bg: z.string(), text: z.string(), icon: z.string() })
        ),
        kategoriBeritaTimelineColors: z.record(z.string()),
        waktuColors: z.record(z.string()),
        fasilitasIcons: z.record(z.string()),
        umkmKategoriIcons: z.record(z.string()),
        umkmKategoriLabels: z.record(
          z.object({ label: z.string(), color: z.string() })
        ),
        galeriKategoriList: z.array(
          z.object({ id: z.string(), label: z.string(), icon: z.string() })
        ),
        galeriKategoriLabels: z.record(z.string()),
      })
      .optional(),
    // For error-pages.json
    errorPages: z
      .object({
        notFound: z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
          primaryButton: z.object({ label: z.string(), href: z.string() }),
          secondaryButton: z.object({ label: z.string(), href: z.string() }),
          quickLinksTitle: z.string(),
          quickLinks: z.array(
            z.object({ href: z.string(), icon: z.string(), label: z.string() })
          ),
          beachFacts: z.array(z.string()).optional(),
        }),
      })
      .optional(),
    // For section-titles.json
    sectionTitles: z
      .record(z.object({ title: z.string(), subtitle: z.string() }))
      .optional(),
  }),
});

export const collections = {
  wisata: wisataCollection,
  umkm: umkmCollection,
  berita: beritaCollection,
  galeri: galeriCollection,
  profil: profilCollection,
  layanan: layananCollection,
  agenda: agendaCollection,
  siteContent: siteContentCollection,
};
