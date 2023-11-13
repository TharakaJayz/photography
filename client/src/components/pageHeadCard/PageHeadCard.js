import React, { useEffect, useState } from "react";
import "./PageHeadCard.css";
const PageHeadCard = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <div className="page_head_main">
      <img src={props.src} alt="gallery background" id="pageHeadImage" />
      <span
        className={
          isLoading
            ? `page_head_span page_head_span_loading`
            : `page_head_span page_head_span_loaded`
        }
      >
        {" "}
        {props.title}
      </span>
    </div>
  );
};

export default PageHeadCard;
