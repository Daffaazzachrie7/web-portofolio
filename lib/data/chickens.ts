import { Chicken } from "../../types/certificate";

export const initialChickens: Chicken[] = [
  {
    id: "chicken-1",
    label: "Sertifikat Data Science & Analytics",
    spriteUrl: "/images/chickens/chicken-scroll.png",
    certificateIds: ["cert-ds-01", "cert-ds-02"],
    initialPosition: {
      xPercent: 16,
      yPercent: 24,
    },
    direction: "right",
    durationSeconds: 16,
    wanderDistancePercent: 18,
  },
  {
    id: "chicken-2",
    label: "Sertifikat Android Development",
    spriteUrl: "/images/chickens/chicken-scroll.png",
    certificateIds: ["cert-android-01", "cert-android-02"],
    initialPosition: {
      xPercent: 50,
      yPercent: 30,
    },
    direction: "left",
    durationSeconds: 20,
    wanderDistancePercent: 16,
  },
  {
    id: "chicken-3",
    label: "Sertifikat UI/UX Design",
    spriteUrl: "/images/chickens/chicken-scroll.png",
    certificateIds: ["cert-uiux-01"],
    initialPosition: {
      xPercent: 84,
      yPercent: 26,
    },
    direction: "left",
    durationSeconds: 15,
    wanderDistancePercent: 15,
  },
  {
    id: "chicken-4",
    label: "Sertifikat Machine Learning & NLP",
    spriteUrl: "/images/chickens/chicken-scroll.png",
    certificateIds: ["cert-ml-01", "cert-ml-02"],
    initialPosition: {
      xPercent: 28,
      yPercent: 68,
    },
    direction: "right",
    durationSeconds: 18,
    wanderDistancePercent: 20,
  },
  {
    id: "chicken-5",
    label: "Sertifikat Kompetensi & Lainnya",
    spriteUrl: "/images/chickens/chicken-scroll.png",
    certificateIds: ["cert-other-01"],
    initialPosition: {
      xPercent: 72,
      yPercent: 72,
    },
    direction: "left",
    durationSeconds: 19,
    wanderDistancePercent: 18,
  },
];
