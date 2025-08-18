
export type Property = {
  id: string;
  project_name: string;
  project_name_te?: string;
  location?: string;
  google_maps_embed?: string;
  area_sq_yards?: number;
  price?: number;
  price_per_sq_yard?: number;
  description?: string;
  description_te?: string;
  amenities?: string[];
  investment_features?: string[];
  connectivity_info?: string[];
  image_urls?: string[];
};
