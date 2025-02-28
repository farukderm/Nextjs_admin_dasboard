import icon1 from "../../assets/images/icon-1.webp";
import icon2 from "../../assets/images/icon-1.webp";
import icon3 from "../../assets/images/icon-1.webp";
import icon4 from "../../assets/images/icon-1.webp";
import InfoCard from "./InfoCard";
import { StaticImageData } from "next/image";
import SalesGraphic from "./SalesGraphic";
import { getValues } from "../../utils/api";
import { Values } from "../../types";

export type InfoItem = {
  icon: StaticImageData;
  label: string;
  value: number | string;
};

const Page = async () => {
  const values: Values = await getValues();

  // ekrana basılacak olan kartların dizisi
  const cards: InfoItem[] = [
    {
      icon: icon1,
      label: "Toplam Kullanıcı",
      value: values.totalUsers,
    },
    {
      icon: icon2,
      label: "Toplam Sipariş",
      value: values.totalOrders,
    },
    {
      icon: icon3,
      label: "Toplam Satış",
      value:
        values.totalIncome.toLocaleString("tr") +
        "$",
    },
    {
      icon: icon4,
      label: "Ürün Sayısı",
      value: values.totalProducts,
    },
  ];

  return (
    <div>
      <h1 className="title">Dashboard</h1>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {cards.map((item, key) => (
          <InfoCard item={item} key={key} />
        ))}
      </section>

      <section>
        <SalesGraphic />
      </section>
    </div>
  );
};

export default Page;
