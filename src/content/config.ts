import { defineCollection, z } from 'astro:content';

// KKN Collection - Main KKN data per period
const kknCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      kode: z.string(),
      kampus: z.string(),
      kelompok: z.string(),
      tahun: z.number(),
      periodeMulai: z.string(),
      periodeSelesai: z.string(),
      tema: z.string(),
      heroImage: image().optional(),
      highlight: z
        .array(z.object({ label: z.string(), value: z.string() }))
        .default([]),
      socials: z
        .object({
          instagram: z.string().optional(),
          tiktok: z.string().optional(),
          youtube: z.string().optional(),
          other: z.string().optional(),
        })
        .optional(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
          })
        )
        .default([]),
      videos: z
        .array(
          z.object({
            url: z.string(),
            title: z.string(),
          })
        )
        .default([]),
    }),
});

// KKN Program Collection - Work programs
const kknProgramCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      kknKode: z.string(),
      title: z.string(),
      kategori: z.enum([
        'pendidikan',
        'kesehatan',
        'ekonomi',
        'lingkungan',
        'keagamaan',
        'pariwisata',
        'lainnya',
      ]),
      status: z.enum(['selesai', 'berjalan', 'lanjutan', 'rekomendasi']),
      lokasi: z.string(),
      tanggal: z.string().optional(),
      ringkasan: z.string(),
      impact: z.string().optional(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
          })
        )
        .default([]),
    }),
});

