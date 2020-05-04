import React from "react";

export const LinkCard = ({ link }) => {
  return (
    <div>
      <h2>Сслыка</h2>
      <p>
        Ваша ссылка:{" "}
        <a href={link.to} target={"_blank"} rel={"noopener norefeffer"}>
          {link.to}
        </a>
      </p>

      <p>
        Откуда:{" "}
        <a href={link.from} target={"_blank"} rel={"noopener norefeffer"}>
          {link.from}
        </a>
      </p>

      <p>
        Количество кликов по ссылке: <strong>{link.clicks}</strong>
      </p>

      <p>
        Дата создания:{" "}
        <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </div>
  );
};

export default LinkCard;
