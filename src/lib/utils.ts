const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const getProductPrice = (
  amount: number | undefined,
  currency = "GBP",
  locale = "en-GB",
) => {
  if (!amount) return amount;
  return amount.toLocaleString(locale, { style: "currency", currency });
};

interface IJsonDesc {
  blocks: { data: { text: string }; id: string }[];
}

const parseJsonDesc = (description: IJsonDesc) => {
  return description?.blocks?.map((block) => ({
    block: block.data.text,
    id: block.id,
  }));
};

const utils = {
  classNames,
  getProductPrice,
  parseJsonDesc,
};

export { utils };