// KKN Member Collection - Team members
const kknMemberCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      kknKode: z.string(),
      name: z.string(),
      role: z.string(),
      division: z.string(),
      instagram: z.string().optional(),
      avatar: image().optional(),
      isKoordinator: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

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
    // For globals/page-meta.json
    pageMeta: z
      .array(
        z.object({
          id: z.string(),
          path: z.string(),
          title: z.string().optional(),
          titleTemplate: z.string().optional(),
          description: z.string().optional(),
          descriptionTemplate: z.string().optional(),
        })
      )
      .optional(),
    // For globals/ui-strings.json
    uiStrings: z
      .object({
        aria: z
          .object({
            headerNav: z.string(),
            mainContent: z.string(),
            footer: z.string().optional(),
            mobileMenuToggle: z.string(),
            mobileMenuClose: z.string(),
          })
          .optional(),
        common: z
          .object({
            all: z.string(),
            category: z.string(),
            archive: z.string(),
            back: z.string().optional(),
            share: z.string().optional(),
            openMapsShort: z.string().optional(),
            contactViaWhatsApp: z.string().optional(),
            previous: z.string(),
            next: z.string(),
            close: z.string().optional(),
            skipToContent: z.string().optional(),
            readMore: z.string(),
            loadMore: z.string(),
            featured: z.string(),
            photo: z.string(),
            video: z.string(),
          })
          .optional(),
        share: z
          .object({
            whatsapp: z.string(),
            facebook: z.string(),
            copyLink: z.string(),
            copiedToast: z.string(),
          })
          .optional(),
        footer: z
          .object({
            locationTitle: z.string(),
            navigationTitle: z.string(),
            infoTitle: z.string(),
            openMaps: z.string(),
            officialDescription: z.string(),
            builtByPrefix: z.string(),
            builtByName: z.string().optional(),
            address: z
              .object({
                dusun: z.string(),
                kalurahan: z.string(),
                kapanewon: z.string(),
                kabupaten: z.string(),
                kodePos: z.string(),
              })
              .optional(),
          })
          .optional(),
        pages: z
          .object({
            galeri: z
              .object({
                titleHighlight: z.string(),
                titleSuffix: z.string(),
                description: z.string(),
                tabPhoto: z.string(),
                tabVideo: z.string(),
                status: z.object({
                  prefix: z.string(),
                  typePhoto: z.string(),
                  typeVideo: z.string(),
                  categoryPrefix: z.string(),
                }),
                emptyPhoto: z.string().optional(),
                emptyVideo: z.string().optional(),
                noResults: z.string(),
              })
              .optional(),
            berita: z
              .object({
                titleHighlight: z.string(),
                titleSuffix: z.string(),
                description: z.string(),
                latestTitle: z.string(),
                loading: z.string(),
                countSuffix: z.string().optional(),
                empty: z.object({
                  noResults: z.string(),
                  noPosts: z.string().optional(),
                  reset: z.string(),
                  clearFilter: z.string(),
                }),
                byAuthorPrefix: z.string(),
                defaultAuthor: z.string(),
              })
              .optional(),
          })
          .optional(),
        home: z
          .object({
            highlights: z
              .object({
                titlePrefix: z.string(),
                titleHighlight: z.string(),
                titleSuffix: z.string(),
                moreLabel: z.string(),
              })
              .optional(),
            wisata: z
              .object({
                explore: z.string(),
                viewAll: z.string(),
                carouselPrevious: z.string(),
                carouselNext: z.string(),
              })
              .optional(),
            umkm: z
              .object({
                viewDetail: z.string(),
                viewAll: z.string(),
              })
              .optional(),
            berita: z
              .object({
                badgeLatest: z.string(),
                viewAll: z.string(),
              })
              .optional(),
            galeri: z
              .object({
                viewAll: z.string(),
              })
              .optional(),
            location: z
              .object({
                mapTitle: z.string(),
                addressLabel: z.string(),
                contactTitle: z.string(),
                quickContactLabel: z.string(),
                whatsAppLabel: z.string(),
                distanceToPrefix: z.string().optional(),
              })
              .optional(),
          })
          .optional(),
        kkn: z
          .object({
            hero: z
              .object({
                themeLabel: z.string(),
                viewPrograms: z.string(),
                viewGallery: z.string(),
                imageAltTemplate: z.string().optional(),
              })
              .optional(),
            impact: z
              .object({
                titlePrefix: z.string(),
                subtitle: z.string(),
              })
              .optional(),
            gallery: z
              .object({
                titlePrefix: z.string(),
                subtitleTemplate: z.string().optional(),
              })
              .optional(),
            videos: z
              .object({
                titlePrefix: z.string(),
                subtitleTemplate: z.string().optional(),
                iframeTitleTemplate: z.string(),
              })
              .optional(),
            socials: z
              .object({
                titlePrefix: z.string(),
                subtitleTemplate: z.string().optional(),
                instagramLabelTemplate: z.string(),
                tiktokLabelTemplate: z.string().optional(),
                youtubeLabelTemplate: z.string().optional(),
                shortVideoLabel: z.string(),
                documentationLabel: z.string(),
                blogLabel: z.string(),
                photosLabel: z.string(),
                otherLinksLabel: z.string(),
              })
              .optional(),
            members: z
              .object({
                titlePrefix: z.string(),
                subtitleTemplate: z.string().optional(),
                filterAll: z.string(),
                empty: z.string(),
                emptyDivision: z.string(),
              })
              .optional(),
            notes: z
              .object({
                titlePrefix: z.string(),
                titleHighlight: z.string(),
                subtitleTemplate: z.string().optional(),
                typeLabels: z.record(z.string()).optional(),
              })
              .optional(),
            programs: z
              .object({
                titlePrefix: z.string(),
                impactLabel: z.string(),
                empty: z.string(),
                noMatch: z.string(),
                subtitle: z.string(),
                allStatus: z.string(),
                categoryLabels: z.record(z.string()).optional(),
                statusLabels: z.record(z.string()).optional(),
              })
              .optional(),
            timeline: z
              .object({
                titlePrefix: z.string(),
                subtitle: z.string(),
              })
              .optional(),
            memberCard: z
              .object({
                coordinator: z.string(),
                instagram: z.string(),
              })
              .optional(),
          })
          .optional(),
      })
      .optional(),
    // For hero.json
    hero: z
      .object({
        title: z.string(),
        highlight: z.string(),
        description: z.string(),
        imageAlt: z.string().optional(),
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
    // For kontak-form.json
    contactForm: z
      .object({
        title: z.string(),
        description: z.string().optional(),
        actionUrl: z.string().url(),
        target: z.string().default('_blank'),
        submitLabel: z.string(),
        note: z.string().optional(),
        toast: z
          .object({
            message: z.string(),
            type: z.string().default('success'),
            duration: z.number().default(5000),
          })
          .optional(),
        fields: z.array(
          z.object({
            id: z.string(),
            label: z.string(),
            name: z.string(),
            type: z.enum(['text', 'textarea', 'select']),
            placeholder: z.string().optional(),
            required: z.boolean().default(true),
            options: z
              .array(z.object({ label: z.string(), value: z.string() }))
              .optional(),
            rows: z.number().optional(),
          })
        ),
      })
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
    // For pages/agenda.json
    agendaPage: z
      .object({
        hero: z.object({
          titleHighlight: z.string(),
          titleSuffix: z.string(),
          description: z.string(),
        }),
        agendaRutin: z.object({
          title: z.string(),
          subtitle: z.string(),
        }),
        beritaTerbaru: z.object({
          title: z.string(),
          viewAll: z.string(),
          empty: z.string(),
        }),
      })
      .optional(),
    // For pages/potensi.json
    potensiPage: z
      .object({
        hero: z.object({
          title: z.string(),
          highlight: z.string(),
          description: z.string(),
          stats: z.array(z.object({ icon: z.string(), label: z.string() })),
        }),
        wisataTags: z.array(z.string()),
        wisataSection: z.object({
          title: z.string(),
          subtitle: z.string(),
          ctaLabel: z.string(),
          emptyState: z.string(),
        }),
        wisataCard: z.object({
          ticketLabel: z.string(),
          hoursLabel: z.string(),
          locationLabel: z.string(),
          locationValue: z.string(),
          facilitiesTitle: z.string(),
          mapsLabel: z.string(),
          whatsAppLabel: z.string(),
        }),
        umkmSection: z.object({
          title: z.string(),
          subtitle: z.string(),
          emptyState: z.string(),
        }),
        additionalSections: z.object({
          potensiEkonomiTitle: z.string(),
          budayaTradisiTitle: z.string(),
        }),
        detailPages: z.object({
          backLabel: z.string(),
          shareLabel: z.string(),
          related: z.object({ wisata: z.string(), umkm: z.string() }),
          wisata: z.object({
            badgeClosed: z.string(),
            locationLabel: z.string(),
            ticketLabel: z.string(),
            hoursLabel: z.string(),
            facilitiesTitle: z.string(),
            galleryTitle: z.string(),
          }),
          umkm: z.object({
            addressLabel: z.string(),
            hoursLabel: z.string(),
            productsTitle: z.string(),
            galleryTitle: z.string(),
          }),
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
  kkn: kknCollection,
  kknProgram: kknProgramCollection,
  kknMember: kknMemberCollection,
};
