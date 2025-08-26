
export type Property = {
  id: string;
  project_name: string;
  project_name_te?: string;
  location?: string;
  location_te?: string;
  google_maps_embed?: string;
  area_sq_yards?: number;
  price?: number;
  price_per_sq_yard?: number;
  description?: string;
  description_te?: string;
  amenities?: string[];
  amenities_te?: string[];
  investment_features?: string[];
  investment_features_te?: string[];
  connectivity_info?: string[];
  connectivity_info_te?: string[];
  image_urls?: string[];
};

export type Blog = {
  id: number;
  blog_title: string;
  english_description: string;
  telugu_description: string;
  image_url: string;
  created_at: string;
  blog_title_telugu: string;
};

export type Blog = {
  id: number;
  blog_title: string;
  english_description: string;
  telugu_description: string;
  image_url: string;
  created_at: string;
  blog_title_telugu: string;
};
