import styled from "styled-components";

export const StyledWrapper = styled.div`
  max-width: 810px;
  width: 100%;
  margin: 0 auto;
`;

export const StyledList = styled.button`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border: none;
  padding: 2rem 0rem;
  border-bottom: 1px solid #ededed;

  .arrow-button {
    display: flex;
    color: #dcdfe3;
    margin-right: 1.375rem;
  }

  &:hover {
    .arrow-button {
      color: #000000;
    }
  }

  .text {
    text-align: left;
    max-width: 83%;

    span {
      color: #cccccc;
      margin-top: 0.625rem;

      font-weight: 600;
      letter-spacing: -0.025rem; // -0.4px
      font-size: 1rem; // 16px
      line-height: 1.5rem; // 24px
    }

    p {
      display: block;
      width: auto;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: #000000;
      font-size: 1.5rem; // 24px
      line-height: 2.25rem; // 36px
      font-weight: 600;
      letter-spacing: -0.025rem; // -0.4px
    }
  }
`;
