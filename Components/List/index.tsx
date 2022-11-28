import { useRouter } from "next/router";

import { list } from "../../constant/data";
import ArrowRightIcon from "../ArrowRightIcon";
import { StyledTitle } from "../StyledTitle";
import { StyledList, StyledWrapper } from "./Styled";

const List = () => {
  const router = useRouter();

  const handleDetail = (id: number) => {
    router.push({
      pathname: `detail/[id]`,
      query: { id },
    });
  };

  return (
    <StyledWrapper>
      <StyledTitle>example scroll</StyledTitle>

      {list.map(({ id, date, title }) => (
        <StyledList key={id} onClick={() => handleDetail(id)}>
          <div className="text">
            <p>{title}</p>
            <span>{date}</span>
          </div>
          <span className="arrow-button">
            <ArrowRightIcon />
          </span>
        </StyledList>
      ))}
    </StyledWrapper>
  );
};

export default List;
