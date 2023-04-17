import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Metadata
 * Id: baf884be-531f-441f-ae88-64205efdd0f6
 * Codename: metadata
 */
export type Metadata = IContentItem<{
  /**
   * Meta description (text)
   * Required: false
   * Id: 2e555cc1-1eae-520c-189e-28548904f529
   * Codename: metadata__meta_description
   *
   * Length: 70–150 characters
   */
  metadata__meta_description: Elements.TextElement;

  /**
   * Meta title (text)
   * Required: false
   * Id: 09398b24-61ed-512e-5b5c-affd54a098e5
   * Codename: metadata__meta_title
   *
   * Length: 30–60 characters
   */
  metadata__meta_title: Elements.TextElement;

  /**
   * og:description (text)
   * Required: false
   * Id: 05987dc9-ebe3-7b61-b949-522eb42dbc0d
   * Codename: metadata__og_description
   *
   * Max. 150 characters
   */
  metadata__og_description: Elements.TextElement;

  /**
   * og:image (asset)
   * Required: false
   * Id: ce6cda71-9d38-1d57-3ac3-ec9b2e286edd
   * Codename: metadata__og_image
   *
   * Use images that are at least 1200 × 630 px for best display on high resolution devices. At the minimum, you should use images that are 600 × 315 px to display link page posts with larger images. Images may be up to 1 MB in size.
   */
  metadata__og_image: Elements.AssetsElement;

  /**
   * og:title (text)
   * Required: false
   * Id: 1db86c7a-e836-3c4e-01e6-4f704ad38ba5
   * Codename: metadata__og_title
   *
   * Max. 60 characters
   */
  metadata__og_title: Elements.TextElement;

  /**
   * twitter:creator (text)
   * Required: false
   * Id: 68f65095-c9b4-05d6-a473-2883c2f0c7af
   * Codename: metadata__twitter_creator
   */
  metadata__twitter_creator: Elements.TextElement;

  /**
   * twitter:description (text)
   * Required: false
   * Id: b7d1dd8b-a5d8-2ad8-2f57-49881363f6f7
   * Codename: metadata__twitter_description
   *
   * A description that concisely summarizes the content as appropriate for presentation within a Tweet. You should not re-use the title as the description, or use this field to describe the general services provided by the website. Max. 150 characters.
   */
  metadata__twitter_description: Elements.TextElement;

  /**
   * twitter:image (asset)
   * Required: false
   * Id: 63793ba4-6004-a93c-68ca-52a1f0482bca
   * Codename: metadata__twitter_image
   *
   * Twitter's recommendation: A URL to a unique image representing the content of the page. You should not use a generic image such as your website logo, author photo, or other image that spans multiple pages. Images for this Card should be at least 280 × 150 px. Images may be up to 1 MB in size.Let's go for 560 × 300 px.
   */
  metadata__twitter_image: Elements.AssetsElement;

  /**
   * twitter:site (text)
   * Required: false
   * Id: 34213fdf-0015-8f4f-e5e6-83c6842cff4a
   * Codename: metadata__twitter_site
   */
  metadata__twitter_site: Elements.TextElement;

  /**
   * twitter:title (text)
   * Required: false
   * Id: b208d3dc-bd8d-b1af-5ef0-747650730ba7
   * Codename: metadata__twitter_title
   *
   * Max. 60 characters
   */
  metadata__twitter_title: Elements.TextElement;
}>;
