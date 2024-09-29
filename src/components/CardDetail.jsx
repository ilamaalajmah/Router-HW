import { Link, useParams } from "react-router-dom";
import { cardDetails } from "../cardData";

import { Template } from "./Template";

function CardDetail() {
  const { cardId } = useParams();
  const card = cardDetails[cardId];

  if (!card) {
    return <Template focusedId="none" title="Card not found" description="Please use a defined card." image="" />;
  }

  return (
    <Template focusedId={cardId} title={card.title} description={card.description} image={card.image} />
  );
}

export default CardDetail;
