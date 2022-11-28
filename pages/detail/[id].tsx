import { StyledTitle } from "../../Components/StyledTitle";

const NewsDetail = ({ id }: { id: number }) => {
  return <StyledTitle>id {id} 의 정보를 불러왕</StyledTitle>;
};
export default NewsDetail;

export async function getServerSideProps({
  params: id,
}: {
  params: { id: number };
}) {
  return { props: id };
}
