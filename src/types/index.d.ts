export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

export interface ILink {
  enable: boolean;
  label: string;
  link: string;
}

export interface IBackgroundImages {
  enable: boolean;
  image_1?: string;
  image_2?: string;
  image_3?: string;
}
