import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  max-width: 950px;
  min-width: 550px;
  margin: 30px auto;

  form#form-memberships {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px 30px 30px;
    background: ${colors.white};
    align-items: flex-start;

    span {
      width: 100%;
      margin: 25px 0 5px;
    }
    span + span {
      margin-left: 16px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    color: ${colors.darkGray};
  }

  div {
    display: flex;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      padding: 0 10px;
      width: 112px;
      height: 36px;
      border: 0;
      border-radius: 4px;
      color: ${colors.white};
      background: ${colors.backButton};

      &:hover {
        background: ${darken(0.04, `${colors.backButton}`)};
      }

      span {
        padding-left: 10px;
        font-weight: bold;
      }
    }

    button + button {
      background: ${colors.primary};
      margin-left: 16px;

      &:hover {
        background: ${darken(0.03, `${colors.primary}`)};
      }
    }
  }
`;

export const Student = styled.div`
  width: 100%;
  padding-top: 25px;

  div.css-yk16xz-control {
    margin: 5px 0 5px;
    border: 1px solid ${colors.border};
    height: 44px;
  }

  div.select-student__single-value {
    font-weight: normal;
  }

  span {
    font-weight: bold;
    color: ${colors.darkGray};
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;

  span.inputStyle {
    font-weight: bold;
    color: ${colors.darkGray};
    margin-top: 25px;
  }

  div.css-1wa3eu0-placeholder,
  div.css-1uccc91-singleValue {
    font-weight: normal;
  }

  div.css-yk16xz-control {
    margin: 5px 0 5px;
    border: 1px solid ${colors.border};
    height: 44px;
  }

  input[name='start_date'],
  input[name='end_date'],
  input[name='price'] {
    width: 100%;
    height: 44px;
    margin: 5px 0 5px;
    padding: 0 15px;
    border-radius: 4px;
    border: 1px solid ${colors.border};
  }
`;