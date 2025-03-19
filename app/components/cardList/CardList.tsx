import { Card } from "antd";
import Image from "next/image";
import Meta from "antd/es/card/Meta";
import { DeleteOutlined } from "@ant-design/icons";

import { BASE_URL } from "@/constants";

export interface ICard {
  _id: string;
  title: string;
  imgUrl: string;
  description: string;
  onClick?: (id: string) => void;
}

interface ICardAction {
  key: string;
  className: string;
  onClick: (id: string) => void;
}

interface IProps {
  cards: ICard[];
  actions?: ICardAction[];
}

export const CardList = ({ cards, actions = [] }: IProps) => {
  return (
    <div className="CardList grid grid-cols-5 justify-between gap-y-12">
      {cards.map(({ _id, description, title, imgUrl, onClick }) => (
        <Card
          hoverable
          key={_id}
          className="w-60"
          onClick={() => onClick?.(_id)}
          cover={
            <Image
              priority
              alt={title}
              width={240}
              height={320}
              src={`${BASE_URL}/${imgUrl}`}
            />
          }
          actions={actions.map((action) => {
            if (action.key === "remove") {
              return (
                <DeleteOutlined
                  key={action.key}
                  className={action.className}
                  onClick={() => action.onClick(_id)}
                />
              );
            }
          })}
        >
          <Meta title={title} description={description} />
        </Card>
      ))}
    </div>
  );
};
