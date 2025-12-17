export type ProductCategory = "tous" | "frais" | "surgele" | "pizza";

export type ProductMock = {
  id: string;
  category: ProductCategory;
};

export const productsMock: ProductMock[] = [
  // PIZZA
  { id: "p1", category: "pizza"
  },
  { id: "p2", category: "pizza"
  },
  { id: "p3", category: "pizza"
  },
  { id: "p4", category: "pizza"
  },
  { id: "p5", category: "pizza"
  },
  { id: "p6", category: "pizza"
  },
  // FRAIS
  { id: "f1", category: "frais"
  },
  { id: "f2", category: "frais"
  },
  { id: "f3", category: "frais"
  },
  { id: "f4", category: "frais"
  },
  { id: "f5", category: "frais"
  },
  { id: "f6", category: "frais"
  },
  // SURGELÉ
  { id: "s1", category: "surgele"
  },
  { id: "s2", category: "surgele"
  },
  { id: "s3", category: "surgele"
  },
  { id: "s4", category: "surgele"
  },
  { id: "s5", category: "surgele"
  },
  { id: "s6", category: "surgele"
  },
];