import styled from 'styled-components';

export const JoinContainer = styled.section`
  position: relative;
  background: #5d5dff;

  color: #fff;
`;
export const BlobContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
`;

export const NewsLetterContainer = styled.div`
  padding: 64px 70px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 2.4rem;
  }

  p {
    font-size: 2rem;
  }

  button {
    padding: 1.5rem 2.5rem;
    border: none;
    border-radius: 0.5rem;
    margin-left: 2rem;
    font-size: 1.8rem;
    font-weight: 500;
    color: #4b4acf;
    cursor: pointer;
    z-index: 10;
  }

  @media (max-width: 576px) {
    padding: 1rem;
    button {
      width: 100%;
      margin: 0rem 0 2rem 0;
    }

    input {
      width: 100%;
      margin: 2rem 0 2rem 0;
    }
  }
`;

export const JoinCommunity = () => {
  return (
    <JoinContainer>
      <BlobContainer>
        <img src='/images/blob-2.svg' alt='blob' />
      </BlobContainer>
      <NewsLetterContainer>
        <div>
          <h3>Stay in the loop</h3>
          <p>Join our Discord server to stay on top of our developments</p>
        </div>
          <button onClick={() => window.open('https://discord.safient.io/')}>Join Now</button>
      </NewsLetterContainer>
    </JoinContainer>
  );
};
