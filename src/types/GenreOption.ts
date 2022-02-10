export interface GenreOption {
  label: string;
  value: number;
}

type MultiValue<Option> = readonly Option[];

export type Options = MultiValue<GenreOption | undefined>;
