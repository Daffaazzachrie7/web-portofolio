export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: number | null;
  imageUrl: string;
  verificationUrl?: string;
  categoryId: string;
  categoryName?: string;
  description?: string;
  skills?: string[];
  display_order?: number;
}

export interface Chicken {
  id: string;
  label: string;
  spriteUrl: string;
  certificateIds: string[];
  initialPosition: {
    xPercent: number; // 0 to 100% across the meadow
    yPercent: number; // vertical position in meadow
  };
  direction: "left" | "right";
  durationSeconds: number; // movement speed duration
  wanderDistancePercent: number; // how far it strolls back and forth
}

export interface ChickenWithCertificates extends Chicken {
  certificates: Certificate[];
}
