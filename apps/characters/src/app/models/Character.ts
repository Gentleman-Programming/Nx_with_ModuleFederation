export interface Character {
  id: number;
  name: string;
  species: string;
  image: string;
}

export interface ApiResponse {
  results: Character[];
}
