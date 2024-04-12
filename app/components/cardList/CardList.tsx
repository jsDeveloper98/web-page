import { Card } from "antd";
import Image from "next/image";
import Meta from "antd/es/card/Meta";

import { BASE_URL } from "@/constants";

export interface ICard {
  _id: string;
  title: string;
  imgUrl: string;
  description: string;
}

interface IProps {
  cards: ICard[];
}

export const CardList = ({ cards }: IProps) => {
  return (
    <div
      style={{
        display: "grid",
        rowGap: "50px",
        justifyContent: "space-between",
        gridTemplateColumns: "auto auto auto auto auto",
      }}
    >
      {cards.map(({ _id, description, title, imgUrl }) => (
        <Card
          hoverable
          key={_id}
          style={{ width: 240 }}
          cover={
            true ? (
              <Image
                alt="example"
                width={300}
                height={500}
                src={`${BASE_URL}/${imgUrl}`}
              />
            ) : null
          }
        >
          <Meta title={title} description={description} />
        </Card>
      ))}
    </div>
  );
};
